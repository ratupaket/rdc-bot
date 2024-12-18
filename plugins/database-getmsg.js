import db from "../lib/database.js"
import fs from "fs"

let handler = async function(m, { conn, text }) {
  if(!text) return await m.reply("Masukkan teks!")

  const r = db.data.msgs[text]
  if(!r) return await m.reply("Tidak ditemukan!")

  await conn.sendMessage(m.chat, r.media ? {
    [r.type]: fs.readFileSync(r.media),
    caption: r.text,
    fileName: r.fileName,
    mimetype: r.mimetype,
    ptt: r.ptt,
    gifPlayback: r.gif
  } : {
    [r.type]: r.text
  }, {
    quoted: m
  })
}

handler.help = ["getmsg"]
handler.tags = ["database"]
handler.command = /^(getmsg)$/i
handler.owner = true

export default handler
