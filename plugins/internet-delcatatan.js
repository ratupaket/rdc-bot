import db from '../lib/database.js'
let handler = async(m, {conn, command, usedPrefix, cdang, text}) => {
  db.data.users[m.sender].catatan = db.data.users[m.sender].catatan || []
  let i = 0
  if (db.data.users[m.sender].catatan.length == 0) return m.reply('Kamu belum punya catatan!')
  let txt = '[ ️Daftar catatan ]️\n\n'
  for (let ct in db.data.users[m.sender].catatan) {
    i += 1
    txt += '[' + i + ']. ' + db.data.users[m.sender].catatan[ct].title + '\n'
  }
  txt += `\nPenggunaan: ${usedPrefix}hapuscatatan 1`
  if (text.length == 0) return m.reply(txt)
  let catatan = db.data.users[m.sender].catatan
  let split = text.split('|')
  if (catatan.length == 0) return m.reply('Kamu belum memiliki catatan!')
  let n = Number(split[0]) - 1
  if (catatan[n] == undefined) return m.reply('Catatan tidak ditemukan!')
  let tmp = []

  for (let ct in catatan) {
    if(ct != n) {
      tmp.push(catatan[ct])
    } else {
      continue
    }
  }

  cdang = db.data.users[m.sender].catatan
  db.data.users[m.sender].catatan = tmp

conn.reply(m.chat, `Berhasil menghapus catatan!`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['hapuscatatan title']
handler.tags = ['internet']
handler.command = /^hapuscatatan$/i
handler.group = true
export default handler