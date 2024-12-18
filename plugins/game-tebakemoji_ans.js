import db from '../lib/database.js'
import similarity from 'similarity'
const threshold = 0.72

export async function before(m) {
	let user = db.data.users[m.sender]
	if (user.banned) return null
	let id = m.chat
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text)
		return !0
	this.tebakemoji = this.tebakemoji ? this.tebakemoji : {}
	if (!(id in this.tebakemoji))
		return
	if (m.quoted.id == this.tebakemoji[id][0].id) {
		let json = JSON.parse(JSON.stringify(this.tebakemoji[id][1]))
		if (m.text.toLowerCase() == json.unicodeName.toLowerCase().trim()) {
			user.exp += this.tebakemoji[id][2]
			m.reply(`*Benar!*\n+${this.tebakemoji[id][2]} XP`)
			clearTimeout(this.tebakemoji[id][3])
			delete this.tebakemoji[id]
		} else if (similarity(m.text.toLowerCase(), json.unicodeName.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			m.reply(`*Salah!*`)
	}
	return !0
}

export const exp = 0