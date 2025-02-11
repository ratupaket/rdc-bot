import db from '../lib/database.js'

export async function all(m) {
	if (!m.isGroup)
		return
	let chats = db.data.chats[m.chat]
	if (!chats.expired)
		return !0
	if (+new Date() > chats.expired) {
		await this.reply(m.chat, 'Durasi join bot telah habis')
		await this.groupLeave(m.chat)
		chats.expired = null
	}
}