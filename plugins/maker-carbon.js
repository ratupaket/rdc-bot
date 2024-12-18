import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'teksnya'
  m.reply('proses...')
  let res = `https://api.lolhuman.xyz/api/carbon?apikey=jjevingeo&code=${response[0]}&language=python`
  conn.sendFile(m.chat, res, 'xynz.jpg', `Done`, m, false)
}
handler.help = ['carbon'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^carbon$/i
handler.limit = true
handler.group = true

export default handler