import db from '../lib/database.js'

let handler = async (m, { conn, command, text }) => {
	if (!text) return m.reply(`[!] Masukkan Link Group.`)
	db.data.datas.linkgc = text
	m.reply(`Link Group berhasil diset menjadi :\n${text}`)
}

handler.help = ['setlinkgc']
handler.tags = ['owner']
handler.command = /^(setlink(gro?up|gc)(bot)?)$/i

handler.rowner = true

export default handler