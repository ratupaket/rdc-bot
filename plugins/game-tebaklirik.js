import db from '../lib/database.js'
//import { tebaklirik } from '@bochilteam/scraper'

let timeout = 120000
let poin = 1999
let handler = async (m, { conn, usedPrefix, isPrems }) => {
	if (m.isGroup && !db.data.chats[m.chat].game) return
	conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
	let id = m.chat
	if (id in conn.tebaklirik) {
		conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklirik[id][0])
		throw false
	}
	let src = await (await fetch("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json")).json()
    let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
*Tebak Lirik*

${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teli untuk bantuan
Bonus: ${poin} Exp
`.trim()
	conn.tebaklirik[id] = [
		await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklirik[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebaklirik[id][0])
            delete conn.tebaklirik[id]
        }, timeout)
    ]
}

handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^(tebaklirik)$/i

handler.group = true

export default handler