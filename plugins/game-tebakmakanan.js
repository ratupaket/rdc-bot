import fetch from 'node-fetch'
import fs from 'fs'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {

    conn.tebakmakanan = conn.tebakmakanan ? conn.tebakmakanan : {}
    let id = m.chat
    if (id in conn.tebakmakanan) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakmakanan[id][0])
        throw false
    }
    let res = JSON.parse(fs.readFileSync('./data/tebakmakanan.json'))
    let random = Math.floor(Math.random() * res.length)
    let json = res[random]
  	let caption = `*[ Tebak Makanan ]*

Makanan apakah ini?

Deskripsi ${json.deskripsi}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: ${poin} XP
    `.trim()
    conn.tebakmakanan[id] = [
        await conn.sendFile(m.chat, json.img, 'tebakmakanan.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakmakanan[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakmakanan[id][0])
      delete conn.tebakmakanan[id]
    }, timeout)
  ]
}
handler.help = ['tebakmakanan']
handler.tags = ['game']
handler.command = /^tebakmakanan/i
handler.group= true

export default handler