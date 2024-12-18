import db from "../lib/database.js"

let handler = async(m, {conn, command, args, usedPrefix}) => {
  let user = db.data.users[m.sender]
  if(!user.kingdom) return m.reply("ga punya kerajaan")

  user.kingdom.lastsda ? true : db.data.users[m.sender].kingdom.lastsda = 0

  let __timers = (new Date - user.kingdom.lastsda)
  let _timers = (480000 - __timers)
  let timers = clockString(_timers)

  let r = (n, f = true) => Math[f ? "floor" : "ceil"](Math.random() * (n || 50000))
  let [ems, kyu, btu, bsi, mkn, kin, tup, lvp] = [r(), r(), r(), r(), r(5000), r(25), r(10), r(5, false)]

  let rply = "Maaf peletonmu tidak cukup"
  let khebis = `kamu sudah mengambil Sumber daya dan kamu tidak bisa mengambil nya lagi selama ${timers}`


  if(__timers > 480000) {
    if(user.kingdom.troops > 50) {
      setTimeout(() => {
        m.reply(`\n⚔️Peletonmu berkurang -${tup}\n\nSda yg kamu dapatkan♨️\n🏅Emas: ${ems}\n🌳Kayu: ${kyu}\n🪨Batu: ${btu}\n⛓️besi: ${bsi}\n🌮Makanan: ${mkn}\n💰Koin: ${kin}\n`)
      }, 480000)
      setTimeout(() => {
        m.reply(`Menemukan ${pickRandom(["Pertambangan", "Pertanian", "Perkebunan"])} dngn level ${lvp}`)
      }, 18000)
      setTimeout(() => {
        m.reply(`*Memulai Mencari Sumber daya♨️*\n\n*dan memakan waktu 8 menit*`)
      }, 0)
      user.kingdom.lastsda = new Date * 1
      user.kingdom.emas += ems
      user.kingdom.kayu += kyu
      user.kingdom.batu += btu
      user.kingdom.besi += bsi
      user.kingdom.makanan += mkn
      user.kingdom.koin += kin
      user.kingdom.exp += 10
      user.kingdom.troops -= tup
    } else m.reply(rply)
  } else m.reply(khebis)
}

handler.help = ["getsda"]

handler.command = /^getsda/i
handler.group = true
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(":")
}
