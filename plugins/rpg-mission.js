import db from "../lib/database.js"
import fs from "fs"
const misi = JSON.parse(fs.readFileSync("./data/misi.json"))

async function handler(m, { conn, usedPrefix }) {
  conn.mission = conn.mission || {}
  if(m.sender in conn.mission) return m.reply("Kamu masih melakukan misi, tunggu sampai selesai!!")

  try {
    const json = misi[Math.floor(Math.random() * misi.length)]
    const cooldown = 3 * (1000 * 60)
    const user = db.data.users[m.sender]
    if(user.health < 100 || user.stamina < 100 || user.mana < 100) return m.reply(`${user.health < 100 ? "Nyawa" : user.stamina < 100 ? "Stamina" : "Mana"}mu dibawah 100, isi ulang ${user.health < 100 ? "health" : user.stamina < 100 ? "stamina" : "mana"}mu dengan command *${user.health < 100 ? usedPrefix + "heal" : user.stamina < 100 ? usedPrefix + "exchange stamina " + (100 - user.stamina) : usedPrefix + "exchange mana " + (100 - user.mana)}*`)

    if(typeof user.lastmisi != "number") user.lastmisi = 0
    if(typeof user.exp != "number") user.exp = 0
    if(typeof user.crystal != "number") user.crystal = 0

    const timers = (cooldown - (Date.now() - user.lastmisi))
    if(Date.now() - user.lastmisi < cooldown) return m.reply(`Silahkan tunggu *🕐${clockString(timers)}*`)
    if(!user.skill) return m.reply(`Anda belum mempunyai skill, pilih skill pakai perintah *${usedPrefix}selectskill*`)

    if(!(m.sender in conn.mission)) {
      conn.mission[m.sender] = {
        sender: m.sender,
        timeout: setTimeout(async() => {
          await m.reply("Waktu habis");
          delete conn.mission[m.sender]
        }, 60000),
        json
      }

      const be = user.skill == "thief" ? Math.ceil(Math.random() * 500) : 0
      const bc = user.skill == "thief" ? Math.ceil(Math.random() * 50) : 0
      const bg = user.skill == "thief" ? Math.ceil(Math.random() * 10) : 0
      json.exp += be
      json.crystal += bc
      if(json.gems) json.gems += bg
      conn.mission[m.sender].json = json
      const caption = `*A MISSION HAS BEEN GIVEN TO THE HUNTER!*
*🥇 RANK:* ${json.rank}
*📰 MISI:* ${json.misii}
*🎁 GIFT:* Exp ${json.exp}${json.gems ? ", " : " & "}Crystal ${json.crystal}${json.gems ? ` & Gems ${json.gems}` : ""}
${json.title ? "*🔖 TITLE:* " + json.title : "\n"}

select option
- Accept
- Cancel
`
      return m.reply(caption)
    }
  } catch(e) {
    console.error(e)
    if(m.sender in conn.mission) {
      const { timeout } = conn.mission[m.sender]
      clearTimeout(timeout)
      delete conn.mission[m.sender]
      await m.reply("Rejected (error)")
    }
  }
}

handler.before = async(m) => {
  conn.mission = conn.mission ? conn.mission : {}
  if(!(m.sender in conn.mission)) return
  if(m.isBaileys) return

  const { timeout, json } = conn.mission[m.sender]
  const cooldown = 3 * (1000 * 60)
  const user = db.data.users[m.sender]

  const txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText : m.text ? m.text : "").toLowerCase()
  if(!/^(accept|a|gas|y|cancel|c|n|g)$/i.test(txt)) return
  if(conn.mission[m.sender].confirm) return m.reply("Kamu sedang menjalankan misi, tunggu sampai selesai!")

  conn.mission[m.sender].confirm = true
  if(typeof user.lastmisi != "number") user.lastmisi = 0
  if(typeof user.exp != "number") user.exp = 0
  if(typeof user.crystal != "number") user.crystal = 0

  const timers = (cooldown - (Date.now() - user.lastmisi))
  if(Date.now() - user.lastmisi <= cooldown) return m.reply(`Silahkan tunggu *🕐${clockString(timers)}*`)

  let _bot = 150
  let _usr = 150
  if(user.skill === "archer") {
    _usr = addPercent(_usr, 10)
    _bot = subtractPercent(_usr, 13)
  } else if(user.skill === "thief") {
    _usr = addPercent(_usr, 5)
    _bot = subtractPercent(_usr, 3)
  } if(user.skill === "magicswordmaster") {
    _usr = addPercent(_usr, 19)
    _bot = subtractPercent(_usr, 15)
  } else if(user.skill === "necromancer") {
    _usr = addPercent(_usr, 15)
    _bot = subtractPercent(_usr, 18)
  } else if(user.skill === "shadow") {
    _usr = addPercent(_usr, 18)
    _bot = subtractPercent(_usr, 10)
  } else if(user.skill === "swordmaster") {
    _usr = addPercent(_usr, 7)
    _bot = subtractPercent(_usr, 17)
  } else if(user.skill === "witch") {
    _usr = addPercent(_usr, 14)
    _bot = subtractPercent(_usr, 20)
  }
  const bot = Math.ceil(Math.random() * _bot)
  const usr = Math.ceil(Math.random() * _usr)
  const aud = ["kamu terjebak dalam perangkap musuh", "kamu diserang musuh", "kamu pingsan", "stamina habis", "kamu dikeroyok musuh"]
  const aui = aud[Math.floor(Math.random() * aud.length)]

  try {
    if(/^(accept|a|gas|y)$/i.test(txt)) {
      if(usr >= bot) {
        const cpt = `Berhasil Menyelesaikan 📰misi ${json.misii}`
        if(json.title) await m.reply("You got a title " + json.title)
        await m.reply(cpt)
        user.exp += json.exp
        user.crystal += json.crystal
        user.gems += json.gems || 0
        if(!user.titles) user.titles = []
        user.titles.push(json.title)
        user.misi = json.misii
      } else {
        const flr = `Gagal menyelesaikan 📰Misi *${json.misii}* dikarenakan ${aui} `
        await m.reply(flr)
      }
      user.lastmisi = Date.now()
      user.healt -= json.healt || 0
      user.stamina -= json.stamina || 0
      user.mana -= json.mana || 0
      clearTimeout(timeout)
      delete conn.mission[m.sender]
      return !0
    } else if(/^(cancel|c|n|g)$/i.test(txt)) {
      clearTimeout(timeout)
      delete conn.mission[m.sender]
      m.reply("Canceled")
      return !0
    }
  } catch(e) {
    clearTimeout(timeout)
    delete conn.mission[m.sender]

    m.reply("Error saat pengambilan misi (Rejected)")
    console.log("\n".repeat(3))
    console.log(e.stack)
    return !0
  } finally {
    clearTimeout(timeout)
    delete conn.mission[m.sender]
    return !0
  }
}

handler.help = ["mission"]
handler.tags = ["rpg"]
handler.command = /^(m(isi|ission))$/i
handler.group = true

export default handler


/**
 * Detect if thats number
 * @param {Number} x
 * @returns Boolean
 */
function number(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == "number"
}

/**
 * Random pick from Array
 * @param {Array} list
 * @returns Any
 */
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

/**
 * Convert milliseconds to clock string
 * @param {Number} ms
 * @returns String
 */
 function clockString(ms) {
  const h = Math.floor(ms / 3600000)
  const m = Math.floor(ms / 60000) % 60
  const s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(":")
}

/**
 * Add x percent
 * @param {Number} x
 * @param {Number} percent
 * @returns {Number}
 */
const addPercent = (x, percent) => x + (x * (percent / 100))

/**
 * Subtract x percent
 * @param {Number} x
 * @param {Number} percent
 * @returns {Number}
 */
const subtractPercent = (x, percent) => x - (x * (percent / 100))

/**
 * Multiply x percent
 * @param {Number} x
 * @param {Number} percent
 * @returns {Number}
 */
const multiplyPercent = (x, percent) => x * (percent / 100)

/**
 * Divide x percent
 * @param {Number} x
 * @param {Number} percent
 * @returns {Number}
 */
const dividePercent = (x, percent) => x / (percent / 100)
