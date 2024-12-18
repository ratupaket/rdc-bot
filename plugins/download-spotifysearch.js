import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example: ${usedPrefix + command} Melukis Senja`
	let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=jjevingeo&query=${encodeURIComponent(text)}`)
	if (!res.ok) throw await `Invalid Spotify url / terjadi kesalahan.`
	let json = await res.json()
	if (json.status != '200') throw `Terjadi kesalahan, coba lagi nanti.`
	let get_result = json.result
	let txt = `Found : *${text}*`
	for (var x of get_result) {
		txt += `\n\n*Title : ${x.title}*\n`
		txt += `Artists : ${x.artists}\n`
		txt += `Duration : ${x.duration}\n`
		txt += `Link : ${x.link}\n`
		txt += `${x.preview_url ? `Preview : ${x.preview_url}\n` : ''}`
		txt += `───────────────────`
	}
	m.reply(txt)
}

handler.help = ['spotsearch <teks>']
handler.tags = ['downloader']
handler.command = /^spot(ify)?search$/i

handler.group = true
handler.limit = true

export default handler