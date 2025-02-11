import db from '../lib/database.js'
import similarity from 'similarity'
const threshold = 0.72

export async function before(m) {
	let user = db.data.users[m.sender]
	if (user.banned) return null
	let id = m.chat
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text)
		return !0
	this.tebakmakanan = this.tebakmakanan ? this.tebakmakanan : {}
	if (!(id in this.tebakmakanan))
		return
	if (m.quoted.id == this.tebakmakanan[id][0].id) {
		let json = JSON.parse(JSON.stringify(this.tebakmakanan[id][1]))
		if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
			user.money += this.tebakmakanan[id][2]
			m.reply(`*Benar!*\n\n+${this.tebakmakanan[id][2]} Money`)
			clearTimeout(this.tebakmakanan[id][3])
			delete this.tebakmakanan[id]
		} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			m.reply(`*Salah!*`)
	}
	return !0
}

export const money = 0