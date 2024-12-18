import db from '../lib/database.js'
import similarity from 'similarity'
const threshold = 0.72

export async function before(m) {
	let user = db.data.users[m.sender]
	if (user.banned) return null
	let id = m.chat
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text)
		return !0
	this.tebakkartun = this.tebakkartun ? this.tebakkartun : {}
	if (!(id in this.tebakkartun))
		return
	if (m.quoted.id == this.tebakkartun[id][0].id) {
		let json = JSON.parse(JSON.stringify(this.tebakkartun[id][1]))
		if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
			user.money += this.tebakkartun[id][2]
			m.reply(`*Benar!*\n+${this.tebakkartun[id][2]} XP`)
			clearTimeout(this.tebakkartun[id][3])
			delete this.tebakkartun[id]
		} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			m.reply(`*Salah!*`)
	}
	return !0
}

export const money = 0