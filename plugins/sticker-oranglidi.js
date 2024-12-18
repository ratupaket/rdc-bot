import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(oranglidi)}`), global.pauthor)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}
  handler.command = /^(oranglidi)$/i
  handler.tags = ['sticker']
  handler.help = ['oranglidi']
  handler.limit = true
  handler.group = true 
  
  export default handler
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
  global.oranglidi = [
"https://telegra.ph/file/f20c414413f84b3f8aca1.jpg",
"https://telegra.ph/file/5331c6e7af8dc3aff3614.jpg",
"https://telegra.ph/file/1ca70c48743d867b9a1d6.jpg",
"https://telegra.ph/file/87df0695a0bba7c7589bd.jpg",
"https://telegra.ph/file/e12f4e9f3451cea08879c.jpg",
"https://telegra.ph/file/f562600c162dfd920fefd.jpg",
"https://telegra.ph/file/430c36330b8756b2b9e51.jpg",
"https://telegra.ph/file/66187c5db725378e64854.jpg",
"https://telegra.ph/file/8d589fcb3c5ab1f932786.jpg",
"https://telegra.ph/file/c18ae59daa166a58e2147.jpg",
"https://telegra.ph/file/43a4246ee4478fcf4f267.jpg",
"https://telegra.ph/file/c37cc6514e60ab56bf865.jpg",
"https://telegra.ph/file/a21ed85ddb6e8fc5d63ce.jpg",
"https://telegra.ph/file/9ac3ad6abc56410d37222.jpg",
"https://telegra.ph/file/2f889de2005f5c2797d50.jpg",
"https://telegra.ph/file/8e22fb0561b1b53ae1b22.jpg",
"https://telegra.ph/file/b83b94d67924ecad82242.jpg",
"https://telegra.ph/file/a0911d5fe3c71ffeebac2.jpg",
"https://telegra.ph/file/d798a86434263e3e2f35f.jpg",
"https://telegra.ph/file/5a2c588c3f52db7c3ba55.jpg",
"https://telegra.ph/file/8193de3dcd401862858e9.jpg",
"https://telegra.ph/file/d46edcde5284cd9abd6a5.jpg",
"https://telegra.ph/file/fde13bb09ac1f94ac4f88.jpg",
"https://telegra.ph/file/654d4d4dc0058a3f0c0c8.jpg",
"https://telegra.ph/file/5ede254a56c2b40b9bb7f.jpg",
"https://telegra.ph/file/b3ef859a99171d9a8eb1f.jpg",
"https://telegra.ph/file/957290d9fa85ef2f3be1b.jpg",
"https://telegra.ph/file/01dbaab02cc3db048902b.jpg",
"https://telegra.ph/file/446f475d42d53c5312ffc.jpg",
"https://telegra.ph/file/cdd9511c8a71a14a040bd.jpg",
"https://telegra.ph/file/089cfa6a57f0efd4de57c.jpg",
"https://telegra.ph/file/30d79aa39d5ea2c29f97f.jpg",
"https://telegra.ph/file/1ade70fddc914c16710b1.jpg",
"https://telegra.ph/file/4f821c16695aa8b48bc57.jpg",
"https://telegra.ph/file/fa47ea64ab6f45d022ed9.jpg",
"https://telegra.ph/file/2d924e908ca048c1db0e5.jpg",
"https://telegra.ph/file/87bc61a31ea7092497ddf.jpg",
"https://telegra.ph/file/803229daed4f052de5b97.jpg",
"https://telegra.ph/file/b2132cffe8899fb6ff136.jpg",
"https://telegra.ph/file/ce00211c46d38e986e1fc.jpg",
"https://telegra.ph/file/403823e559ffe813dce9c.jpg",
"https://telegra.ph/file/94fa11fd6dcad4604d59c.jpg",
"https://telegra.ph/file/b53f306c3c7efd9b11da0.jpg",
"https://telegra.ph/file/898bf0f7e23052df40dc3.jpg",
"https://telegra.ph/file/199884de016df629e9520.jpg",
"https://telegra.ph/file/3cd6a874ad544b5b20a1c.jpg",
"https://telegra.ph/file/89e74c1bb81d21d66ddd5.jpg",
"https://telegra.ph/file/230465b121bc61bd3b1f9.jpg"
  ]