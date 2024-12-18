import db from "../lib/database.js"

const s = ms => new Promise(res => setTimeout(res, ms))

const harga = 1_000_000       // 1jt
const gaji = 500_000          // 500k
const cooldown = 1000*60*60*5 // 5j
const _lokasi = [
  "rumahnya",
  "isekai",
  "Indomaret",
  "Alfamart",
  "Konohagakure",
  "Kirigakure",
  "tempat angker",
  "kuburan sekitar"
]
const _gagal = [
  "ban motor kempes",
  "bensin habis",
  "motor mogok",
  "penumpang jatuh di jalan",
  "penumpang menghilang"
]
const _denda = [
  1000,
  2000,
  3000,
  4000,
  5000,
  6000,
  7000,
  8000,
  9000,
  10000,
  20000,
  30000,
  50000,
  100000
]

let handler = async function(m, { conn, usedPrefix, command }) {
  conn.ngojek = conn.ngojek || {}
  const user = db.data.users[m.sender]
  if(command === "ngojek") {
    if(!user.motor) return await m.reply(`Kamu belum memiliki motor! beli motor dengan menggunakan perintah berikut: *${usedPrefix}belimotor*`)
    if(m.sender in conn.ngojek) return await m.reply("Kamu masih ngojek! mohon tunggu sampai selesai")
    if(Date.now() - user.lastngojek < cooldown) return await m.reply(`Mohon tunggu selama *${cooldowns(user)}*`)

    const lokasi = _lokasi[Math.floor(Math.random() * _lokasi.length)]
    const gagal = _gagal[Math.floor(Math.random() * _gagal.length)]
    const denda = _denda[Math.floor(Math.random() * _denda.length)]
    const success = Math.floor(Math.random() * 1024) % 2 === 0

    conn.ngojek[m.sender] = true
    await m.reply("Sedang menunggu penumpang di pangkalan...")
    await s(5000)
    await m.reply(`Mengantarkan penumpang ke ${lokasi}`)
    await s(3000)
    if(success) {
      await m.reply(`Berhasil mengantar sampai tujuan, kamu mendapatkan gaji sebesar *Rp ${gaji.toLocaleString("id")}*`)
      user.money += gaji
    } else {
      await m.reply(`Gagal mengantarkan penumpang karena ${gagal}, kamu membayar denda sebesar *Rp ${denda.toLocaleString("id")}*`)
      user.money -= denda
    }
    delete conn.ngojek[m.sender]
    user.lastngojek = Date.now()
  } else {
    if(user.motor) return await m.reply("Kamu sudah memiliki motor!")
    if(user.money < harga) return await m.reply(`Uang kamu kurang! kamu membutuhkan *Rp ${(harga - user.money).toLocaleString("id")}*`)

    user.money -= harga
    user.motor = true
    await m.reply(`Sukses membeli motor seharga *Rp ${harga.toLocaleString("id")}*`)
  }
}

handler.help = ["ngojek", "belimotor"]
handler.tags = ["rpg"]
handler.command = /^(ngojek|belimotor)$/i
handler.group = true
handler.limit = true

export default handler


function cooldowns(user) {
  const ms = cooldown - (Date.now() - user.lastngojek)
  const hh = Math.floor(ms / 3600000)
  const mm = Math.floor(ms / 60000) % 60
  const ss = Math.floor(ms / 1000) % 60
  return [hh, mm, ss].map(v => (""+v).padStart(2, "0")).join(":")
}