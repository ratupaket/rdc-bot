import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let startTime = new Date();
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `*reply/send ur image with .${command}*`
try {
conn.sendMessage(m.chat, {
		react: {
			text: '♻️',
			key: m.key,
		}
	})
let media = await q.download()
let url = await uploadImage(media)
let skyline = await (await fetch(`https://api.neoxr.my.id/api/effect2?style=messi&image=${url}&apikey=rdculous`)).buffer()
 await conn.sendFile(m.chat, skyline, 'diff.jpg', `*Fetching:* ${(new Date() - startTime) / 1000} seconds`, m)
    } catch (e) {
    console.log(e)
    conn.reply(m.chat, '*Sorry there was an error accepting the request.*', m)
  }
  	}
handler.help = ['messi']
handler.tags = ['maker']
handler.command = /^(messi)$/i
handler.register = true
handler.premium = false
handler.limit = true

export default handler