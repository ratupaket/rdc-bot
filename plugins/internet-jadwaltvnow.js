let handler = async (m, { conn, text, usedPrefix, command }) => {
	try {
		let res = await fetch(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apilol}`)
		let json = await res.json()
		let get_result = json.result
		let txt = `*Jadwal TV Now :*`
		for (let x in get_result) {
			txt += `\n\n${x.toUpperCase()}${get_result[x]}\n───────────────────`
		}
		m.reply(txt)
	} catch (e) {
		console.log(e)
		m.reply(`Jadwal tidak tersedia.`)
	}
}

handler.help = ['jadwaltvnow']
handler.tags = ['internet']
handler.command = /^(jadwaltvnow)$/i

handler.group = true
handler.limit = true

export default handler