import db from '../lib/database.js'
import similarity from 'similarity'
const threshold = 0.72

export async function before(m) {
	let user = db.data.users[m.sender]
	if (user.banned) return null
	let id = m.chat
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text)
		return !0
	this.asahotak = this.asahotak ? this.asahotak : {}
	if (!(id in this.asahotak))
		return
	if (m.quoted.id == this.asahotak[id][0].id) {
		let json = JSON.parse(JSON.stringify(this.asahotak[id][1]))
		if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
			user.exp += this.asahotak[id][2]
			m.reply(`*Benar!*\n+${this.asahotak[id][2]} XP`)
			clearTimeout(this.asahotak[id][3])
			delete this.asahotak[id]
		} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			m.reply(`*Salah!*`)
	}
	return !0
}

export const exp = 0