function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var timeout = 60000
var handler = async (m, {
	conn,
	text
}) => {
	conn.tebakangka = conn.tebakangka ? conn.tebakangka : {}
	var id = m.sender
	var an = [{
		level: 'normal',
		min: 1,
		max: 10,
		money: 400
		}, {
		level: 'hard',
		min: 1,
		max: 20,
		money: 1500
		}, {
		level: 'extreme',
		min: 1,
		max: 30,
		money: 3000
		}, {
		level: 'crazy',
		min: 1,
		max: 50,
		money: 5000
		}]
	if (id in conn.tebakangka) {
		conn.reply(m.chat, 'Selesaikan permainanmu dulu sebelum memulai permainan baru', conn.tebakangka[id].msg)
		throw false
	}
	var min, max, money, lvl
	if (text && an.find(v=> v.level.toLowerCase() == text.toLowerCase())) {
		min = an.find(v=> v.level.toLowerCase() == text.toLowerCase()).min
		max = an.find(v=> v.level.toLowerCase() == text.toLowerCase()).max
		money = an.find(v=> v.level.toLowerCase() == text.toLowerCase()).money
		lvl = an.find(v=> v.level.toLowerCase() == text.toLowerCase()).level
	} else {
		min = an.find(v=> v.level.toLowerCase() == 'normal').min
		max = an.find(v=> v.level.toLowerCase() == 'normal').max
		money = an.find(v=> v.level.toLowerCase() == 'normal').money
		lvl = 'normal'
	}
	var json = {
		target: generateRandomNumber(min, max),
		attempt: 4,
		min, max, level: lvl, money
	}
	var anu = `*[ Tebak Angka ]*

Silahkan Tebak angka yang sedang di pikirkan Bot.

*[ clue ]* = ${min} - ${max}
*[ timeout ]* = ${(timeout / 1000).toFixed(2)} detik
*[ level ]* = ${lvl}
*[ hadiah ]* = ${money} Money
`
	conn.tebakangka[id] = {
		msg: await conn.reply(m.chat, anu, m),
		json,
		poin: money,
		tot: setTimeout(() => {
			if (conn.tebakangka[id]) conn.reply(m.chat, `*[ Timeout ]*

*kamu kalah*

*[ angka bot ]* => ${json.target}
Ayo coba lagi`, conn.tebakangka[id].msg)
			delete conn.tebakangka[id]
		}, timeout)
	}
}

handler.help = handler.command = ['tebakangka']
handler.tags = ['game']
handler.group = true
export default handler