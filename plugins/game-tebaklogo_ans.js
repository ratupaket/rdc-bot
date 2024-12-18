import db from '../lib/database.js'
import similarity from 'similarity'
const threshold = 0.72

export async function before(m) {
	let user = db.data.users[m.sender]
	if (user.banned) return null
	let id = m.chat
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text)
		return !0
	this.tebaklogo = this.tebaklogo ? this.tebaklogo : {}
	if (!(id in this.tebaklogo))
		return
	if (m.quoted.id == this.tebaklogo[id][0].id) {
		let json = JSON.parse(JSON.stringify(this.tebaklogo[id][1]))
		if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
			user.money += this.tebaklogo[id][2]
			m.reply(m.chat, `*Benar!*\n\n+${this.tebaklogo[id][2]} Money`)
			clearTimeout(this.tebaklogo[id][3])
			delete this.tebaklogo[id]
		} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			m.reply(`*Salah!*`)
	}
	return !0
}

export const money = 0