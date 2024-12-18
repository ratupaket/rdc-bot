import fetch from 'node-fetch'

var handler = async (m, {

 text, 

 usedPrefix, 

 command

 }) => {

if (!text) throw 'Masukkan Query Link!'

 

let anu = await fetch(`https://api.botcahx.eu.org/api/download/xnxxdl?url=${text}&apikey=rdculous`)

let hasil = await anu.json() 

conn.sendMessage(m.chat, { video: { url: hasil.result.url }, fileName: 'xnxx.mp4', mimetype: 'video/mp4' }, { quoted: m })

  }                                                    

handler.command = handler.help = ['xnxxdown'];

handler.tags = ['internet'];
handler.premium = true

export default handler