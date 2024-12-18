import fetch from 'node-fetch'
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
try {
  var apii = await fetch(`https://api.akuari.my.id/ai/gbard?chat=${text}`)
  var res = await apii.json()
  await m.reply(res.respon)
} catch (err) {
  console.error(err)
  throw "Terjadi kesalahan dalam menjawab pertanyaan"
}
}
handler.command = handler.help = ['bard','gbard'];
handler.tags = ['openai'];
handler.limit = true
handler.group = true
export default handler