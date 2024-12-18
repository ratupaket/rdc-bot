import { useMultiFileAuthState, makeCacheableSignalKeyStore, makeWASocket } from "@whiskeysockets/baileys"
import { HelperConnection } from "../lib/simple.js"
import storeSystem from '../lib/store.js'
import { toBuffer } from "qrcode"
import P from "pino"

const pino = new P({
  level: "silent"
})

if(!(global.conns instanceof Array)) global.conns = []

import { handler as __handler, participantsUpdate, groupsUpdate, deleteUpdate,  bn   } from "../handler.js"
async function connect(owner) {
  const store = storeSystem.makeInMemoryStore()
  store.readFromFile(owner.split("@")[0] + "_store.json")

  const { state, saveCreds } = await useMultiFileAuthState(`./jadibot/${owner}`)
  const connectionOptions = {
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino)
    },
    logger: pino,
    printQRInTerminal: false,
    syncFullHistory: false
  }

  const conn = makeWASocket(connectionOptions)
  HelperConnection(conn, { logger: pino, store })
  store.bind(conn.ev)

  conn.owner = owner
  conn.welcome = "Hai, @user!\nSelamat datang di grup @subject"
  conn.bye = "Selamat tinggal @user!"
  conn.spromote = "@user sekarang admin!"
  conn.sdemote = "@user sekarang bukan admin!"
  conn.sDesc = "Deskripsi telah diubah ke \n@desc"
  conn.sSubject = "Judul grup telah diubah ke \n@subject"
  conn.sIcon = "Icon grup telah diubah!"
  conn.sRevoke = "Link group telah diubah ke \n@revoke"
  conn.handler = __handler.bind(conn)
  conn.participantsUpdate = participantsUpdate.bind(conn)
  conn.groupsUpdate = groupsUpdate.bind(conn)
  conn.onDelete = deleteUpdate.bind(conn)
  conn.connectionUpdate = connectionUpdate.bind(conn)
  conn.credsUpdate = saveCreds.bind(conn, true)
  conn.onCall = onCall.bind(conn)

  conn.ev.on("messages.upsert", conn.handler)
  conn.ev.on("group-participants.update", conn.participantsUpdate)
  conn.ev.on("groups.update", conn.groupsUpdate)
  conn.ev.on("message.delete", conn.onDelete)
  conn.ev.on("connection.update", conn.connectionUpdate)
  conn.ev.on("creds.update", conn.credsUpdate)

  conn.ws.on("CB:call", conn.onCall)

  const i = setInterval(async() => {
    if(!conn?.user?.jid) return;
    await global.conn.sendMessage(conn.owner, {
      text: `Berhasi terkoneksi dengan bot @${conn.user.jid.split("@")[0]}`,
      mentions: [conn.user.jid]
    })
    clearInterval(i)
  }, 1000)

  return conn
}

const lastQr = {}
async function connectionUpdate(update) {
  const conn = this
  const _conn = global.conn
  const { qr, lastDisconnect, isNewLogin } = update
  if(lastDisconnect) {
    console.log(JSON.stringify(lastDisconnect, null, 2))
    const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
    if(code === 401) {
      await _conn.sendMessage(conn.owner, { text: "Bot ter-logout" })
      global.conns = conns.filter(v => v.owner !== conn.owner)
    } else if(code === 515) {
      try { conn.ws.close() } catch {}
      conn.ev.removeAllListeners()
      await connect(conn.owner)
    }
  }

  if(qr) {
    if(lastQr[conn.owner]) await _conn.sendMessage(conn.owner, { delete: lastQr[conn.owner].key })
    lastQr[conn.owner] = await _conn.sendMessage(conn.owner, {
      image: await toBuffer(qr, { scale: 8 }),
      caption: "Scan QR ini di WhatsApp yg ingin dijadikan bot dengan cara:\n\n1. Kik titik 3\n2. Klik *Perangkat tertaut*\n3. Klik *Tautkan perangkat*\n4. Scan QR ini"
    })
  }
  if(!qr && lastQr[conn.owner]) {
    await _conn.sendMessage(conn.owner, {
      delete: lastQr[conn.owner].key
    })
    delete lastQr[conn.owner]
  }
}


let handler = async function(m, { conn: _conn }) {
  if(_conn.user.jid !== global.conn.user.jid) return m.reply(`Perintah ini hanya dapat digunakan pada bot utama!\nhttps://wa.me/${global.conn.user.jid.split("@")[0]}`)
  if(global.conns.find(v => v.owner === m.sender)) return m.reply("Sesi botmu masih berjalan!")

  await m.reply("Silahkan cek qr di private chat")
  const conn = await connect(m.sender)
  global.conns.push(conn)
}

handler.help = ["jadibot"]
handler.tags = ["jadibot"]

handler.premium = true
handler.limit = true

handler.command = /^jadibot$/i

export default handler
