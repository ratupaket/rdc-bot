let handler = async (m, { conn }) => {
    m.reply('Bot online harap tidak spam')
}
handler.customPrefix = /^(bot)$/i
handler.command = new RegExp

export default handler