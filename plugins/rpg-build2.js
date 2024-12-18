import db from "../lib/database.js"

let handler = async(m, { conn, args, usedPrefix, command, isOwner }) => {
  const kingdom = db.data.users[m.sender].kingdom
  if(!kingdom) return m.reply("Kamu belum memiliki kerajaan!")

  // cek
  db.data.users[m.sender].kingdom.troopcamp = db.data.users[m.sender].kingdom.troopcamp || 0
  db.data.users[m.sender].kingdom.rumahsakit = db.data.users[m.sender].kingdom.rumahsakit || 0
  db.data.users[m.sender].kingdom.benteng = db.data.users[m.sender].kingdom.benteng || 0


  if(args[0] == "kamp" || args[0] == "camp") {
    const butuh = { kayu: 10 * db.data.users[m.sender].kingdom.troopcamp, batu: 15 * db.data.users[m.sender].kingdom.troopcamp, koin: 1500 }
    if(db.data.users[m.sender].kingdom.troopcamp == 3) return m.reply("kamp sudah mencapai lvl maksimal")
    if(db.data.users[m.sender].kingdom.kayu < butuh.kayu) return m.reply(`Kamu butuh ${String(butuh.kayu - db.data.users[m.sender].kingdom.kayu).padStart(2, "0")} kayu lagi!`)
    if(db.data.users[m.sender].kingdom.batu < butuh.batu) return m.reply(`Kamu butuh ${String(butuh.batu - db.data.users[m.sender].kingdom.batu).padStart(2, "0")} batu lagi!`)
    if(db.data.users[m.sender].kingdom.koin < butuh.koin) return m.reply(`Kamu butuh ${String(butuh.koin - db.data.users[m.sender].kingdom.koin).padStart(2, "0")} koin lagi!`)
    db.data.users[m.sender].kingdom.kayu -= butuh.kayu
    db.data.users[m.sender].kingdom.batu -= butuh.batu
    db.data.users[m.sender].kingdom.koin -= butuh.koin
    setTimeout(() => {
      db.data.users[m.sender].kingdom.troopcamp += 1
      m.reply("Selesai!")
      db.data.users[m.sender].kingdom.exp += 10
    }, (1000 * 3))
    m.reply("Silahkan tunggu...")
  } else if(args[0] == "rs" || args[0] == "hospital") {
    const butuh = { kayu: 15 * db.data.users[m.sender].kingdom.rumahsakit, batu: 20 * db.data.users[m.sender].kingdom.rumahsakit, koin: 1000 }
    if(db.data.users[m.sender].kingdom.rumahsakit == 3) return m.reply("Rumah sakit sudah mencapai lvl maksimal")
    if(db.data.users[m.sender].kingdom.kayu < butuh.kayu) return m.reply(`Kamu butuh ${String(butuh.kayu - db.data.users[m.sender].kingdom.kayu).padStart(2, "0")} kayu lagi!`)
    if(db.data.users[m.sender].kingdom.batu < butuh.batu) return m.reply(`Kamu butuh ${String(butuh.batu - db.data.users[m.sender].kingdom.batu).padStart(2, "0")} batu lagi!`)
    if(db.data.users[m.sender].kingdom.koin < butuh.koin) return m.reply(`Kamu butuh ${String(butuh.koin - db.data.users[m.sender].kingdom.koin).padStart(2, "0")} koin lagi!`)
    db.data.users[m.sender].kingdom.kayu -= butuh.kayu
    db.data.users[m.sender].kingdom.batu -= butuh.batu
    db.data.users[m.sender].kingdom.koin -= butuh.koin
    setTimeout(() => {
      db.data.users[m.sender].kingdom.rumahsakit += 1
      m.reply("Selesai!")
      db.data.users[m.sender].kingdom.exp += 10
    }, (1000 * 3))
    m.reply("Silahkan tunggu...")
  } else if(args[0] == "benteng" || args[0] == "fortress") {
    const butuh = { kayu: 20 * db.data.users[m.sender].kingdom.benteng, batu: 25 * db.data.users[m.sender].kingdom.benteng, koin: 2000 }
    if(db.data.users[m.sender].kingdom. benteng== 3) return m.reply("Benteng sudah mencapai lvl maksimal")
    if(db.data.users[m.sender].kingdom.kayu < butuh.kayu) return m.reply(`Kamu butuh ${String(butuh.kayu - db.data.users[m.sender].kingdom.kayu).padStart(2, "0")} kayu lagi!`)
    if(db.data.users[m.sender].kingdom.batu < butuh.batu) return m.reply(`Kamu butuh ${String(butuh.batu - db.data.users[m.sender].kingdom.batu).padStart(2, "0")} batu lagi!`)
    if(db.data.users[m.sender].kingdom.koin < butuh.koin) return m.reply(`Kamu butuh ${String(butuh.koin - db.data.users[m.sender].kingdom.koin).padStart(2, "0")} koin lagi!`)
    db.data.users[m.sender].kingdom.kayu -= butuh.kayu
    db.data.users[m.sender].kingdom.batu -= butuh.batu
    db.data.users[m.sender].kingdom.koin -= butuh.koin
    setTimeout(() => {
      db.data.users[m.sender].kingdom.benteng += 1
      m.reply("Selesai!")
      db.data.users[m.sender].kingdom.exp += 10
    }, (1000 * 3))
    m.reply("Silahkan tunggu...")
  } else m.reply(`\n${args[0] ? "\"" + args[0] + "\" tidak tersedia!\n\n" : ""}Daftar bangunan yang tersedia :\n01. kamp || camp\n02. rs || hospital\n03. benteng || fortress\n`)
}

handler.help = ["bangun"]
handler.tags = ["rpg"]

handler.command = /^(bangun)$/i
handler.group = true

export default handler
