import { cerpen } from '../lib/others.js'

let handler = async(m, { conn, usedPrefix, command, text}) => {
let cerpe = await cerpen('kehidupan')
await m.reply(`• *Title :* ${cerpe.title}\n• *Author :* ${cerpe.author}\n• *Category :* ${cerpe.kategori}\n *Pass Moderation :* ${cerpe.lolos}\n• *Story :*\n${cerpe.cerita}`)
}

handler.help = ['cerpenkehidupan']
handler.tags = ['cerpen']
handler.command = /^(cerpenkehidupan)$/i
handler.limit = true
handler.group = true
export default handler