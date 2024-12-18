//let { Chess } = require("chess.js")
//let jimp = require("jimp")
import { Chess } from "chess.js"
import jimp from "jimp"
import db from '../lib/database.js'

let handler = async(m, { conn, args, usedPrefix, command }) => {
  conn.chess = conn.chess ?? {}
  let str = `♟️ ${command} ♟️\n\nchallenge @tag || c <@tag>\naccept || a\nreject || r\nmove <from> <to> <promotion> || m <from> <to> <promotion>\nsurrender || nyerah\n\n Jika masih tidak paham penggunaan silahkan hubungi owner`
  if(!args || (args && !args[0])) return m.reply(str)

  let a = args[0].toLowerCase()
  if(a == "challenge" || a == "c") {
    if(conn.chess[m.chat]) return m.reply("Masih ada sesi catur di gc ini!")
    if(Object.values(conn.chess).filter(v => v.w == m.sender || v.b == m.sender)[0]) return m.reply("Kamu masih bermain catur di grup lain!")
    let user = m.mentionedJid[0]
    if(!user) return m.reply("Tag seseorang untuk diajak bermain")
    if(Object.values(conn.chess).filter(v => v.w == user || v.b == user)[0]) return m.reply("Orang yang kamu ajak masih bermain catur di grup lain!")
    if(user == m.sender) return m.reply("Kasian gada yg ngajak main")
    conn.chess[m.chat] = {
      playing: false,
      game: null,
      w: m.sender,
      b: user
    }

    let str = `\nMenunggu @${user.split("@")[0]} menulis *${usedPrefix}${command} accept*\n`
    m.reply(str, null, {
      mentions: conn.parseMention(str)
    })
  } else if(a == "accept" || a == "a") {
    if(!conn.chess[m.chat]) return m.reply(`Tidak ada sesi catur di gc ini\nTulis "${usedPrefix}${command} c @user" untuk menantang orang`)
    if(conn.chess[m.chat].playing) return m.reply("Permainan catur sudah dimulai!")
    if(conn.chess[m.chat].w == m.sender) return m.reply("Anda orang yang menantang player lain :|")
    if(conn.chess[m.chat].b != m.sender) return m.reply("Tidak ada yg menantangmu bermain catur!")
    conn.chess[m.chat].playing = true
    conn.chess[m.chat].game = new Chess()
    conn.chess[m.chat].turn = conn.chess[m.chat][conn.chess[m.chat].game.turn()]
    let Img = await jimp.read(`https://fen2image.chessvision.ai/${conn.chess[m.chat].game.fen().split(" ")[0]}?pov=${conn.chess[m.chat].game.turn() == "w" ? "white" : "black"}`)
    Img.crop(0, 0, 600, 600)
    let img = await Img.getBufferAsync("image/png")

    conn.sendFile(m.chat, img, null, `Menunggu @${conn.chess[m.chat].turn.split("@")[0]}`, m, false, {
      contextInfo: {
        mentionedJid: [conn.chess[m.chat].turn]
      }
    })
  } else if(a == "reject" || a == "r") {
    if(!conn.chess[m.chat]) return m.reply(`Tidak ada sesi catur di gc ini\nTulis "${usedPrefix}${command} c @user" untuk menantang orang`)
    if(conn.chess[m.chat].playing) return m.reply("Permainan catur sudah dimulai!")
    if(conn.chess[m.chat].w == m.sender) return m.reply("Anda orang yang menantang player lain :|")
    if(conn.chess[m.chat].b != m.sender) return m.reply("Tidak ada yg menantangmu bermain catur!")
    m.reply(`Tantangan @${conn.chess[m.chat].w.split("@")[0]} ditolak`, null, {
      mentions: [conn.chess[m.chat].w]
    })
    delete conn.chess[m.chat]
  } else if(a == "move" || a == "m") {
    if(!conn.chess[m.chat]) return m.reply(`Tidak ada sesi catur di gc ini\nTulis "${usedPrefix}${command} c @user" untuk menantang orang`)
    if(!conn.chess[m.chat].playing) return m.reply("Sesi catur belum dimulai!")
    if(conn.chess[m.chat].turn != m.sender) return m.reply(`Giliran @${conn.chess[m.chat].turn.split("@")[0]} untuk bermain!`, null, {
      mentions: [conn.chess[m.chat].turn]
    })
    let from = args[1]
    let to = args[2]
    let promotion = args[3]

    let code = {
      "queen": "q",
      "rook": "r",
      "bishop": "b",
      "knight": "n"
    }
    let figure = {
      "queen": "♕ ♛",
      "rook": "♖ ♜",
      "bishop": "♗ ♝",
      "knight": "♘ ♞"
    }
    let tmp = ""
    for(let i in code) tmp += uf(i) + " (" + figure[i].split(" ")[1] + ")" + " => " + code[i] + "\n"
    if(!Object.values(code).includes(promotion) && promotion) return m.reply(`Promotion\n\n\nType (figure) => type\n\n${tmp.trim()}`)

    if(!from || !to) return m.reply(`Example : ${usedPrefix}${command} move a2 a3`)
    let move = conn.chess[m.chat].game.move({ from, to, ...(promotion ? { promotion } : null) })
    if(move == null) return m.reply("Posisi tidak valid!")
    conn.chess[m.chat].turn = conn.chess[m.chat][conn.chess[m.chat].game.turn()]
    let Img = await jimp.read(`https://fen2image.chessvision.ai/${conn.chess[m.chat].game.fen().split(" ")[0]}?pov=${conn.chess[m.chat].game.turn() == "w" ? "white" : "black"}`)
    Img.crop(0, 0, 600, 600)
    let img = await Img.getBufferAsync("image/png")

    if(conn.chess[m.chat].game.isCheckmate()) {
      conn.sendFile(m.chat, img, null, `Skakmat\n@${m.sender.split("@")[0]} menang!\n\n💵 1.500.000`, m, false, {
        contextInfo: {
          mentionedJid: [conn.chess[m.chat].w, conn.chess[m.chat].b]
        }
      })
      db.data.users[m.sender].money += 1500000
      return delete conn.chess[m.chat]
    } else if(conn.chess[m.chat].game.isStalemate()) {
      conn.sendFile(m.chat, img, null, `Stalemate\n\n@{conn.chess[m.chat].w.split("@")[0]} dan @{conn.chess[m.chat].b.split("@")[0]} masing-masing mendapatkan 💵 750.000`, m, false, {
        contextInfo: {
          mentionedJid: [conn.chess[m.chat].w, conn.chess[m.chat].b]
        }
      })
      db.data.users[conn.chess[m.chat].w].money += 750000
      db.data.users[conn.chess[m.chat].b].money += 750000
      return delete conn.chess[m.chat]
    } else {
      return conn.sendFile(m.chat, img, null, `Giliran @${conn.chess[m.chat].turn.split("@")[0]}`, m, false, {
        contextInfo: {
          mentionedJid: [conn.chess[m.chat].turn]
        }
      })
    }
  } else if(a == "surrender" || a == "nyerah") {
    if(!conn.chess[m.chat]) return m.reply(`Tidak ada sesi catur di gc ini\nTulis "${usedPrefix}${command} c @user" untuk menantang orang`)
    if(conn.chess[m.chat].w != m.sender && conn.chess[m.chat].b != m.sender) return m.reply("Anda tidak dalam permainan!")
    let win = conn.chess[m.chat].w == m.sender ? conn.chess[m.chat].b : conn.chess[m.chat].w

    m.reply(`@${m.sender.split("@")[0]} menyerah!\n\n@${win.split("@")[0]} Menang\n💵 500.000`, null, {
      mentions: [conn.chess[m.chat].w, conn.chess[m.chat].b]
    })
    db.data.users[win].money += 500000
    return delete conn.chess[m.chat]
  } else {
    return m.reply(str)
  }
}

handler.help = ["catur challenge <@tag> || accept || reject || move <from> <to> (promotion) || surrender || nyerah"]
handler.tags = ["game"]

handler.group = true

handler.command = /^(catur)$/i

//module.exports = handler
export default handler


function uf(str) {
  if(!str || typeof str != "string") return false
  return str[0].toUpperCase() + str.slice(1)
}