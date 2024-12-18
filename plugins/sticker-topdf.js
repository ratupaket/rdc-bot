import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*Respond / reply to an image*'    
let img = await q.download?.()
let url = await uploadImage(img)    
let docname = text ? text : m.pushName || 'Rdculous'
conn.sendFile(m.chat, `http://api.lolhuman.xyz/api/convert/imgtopdf?apikey=jjevingeo&img=${url}`, docname + '.pdf', '', m, false, { asDocument: true })
}
handler.help = ['topdf <img>']
handler.tags = ['sticker']
handler.command = /^topdf$/i

handler.group = true
handler.limit = 3
export default handler