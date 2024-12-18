import fetch from 'node-fetch'
import fs from 'fs'

let toM = a => '@' + a.split('@')[0]
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
    
if (command == 'siapakah') {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    m.reply(`*Pertanyaan:* ${command} ${text}?
*Jawaban:* ${toM(a)}`, null, {
        mentions: [a]
    })
}}

handler.command = handler.help = ['siapakah']
handler.tags = ['kerang']
handler.group = true

export default handler