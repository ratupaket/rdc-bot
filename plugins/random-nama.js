import { delay } from '../lib/others.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	await delay(2000)
	try {
		let res = await fetch(`https://api.lolhuman.xyz/api/random/nama?apikey=jjevingeo`)
		let json = await res.json()
		m.reply(json.result)
	} catch (e) {
		console.log(e)
		m.reply(`Terjadi kesalahan, coba lagi nanti.`)
	}
}

handler.help = ['randomnama']
handler.tags = ['fun']
handler.command = /^randomnama$/i

handler.group = true

export default handler