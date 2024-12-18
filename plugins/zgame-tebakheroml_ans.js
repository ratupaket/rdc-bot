import db from '../lib/database.js'
import similarity from 'similarity'
const threshold = 0.72

export async function before(m) {
	let user = db.data.users[m.sender]
	if (user.banned) return null
	let id = m.chat
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text)
		return !0
	this.tebakheroml = this.tebakheroml ? this.tebakheroml : {}
	if (!(id in this.tebakheroml))
		return
	if (m.quoted.id == this.tebakheroml[id][0].id) {
		let json = JSON.parse(JSON.stringify(this.tebakheroml[id][1]))
		if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
			user.money += this.tebakheroml[id][2]
			m.reply(`*Benar!*\n+${this.tebakheroml[id][2]} XP`)
			clearTimeout(this.tebakheroml[id][3])
			delete this.tebakheroml[id]
		} else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			m.reply(`*Salah!*`)
	}
	return !0
}

export const money = 0