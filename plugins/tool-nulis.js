import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Mau Nulis Apa?'
  m.reply('Proses...')
  let res = `https://api.lolhuman.xyz/api/nulis?apikey=GataDiosV3&text=${response[0]}`
  conn.sendFile(m.chat, res, 'xynz.jpg', `Done`, m, false)
}
handler.help = ['nulis'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^(n|nulis)$/i
handler.limit = true

export default handler