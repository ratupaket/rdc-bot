import db from "../lib/database.js"

let handler = async(m, { conn, args }) => {
  const user = db.data.users[m.sender]
  if(!user.kingdom) return m.reply("Kamu belum memiliki kerajaan!")

  const butuh = 1000
  let n = (args[0] && !isNaN(args[0]) ? Number(args[0]) : 1)
  if(n < 1) n = 1

  if(user.money < (butuh * n)) return m.reply(`Uang kamu tidak cukup untuk membeli ${n} pasukan seharga ${butuh * n} uang!`)
  if(user.kingdom.troops < 0) db.data.users[m.sender].kingdom.troops = 0

  db.data.users[m.sender].kingdom.troops += n
  db.data.users[m.sender].kingdom.exp += 10
  db.data.users[m.sender].money -= (butuh * n)

  m.reply(`Sukses membeli ${n} pasukan seharga *${(butuh * n).toLocaleString("id", { style: "currency", currency: "IDR" })}*`)
}

handler.help = ["buytroops", "belipasukan"].map(v => v + " <jumlah (def: 1)>")
handler.tags = ['rpg']
handler.command = ["buytroops", "belipasukan"]
handler.group = true

export default handler
