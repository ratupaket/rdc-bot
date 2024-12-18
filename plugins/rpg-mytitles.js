import db from "../lib/database.js"
let handler = async function(m, { conn, args }) {
  if(!db.data.users[m.sender].titles) db.data.users[m.sender].titles = []

  const { titles } = db.data.users[m.sender]
  let str = `*[ My Title(s) ]*

Total: ${titles.length}

`
  let a = []
  for(let i of titles) {
    if(!a.find(v => v[0] == i)) a.push([i, 0])
    a.find(v => v[0] == i)[1]++
  }
  a.sort(([, a],[, b]) => b - a)
  for(let [t, c] of a) {
    str += `${t} ×${c}\n`
  }
  await m.reply(str)
}

handler.help = ["mytitles", "mytitle"]
handler.tags = ["rpg"]

handler.registered = true
handler.group = true

handler.command = /^mytitles?$/i

export default handler
