import db from "../lib/database.js"

let handler = async(m, { conn, args, command }) => {
  if(command == "pointxp" && args[0] == "buy") {
    let amount = args[1]*1
    if(isNaN(amount) || amount < 1) amount = 1

    let user = db.data.users[m.sender]
    let need = 500
    let total = need * amount

    if(user.money < total) return m.reply(`You need *${formatMoney("IDR", total)}*`)

    user.pointxp += amount
    user.money -= total

    m.reply(`Successfully bought ${amount} pointxp for *${formatMoney("IDR", total)}*`)

    return
  }
  if(command == "pointxp") return

  if(!args[0] || !args[1]) return m.reply("pake gini .exchange type jumlah")
  if(isNaN(args[1])) return m.reply("Pake angka")
  if(args[1] < 1) args[1] = 1

  let human = ["strength", "mana", "stamina", "agility", "intelligence"]
  let hum = args[0].toLowerCase()

  if(!human.includes(hum)) return m.reply(`
List exchange point xp
${human.map(hum => "› " + hum).join("\n")}`)

  let user = db.data.users[m.sender]
  if(user.pointxp < args[1]*1) return m.reply(`your point xp not enough`)
  if(!user[hum]) user[hum] = 0
  user[hum] += args[1]*1
  user.pointxp -= args[1]*1

  m.reply(`Now Your ${hum} is ${user[hum]}!`)
}
handler.help = ["exchange <type> <jumlah>", "pointxp"]
handler.tags = ["rpg"]
handler.command = /^(exchange(point)?|pointxp)$/i
handler.group = true

export default handler


function formatMoney(currency = "IDR", amount = 1000) {
  return amount.toLocaleString("id", {
    style: "currency",
    currency
  }).split(",")[0]
}