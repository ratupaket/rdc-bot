import { toDataURL } from 'qrcode'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Input Teks`
let caption = `Nih hasil ${command} nya`
await conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', caption, m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
handler.group = true

export default handler