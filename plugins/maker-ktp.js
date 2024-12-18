import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

const foto = 'https://i.ibb.co/Xb2pZ88/test.jpg'
const format = 'nik @ prov @ kabu @ nama @ ttl @ jk @ jl @ rtrw @ lurah @ camat @ agama @ nikah @ kerja @ warga @ until'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Minimal input NIK !!*\n\n*Format :*\n${usedPrefix + command} ${format}`
	let q = m.quoted ? m.quoted : m
	let out, mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		let img = await q.download?.()
		out = await uploadImage(img)
	} else out = foto
	let [a, b, c, d, e, f, g, h, i, j, k, l, n, o, p] = text.split`@`
	let anu = await fetch(`https://api.lolhuman.xyz/api/ktpmaker?apikey=GataDiosV3&nik=${a || '-'}&prov=${b || '-'}&kabu=${c || '-'}&name=${d || '-'}&ttl=${e || '-'}&jk=${f || '-'}&jl=${g || '-'}&rtrw=${h || '-'}&lurah=${i || '-'}&camat=${j || '-'}&agama=${k || '-'}&nikah=${l || '-'}&kerja=${n || '-'}&warga=${o || '-'}&until=${p || '-'}&img=${out}`)
	let buffer = Buffer.from(await anu.arrayBuffer())
	await conn.sendMessage(m.chat, { image: buffer, caption: `${p ? `KTP Bodong ~` : `[ ! ] Informasi kurang lengkap\n\nContoh Penggunaan :\n*${usedPrefix + command} ${format}*`}` }, { quoted: m })
}

handler.help = ['ktp']
handler.tags = ['maker']
handler.command = /^(ktp(maker)?)$/i
handler.group = true

export default handler