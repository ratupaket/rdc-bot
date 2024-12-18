import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { text, conn }) => {
 if (!text) throw 'Tidak Ada Url'
 
  let res = await fetch(`https://api.lolhuman.xyz/api/telestick?apikey=jjevingeo&url=${encodeURI(text)}`)
  let json = await res.json()
  if (json.result.sticker) {
for (let i of json.result.sticker) {
await conn.sendFile(m.chat, await sticker(false, i, pauthor), ':v', '', m)
}
} else json
}
handler.help = ['telestick'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.premium = true
handler.command = /^telestick$/i

export default handler