import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, text }) => {
	let user = db.data.users[m.sender]
	let ini_txt = `[ *GUDANG BUAH KAMU* ]\n\n`
	ini_txt += `🍌 ${user.pisang} Pisang\n`
	ini_txt += `🍇 ${user.anggur} Anggur\n`
	ini_txt += `🥭 ${user.mangga} Mangga\n`
	ini_txt += `🍊 ${user.jeruk} Jeruk\n`
	ini_txt += `🍎 ${user.apel} Apel\n\n`
	ini_txt += `Gunakan command *${usedPrefix}sell* untuk menjual.`
	m.reply(ini_txt)
}

handler.help = ['buah']
handler.tags = ['rpg']
handler.command = /^((list)?(buah|fruits?))$/i

handler.group = true

export default handler