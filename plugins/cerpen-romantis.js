import {cerpen} from '../lib/others.js'

let handler = async(m, { conn, usedPrefix, command, text}) => {
let cerpe = await cerpen('romantis')
await m.reply(`• *Title :* ${cerpe.title}\n• *Author :* ${cerpe.author}\n• *Category :* ${cerpe.kategori}\n *Pass Moderation :* ${cerpe.lolos}\n• *Story :*\n${cerpe.cerita}`)
}

handler.help = ['cerpenromantis']
handler.tags = ['cerpen']
handler.command = /^(cerpenromantis)$/i
handler.group = true
export default handler