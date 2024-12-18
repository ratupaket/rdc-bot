import Connection from "../lib/connection.js"

let handler = async function(m, { conn }) {
  const top = 10
  const msg = Connection.store.messages[m.chat]
  const name = await conn.getName(m.chat)

  const msgs = {}
  for(const _m of msg) {
    let sender
    try {
      sender =_m.sender
    } catch {
      sender = conn.decodeJid(_m.key?.fromMe && conn.user.id || _m.participant || _m.key.participant || _m.chat || "")
    }
    if(!(sender in msgs)) msgs[sender] = 0
    msgs[sender]++
  }

  let mentions = Object.entries(msgs).sort((a, b) => b[1] - a[1]).map(([jid]) => jid)
  mentions = new Array(top).fill().map((v, i) => mentions[i]).filter(v => v)
  await m.reply(`
Total chat di grup *${name}*:
${msg.length}


*Top ${top} member paling aktif:*
${mentions.map((v, i) => `${i+1}. @${v.split("@")[0]} ${msgs[v]} Message(s)`).join("\n")}
`, null, {
    mentions
  })
}

handler.help = ["totalchat"]
handler.tags = ["group"]

handler.group = true

handler.command = /^totalchat$/i

export default handler