import { delay } from '../lib/others.js'
import fs from 'fs'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'

const bete = 'https://api.lolhuman.xyz/api/sticker'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let res
	if (command.includes('gura')) {
		res = `${bete}/gawrgura?apikey=${apilol}`
	} else if (command.includes('patrick') || command.includes('patrik')) {
		res = `${bete}/patrick?apikey=${apilol}`
	} else {
		res = `${bete}/${command.replace(/s(tic?ker)?/, '')}?apikey=${apilol}`
	}
	let ztick = fs.readFileSync(`./media/sticker/bronya.webp`)
	try {
		const sticker = new Sticker(res, { pack: pauthor, type: StickerTypes.FULL })
		const buffer = await sticker.toBuffer()
		await conn.sendFile(m.chat, buffer, 'sticker.webp', '', m)
	} catch (e) {
		console.log(e)
		await conn.sendFile(m.chat, ztick, 'sticker.webp', '', m)
	}
}

handler.help = ['anjing','gawrgura','patrick'].map(v => 'stiker' + v)
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?(anjing|(gawr?)?gura|patric?k))$/i

handler.premium = true

export default handler