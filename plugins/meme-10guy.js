import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Textnya? contoh: .10guy jevin|bot'
  m.reply('Sedang membuat...')
  let res = `https://apimeme.com/meme?meme=10-Guy&top=${response[0]}&bottom=${response[1]}`
  conn.sendFile(m.chat, res, 'jevin.jpg', `Done`, m, false)
}
handler.tags = ['meme']
handler.help = ['10guy']
handler.command = /^(10guy)$/i
handler.limit = true
handler.group = true
export default handler