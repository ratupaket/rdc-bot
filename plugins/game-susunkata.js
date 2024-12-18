import db from '../lib/database.js'

let timeout = 120000
let poin = 3499
let handler = async (m, { conn, usedPrefix, isPrems }) => {
	if (m.isGroup && !db.data.chats[m.chat].game) return
	conn.susunkata = conn.susunkata ? conn.susunkata : {}
	let id = m.chat
	if (id in conn.susunkata) {
		conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.susunkata[id][0])
		throw false
	}
	let src = await (await fetch("https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json")).json()
    let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
*Susun Kata*

Soal : ${json.soal}
Tipe : ${json.tipe}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: ${poin} Money
`.trim()
	conn.susunkata[id] = [
		await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.susunkata[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.susunkata[id][0])
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^(susunkata)$/i

handler.group = true

export default handler