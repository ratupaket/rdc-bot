import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, text, command, usedPrefix }) => {

    conn.question = conn.question ? conn.question : {}
    let id = m.chat
    if (!text)
      return m.reply(
        `Please use this command like this: ${usedPrefix}question easy/medium/hard`
      );
    if (id in conn.question) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.question[id][0])
        throw false
    }
    let src = await (await fetch("https://opentdb.com/api.php?amount=1&difficulty=" + text + "&type=multiple")).json()
  let json = src
  let caption = `*[ Question Answers ]*\n\n*Category:* ${json.results[0].category}\n*Difficulty:* ${json.results[0].difficulty}\n\n*Question:* ${json.results[0].question}
  
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}qs untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.question[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.question[id]) conn.reply(m.chat, `Waktu habis!\\n\n*Answer:* ${json.results[0].correct_answer}\n`, conn.question[id][0])
            delete conn.question[id]
        }, timeout)
    ]
}
handler.help = ['question']
handler.tags = ['game']
handler.command = /^question/i
handler.group = true

export default handler