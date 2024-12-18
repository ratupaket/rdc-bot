let handler = async (m, { conn }) => {
    conn.tebakgombal = conn.tebakgombal ? conn.tebakgombal : {}
    let id = m.chat
    if (!(id in conn.tebakgombal)) throw false
    let json = conn.tebakgombal[id][1]
    let ans = json.jawaban
    let clue = ans.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + clue + '```')
}
handler.command = /^hgo$/i
handler.limit = true
export default handler