import db from '../lib/database.js'

let timeout = 120000
let poin = 1999
let handler = async (m, { conn, usedPrefix, isPrems }) => {
	conn.tebakprovinsi = conn.tebakprovinsi ? conn.tebakprovinsi : {}
	let id = m.chat
	if (id in conn.tebakprovinsi) {
		conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakprovinsi[id][0])
		throw false
	}
	let res = await fetch(`https://api.lolhuman.xyz/api/tebak/provinsi?apikey=${apilol}`)
	if (!res.ok) throw 'Fitur Error!'
	const json = await res.json()
	let caption = `
*[ Tebak Provinsi ]*

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: ${poin} Exp
`.trim()
	conn.tebakprovinsi[id] = [
		await conn.sendMsg(m.chat, { image: { url: json.result.img }, caption: caption }, { quoted: m }),
		json, poin,
		setTimeout(() => {
			if (conn.tebakprovinsi[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.title}*`, conn.tebakprovinsi[id][0])
			delete conn.tebakprovinsi[id]
		}, timeout)
	]
	console.log(json.result.title)
}

handler.help = ['tebakprovinsi']
handler.tags = ['game']
handler.command = /^(tebakprovinsi)$/i

handler.group = true

export default handler