import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.tebakhewan = conn.tebakhewan ? conn.tebakhewan : {}
    let id = m.chat
    if (id in conn.tebakhewan) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakhewan[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/rdculous/result-rest-api/main/game/tebakhewan.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  let caption = `*[ Tebak Hewan ]*

Hewan apakah ini?

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: ${poin} XP
    `.trim()
    conn.tebakhewan[id] = [
        await conn.sendFile(m.chat, json.img, 'tebakhewan.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakhewan[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakhewan[id][0])
      delete conn.tebakhewan[id]
    }, timeout)
  ]
}
handler.help = ['tebakhewan']
handler.tags = ['game']
handler.command = /^tebakhewan/i
handler.group= true

export default handler