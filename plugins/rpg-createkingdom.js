import db from "../lib/database.js"

let handler = async(m, { conn, usedPrefix, command, text }) => {
  const fail = `Format salah\n\nContoh penggunaan :\n${usedPrefix}${command} nama_raja|nama_kerajaan|@aliansi\n${usedPrefix}${command} Rdculous|Majapahit|@aliansi`
  const kingdom = db.data.users[m.sender]
  const split = text.split("|")
  const namk = split[0]
  const kingdomName = split[1]
  let aliance = conn.parseMention(split[2])
  aliance = aliance[0] ? aliance : []
  aliance = aliance.map(v => ({ jid: v, pending: true }))

  if(kingdom.kingdom) return m.reply("Kamu sudah memiliki kerajaan")
  if(!namk || !kingdomName) return m.reply(fail)

  db.data.users[m.sender].kingdom = {
    namk,
    kingdomName,
    troops: 100,
    population: 100,
    lvl: 1,
    aliance,
    koin: 100000,
    makanan: 1000,
    exp: 0,
    emas: 0,
    kayu: 0,
    batu: 0,
    besi: 0
  }

  m.reply(`

🏰 Your kingdom created!!

🏰 Nama Kerajaan : ${kingdomName}
👑 Nama raja : ${namk}
👥 Populasi : ${db.data.users[m.sender].kingdom.population}
👮 Pasukan : ${db.data.users[m.sender].kingdom.troops}
🎋 Level : ${db.data.users[m.sender].kingdom.lvl}
🔮 Exp : ${db.data.users[m.sender].kingdom.exp}
💰 Koin : ${db.data.users[m.sender].kingdom.koin} *[ BERGUNA UNTUK UP LEVEL KERAJAAN ]*

🏳️ User yg diajak aliansi
${aliance.map(v => "@" + v.jid.split("@")[0] + (v.pending ? " (Pending)" : "")).join(" ") || "None"}

Cek kerajaaan milikmu!
${usedPrefix}mykingdom
`, null, {
    mentions: conn.parseMention(text)
  })
  for(const i of aliance) {
    await conn.sendMessage(i.jid, { text: `${await conn.getName(m.sender)} mengundang Anda untuk menjadi aliansi di kerajaannya\nApakah Anda menerimanya?\n\nTerima => .kerajaan aliansi terima @${m.sender.split("@")[0]}\nTolak => .kerajaan aliansi tolak @${m.sender.split("@")[0]}` }, { quoted: m })
  }
}

handler.help = ["createkingdom", "buatkerajaan"].map(v => v + " (nama|namakerajaan|(opsional)@aliansi")
handler.tags = ["rpg"]

handler.command = /^(createkingdom|buatkerajaan)$/i
handler.group = true

export default handler
