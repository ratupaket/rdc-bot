import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw `Textnya? contoh: ${usedPrefix + command} jevin|bot`
  m.reply('Sedang membuat...')
  let res = `https://apimeme.com/meme?meme=Challenge-Accepted-Rage-Face&top=${response[0]}&bottom=${response[1]}`
  conn.sendFile(m.chat, res, 'jevin.jpg', `Done`, m, false)
}
handler.tags = ['meme']
handler.help = ['acceptrageface']
handler.command = /^(acceptrageface)$/i
handler.limit = true
handler.group = true
export default handler