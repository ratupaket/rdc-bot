import { delay } from '../lib/others.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	conn.vote = conn.vote ? conn.vote : {}
	let id = m.chat
	if (id in conn.vote) {
		throw `_Masih ada vote di chat ini!_\n\n*${usedPrefix}hapusvote* - untuk menghapus vote`
	}
	if (!text) return m.reply(`Masukkan Alasan Melakukan Vote\n\nContoh: *${usedPrefix + command} Pelantikan Admin Baru*`)
	//m.reply(`Vote dimulai!\n\n*${usedPrefix}upvote* - untuk ya\n*${usedPrefix}devote* - untuk tidak\n*${usedPrefix}cekvote* - untuk mengecek vote\n*${usedPrefix}hapusvote* - untuk menghapus vote`)
	m.reply(`Vote dimulai!\n\n*${usedPrefix}upvote* - untuk ya\n*${usedPrefix}devote* - untuk tidak\n*${usedPrefix}cekvote* - untuk mengecek vote\n*${usedPrefix}usedPrefix* - untuk menghapus vote`)
	conn.vote[id] = [text,[],[]]
	//vote[m.chat] = [q, [], []]
	await delay(1200)
	let upvote = conn.vote[id][1]
	let devote = conn.vote[id][2]
	let teks_vote = `*「 VOTE 」*

*${conn.vote[id][0]}*

┌〔 UPVOTE 〕
│ 
├ Total: ${conn.vote[id][1].length}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${conn.vote[id][2].length}
│ 
└───

*${usedPrefix}hapusvote* - untuk menghapus vote`
	conn.sendButton(m.chat, teks_vote, pauthor, null, [
		[`UPVOTE`, `${usedPrefix}upvote`],
		[`DEVOTE`, `${usedPrefix}devote`]
	], m)
}

handler.help = ['mulaivote [alasan]']
handler.tags = ['group']
handler.command = /^((start|mulai)?vote)$/i

handler.group = true
handler.admin = true

export default handler