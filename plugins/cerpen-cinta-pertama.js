import { cerpen } from '../lib/others.js'

let handler = async(m, { conn, usedPrefix, command, text}) => {
let cerpe = await cerpen('cinta pertama')
await m.reply(`• *Title :* ${cerpe.title}\n• *Author :* ${cerpe.author}\n• *Category :* ${cerpe.kategori}\n *Pass Moderation :* ${cerpe.lolos}\n• *Story :*\n${cerpe.cerita}`)
}

handler.help = ['cerpencintapertama']
handler.tags = ['cerpen']
handler.command = /^(cerpencintapertama)$/i
handler.limit = true
handler.group = true
export default handler