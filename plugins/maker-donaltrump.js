import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'teksnya'
  m.reply('proses...')
  let res = `https://api.lolhuman.xyz/api/tweettrump?apikey=jjevingeo&text=${response[0]}`
  conn.sendFile(m.chat, res, 'xynz.jpg', `Done`, m, false)
}
handler.help = ['donaldtrumptweet'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(donaldtrumptweet|dtt)$/i
handler.limit = true
handler.group = true

export default handler