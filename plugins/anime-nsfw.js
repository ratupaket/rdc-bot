import { pickRandom } from '../lib/func.js'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
		let res = await fetch(`https://raw.githubusercontent.com/clicknetcafe/Databasee/main/nsfw/${command.replace('manga2nsfw','manga').replace('nekonimensfw','nekonime')}.json`)
		let anu = pickRandom(await res.json())
		if (!anu) throw Error('error : no url')
		if (anu.split('.').pop() == 'gif') {
			let buffer = await sticker(false, anu, packname, author)
			await conn.sendFile(m.chat, buffer, '', '', m)
		} else await conn.sendFile(m.chat, anu, '', `_Random pic : ${command}_`, m)
	} catch (e) {
		console.log(e)
		m.reply('scrape failed')
	}
}

handler.help = ['eba','foot','gifs','hentaivid','jahy','manga2nsfw','neko2','nekonimensfw','nsfwloli','nsfwmanga','nsfwneko','panties','zettai']
handler.tags = ['nsfw']
handler.command = /^(eba|foot|gifs|hentaivid|jahy|manga2nsfw|neko2|nekonimensfw|nsfwloli|nsfwmanga|nsfwneko|panties|zettai)$/i

handler.premium = true

export default handler