import { areJidsSameUser } from '@whiskeysockets/baileys'

let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined'
    if (!('participants' in groupMetadata)) throw 'participants is not defined'
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw 'Bot tidak ada di group'
    if (!me.admin) throw 'Bot tidak admin'
    let urls = "https://chat.whatsapp.com/"
        let caption = `
${urls}${await conn.groupInviteCode(group)}
`.trim()
    await conn.reply(m.chat, caption, m)
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.group = true
handler.admin = true

export default handler