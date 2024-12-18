import db from '../lib/database.js'
import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.tebakgombal = conn.tebakgombal ? conn.tebakgombal : {}
    let id = m.chat
    if (id in conn.tebakgombal) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgombal[id][0])
        throw false
    }
   let src = await (await fetch('https://raw.githubusercontent.com/rdculous/result-rest-api/main/game/tebakgombal.json')).json()
   let json = src[Math.floor(Math.random() * src.length)]
  let caption = `*[ Tebak Gombal ]*

${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
ketik ${usedPrefix}hgo untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakgombal[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakgombal[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgombal[id][0])
            delete conn.tebakgombal[id]
        }, timeout)
    ]
}
handler.help = ['tebakgombal']
handler.tags = ['game']
handler.command = /^tebakgombal/i
handler.group = true

export default handler