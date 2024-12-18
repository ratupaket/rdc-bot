import db from '../lib/database.js'
import similarity from 'similarity'
const threshold = 0.72

export async function before(m) {
	let user = db.data.users[m.sender]
	if (user.banned) return null
	let id = m.chat
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text)
		return !0
	this.tebakgame = this.tebakgame ? this.tebakgame : {}
	if (!(id in this.tebakgame))
		return
	if (m.quoted.id == this.tebakgame[id][0].id) {
		let json = JSON.parse(JSON.stringify(this.tebakgame[id][1]))
		if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
			user.exp += this.tebakgame[id][2]
			m.reply(`*Benar!*\n+${this.tebakgame[id][2]} XP`)
			clearTimeout(this.tebakgame[id][3])
			delete this.tebakgame[id]
		} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			m.reply(`*Salah!*`)
	}
	return !0
}

export const exp = 0