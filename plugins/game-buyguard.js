import db from '../lib/database.js'
let handler = async (m, { conn, usedPrefix, command, args }) => {
  try {
    let user = db.data.users[m.sender]
    let maximum = 10000
    if(command == "buy" && user.limit >= maximum) return m.reply(`Kamu tidak bisa membeli limit lagi karena telah mencapai jumlah batas maximum.`)
    if(command == "buyguard" && user.guard >= maximum) return m.reply(`Kamu tidak bisa membeli guard lagi karena telah mencapai jumlah batas maximum.`)
    if(isNaN(args[0])) return m.reply(`Contoh:\n${usedPrefix}${command} 1`)
    if(args[0] < 1) return m.reply(`Contoh:\n${usedPrefix}${command} 1`)
    let price = 5000
    if(user.money >= price * parseInt(args[0])) {
      if((user.guard + parseInt(args[0])) > maximum) return m.reply(`[${user.guard}/${maximum}] Jumlah guard yang kamu beli melebihi batas maximum.`)
      user.money -= price * parseInt(args[0])
      user.guard += parseInt(args[0])
      return m.reply(`Kamu telah membeli *${args[0]}* guard seharga *${(price * args[0])}* rupiah.`)
    } else {
      m.reply(`Uang yang kamu miliki tidak mencukupi untuk membeli ${args[0]} guard`)
    }
  } catch (e) {
    m.reply(require("util").format(e))
  }
}
handler.help = ["buyguard"]
handler.tags = ["game"]
handler.command = /^buyguard$/i
export default handler
