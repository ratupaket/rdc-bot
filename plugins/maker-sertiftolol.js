import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Namanya'
  m.reply('Proses...')
  let res = `https://api.lolhuman.xyz/api/toloserti?apikey=jjevingeo&name=${response[0]}`
  conn.sendFile(m.chat, res, 'sadboy.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['sertiftolol'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^sertiftolol$/i
handler.premium = true

export default handler