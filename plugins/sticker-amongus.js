import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Textnya? contoh: .amongus jevin'
  m.reply('Sedang membuat...')
  let res = `https://api.lolhuman.xyz/api/amongus?apikey=jjevingeo&text=${response[0]}`
  conn.sendFile(m.chat, res, 'jevin.jpg', `Done`, m, false)
}
handler.help = ['amongus'].map(v => v + ' <text>')
handler.tags = ['sticker']
handler.command = /^amongus$/i
handler.group = true

export default handler