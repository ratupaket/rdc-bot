import db from "../lib/database.js"
import fs from "fs"

let handler = async function(m, { conn, text, command }) {
  if(!text) return await m.reply("Masukkan teks!")

  const r = db.data.msgs[text]
  if(!r) return await m.reply("Tidak ditemukan!")

  const which = command.slice(3)
  if(/^(vn|video|audio|img|stic?ker|stc|gif|doc(ument)?)$/.test(which)) {
    if(which == "vn" && !r.ptt) return m.reply("Target bukan voice note!")
    if(which == "video" && (r.type != "video" || r.gif)) return m.reply("Target bukan video!")
    if(which == "audio" && (r.type != "audio" || r.ptt)) return m.reply("Target bukan audio!")
    if(which == "img" && r.type != "image") return m.reply("Target bukan gambar!")
    if(/^(stic?ker|stc)$/.test(which) && r.type != "sticker") return m.reply("Target bukan stiker!")
    if(which == "gif" && !r.gif) return m.reply("Target bukan gif!")
    if(/^doc(ument)?$/.test(which) && !r.fileName) return m.reply("Target bukan dokumen!")
  } else {
    if(r.type != "text") return m.reply("Target bukan text!")
  }

  if(r.media) fs.unlinkSync(r.media)
  delete db.data.msgs[text]

  await m.reply("Berhasil menghapus pesan")
}

handler.help = ["vn", "msg", "video", "audio", "img", "stiker", "stc", "gif", "doc", "document"].map(v => "del" + v + " <teks>")
handler.tags = ["database"]
handler.command = /^del(vn|msg|video|audio|img|stic?ker|stc|gif|doc(ument)?)$/
handler.owner = true

export default handler