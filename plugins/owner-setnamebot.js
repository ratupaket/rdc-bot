import db from '../lib/database.js'

let handler = async (m, { conn, command, text }) => {
	if (!text) return m.reply(`[!] Masukkan Nama Bot.`)
	db.data.datas.namebot = text
	m.reply(`Nama Bot berhasil diset menjadi :\n${text}`)
}

handler.help = ['setnamebot']
handler.tags = ['owner']
handler.command = /^(setnamebot)$/i

handler.rowner = true

export default handler