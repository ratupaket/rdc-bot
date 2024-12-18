import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw(`Input Text Dan Karakter!\nExample: ${usedPrefix + command} hai Kirito|kamu sedang apa?`)    
  try {
    let [ logic, prompt ] = text.split('|')
    m.reply(`Tunggu sebentar...`)
    let res = await fetch(`https://api.botcahx.eu.org/api/search/c-ai?prompt=${prompt}?&char=${logic}&apikey=rdculous`)
    let json = await res.json()
    m.reply(json.message)
  } catch (error) {
    console.error(error)
    m.reply('Terjadi kesalahan saat menjalankan perintah.')
  }
}

handler.command = handler.help = ['c-ai','character-ai']
handler.tags = ['openai']
handler.owner = false
handler.limit = true
handler.group = true
handler.private = false

export default handler