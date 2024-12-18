import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  
let res = await fetch('https://api.lolhuman.xyz/api/ceritahoror?apikey=jjevingeo')
    let json = await res.json()
    
    await m.reply(`tunggu...`)
await conn.sendFile(m.chat, json.result.thumbnail, null, `Judul: ${json.result.title}

Desc: ${json.result.desc}
Cerita: ${json.result.story}`, m)
 //   await conn.sendButtonImg(m.chat, json.result.thumbnail, txt, wm, `Again`, `.ceritahoror`, m)
}
handler.help = ['ceritahoror']
handler.tags = ['internet']
handler.command = /^ceritahoror$/i
handler.limit = true
handler.group = true


export default handler