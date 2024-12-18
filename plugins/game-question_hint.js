let handler = async (m, { conn }) => {
    conn.question = conn.question ? conn.question : {}
    let id = m.chat
    if (!(id in conn.question)) throw false
    let json = conn.question[id][1]
    conn.reply(m.chat, '```' + json.results[0].correct_answer.replace(/[AIUEOaiueo]/ig, '_') + '```\nBalas soalnya, bukan pesan ini', conn.question[id][0])
}
handler.command = /^qs$/i

handler.limit = true

export default handler