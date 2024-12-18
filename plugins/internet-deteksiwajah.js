import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if ((/image/g.test(mime) && !/webp/g.test(mime)) || q.message?.imageMessage) {
		try {
			let img = await q.download?.()
			let out = await uploadImage(img)
			let anu = await fetch(`https://api.lolhuman.xyz/api/facedetect?apikey=${apilol}&img=${out}`)
			if (anu.status != 200) throw Error(anu.message)
			await conn.sendMsg(m.chat, { image: Buffer.from(await anu.arrayBuffer()) }, { quoted: m })
		} catch (e) {
			console.log(e)
			throw 'Internal server error.'
		}
	} else m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
}

handler.help = ['deteksiwajah']
handler.tags = ['internet']
handler.command = /^(dete(ksi|ct)(wajah|face))$/i

handler.group = true
handler.limit = true

export default handler