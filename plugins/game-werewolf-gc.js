import db from "../lib/database.js"
import jimp from "jimp"
import get from "../lib/werewolf.js"

const resize = async (image, width, height) => {
  var read = await jimp.read(image)
  var data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
  return data
}

const thumb = "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg"

// [ Main ]
const handler = async function(m, { conn, args }) {
  conn.werewolf = conn.werewolf || {}
  const {
    chat,
    sender
  } = m
  db.data.users[sender].ww_win = db.data.users[sender].ww_win || 0
  db.data.users[sender].ww_lose = db.data.users[sender].ww_lose || 0

  const ww = conn.werewolf
  const value = args[0]
  const target = args[1]
  // [ Membuat Room ]
  if(value === "create") {
    if(chat in ww) return m.reply("Group masih dalam sesi permainan")
    if(get.playerOnGame(sender, ww) === true) return m.reply("Kamu masih dalam sesi game")
    ww[chat] = {
      room: chat,
      owner: sender,
      status: false,
      iswin: null,
      cooldown: null,
      day: 0,
      time: "malem",
      player: [],
      dead: [],
      voting: false,
      seer: false,
      guardian: [],
    }
    await m.reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung")
    // [ Join sesi permainan ]
  } else if(value === "join") {
    if(!ww[chat]) return m.reply("Belum ada sesi permainan")
    if(ww[chat].status === true) return m.reply("Sesi permainan sudah dimulai")
    if(ww[chat].player.length >= 15) return m.reply("Maaf jumlah player telah penuh")
    if(get.playerOnRoom(sender, chat, ww) === true) return m.reply("Kamu sudah join dalam room ini")
    if(get.playerOnGame(sender, ww) === true) return m.reply("Kamu masih dalam sesi game")
    let data = {
      id: sender,
      number: ww[chat].player.length + 1,
      sesi: chat,
      status: false,
      role: false,
      effect: [],
      vote: 0,
      isdead: false,
      isvote: false,
    }
    ww[chat].player.push(data)
    let player = []
    let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`
    for(let i in ww[chat].player) {
      text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`
      player.push(ww[chat].player[i].id)
    }
    text += "\nJumlah player minimal adalah 5 dan maximal 15"
    conn.sendMessage(
      m.chat, {
        text: text.trim(),
        contextInfo: {
          externalAdReply: {
            title: "W E R E W O L F",
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnail: await resize(thumb, 300, 175),
            sourceUrl: "",
            mediaUrl: thumb,
          },
          mentionedJid: player,
        },
      }, {
        quoted: m
      }
    )
    // [ Game Play ]
  } else if(value === "start") {
    if(!ww[chat]) return m.reply("Belum ada sesi permainan")
    if(ww[chat].player.length === 0) return m.reply("Room belum memiliki player")
    if(ww[chat].player.length < 5) return m.reply("Maaf jumlah player belum memenuhi syarat")
    if(get.playerOnRoom(sender, chat, ww) === false) return m.reply("Kamu belum join dalam room ini")
    if(ww[chat].cooldown > 0) {
      if(ww[chat].time === "voting") {
        get.clearAllVote(chat, ww)
        get.addTimer(chat, ww)
        return await get.run_vote(conn, chat, ww)
      } else if(ww[chat].time === "malem") {
        get.clearAllVote(chat, ww)
        get.addTimer(chat, ww)
        return await get.run_malam(conn, chat, ww)
      } else if(ww[chat].time === "pagi") {
        get.clearAllVote(chat, ww)
        get.addTimer(chat, ww)
        return await get.run_pagi(conn, chat, ww)
      }
    }
    if(ww[chat].status === true) return m.reply("Sesi permainan telah dimulai")
    if(ww[chat].owner !== sender) return m.reply(`Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`)
    let list1 = ""
    let list2 = ""
    let player = []
    get.roleGenerator(chat, ww)
    get.addTimer(chat, ww)
    get.startGame(chat, ww)
    for(let i in ww[chat].player) {
      list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`
      player.push(ww[chat].player[i].id)
    }
    for(let i in ww[chat].player) {
      list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`
      player.push(ww[chat].player[i].id)
    }
    for(let i in ww[chat].player) {
      // [ Werewolf ]
      if(ww[chat].player[i].role === "werewolf") {
        if(ww[chat].player[i].isdead != true) {
          var text = `Hai ${conn.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${get.emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`
          /*
          let row = []
          for (let p = 0 p < ww[chat].player.length p++) {
            row.push({
              title: `Kill Player ${ww[chat].player[p].number}`,
              rowId: `.wwpc kill ${ww[chat].player[p].number}`,
              description: `Untuk membunuh player ${ww[chat].player[p].number}`,
            })
          }
          const sections = [
            { title: "⌂ W E R E W O L F - G A M E", rows: row },
          ]
          const listMessage = {
            text: text,
            footer: `Player Hidup: ${get.playerHidup(
              get.sesi(m.chat, ww)
            )} Player Mati: ${get.playerMati(get.sesi(m.chat, ww))}`,
            title: "⌂ W E R E W O L F - G A M E\n",
            buttonText: "Clik here!",
            sections,
            mentions: player,
          }
          await conn.sendMessage(ww[chat].player[i].id, listMessage)
          */
          await conn.sendMessage(ww[chat].player[i].id, {
            text: text,
            mentions: player,
          })
        }
        // [ villager ]
      } else if(ww[chat].player[i].role === "warga") {
        if(ww[chat].player[i].isdead != true) {
          let text = `*⌂ W E R E W O L F - G A M E*\n\nHai ${conn.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${get.emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`
          await conn.sendMessage(ww[chat].player[i].id, {
            text: text,
            mentions: player,
          })
        }
        // [ Penerawangan ]
      } else if(ww[chat].player[i].role === "seer") {
        if(ww[chat].player[i].isdead != true) {
          let text = `Hai ${conn.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${get.emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`
          /*
           let row = []
           for (let p = 0 p < ww[chat].player.length p++) {
             row.push({
               title: `Cek Player ${ww[chat].player[p].number}`,
               rowId: `.ww dreamy ${ww[chat].player[p].number}`,
               description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
             })
           }
           const sections = [
             { title: "⌂ W E R E W O L F - G A M E", rows: row },
           ]
           const listMessage = {
             text: text,
             footer: `Player Hidup: ${get.playerHidup(
               get.sesi(m.chat, ww)
             )} Player Mati: ${get.playerMati(get.sesi(m.chat, ww))}`,
             title: "⌂ W E R E W O L F - G A M E\n",
             buttonText: "Clik here!",
             sections,
             mentions: player,
           }
           await conn.sendMessage(ww[chat].player[i].id, listMessage)
           */
          await conn.sendMessage(ww[chat].player[i].id, {
            text: text,
            mentions: player,
          })
        }
        // [ Guardian ]
      } else if(ww[chat].player[i].role === "guardian") {
        if(ww[chat].player[i].isdead != true) {
          let text = `Hai ${conn.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${get.emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`
          /*
          let row = []
          for (let p = 0 p < ww[chat].player.length p++) {
            row.push({
              title: `Lindungi Player ${ww[chat].player[p].number}`,
              rowId: `.ww deff ${ww[chat].player[p].number}`,
              description: `Untuk melindungi player ${ww[chat].player[p].number}`,
            })
          }
          const sections = [
            { title: "⌂ W E R E W O L F - G A M E", rows: row },
          ]
          const listMessage = {
            text: text,
            footer: `Player Hidup: ${get.playerHidup(
              get.sesi(m.chat, ww)
            )} Player Mati: ${get.playerMati(get.sesi(m.chat, ww))}`,
            title: "⌂ W E R E W O L F - G A M E\n",
            buttonText: "Clik here!",
            sections,
            mentions: player,
          }
          await conn.sendMessage(ww[chat].player[i].id, listMessage)
          */
          await conn.sendMessage(ww[chat].player[i].id, {
            text: text,
            mentions: player,
          })
        }
        // [ Sorcerer ]
      } else if(ww[chat].player[i].role === "sorcerer") {
        if(ww[chat].player[i].isdead != true) {
          let text = `Hai ${conn.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${get.emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`
          /*
          let row = []
          for (let p = 0 p < ww[chat].player.length p++) {
            row.push({
              title: `Cek Player ${ww[chat].player[p].number}`,
              rowId: `.ww sorcerer ${ww[chat].player[p].number}`,
              description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
            })
          }
          const sections = [
            { title: "⌂ W E R E W O L F - G A M E", rows: row },
          ]
          const listMessage = {
            text: text,
            footer: `Player Hidup: ${get.playerHidup(
              get.sesi(m.chat, ww)
            )} Player Mati: ${get.playerMati(get.sesi(m.chat, ww))}`,
            title: "⌂ W E R E W O L F - G A M E\n",
            buttonText: "Clik here!",
            sections,
            mentions: player,
          }
          await conn.sendMessage(ww[chat].player[i].id, listMessage)
          */
          await conn.sendMessage(ww[chat].player[i].id, {
            text: text,
            mentions: player,
          })
        }
      }
    }
    await conn.sendMessage(m.chat, {
      text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
      contextInfo: {
        externalAdReply: {
          title: "W E R E W O L F",
          mediaType: 1,
          renderLargerThumbnail: true,
          thumbnail: await resize(thumb, 300, 175),
          sourceUrl: "",
          mediaUrl: thumb,
        },
        mentionedJid: player,
      },
    })
    await get.run(conn, chat, ww)
  } else if(value === "vote") {
    if(!ww[chat]) return m.reply("Belum ada sesi permainan")
    if(ww[chat].status === false) return m.reply("Sesi permainan belum dimulai")
    if(ww[chat].time !== "voting") return m.reply("Sesi voting belum dimulai")
    if(get.playerOnRoom(sender, chat, ww) === false) return m.reply("Kamu bukan player")
    if(get.dataPlayer(sender, ww).isdead === true) return m.reply("Kamu sudah mati")
    if(!target || target.length < 1) return m.reply("Masukan nomor player")
    if(isNaN(target)) return m.reply("Gunakan hanya nomor")
    //if(get.dataPlayer(sender, ww).isvote === true) return m.reply("Kamu sudah melakukan voting")

    let b = get.getPlayerById(chat, sender, parseInt(target), ww)
    if(b.db.isdead === true) return m.reply(`Player ${target} sudah mati.`)
    if(ww[chat].player.length < parseInt(target)) return m.reply("Invalid")
    if(get.getPlayerById(chat, sender, parseInt(target), ww) === false) return m.reply("Player tidak terdaftar!")
    if(b.db.id === sender) return m.reply("Tidak dapat menggantung diri sendiri")

    get.vote(chat, parseInt(target), sender, ww)
    return m.reply("✅ Berhasil vote")
  } else if(value == "exit") {
    if(!ww[chat]) return m.reply("Tidak ada sesi permainan")
    if(get.playerOnRoom(sender, chat, ww) === false) return m.reply("Kamu tidak dalam sesi permainan")
    if(ww[chat].status === true) return m.reply("Permainan sudah dimulai, kamu tidak bisa keluar")
    m.reply(`@${sender.split("@")[0]} Keluar dari permainan`)
    get.playerExit(chat, sender, ww)
  } else if(value === "delete") {
    if(!ww[chat]) return m.reply("Tidak ada sesi permainan")
    if(ww[chat].owner !== sender)
      return m.reply(
        `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
      )
    m.reply("Sesi permainan berhasil dihapus").then(() => {
      delete ww[chat]
    })
  } else if(value === "player") {
    if(!ww[chat]) return m.reply("Tidak ada sesi permainan")
    if(get.playerOnRoom(sender, chat, ww) === false) return m.reply("Kamu tidak dalam sesi permainan")
    if(ww[chat].player.length === 0) return m.reply("Sesi permainan belum memiliki player")
    let player = []
    let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n"
    for(let i in ww[chat].player) {
      text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`
      player.push(ww[chat].player[i].id)
    }
    conn.sendMessage(
      m.chat, {
        text: text,
        contextInfo: {
          externalAdReply: {
            title: "W E R E W O L F",
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnail: await resize(thumb, 300, 175),
            sourceUrl: "",
            mediaUrl: thumb,
          },
          mentionedJid: player,
        },
      }, {
        quoted: m
      }
    )
  } else if(value === "stats") {
    const user = db.data.users[m.sender]
    const { ww_win: win, ww_lose: lose } = user
    const total = win + lose
    const wr = (((win / total) * 100) || 0).toFixed(1) + "%"
    const lr = (((lose / total) * 100) || 0).toFixed(1) + "%"

    await m.reply(`
*⌂ S T A T I S T I K*

 • Persentase kemenangan: ${wr}
 • Persentase kekalahan: ${lr}
 • Total permainan:
  • Menang: ${win}
  • Kalah: ${lose}
  • Total: ${total}
`)
  } else {
    let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`
    text += ` • ww stats\n`
    text += ` • ww create\n`
    text += ` • ww join\n`
    text += ` • ww start\n`
    text += ` • ww exit\n`
    text += ` • ww delete\n`
    text += ` • ww player\n`
    text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`
    conn.sendMessage(
      m.chat, {
        text: text.trim(),
        contextInfo: {
          externalAdReply: {
            title: "W E R E W O L F",
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnail: await resize(thumb, 300, 175),
            sourceUrl: "",
            mediaUrl: thumb,
          },
        },
      }, {
        quoted: m
      }
    )
  }
}
handler.help = ["werewolf", "ww"]
handler.tags = ["game"]

handler.group = true

handler.command = /^(werewolf|ww)$/i

export default handler