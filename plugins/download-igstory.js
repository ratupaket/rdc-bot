
import fg from 'api-dylux'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Masukkan usernamenya\nExample: *${usedPrefix + command}* jessnolimit`
  m.reply('tunggu sebentar')
  let res = await fg.igstory(args[0])
  for (let { url, type } of res.results) {
    conn.sendFile(m.chat, url, 'igstory.bin', `*${res.username}*`, m)
  }
}
handler.help = ['igstory']
handler.tags = ['downloader']
handler.command = ['igstory'] 
handler.limit = true
handler.premium = true 

export default handler