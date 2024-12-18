import db from '../lib/database.js'
let handler = async(m, {conn, command, usedPrefix, text}) => {
  db.data.users[m.sender].catatan = db.data.users[m.sender].catatan || []
  let i = 0
  if (db.data.users[m.sender].catatan.length == 0) return m.reply('Kamu belum punya catatan!')
  let txt = '[ ️Daftar catatan ]️\n\n'
  for (let ct in db.data.users[m.sender].catatan) {
    i += 1
    txt += '[' + i + ']. ' + db.data.users[m.sender].catatan[ct].title + '\n'
  }
  txt += `\nPenggunaan: ${usedPrefix}lihatcatatan 1\nHapus catatan: ${usedPrefix}hapuscatatan 1`
  if (text.length == 0) return m.reply(txt)
  let catatan = db.data.users[m.sender].catatan
  let split = text.split('|')
  if (catatan.length == 0) return m.reply('Kamu belum memiliki catatan!')
  let n = Number(split[0]) - 1

  let isi = db.data.users[m.sender].catatan[n] != undefined ? db.data.users[m.sender].catatan[n].isi : 'Catatan tidak ditemukan!'
conn.reply(m.chat, `${isi}`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['lihatcatatan <title>']
handler.tags = ['internet']
handler.command = /^lihatcatatan$/i
handler.group = true

export default handler