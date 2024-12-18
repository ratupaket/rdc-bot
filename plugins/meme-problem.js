import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Textnya? contoh: .problem jevin|bot'
  m.reply('Sedang membuat...')
  let res = `https://apimeme.com/meme?meme=1990s-First-World-Problems&top=${response[0]}&bottom=${response[1]}`
  conn.sendFile(m.chat, res, 'jevin.jpg', `Done`, m, false)
}
handler.tags = ['meme']
handler.help = ['problem']
handler.command = /^(problem)$/i
handler.limit = true
handler.group = true
export default handler