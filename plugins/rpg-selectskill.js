import db from "../lib/database.js"

const skills = [
  [
    "archer",
    "+10% ATK, +13% DEF"
  ],
  [
    "thief",
    "+5% ATK, +3% DEF, + Bonus item ketika menyelesaikan misi"
  ],
  [
    "magicswordmaster",
    "+19% ATK, +5% DEF"
  ],
  [
    "necromancer",
    "+15% ATK, +18% DEF"
  ],
  [
    "shadow",
    "+18% ATK, +10% DEF"
  ],
  [
    "swordmaster",
    "+7% ATK, +17% DEF"
  ],
  [
    "witch",
    "+14% ATK, +20% DEF"
  ]
]

let handler = async(m, { conn, usedPrefix, command, text }) => {
  const user = db.data.users[m.sender]
  const skill = text.trim().toLowerCase()
  if(!skills.find(([_skill]) => _skill === skill)) return m.reply(`Pilih skill yang Anda inginkan:

${skills.sort().map(([skill, efek]) => `› ${skill}\n‹ *${efek}*`).join("\n\n")}

Cara menggunakan:
${usedPrefix + command} <nama skill>

Contoh:
${usedPrefix + command} necromancer
`)
  if(!user.skill) {
    user.skill = skill
    await m.reply(`Anda telah memilih skill ${skill}, selamat berpetualang adventurer!`)
  } else await m.reply(`Anda sudah memilih skill ${user.skill}, tidak bisa diganti`)
}

handler.help = ["selectskill *<type>*"]
handler.tags = ["rpg"]
handler.command = /^(slectskill|selectskill)$/i

export default handler
