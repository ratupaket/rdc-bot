import db from '../lib/database.js'
import similarity from 'similarity'
const threshold = 0.72

export async function before(m) {
	let user = db.data.users[m.sender]
	if (user.banned) return null
	let id = m.chat
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text)
		return !0
	this.question = this.question ? this.question : {}
	if (!(id in this.question))
		return
	if (m.quoted.id == this.question[id][0].id) {
		let json = JSON.parse(JSON.stringify(this.question[id][1]))
		if (m.text.toLowerCase() == json.results[0].correct_answer.toLowerCase().trim()) {
			user.exp += this.question[id][2]
			m.reply(`*Benar!*\n+${this.question[id][2]} XP`)
			clearTimeout(this.question[id][3])
			delete this.question[id]
		} else if (similarity(m.text.toLowerCase(), json.results[0].correct_answer.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			m.reply(`*Salah!*`)
	}
	return !0
}

export const exp = 0