import db from '../lib/database.js'
import { isNumber } from '../lib/others.js'
//const cooldown = 1000 // 1 detik
//const cooldown = 60000 // 1 menit
//const cooldown = 3600000 // 1 jam
//const cooldown = 86400000 // 1 hari
//const cooldown = 2592000000 // 1 bulan

const cooldown = 6000 // 10 masakan
const cooldownn = 1000 // 10 masakan

let handler = async (m, { command, usedPrefix, args }) => {
	let user = db.data.users[m.sender]
	let info = `Format : *${usedPrefix + command} [item]*\n`
	info += `Contoh : *${usedPrefix}${command} sword*\n\n`
	info += `*━━━[ MERACIK LIST ]━━━*\n`
	info += `| ramuan   |  potion\n`
	info += `| string | iron\n`
	info += `| sword  | weapon\n`
	info += `| pancingan`
	
	const item = (args[0] || '').toLowerCase()
	const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
	if (new Date - user.lastramuanclaim <= cooldown) return m.reply(`_Tunggu beberapa saat lagi . . ._\n*${((user.lastramuanclaim) - new Date()).toTimeString()}*`)
	if (item == 'ramuan') {
		if (user.apel < 1 * total || user.anggur < 1 * total || user.jeruk < 1 * total || user.mangga < 1 * total || user.pisang < 1 * total || user.ramuan < 1 * total) {
			m.reply(`Diperlukan ${1 * total} apel, ${1 * total} anggur, ${1 * total} jeruk, ${1 * total} mangga, ${1 * total} pisang, ${1 * total} ramuan.\n\nAnda memiliki :\n━ ${global.rpg.emoticon('apel')} ${user.apel} apel\n━ ${global.rpg.emoticon('anggur')} ${user.anggur} anggur\n━ ${global.rpg.emoticon('jeruk')} ${user.jeruk} jeruk\n━ ${user.mangga} mangga\n━ ${user.pisang} pisang\n━ ${user.ramuan} ramuan`)
		} else {
			user.lastramuanclaim = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.apel -= 1 * total
				user.anggur -= 1 * total
				user.jeruk -= 1 * total
				user.mangga -= 1 * total
				user.pisang -= 1 * total
                user.ramuan -= 1 * total
				user.ramuan += total
				user.lastramuanclaim += 1
				m.reply(`Berhasil meracik ramuan:
-${user.apel} Apel
-${user.mangga} Mangga
-${user.anggur} Anggur
-${user.jeruk} Jeruk
-${user.pisang} Pisang
Selamat kamu mendapatkan ramuan: 
+${user.ramuan}`)
			}, cooldown)
		}
	} else if (item == 'sword') {
		if (user.iron < 1 * total || user.kayu < 1 * total || user.string < 1 * total) {
			m.reply(`Diperlukan ${1 * total} iron, ${1 * total} kayu, ${1 * total} string.\n\nAnda memiliki :\n━ ${global.rpg.emoticon('iron')} ${user.iron} iron\n━ ${global.rpg.emoticon('kayu')} ${user.kayu} kayu\n━ ${global.rpg.emoticon('string')} ${user.string} string`)
		} else {
			user.lastswordclaim = new Date * 1 + (cooldown * total)
            setTimeout(() => {
				user.iron -= 1 * total
				user.kayu -= 1 * total
				user.string -= 1 * total
				user.sword += total
				user.lastswordclaim += 1
				m.reply(`Berhasil meracik sword:
-${user.iron} Iron
-${user.kayu} Kayu
-${user.string} String
Selamat kamu mendapatkan sword: 
+${user.sword}`)
			}, cooldown)
		}
	} else if (item == 'potion') {
		if (user.apel < 1 * total || user.anggur < 1 * total || user.mangga < 1 * total || user.pisang < 1 * total || user.jeruk < 1 * total) {
			m.reply(`Diperlukan ${1 * total} apel, ${1 * total} anggur, ${1 * total} mangga, ${1 * total} pisang, ${1 * total} jeruk.\n\nAnda memiliki :\n━ ${global.rpg.emoticon('apel')} ${user.apel} apel\n━ ${global.rpg.emoticon('anggur')} ${user.anggur} anggur\n━ ${user.mangga} mangga\n━ ${user.pisang} pisang\n━ ${user.jeruk} jeruk`)
		} else {
			user.lastpotionclaim = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.apel -= 1 * total
				user.angur -= 1 * total
				user.mangga -= 1 * total
				user.pisang -= 1 * total
				user.jeruk -= 1 * total
				user.potion += total
				user.potioncount += 1
				m.reply(`Berhasil meracik potion:
-${user.apel} Apel
-${user.mangga} Mangga
-${user.anggur} Anggur
-${user.jeruk} Jeruk
-${user.pisang} Pisang
Selamat kamu mendapatkan potion: 
+${user.potion}`)
			}, cooldownn)
		}
	} else if (item == 'string') {
		if (user.apel < 1 * total || user.anggur < 1 * total || user.mangga < 1 * total || user.pisang < 1 * total || user.jeruk < 1 * total) {
			m.reply(`Diperlukan ${1 * total} apel, ${1 * total} anggur, ${1 * total} mangga, ${1 * total} pisang, ${1 * total} jeruk.\n\nAnda memiliki :\n━ ${global.rpg.emoticon('apel')} ${user.apel} apel\n━ ${global.rpg.emoticon('anggur')} ${user.anggur} anggur\n━ ${user.mangga} mangga\n━ ${user.pisang} pisang\n━ ${user.jeruk} jeruk`)
		} else {
			user.laststringclaim = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.apel -= 1 * total
				user.angur -= 1 * total
				user.mangga -= 1 * total
				user.pisang -= 1 * total
				user.jeruk -= 1 * total
				user.string += total
				user.stringcount += 1
				m.reply(`Berhasil meracik string:
-${user.apel} Apel
-${user.mangga} Mangga
-${user.anggur} Anggur
-${user.jeruk} Jeruk
-${user.pisang} Pisang
Selamat kamu mendapatkan string: 
+${user.string}`)
			}, cooldownn)
		}
	} else if (item == 'iron') {
		if (user.emas < 1 * total || user.string < 1 * total) {
			m.reply(`Diperlukan ${1 * total} emas, ${1 * total} string.\n\nAnda memiliki :\n━ ${global.rpg.emoticon('emas')} ${user.emas} emas\n━ ${global.rpg.emoticon('string')} ${user.string} string`)
		} else {
			user.lastsironclaim = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.emas -= 1 * total
				user.string -= 1 * total
				user.iron += total
				user.ironcount += 1
				m.reply(`Berhasil meracik iron:
-${user.emas} Emas
-${user.string} String
Selamat kamu mendapatkan iron: 
+${total}`)
			}, cooldownn)
		}
	} else if (item == 'weapon') {
		if (user.iron < 1 * total || user.kayu < 1 * total || user.string < 1 * total || user.sword < 1 * total) {
			m.reply(`Diperlukan ${1 * total} iron, ${1 * total} kayu, ${1 * total} string, ${1 * total} sword.\n\nAnda memiliki :\n━ ${global.rpg.emoticon('iron')} ${user.iron} iron\n━ ${global.rpg.emoticon('kayu')} ${user.kayu} kayu\n━ ${global.rpg.emoticon('string')} ${user.string} string\n━ ${user.sword} sword`)
		} else {
			user.lastweaponclaim = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.iron -= 1 * total
				user.kayu -= 1 * total
				user.string -= 1 * total
				user.sword -= 1 * total
				user.weapon += total
				user.weaponcount += 1
				m.reply(`Berhasil meracik weapon:
-${user.iron} Iron
-${user.kayu} Kayu
-${user.string} String
-${user.sword} Sword
Selamat kamu mendapatkan weapon: 
+1`)
			}, cooldownn)
		}
	} else if (item == 'pancingan') {
		if (user.kayu < 1 * total || user.string < 1 * total || user.batu < 1 * total) {
			m.reply(`Diperlukan ${1 * total} kayu, ${1 * total} string, ${1 * total} batu.\n\nAnda memiliki :\n━ ${global.rpg.emoticon('kayu')} ${user.kayu} kayu\n━ ${global.rpg.emoticon('string')} ${user.string} string\n━ ${global.rpg.emoticon('batu')} ${user.batu} batu`)
		} else {
			user.lastsmancingclaim = new Date * 1 + (cooldown * total)
			setTimeout(() => {
				user.kayu -= 500 * total
				user.string -= 5 * total
				user.batu -= 10 * total
				user.pancingancount += 1
				m.reply(`Berhasil meracik pancingan:
-10 Batu
-5 String
-500 Kayu
Selamat kamu mendapatkan Exp: 
+150 Exp Pancingan`)
			}, cooldownn)
		}
	} else {
		m.reply(info.replace('%', '```'))
	}
}

handler.help = ['meracik [type]']
handler.tags = ['rpg']
handler.command = /^(meracik|racik)$/i
handler.group = true

handler.cooldown = cooldown

export default handler