import db from "../lib/database.js"

const tf = [
  [
    "troops",
    "pasukan"
  ]
]

let handler = async(m, { conn, usedPrefix, command, args, isROwner }) => {
  if(!db.data.users[m.sender].kingdom) return m.reply(`Anda belum memiliki kerajaan!\nBuat kerajaan menggunakan perintah\n\n${usedPrefix}buatkerajaan nama_raja|nama_kerajaan|(opsional)@aliansi`)

  const type = args[0]
  const value1 = args[1]
  const value2 = args[2]
  const value3 = args[3]
  const value4 = args[4]

  const kingdom = db.data.users[m.sender].kingdom
  const alliance = kingdom.aliance
  if(type == "aliansi" || type == "alliance") {
    if(value1 == "accept" || value1 == "terima") {
      const accept = conn.parseMention(value2)[0]
      if(!accept) return m.reply("Tag seseorang!")
      if(!db.data.users[accept]?.kingdom) return m.reply("Dia tidak memiliki kerajaan!")
      if(!db.data.users[accept].kingdom.aliance.some(v => v.jid == m.sender)) return m.reply("Dia tidak mengundangmu ke dalam aliansi!")
      if(alliance.some(v => v.jid == accept)) return m.reply("Anda sudah beraliansi dengannya.")

      const dia = db.data.users[accept].kingdom.aliance
      alliance.push({ jid: accept, pending: false })
      dia.find(v => v.jid == m.sender).pending = false
      m.reply(`@${m.sender.split("@")[0]} Menerima permintaan aliansi Anda`, accept, { mentions: [m.sender] })
      return m.reply("Sukses!")
    } else if(value1 == "reject" || value1 == "tolak") {
      const reject = conn.parseMention(value2)[0]
      if(!reject) return m.reply("Tag seseorang!")
      if(!db.data.users[reject]?.kingdom) return m.reply("Dia tidak memiliki kerajaan!")
      if(!db.data.users[reject].kingdom.aliance.some(v => v.jid == m.sender)) return m.reply("Dia tidak mengundangmu ke dalam aliansi!")
      if(alliance.some(v => v.jid == reject)) return m.reply("Anda sudah beraliansi dengannya.")

      const dia = db.data.users[reject].kingdom.aliance
      db.data.users[reject].kingdom.aliance = dia.filter(v => v.jid != m.sender)
      m.reply(`@${m.sender.split("@")[0]} Menolak permintaan aliansi Anda`, reject, { mentions: [m.sender] })
      return m.reply("Sukses!")
    } else if(value1 == "add" || value1 == "tambah") {
      const add = conn.parseMention(value2)[0]
      if(!add) return m.reply("Tag seseorang!")
      if(!db.data.users[add]?.kingdom) return m.reply("Dia tidak memiliki kerajaan!")
      if(alliance.some(v => v.jid == add)) return m.reply("Anda sudah beraliansi dengannya.")

      const dia = db.data.users[add].kingdom.aliance
      if(dia.some(v => v.jid == m.sender && v.pending == true)) return m.reply(`Gunakan *${usedPrefix}${command} terima @${add.split("@")[0]}* untuk menerima permintaan aliansi`)
      conn.sendMessage(add, { text: `${conn.getName(m.sender)} mengundang Anda untuk menjadi aliansi di kerajaannya\nApakah Anda menerimanya?\n\nTerima => .kerajaan aliansi terima @${m.sender.split("@")[0]}\nTolak => .kerajaan aliansi tolak @${m.sender.split("@")[0]}` }, { quoted: m })
      alliance.push({ jid: add, pending: true })
      return m.reply("Menunggu konfirmasi")
    } else if(value1 == "remove" || value1 == "hapus") {
      const remove = conn.parseMention(value2)[0]
      if(!remove) return m.reply("Tag seseorang!")
      if(!db.data.users[remove]?.kingdom) return m.reply("Dia tidak memiliki kerajaan!")
      if(!alliance.some(v => v.jid == remove)) return m.reply("Anda tidak beraliansi dengannya.")

      const dia = db.data.users[remove].kingdom.aliance
      if(alliance.some(v => v.jid == remove && v.pending == true)) m.reply(`@${m.sender.split("@")[0]} membatalkan permintaan aliansi`, remove, { mentions: [m.sender] })
      db.data.users[m.sender].kingdom.aliance = alliance.filter(v => v.jid != remove)
      db.data.users[remove].kingdom.aliance = dia.filter(v => v.jid != m.sender)
      return m.reply("Sukses!")
    } else if(value1 == "transfer" || value1 == "tf") {
      if(tf.some(v => v.includes(value2))) {
        value2 = tf.find(v => v.includes(value2))[0]
        value3 = parseInt(value3)
        value4 = conn.parseMention(value4)[0]
        if(isNaN(value3) || value3 < 1) value3 = 1
        if(!value4) return m.reply("Tag seseorang!")
        if(!db.data.users[value4]) return m.reply("Dia tidak terdaftar di database bot!")
        if(kingdom[value2] < value3) return m.reply(`${value2} kamu kurang ${value3 - kingdom[value2]}`)

        const dia = db.data.users[value4].kingdom
        if(!alliance.some(v => v.jid == value4)) return m.reply("Anda tidak beraliansi dengannya.")
        if(!dia) return m.reply("Dia tidak memiliki kerajaan!")
        if(dia[value2] < 0) dia[value2] = 0

        kingdom[value2] -= value3
        dia[value2] += value3

        m.reply(`@${m.sender.split("@")[0]} mentransfer *${value3} ${value2}* ke kerajaan`, value4, {
          mentions: [m.sender]
        })
        m.reply("Sukses!")
      } else {
        m.reply(`
${value2 ? "Maaf, " + value2 + " tidak tersedia\n\n" : ""}Tersedia :
${tf.map(v => "  " + v.join(" | ")).join("\n")}
`.trim())
      }
    } else {
      m.reply(`
${value1 ? "Maaf, " + value1 + " tidak tersedia\n\n" : ""}Tersedia :
  terima | accept
  tolak | reject
  tambah | add
  hapus | remove
  transfer | tf
`.trim())
      return false
    }
  } else if(type == "jual" || type == "sell") {
    if(value1 == "pasukan" || value1 == "troops") {
      const sell = parseInt(value2) || 1
      if(isNaN(sell) || sell < 1) sell = 1

      const troops = kingdom.troops
      if(troops < sell) return m.reply("Pasukanmu tidak cukup!")

      const price = 800
      const total = price * sell

      kingdom.troops -= sell
      db.data.users[m.sender].money += total
      return m.reply(`Berhasil menjual ${sell} seharga *${formatMoney("IDR", total)}*`)
    } else {
      m.reply(`
${value1 ? "Maaf, " + value1 + " tidak tersedia\n\n" : ""}Tersedia :
  pasukan | troops
`.trim())
      return false
    }
  } else {
    m.reply(`
${type ? "Maaf, " + type + " tidak tersedia\n\n" : ""}Tersedia :
  aliansi | alliance
  jual | sell
`.trim())
    return false
  }
}

handler.help = ["kingdom", "kerajaan"]
handler.tags = ["rpg"]

handler.command = /^(k(erajaan|ingdom))$/i
handler.group = true

export default handler


const formatMoney = function(currency = "IDR", amount = 1000) {
  return amount.toLocaleString("id", {
    style: "currency",
    currency
  }).split(",")[0]
}
