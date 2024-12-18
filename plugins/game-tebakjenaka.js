import db from '../lib/database.js'
import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.tebakjenaka = conn.tebakjenaka ? conn.tebakjenaka : {}
    let id = m.chat
    if (id in conn.tebakjenaka) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakjenaka[id][0])
        throw false
    }
   let src = await (await fetch('https://raw.githubusercontent.com/rdculous/result-rest-api/main/game/tebakjenaka.json')).json()
   let json = src[Math.floor(Math.random() * src.length)]
  let caption = `*[ Tebak Jenaka ]*

${json.result.pertanyaan}

Timeout *${(timeout / 1000).toFixed(2)} detik*
ketik ${usedPrefix}hjen untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakjenaka[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakjenaka[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, conn.tebakjenaka[id][0])
            delete conn.tebakjenaka[id]
        }, timeout)
    ]
}
handler.help = ['tebakjenaka']
handler.tags = ['game']
handler.command = /^tebakjenaka/i
handler.group = true

export default handler