import db from '../lib/database.js'
import similarity from 'similarity'
const threshold = 0.72

export async function before(m) {
	let user = db.data.users[m.sender]
	if (user.banned) return null
	let id = m.chat
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text)
		return !0
	this.tebakanjime = this.tebakanjime ? this.tebakanjime : {}
	if (!(id in this.tebakanjime))
		return
	if (m.quoted.id == this.tebakanjime[id][0].id) {
		let json = JSON.parse(JSON.stringify(this.tebakanjime[id][1]))
		if (m.text.toLowerCase() == json.result.jawaban.toLowerCase().trim()) {
			user.exp += this.tebakanjime[id][2]
			m.reply(`*Benar!*\n+${this.tebakanjime[id][2]} XP`)
			clearTimeout(this.tebakanjime[id][3])
			delete this.tebakanjime[id]
		} else if (similarity(m.text.toLowerCase(), json.result.jawaban.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			m.reply(`*Salah!*`)
	}
	return !0
}

export const exp = 0