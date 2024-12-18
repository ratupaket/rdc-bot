import db from '../lib/database.js'
let handler = async (m, { conn, args, participants, command }) => {
    let mem = db.data.users
    let users = Object.entries(mem).map(([key, value]) => {
        return { ...value, jid: key }
    }).filter(v => v.skata)
    let isGC = /g(c|ro?up)/i.test(command)
    if (isGC) users = users.filter(v => participants.some(p => p.id == v.jid))
    let sortedExp = users.map(toNumber("skata")).sort(sort("skata"))
    let usersExp = sortedExp.map(enumGetKey)
    let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 15)) : Math.min(15, sortedExp.length)
    let text = `
*Sambung Kata Leaderboard ${isGC ? "Group" : `Top ${len}*`}
Kamu: *${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length}*
${sortedExp.slice(0, len).map(({ jid, skata, name }, i) => `${i + 1}. ${participants.some(p => jid === p.id) ? `(${conn.getName(jid)}) wa.me/${jid.split`@`[0]}` : name} - ${skata} MMR`).join`\n`}
`.trim()

    await m.reply(text)
}
handler.help = ["topskata"]
handler.tags = ["game"]
handler.command = /^(tops(ambung)?kata(g(c|ro?up))?)$/i
export default handler

function sort(property, ascending = true) {
    if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
    else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
    if (property) return (a, i, b) => {
        return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
    }
    else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
    return a.jid
}
