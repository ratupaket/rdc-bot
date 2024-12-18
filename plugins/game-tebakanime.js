import db from '../lib/database.js'
import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakanjime = conn.tebakanjime ? conn.tebakanjime : {}
    let id = m.chat
    if (id in conn.tebakanjime) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanjime[id][0])
        throw false
    }
    let src = await(await fetch(`https://raw.githubusercontent.com/rdculous/result-rest-api/main/game/tebakchara.json`)).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*Tebak Anime*

Siapakah nama dari gambar ini

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: ${poin} XP
    `.trim()
    conn.tebakanjime[id] = [
        await conn.sendFile(m.chat, json.result.image,  '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakanjime[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.name}*`, conn.tebakanjime[id][0])
            delete conn.tebakanjime[id]
        }, timeout)
    ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i
handler.group = true

export default handler