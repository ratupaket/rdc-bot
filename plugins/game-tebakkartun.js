import fetch from 'node-fetch'
import fs from 'fs'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.tebakkartun = conn.tebakkartun ? conn.tebakkartun : {}
    let id = m.chat
    if (id in conn.tebakkartun) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkartun[id][0])
        throw false
    }
    let res = JSON.parse(fs.readFileSync('./data/tebakkartun.json'))
    let random = Math.floor(Math.random() * res.length)
    let json = res[random]
  	let caption = `*[ Tebak Kartun ]*

Kartun apakah ini?

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: ${poin} XP
    `.trim()
    conn.tebakkartun[id] = [
        await conn.sendFile(m.chat, json.img, 'tebakkartun.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakkartun[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakkartun[id][0])
      delete conn.tebakkartun[id]
    }, timeout)
  ]
}
handler.help = ['tebakkartun']
handler.tags = ['game']
handler.command = /^tebakkartun/i
handler.group= true

export default handler