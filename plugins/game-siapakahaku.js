import db from '../lib/database.js'

let timeout = 120000
let poin = 3499
let handler = async (m, { conn, usedPrefix, isPrems }) => {
	if (m.isGroup && !db.data.chats[m.chat].game) return
	conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
	let id = m.chat
	if (id in conn.siapakahaku) {
		conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.siapakahaku[id][0])
		throw false
	}
	let src = await (await fetch("https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json")).json()
    let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
*Siapakah Aku*

${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hsi untuk bantuan
Bonus: ${poin} Money
`.trim()
	conn.siapakahaku[id] = [
		await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}

handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^(siapa(kah)?aku)$/i

handler.group = true

export default handler