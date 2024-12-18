import fetch from "node-fetch"

let handler = async function(m, { conn, text }) {
  if(!text) return m.reply("Masukkan query!")

  const res = await fetch(`https://api.zahwazein.xyz/entertainment/kuncitts?apikey=zenzkey_16425a3569&query=${encodeURIComponent(text)}`)
  if(!res.ok) throw await res.text()

  const json = await res.json()
  if(!json.result) throw json

  const { result } = json
  if(!result.jawaban) return m.reply("Jawaban tidak ditemukan!")

  let str = `*Pertanyaan:* ${result.pertanyaan}
*Jawaban:* ${result.jawaban[0] + result.jawaban.slice(1).toLowerCase()}`
  if(result.lainnya?.length) {
    str += "\n*Jawaban lain:*\n"
    str += result.lainnya.map(v => `  - ${v[0] + v.slice(1).toLowerCase()}`).join("\n")
  }
  await m.reply(str)
}

handler.help = ["kuncitts <query>"]
handler.tags = ["internet"]

handler.command = /^kuncitts$/i
handler.group = true

export default handler
