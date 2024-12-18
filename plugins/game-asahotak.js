import db from '../lib/database.js'
import fetch from 'node-fetch'

let timeout = 120000
let poin = 1999
let handler = async (m, { conn, usedPrefix, isPrems }) => {
	conn.asahotak = conn.asahotak ? conn.asahotak : {}
	let id = m.chat
	if (id in conn.asahotak) {
		conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.asahotak[id][0])
		throw false
	}
	let src = await (await fetch("https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json")).json()
    let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
*Asah Otak*

${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hasa untuk bantuan
Bonus: ${poin} Exp
`.trim()
	conn.asahotak[id] = [
		await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.asahotak[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}

handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^(asahotak)$/i

handler.group = true

export default handler