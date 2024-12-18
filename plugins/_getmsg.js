import db from "../lib/database.js"
import fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin }) {
  let chat = db.data.chats[m.chat] || {}
  if(m.chat.endsWith("broadcast") || chat.isBanned || !chat.getmsg || db.data.users[m.sender].banned || m.isBaileys || (chat.mute && !isAdmin)) return
  if(conn.tebakanime?.[m.chat] && m?.quoted?.id == conn.tebakanime[m.chat][0].id) return

  let msgs = db.data.msgs
  if(!(m.text in msgs)) return

  let r = msgs[m.text]
  await conn.sendMessage(m.chat, r.media ? {
    [r.type]: fs.readFileSync(r.media),
    caption: r.text,
    fileName: r.fileName,
    mimetype: r.mimetype,
    ptt: r.ptt,
    gifPlayback: r.gif
  } : {
    [r.type]: r.text
  }, {
    quoted: m
  })
}