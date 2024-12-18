import db from '../lib/database.js'
let handler = async(m, {conn, command, usedPrefix, text}) => {
  let fail = 'format salah, example: ' +usedPrefix+command+ ' Bot|1. Masak'
  db.data.users[m.sender].catatan = db.data.users[m.sender].catatan || []
  let catatan = db.data.users[m.sender].catatan
  let split = text.split('|')
  let title = split[0]
  let isi = split[1]
  if (catatan.includes(title)) return m.reply('Judul tidak tersedia!\n\nAlasan: Sudah digunakan')
  if (!title || !isi) return m.reply(fail)
  let cttn = {
    'title': title,
    'isi': isi
  }
  db.data.users[m.sender].catatan.push(cttn)
  conn.reply(m.chat, `Catatan berhasil dibuat!\nUntuk melihat catatan. Ketik: ${usedPrefix}lihatcatatan`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['buatcatatan <title|isi>']
handler.tags = ['internet']
handler.command = /^buatcatatan$/i
handler.group = true
export default handler