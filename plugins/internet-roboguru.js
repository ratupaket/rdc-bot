import fetch from 'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) return m.reply(`Usage : ${usedPrefix + command} boedi oetomo`)
	try {
		let anu = await (await fetch(`https://api.lolhuman.xyz/api/roboguru?apikey=${apilol}&query=${text}&grade=sma&subject=sejarah`)).json()
		if (anu.status != 200) throw Error(anu.message)
		let txt = `*[ LIST PERTANYAAN ]*`
		for (let x of anu.result) {
			txt += `\n\n*tanya :* ${x.question.trim()}\n`
			txt += `*jawab :* ${x.answer.trim()}\n`
			txt += `───────────────────`
		}
		m.reply(txt)
	} catch (e) {
		console.log(e)
		throw 'Internal server error.'
	}
}

handler.help = ['roboguru <query>']
handler.tags = ['internet']
handler.command = /^(roboguru)$/i

handler.group = true
handler.limit = true

export default handler