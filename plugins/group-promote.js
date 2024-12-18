let handler = async (m, { conn }) => {
	let who = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : ''
	if (!who || who.includes(conn.user.jid)) throw `*quote / @tag* salah satu !`
	try {
		await conn.groupParticipantsUpdate(m.chat, [who], 'promote')
        m.reply('sukses jadi admin')
	} catch (e) {
		console.log(e)
	}
}

handler.help = ['admin @tag']
handler.tags = ['group']
handler.command = /^(admin)$/i

handler.admin = true
handler.botAdmin = true
handler.group = true

export default handler