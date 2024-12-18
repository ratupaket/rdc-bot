import db from '../lib/database.js'
const moneyplus = 1
let handler = async (m, { conn, command, args }) => {
   let user = db.data.users[m.sender]
  let count = command.replace(/^atm/i, '')
  count = count ? /all/i.test(count) ? Math.floor(user.money / moneyplus) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.money >= moneyplus * count) {
    user.money -= moneyplus * count
    user.atm += count
    conn.reply(m.chat, `-${moneyplus * count} Money\n+ ${count} ATM`, m)
  } else conn.reply(m.chat, `Money tidak mencukupi untuk menabung ${count} ATM`, m)
}
handler.help = ['atm <jumlah>', 'atmall']
handler.tags = ['rpg']
handler.command = /^atm([0-9]+)|atm|atmall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

export default handler