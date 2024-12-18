import db from "../lib/database.js"
import fs from "fs"
import {
  fileTypeFromBuffer as fromBuffer
} from "file-type"

let handler = async(m, { conn, command, usedPrefix, text }) => {
  if(!m.quoted) return m.reply(`Balas pesan dengan perintah *${usedPrefix + command}*`)
  if(!text) return m.reply(`Pengunaan:${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} tes`)

  const which = command.slice(3)
  const msgs = db.data.msgs
  if(text in msgs) return m.reply(`"${text}" telah terdaftar!`)
  if(text.toLowerCase() === "bot") return m.reply("Tidak dapat mengganti pesan default")

  let doc
  const msg = m.quoted
  if(/^(vn|video|audio|img|stic?ker|stc|gif|doc(ument)?)$/.test(which)) {
    if(which == "vn" && !msg.vM.msg.ptt) return m.reply("Kamu hanya bisa membalas pesan voice note!")
    if(which == "video" && (msg.mtype != "videoMessage" || msg.vM.gifPlayback)) return m.reply("Kamu hanya bisa membalas pesan video!")
    if(which == "audio" && (msg.mtype != "audioMessage" || msg.vM.ptt)) return m.reply("Kamu hanya bisa membalas pesan audio!")
    if(which == "img" && msg.mtype != "imageMessage") return m.reply("Kamu hanya bisa membalas pesan gambar!")
    if(/^(stic?ker|stc)$/.test(which) && msg.mtype != "stickerMessage") return m.reply("Kamu hanya bisa membalas pesan stiker!")
    if(which == "gif" && !msg.vM.msg.gifPlayback) return m.reply("Kamu hanya bisa membalas pesan gif!")
    if(/^doc(ument)?$/.test(which)) {
      if(!/^document(WithCaption)?Message$/.test(msg.mtype)) return m.reply("Kamu hanya bisa membalas pesan dokumen atau dokumen dengan caption!")
      if((msg.vM.msg.message?.documentMessage || msg.vM.msg).fileLength.low / (1000*1000) >= 100) return m.reply("Ukuran file terlalu besar! maksimal 100MB")

      doc = (msg.vM.msg.message?.documentMessage || msg.vM.msg)
    }

    const media = await m.quoted.download()
    const type = doc ? (doc.fileName.split(".").length === 1 ? "txt" : doc.fileName.split(".").at(-1)) : await fromBuffer(media)
    const f = `./media/msg/${m.sender.split("@")[0]}_${Date.now()}.${type.ext}`
    fs.writeFileSync(f, media)
    msgs[text] = {
      author: m.sender,
      at: Date.now(),
      type: which == "vn" || which == "audio" ? "audio" : which == "img" ? "image" : /^(stic?ker|stc)$/.test(which) ? "sticker" : which == "gif" ? "video" : doc ? "document" : which,
      text: /^(vn|audio|stic?ker|stc)$/.test(type) ? "" : msg.text || "",
      media: f,
      fileName: doc ? doc.fileName : undefined,
      mimetype: doc ? doc.mimetype : undefined,
      ptt: msg.vM.msg.ptt || false,
      gif: msg.vM.msg.gifPlayback || false
    }
  } else {
    if(!msg.text) return m.reply("Pesan yang Anda reply tidak mengandung teks!")

    msgs[text] = {
      author: m.sender,
      at: Date.now(),
      type: "text",
      text: msg.text,
      media: "",
      ptt: false,
      gif: false
    }
  }

  if(db.data.chats[m.chat]?.getmsg) return await m.reply(`Berhasil menambahkan pesan "${text}"! Akses dengan mengetik namanya`)
  else return await m.reply(`Berhasil menambahkan pesan "${text}"! Akses dengan *${usedPrefix}getmsg${which} ${text}*`)
}
handler.help = ["vn", "msg", "video", "audio", "img", "stiker", "stc", "gif", "doc", "document"].map(v => "add" + v + " <teks>")
handler.tags = ["database"]
handler.command = /^add(vn|msg|video|audio|img|stic?ker|stc|gif|doc(ument)?)$/
handler.owner = true

export default handler