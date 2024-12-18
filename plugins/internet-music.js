import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Masukkan Url atau ubah video/lagu memakai .tourl\n\nContoh: ${usedPrefix + command} https://files.catbox.moe/eo67sc`
	let dann = await fetch(`https://api.lolhuman.xyz/api/musicsearch?apikey=jjevingeo&file=${text}`)
	let res = await dann.json()
	let hasil = `Judul: ${res.result.title}\nAlbum: ${res.result.album}\nArtis: ${res.result.artists}\nDurasi: ${res.result.duration}\nRilis: ${res.result.release}\nGenre: ${res.result.genres}`
	conn.reply(m.chat, hasil, m)
}
handler.help = ['musik']
handler.tags = ['internet']
handler.command = /^(musik|music)$/i
handler.group = true
export default handler