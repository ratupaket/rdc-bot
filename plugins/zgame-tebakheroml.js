import fetch from "node-fetch";
import db from '../lib/database.js'
let timeout = 120000
let poin = 3499
let handler = async (m, { conn, usedPrefix, isPrems, command }) => {
  conn.tebakheroml = conn.tebakheroml ? conn.tebakheroml : {};
  let id = m.chat;
  if (id in conn.tebakheroml) return await conn.reply(m.chat, "Masih ada soal belum terjawab di chat ini", conn.tebakheroml[id][0]), !1;
  let src = await (await fetch("https://raw.githubusercontent.com/rdculous/result-rest-api/refs/heads/main/game/tebakheroml.json")).json(),
    randoms = src[Math.floor(Math.random() * src.length)],
    json = {
      url: randoms.fullimg,
      name: randoms.jawaban
    },
    caption = `*\`🕹️ GAME - ${command.toUpperCase()}\`*

*Soal:*
- Siapakah nama hero ini.
*Clue:*
- ${"```" + json.name.replace(/[AIUEOaiueo]/gi, "_") + "```"}

*Hadiah:* ${poin} XP  
*Waktu:* ${(timeout / 1e3).toFixed(2)} detik

Balas pesan ini untuk menjawab!`;
  conn.tebakheroml[id] = [await conn.sendFile(m.chat, json.url, "", caption, m), json, poin, setTimeout(async () => {
    conn.tebakheroml[id] && await conn.reply(m.chat, `*\`TIMEOUT - ${command.toUpperCase()}\`*
Jawabannya adalah *${json.name}*`, conn.tebakheroml[id][0]), delete conn.tebakheroml[id];
  }, timeout)];
};
handler.help = ["tebakheroml"], handler.tags = ["game"], handler.command = /^tebakheroml/i;
export default handler;