import db from "../lib/database.js"

const rand = x => x[Math.floor(Math.random() * x.length)]
const randInt = (x, y) => {
  if(x < 1) x = 1

  let o = 0
  while(o < x) o = Math.ceil(Math.random() * y)
  return o
}

const timeout = 60000
let handler = async function(m, { conn }) {
  conn.letter ??= {}
  if(m.chat in conn.letter) return conn.letter[m.chat].msg.reply("Selesaikan dulu pertanyaan ini!")

  const obj = rand([
    {
      q: "O",
      o: "Q"
    },
    {
      q: "N",
      o: "M"
    },
    {
      q: "V",
      o: "U"
    },
    {
      q: "E",
      o: "F"
    },
    {
      q: "S",
      o: "5"
    },
    {
      q: "l",
      o: "1"
    },
    {
      q: "B",
      o: "R"
    },
    {
      q: "T",
      o: "7"
    },
    {
      q: "I",
      o: "H"
    }
  ])

  const q = obj.q.repeat(randInt(1, 7))
  const o = obj.o.repeat(randInt(50, 70))

  const _q = (q + o).split("").sort(() => Math.random() - 0.5).join("")
  const str = `乂  *L E T T E R*

Berapa jumlah huruf "${obj.q}" pada baris berikut?
\`\`\`${_q}\`\`\`

Timeout : [ *${(timeout / 1000) / 60} Menit* ]
Reply pesan ini untuk menjawab, reply dengan *letskip* untuk menghapus sesi`
  conn.letter[m.chat] = {
    ans: q.length,
    wrong: 0,
    msg: await m.reply(str),
    timeout: setTimeout(async() => {
      await conn.letter[m.chat].msg.reply("Waktu habis!")
      delete conn.letter[m.chat]
    }, timeout)
  }
}

handler.before = async function(m, { conn }) {
  conn.letter ??= {}
  if(!(m.chat in conn.letter)) return

  /** @type {{ ans: String, wrong: Number, msg: {}, timeout: NodeJS.Timeout }} */
  const game = conn.letter[m.chat]
  if(m.quoted?.id !== game.msg.id) return

  /** @type {String} */
  const text = m.text.toLowerCase()
  if(!text) return

  if(text != game.ans && text !== "letskip") {
    await m.reply(`[${game.wrong+1}/3] Salah!`)
    game.wrong++
    if(game.wrong >= 3) {
      clearTimeout(game.timeout)
      await m.reply("Kamu sudah 3 kali salah tebak! sesi dihapus")
      delete conn.letter[m.chat]
    }
  } else if(text === "letskip") {
    await m.reply("Sesi dihapus")
    clearTimeout(game.timeout)
    delete conn.letter[m.chat]
  } else {
    await m.reply("Benar! +500 XP")
    clearTimeout(game.timeout)
    delete conn.letter[m.chat]
    db.data.users[m.sender].exp += 500
  }
}

handler.help = ["letter"]
handler.tags = ["game"]

handler.command = /^(letter)$/i
handler.group = true

export default handler