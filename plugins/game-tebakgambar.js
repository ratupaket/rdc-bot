import db from '../lib/database.js'
//import { tebakgambar } from '@bochilteam/scraper'

let timeout = 120000
let poin = 3499
let handler = async (m, { conn, usedPrefix, isPrems }) => {
	let chat = db.data.chats[m.chat]
	if (!chat.game && m.isGroup) return
	conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
	let id = m.chat
	if (id in conn.tebakgambar) {
		conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambar[id][0])
		throw false
	}
	let src = await (await fetch("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json")).json()
    let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
*Tebak Gambar*

${json.deskripsi}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik .hgam untuk bantuan
Bonus: ${poin} Money
`.trim()
	conn.tebakgambar[id] = [
		await conn.sendMessage(m.chat, { image: { url: json.img }, caption: caption }, { quoted: m }),
		json, poin,
		setTimeout(() => {
			if (conn.tebakgambar[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgambar[id][0])
            delete conn.tebakgambar[id]
        }, timeout)
    ]
}

handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^(tebakgambar)$/i

handler.group = true

export default handler