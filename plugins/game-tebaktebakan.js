import db from '../lib/database.js'
//import { tebaktebakan } from '@bochilteam/scraper'

let timeout = 120000
let poin = 3499
let handler = async (m, { conn, usedPrefix, isPrems }) => {
	if (m.isGroup && !db.data.chats[m.chat].game) return
	conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}
	let id = m.chat
	if (id in conn.tebaktebakan) {
		conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaktebakan[id][0])
		throw false
	}
	let src = await (await fetch("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json")).json()
    let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
*Tebak-tebakan*

${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teka untuk bantuan
Bonus: ${poin} Money
`.trim()
	conn.tebaktebakan[id] = [
		await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaktebakan[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebaktebakan[id][0])
            delete conn.tebaktebakan[id]
        }, timeout)
    ]
}
handler.help = ['tebaktebakan']
handler.tags = ['game']
handler.command = /^(tebaktebakan)$/i

handler.group = true

export default handler