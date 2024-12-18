import db from '../lib/database.js'
import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.riddle = conn.riddle ? conn.riddle : {}
    let id = m.chat
    if (id in conn.riddle) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.riddle[id][0])
        throw false
    }
   let src = await (await fetch('https://raw.githubusercontent.com/rdculous/result-rest-api/main/game/riddle.json')).json()
   let json = src[Math.floor(Math.random() * src.length)]
  let caption = `*[ Riddle ]*

${json.pertanyaan}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: ${poin} XP
    `.trim()
    conn.riddle[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.riddle[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.riddle[id][0])
            delete conn.riddle[id]
        }, timeout)
    ]
}
handler.help = ['riddle']
handler.tags = ['game']
handler.command = /^riddle/i
handler.group = true

export default handler