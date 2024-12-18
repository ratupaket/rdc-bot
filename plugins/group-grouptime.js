import moment from "moment-timezone"

const times = {
  h: 3600000,
  j: 3600000,
  m: 60000,
  s: 1000,
  d: 1000
}
const reg = /^([0-9]+)(h|j|m|s|d)$/i

let handler = async function(m, { conn, usedPrefix, command, args }) {
  args = args.filter(v => reg.test(v))
  if(!args.length) return m.reply(`
Deskripsi:
  Untuk menutup grup selama waktu tertentu lalu membukanya lagi

Format:
  h/j: jam
  m: menit
  s/d: detik

Penggunaan:
  ${usedPrefix}${command} durasi

Contoh:
  ${usedPrefix}${command} 1j, 4m, 5d
`)

  let ms = 0
  for(const _time of args) {
    const [, time, type] = reg.exec(_time)
    ms += times[type] * time
  }
  if(ms < times.m) return m.reply("Tidak bisa kurang dari satu menit!")

  const d = moment(new Date(Date.now() + ms)).tz("Asia/Jakarta").format("YYYY-MM-DD, HH:mm:ss")
  await conn.groupSettingUpdate(m.chat, "announcement")
  await m.reply(`Grup akan ditutup hingga ${d}`)
  setTimeout(async() => {
    await conn.groupSettingUpdate(m.chat, "not_announcement")
    await m.reply("Grup dibuka")
  }, ms)
}

handler.help = ["grouptime"]
handler.tags = ["group"]
handler.command = /^(grouptime)$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
