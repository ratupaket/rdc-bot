import fetch from 'node-fetch'
let handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
try {
  await m.reply('tunggu')
  let res = await (await fetch(`https://api.botcahx.eu.org/api/search/openai-chat?apikey=rdculous&text=${text}`)).json()
  await m.reply(res.message)
} catch (err) {
  throw eror
}
}
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['openai'];
handler.premium = false
export default handler