import db from '../lib/database.js'
import similarity from 'similarity'
const threshold = 0.72

export async function before(m) {
	let user = db.data.users[m.sender]
	if (user.banned) return null
	let id = m.chat
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text)
		return !0
	this.tebakhewan = this.tebakhewan ? this.tebakhewan : {}
	if (!(id in this.tebakhewan))
		return
	if (m.quoted.id == this.tebakhewan[id][0].id) {
		let json = JSON.parse(JSON.stringify(this.tebakhewan[id][1]))
		if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
			user.money += this.tebakhewan[id][2]
			m.reply(`*Benar!*\n+${this.tebakhewan[id][2]} XP`)
			clearTimeout(this.tebakhewan[id][3])
			delete this.tebakhewan[id]
		} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			m.reply(`*Salah!*`)
	}
	return !0
}

export const money = 0