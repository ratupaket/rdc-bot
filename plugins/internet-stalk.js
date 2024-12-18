import { somematch } from '../lib/others.js'
import fetch from 'node-fetch'

const web = `https://api.lolhuman.xyz/api/`

let handler = async (m, { conn, usedPrefix, command, args }) => {
	let exam = `[ Contoh ]\n*${usedPrefix + command} github jessnolimit*\n\n*Stalk yang tersedia :*\n⭔ ig\n⭔ genshin\n⭔ github\n⭔ tiktok\n⭔ youtube`
	if (command == 'stalk' && !args[1]) throw exam
	if (command != 'stalk' && !args[0]) throw `Format : *${usedPrefix + command} [channel/username]*\nExample : *${usedPrefix + command} jessnolimit*`
	let text = (command == 'stalk' ? args.slice(1).join(' ') : args.join(' ')).replace('@','').trim()
	let cmd = command == 'stalk' ? args[0] : command.replace('stalk','')
	try {
		if (somematch(['yt','youtube'], cmd)) {
			let anu = await (await fetch(`${web}ytchannel?apikey=${apilol}&query=${text}`)).json()
			if (anu.status != 200) return m.reply(`Tidak ditemukan!`)
			anu = anu.result
			let txt = `*Found ${anu.length} Result*`
			for (let x of anu) {
				txt += `\n\n*${x.channel_name}*\n`
				+ `*id :* ${x.channel_id}\n`
				+ `*created :* ${x.channel_created}\n`
				+ `*link :* _https://www.youtube.com/channel/${x.channel_id}_\n`
				+ `*about :* ${x.channel_about}\n`
				+ `───────────────────`
			}
			await conn.sendMsg(m.chat, { image: { url: anu[0].channel_picture.default.url }, caption: txt }, { quoted: m })
		} else if (somematch(['tt','tiktok'], cmd)) {
			let anu = await (await fetch(`${web}stalktiktok/${text}?apikey=${apilol}`)).json()
			if (anu.status != 200) return m.reply(`Tidak ditemukan!`)
			anu = anu.result
			let txt = `*${anu.username}*\n\n`
				+ `*nickname :* ${anu.nickname}\n`
				+ `*follower :* ${anu.followers}\n`
				+ `*following :* ${anu.followings}\n`
				+ `*likes :* ${anu.likes}\n`
				+ `*video :* ${anu.video}\n`
				+ `*bio :* ${anu.bio}`
			await conn.sendMsg(m.chat, { image: { url: anu.user_picture }, caption: txt }, { quoted: m })
		} else if (somematch(['gh','github'], cmd)) {
			let anu = await (await fetch(`${web}github/${text}?apikey=${apilol}`)).json()
			if (anu.status != 200) return m.reply(`Tidak ditemukan!`)
			anu = anu.result
			let txt = `*${anu.name}*\n\n`
				+ `*follower :* ${anu.followers}\n`
				+ `*following :* ${anu.following}\n`
				+ `*public_repos :* ${anu.public_repos}\n`
				+ `*public_gists :* ${anu.public_gists}\n`
				+ `*type :* ${anu.type}\n`
				+ `*company :* ${anu.company}\n`
				+ `*location :* ${anu.location}\n`
				+ `*email :* ${anu.email}\n`
				+ `*url :* ${anu.url}\n`
				+ `*bio :* ${anu.bio}`
			await conn.sendMsg(m.chat, { image: { url: anu.avatar }, caption: txt }, { quoted: m })
		} else if (somematch(['ig','instagram'], cmd)) {
			let anu = await (await fetch(`${web}stalkig/${text}?apikey=${apilol}`)).json()
			if (anu.status != 200) return m.reply(`Tidak ditemukan!`)
			anu = anu.result
			let txt = `*${anu.fullname}*\n\n`
				+ `*username :* ${anu.username}\n`
				+ `*follower :* ${anu.followers}\n`
				+ `*following :* ${anu.following}\n`
				+ `*posts :* ${anu.posts}\n`
				+ `*bio :* ${anu.bio}`
			await conn.sendMsg(m.chat, { image: { url: anu.photo_profile }, caption: txt }, { quoted: m })
		} else if (somematch(['gi','genshin'], cmd)) {
			let anu
			try {
				let res = await (await fetch(`https://enka.network/api/uid/${text}`)).json()
				if (!res.uid) throw Error()
				anu = res
			} catch { return m.reply('UID tidak ditemukan.') }
			console.log(Object.assign({}, anu.avatarInfoList[0].inherentProudSkillList))
			let info = anu.playerInfo
			let txt = `*[ UID : ${anu.uid} ]*\n\n`
			+ `*Nickname :* ${info.nickname}\n`
			+ `*Rank Adventure :* ${info.level}\n`
			+ `*Signature :* ${info.signature}\n`
			+ `*World Level :* ${info.worldLevel}\n`
			+ `*Name Card ID :* ${info.nameCardId}\n`
			+ `*Spiral Abyss :* FLoor ${info.towerFloorIndex}, Level ${info.towerLevelIndex}\n`
			+ `*Total Achievement :* ${info.finishAchievementNum}`
			m.reply(txt)
		} else {
			throw exam
		}
	} catch (e) {
		console.log(e)
		m.reply(`Internal server error.`)
	}
}

handler.help = ['stalkgithub','stalkgenshin','stalkig','stalktiktok','stalkyt']
handler.tags = ['internet']
handler.command = /^(stalk|stalk(github|gh|ig|gi|instagram|tt|tiktok|yt|youtube)|(github|gh|ig|gi|instagram|tt|tiktok|yt|youtube)stalk)$/i

handler.group = true
handler.limit = true

export default handler