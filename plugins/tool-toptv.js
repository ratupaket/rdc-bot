import { generateWAMessageContent } from "@whiskeysockets/baileys"

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/webp|video|gif|viewOnce/g.test(mime)) return m.reply(`Reply Video Dengan Caption\n\n${usedPrefix + command}`)
    let media = await await q.download?.()

    try {
        let msg = await generateWAMessageContent({
            video: media
        }, {
            upload: conn.waUploadToServer
        })
        await conn.relayMessage(m.chat, {
            ptvMessage: msg.videoMessage
        }, {
            quoted: m
        })
    } catch (e) {
        try {
            let dataVideo = {
                ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
            }
            await conn.relayMessage(m.chat, dataVideo, {})
        } catch (e) {
            await m.reply('fitur sedang error')
        }
    }
}

handler.help = ['toptv']
handler.tags = ['tools']
handler.command = /^(toptv)/i
handler.group = true

export default handler