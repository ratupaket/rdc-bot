import db from "../lib/database.js"

let handler = async(m, { conn, text, usedPrefix, command, participants }) => {
  let nmu = conn.parseMention(text)
  if(nmu.length == 0) {
    if(!m.isGroup) return m.reply("Tag seseorang!")

    let list = participants.map(v => v.id)
    list = list.map(v => [v, db.data.users[v]?.kingdom]).filter(v => v[1]).sort((a, b) => b[1].troops - a[1].troops)
    list = list.map(v => ({ own: v[0].split("@")[0], name: v[1].kingdomName, troops: v[1].troops }))
    if(!list[0]) return m.reply("Tidak ada yang memiliki kerajaan disini :(")

    await conn.sendMessage(m.chat, {
      text: `
Daftar orang yang memiliki kerajaan di grup ini:


${list.map((v, i) => `${i + 1}.
  Nama kerajaan : ${v.name}
  Pemilik : ${v.own}
  Pasukan : ${v.troops}`).join("\n\n")}
`,
    }, {
      quoted: m
    })
    return
  }
  nmu = nmu[0]

  const musuh = db.data.users[nmu]
  const kingdom = db.data.users[m.sender]

  if(!musuh) return m.reply("Dia belum terdaftar di bot!")
  if(!kingdom.kingdom) return m.reply("Kamu belum memiliki kerajaan!")
  if(!musuh.kingdom) return m.reply("Dia belum memiliki kerajaan!")
  /* Diri Sendiri */
  const kerajaan = db.data.users[m.sender].kingdom.kingdomName
  const troops = db.data.users[m.sender].kingdom.troops
  const lvl = db.data.users[m.sender].kingdom.lvl
  const koin = db.data.users[m.sender].kingdom.koin
  const batu = db.data.users[m.sender].kingdom.besi
  const kayu = db.data.users[m.sender].kingdom.kayu
  const besi = db.data.users[m.sender].kingdom.batu
  const emas = db.data.users[m.sender].kingdom.emas
  const makanan = db.data.users[m.sender].kingdom.makanan
  const lw = db.data.users[m.sender].kingdom.lastwar || "-"
  const al = db.data.users[m.sender].kingdom.aliance || []
  /* Musuh */
  const kerajaanM = db.data.users[nmu].kingdom.kingdomName
  const troopsM = db.data.users[nmu].kingdom.troops
  const lvlM = db.data.users[nmu].kingdom.lvl
  const koinM = db.data.users[nmu].kingdom.koin
  const batuM = db.data.users[nmu].kingdom.besi
  const kayuM = db.data.users[nmu].kingdom.kayu
  const besiM = db.data.users[nmu].kingdom.batu
  const emasM = db.data.users[nmu].kingdom.emas
  const makananM = db.data.users[nmu].kingdom.makanan
  const alM = db.data.users[nmu].kingdom.aliance || []

  if(koin < 30) db.data.users[m.sender].kingdom.koin = 30
  if(batu < 30) db.data.users[m.sender].kingdom.batu = 30
  if(kayu < 30) db.data.users[m.sender].kingdom.kayu = 30
  if(besi < 30) db.data.users[m.sender].kingdom.besi = 30
  if(emas < 30) db.data.users[m.sender].kingdom.emas = 30
  if(makanan < 30) db.data.users[m.sender].kingdom.makanan = 30
  if(koinM < 30) db.data.users[nmu].kingdom.koin = 30
  if(batuM < 30) db.data.users[nmu].kingdom.batu = 30
  if(kayuM < 30) db.data.users[nmu].kingdom.kayu = 30
  if(besiM < 30) db.data.users[nmu].kingdom.besi = 30
  if(emasM < 30) db.data.users[nmu].kingdom.emas = 30
  if(makananM < 30) db.data.users[nmu].kingdom.makanan = 30

  if(troops <= 0) return m.reply("Prajurit kamu tidak boleh 0 atau dibawah 0!")
  if(troopsM <= 0) return m.reply("Prajurit musuh tidak boleh 0 atau dibawah 0!")

  if(al.some(v => v.jid == nmu && v.pending == false)) return m.reply("Tidak dapat menyerang tim aliansi!")

  if(troops > troopsM) {
    db.data.users[m.sender].kingdom.lastwar = new Date * 1
    db.data.users[nmu].kingdom.troops -= troops
    db.data.users[m.sender].kingdom.troops += troopsM
    db.data.users[m.sender].kingdom.koin += (koinM - 30)
    db.data.users[m.sender].kingdom.batu += (batuM - 30)
    db.data.users[m.sender].kingdom.kayu += (kayuM - 30)
    db.data.users[m.sender].kingdom.besi += (besiM - 30)
    db.data.users[m.sender].kingdom.emas += (emasM - 30)
    db.data.users[m.sender].kingdom.exp += 10
    db.data.users[nmu].kingdom.koin -= (koinM - 30)
    db.data.users[nmu].kingdom.batu -= (batuM - 30)
    db.data.users[nmu].kingdom.kayu -= (kayuM - 30)
    db.data.users[nmu].kingdom.besi -= (besiM - 30)
    db.data.users[nmu].kingdom.emas -= (emasM - 30)
    db.data.users[nmu].kingdom.exp -= 10

    m.reply(`Kamu menang saat perang dengan @${nmu.split("@")[0]}!
Kamu mendapatkan:
💂 ${troops + (troopsM)}
💰 ${koin + (koinM - 30)}
🪨 ${batu + (batuM - 30)}
🪵 ${kayu + (batuM - 30)}
⛓️  ${besi + (besiM - 30)}
🪙 ${emas + (emasM - 30)}
🔮 10`, null, {
      mentions: [nmu]
    })
    await cepu(m, true, nmu)
  } else if(troops < troopsM) {
    db.data.users[m.sender].kingdom.lastwar = new Date * 1
    db.data.users[nmu].kingdom.troops -= troops
    db.data.users[m.sender].kingdom.troops = 0
    db.data.users[m.sender].kingdom.koin -= (koinM - 30)
    db.data.users[m.sender].kingdom.batu -= (batuM - 30)
    db.data.users[m.sender].kingdom.kayu -= (kayuM - 30)
    db.data.users[m.sender].kingdom.besi -= (besiM - 30)
    db.data.users[m.sender].kingdom.emas -= (emasM - 30)
    db.data.users[m.sender].kingdom.exp -= 10
    db.data.users[nmu].kingdom.koin += (koinM - 30)
    db.data.users[nmu].kingdom.batu += (batuM - 30)
    db.data.users[nmu].kingdom.kayu += (kayuM - 30)
    db.data.users[nmu].kingdom.besi += (besiM - 30)
    db.data.users[nmu].kingdom.emas += (emasM - 30)
    db.data.users[nmu].kingdom.exp += 10

    m.reply(`Kamu kalah saat perang dengan @${nmu.split("@")[0]}!
Kamu kehilangan:
💰 ${koin + (koinM - 30)}
🪨 ${batu + (batuM - 30)}
🪵 ${kayu + (kayuM - 30)}
⛓️  ${besi + (besiM - 30)}
🪙 ${emas + (emasM - 30)}
🔮 10`, null, {
      mentions: [nmu]
    })
    await cepu(m, false, nmu)
  } else {
    await cepu(m, null, nmu)
    m.reply("Seri")
  }
}

handler.help = ["war <tag>"]
handler.tags = ["rpg"]
handler.command = /^(war)$/i

handler.register = true
handler.group = true

export default handler

async function cepu(m, win, ke) {
  await m.reply(`@${m.sender.split("@")[0]} (${m.sender.split("@")[0]}) Menyerang kerajaanmu!\nHasil : ${win == true ? "kamu kalah" : win == false ? "kamu menang" : "seri"}`, ke, {
    mentions: [m.sender]
  })
}
