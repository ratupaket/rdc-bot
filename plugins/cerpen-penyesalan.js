import {cerpen} from '../lib/others.js'

let handler = async(m, { conn, usedPrefix, command, text}) => {
let cerpe = await cerpen('penyesalan')
await m.reply(`• *Title :* ${cerpe.title}\n• *Author :* ${cerpe.author}\n• *Category :* ${cerpe.kategori}\n *Pass Moderation :* ${cerpe.lolos}\n• *Story :*\n${cerpe.cerita}`)
}

handler.help = ['cerpenpenyesalan']
handler.tags = ['cerpen']
handler.command = /^(cerpenpenyesalan)$/i
handler.group = true
export default handler