let handler = async (m, { conn, command }) => {
	conn.reply(m.chat, `chat owner aja`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler