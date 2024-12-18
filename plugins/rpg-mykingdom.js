import db from "../lib/database.js"
import PhoneNumber from "awesome-phonenumber"
import fs from "fs"

let handler = async(m, { conn, text, usedPrefix }) => {
  const imgk = fs.readFileSync("./data/kerajaan.jpg")
  const kingdom = db.data.users[m.sender].kingdom
  if(!kingdom) return m.reply(`Kamu belum memiliki kerajaan!\n\nKetik : *${usedPrefix}createkingdom NamaRaja|NamaKerajaan|(opsional)@aliansi*\nuntuk membuat kerajaan`)

  const kerajaan = kingdom.kingdomName
  const trops = kingdom.troops
  const lvl = kingdom.lvl
  const exp = kingdom.exp
  const populasi = kingdom.population
  const name = kingdom.namk
  let aliance = kingdom.aliance
  const koin = kingdom.koin

  const benteng = kingdom.benteng || 0
  const rs = kingdom.rumahsakit || 0
  const kamp = kingdom.troopcamp || 0

  const batu = kingdom.batu || 0
  const kayu = kingdom.kayu || 0
  const besi = kingdom.besi || 0
  const emas = kingdom.emas || 0
  const makanan = kingdom.makanan || 0

  const lw = kingdom.lastwar || "-"
  const lfs = kingdom.lastsda || "-"

  const caption = `
_[ ❕ ] YOUR KINGDOM INFO_

🏰 Nama Kerajaan : ${kerajaan}
👑 Raja : ${name}
👥 Populasi : ${populasi}
👮 Pasukan : ${trops}
🎋 Level : ${lvl}
🔮 Exp : ${exp}/1000

💹 Ekonomi SDA:
  💰 Koin : ${koin}
  🌳 Kayu : ${kayu}
  ⛓️ Besi : ${besi}
  🪨 Batu : ${batu}
  🌮 Makanan : ${makanan}

🏗️ Fasilitas:
  🏕️ Kamp pasukan : ${kamp != 0 ? "lvl " + kamp + (kamp == 3 ? " (max)" : "") : "tidak punya kamp pasukan"}
  🏥 Rumah sakit : ${rs != 0 ? "lvl " + rs + (rs == 3 ? " (max)" : "") : "tidak punya rumah sakit"}
  🏯 Benteng : ${benteng != 0 ? "lvl " + benteng + (benteng == 3 ? " (max)" : "") : "Tidak punya benteng"}

⚔️ Last war : ${frmt(lw)}
🏮 Last find sda : ${frmt(lfs)}

🏳️ Teman Aliansi :
${(aliance || []).filter(v => !v.pending).map(v => "@" + v.jid.split("@")[0]).join(" ") || "None"}

🏳️ Aliansi tertunda :
${(aliance || []).filter(v => v.pending).map(v => "@" + v.jid.split("@")[0]).join(" ") || "None"}

⚔️  Untuk war
${usedPrefix}war @mention

🏰 Bangun dan level up kerajaan
${usedPrefix}bangun <type>

♨️  Untuk mengambil sumber daya
${usedPrefix}getsda

🏰 Fitur kerajaan lainnya
${usedPrefix}kingdom
`.trim()

  await conn.sendFile(m.chat, imgk, "kerajaan.jpg", caption, m, false, {
    contextInfo: {
      mentionedJid: text === "notag" ? [] : conn.parseMention(caption)
    }
  })
}

handler.help = ["mykingdom", "mykrjn", "kerajaanku"]
handler.tags = ["rpg"]
handler.command = /^(mykingdom|kerajaanku|mykrjn)$/i
handler.group = true

export default handler


function frmt(n) {
  const get = new Date(n)
  return n == "-" ? "-" : `${get.getFullYear()}-${addZero([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12][get.getMonth()])}-${addZero(get.getDate())}, ${addZero(get.getHours())}:${addZero(get.getMinutes())}:${addZero(get.getSeconds())}`
}

function addZero(n) {
  return (n*1) < 10 ? "0" + (n*1) : n
}
