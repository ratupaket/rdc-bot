import fetch from "node-fetch";
import db from '../lib/database.js'
let timeout = 12e4,
  poin = (Math.random() * 5001 + 5e3) | 0;
const handler = async (m, { conn, command, usedPrefix }) => {
  db.data.susunkata = db.data.susunkata ? db.data.susunkata : {};
  let id = m.chat;
  if (id in db.data.susunkata)
    return (
      await conn.reply(
        m.chat,
        "Masih ada soal belum terjawab di chat ini",
        db.data.game.susunkata[id][0],
      ),
      !1
    );
  let src = await (
      await fetch(
        "https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json",
      )
    ).json(),
    json = src[Math.floor(Math.random() * src.length)],
    caption = `*\`🕹️ GAME - ${command.toUpperCase()}\`*

*Soal:*
- ${json.soal}
*Tipe:*
- ${json.tipe}
*Clue:*
- ${"```" + json.jawaban.replace(/[AIUEOaiueo]/gi, "_") + "```"}

*Hadiah:* ${poin} XP  
*Waktu:* ${(timeout / 1e3).toFixed(2)} detik

Balas pesan ini untuk menjawab!`;
  db.data.susunkata[id] = [
    await conn.reply(m.chat, caption, m, {
      contextInfo: {
        mentionedJid: [m.sender],
      },
    }),
    json,
    poin,
    setTimeout(async () => {
      db.data.susunkata[id] &&
        (await conn.reply(
          m.chat,
          `*\`TIMEOUT - ${command.toUpperCase()}\`*
Jawabannya adalah *${json.jawaban}*`,
          db.data.susunkata[id][0],
        )),
        delete db.data.susunkata[id];
    }, timeout),
  ];
};
(handler.help = ["susunkata"]),
  (handler.tags = ["game"]),
  (handler.command = /^susunkata/i);
export default handler;
const buttons = [
  ["Hint", "/hsus"],
  ["Nyerah", "menyerah"],
];