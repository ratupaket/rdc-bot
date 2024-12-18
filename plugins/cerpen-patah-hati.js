import { cerpen } from '../lib/others.js'

let handler = async(m, { conn, usedPrefix, command, text}) => {
let cerpe = await cerpen('patah hati')
await m.reply(`• *Title :* ${cerpe.title}\n• *Author :* ${cerpe.author}\n• *Category :* ${cerpe.kategori}\n *Pass Moderation :* ${cerpe.lolos}\n• *Story :*\n${cerpe.cerita}`)
}

handler.help = ['cerpenpatahhati']
handler.tags = ['cerpen']
handler.command = /^(cerpenpatahhati)$/i
handler.limit = true
handler.group = true
export default handler