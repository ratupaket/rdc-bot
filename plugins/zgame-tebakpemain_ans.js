import db from '../lib/database.js'
import similarity from 'similarity'
const threshold = 0.72

export async function before(m) {
	let user = db.data.users[m.sender]
	if (user.banned) return null
	let id = m.chat
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text)
		return !0
	this.tebakpemain = this.tebakpemain ? this.tebakpemain : {}
	if (!(id in this.tebakpemain))
		return
	if (m.quoted.id == this.tebakpemain[id][0].id) {
		let json = JSON.parse(JSON.stringify(this.tebakpemain[id][1]))
		if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
			user.money += this.tebakpemain[id][2]
			m.reply(`*Benar!*\n+${this.tebakpemain[id][2]} XP`)
			clearTimeout(this.tebakpemain[id][3])
			delete this.tebakpemain[id]
		} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			m.reply(`*Salah!*`)
	}
	return !0
}

export const money = 0