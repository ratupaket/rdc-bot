import db from '../lib/database.js'
//import { tebakkata } from '@bochilteam/scraper'

let timeout = 120000
let poin = 3499
let handler = async (m, { conn, usedPrefix, isPrems }) => {
	let chat = db.data.chats[m.chat]
	if (!chat.game && m.isGroup) return
	conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
	let id = m.chat
	if (id in conn.tebakkata) {
		conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkata[id][0])
		throw false
	}
	let src = await (await fetch("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json")).json()
    let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
*Tebak Kata*

${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: ${poin} Money
`.trim()
	conn.tebakkata[id] = [
		await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkata[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakkata[id][0])
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^(tebakkata)$/i

handler.group = true

export default handler