import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.tebakkota = conn.tebakkota ? conn.tebakkota : {}
    let id = m.chat
    if (id in conn.tebakkota) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkota[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BerkahEsport/database/main/games/tebakkota.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  let caption = `*Tebak Kota*

${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: ${poin} XP
    `.trim()
    conn.tebakkota[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkota[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakkota[id][0])
            delete conn.tebakkota[id]
        }, timeout)
    ]
}
handler.help = ['tebakkota']
handler.tags = ['game']
handler.command = /^tebakkota/i
handler.group = true

export default handler