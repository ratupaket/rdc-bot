import fetch from "node-fetch";
import db from '../lib/database.js'
let timeout = 120000
let poin = 3499
let handler = async (m, { conn, usedPrefix, isPrems, command }) => {
  conn.tebakjkt48 = conn.tebakjkt48 ? conn.tebakjkt48 : {};
  let id = m.chat;
  if (id in conn.tebakjkt48) return await conn.reply(m.chat, "Masih ada soal belum terjawab di chat ini", conn.tebakjkt48[id][0]), !1;
  let src = await (await fetch("https://api.crstlnz.my.id/api/member?group=jkt48")).json(),
    randoms = src[Math.floor(Math.random() * src.length)],
    json = {
      url: randoms.img,
      name: randoms.name
    },
    caption = `*\`🕹️ GAME - ${command.toUpperCase()}\`*

*Soal:*
- Siapakah nama member JKT ini.
*Clue:*
- ${"```" + json.name.replace(/[AIUEOaiueo]/gi, "_") + "```"}

*Hadiah:* ${poin} XP  
*Waktu:* ${(timeout / 1e3).toFixed(2)} detik

Balas pesan ini untuk menjawab!`;
  conn.tebakjkt48[id] = [await conn.sendFile(m.chat, json.url, "", caption, m), json, poin, setTimeout(async () => {
    conn.tebakjkt48[id] && await conn.reply(m.chat, `*\`TIMEOUT - ${command.toUpperCase()}\`*
Jawabannya adalah *${json.name}*`, conn.tebakjkt48[id][0]), delete conn.tebakjkt48[id];
  }, timeout)];
};
handler.help = ["tebakjkt48"], handler.tags = ["game"], handler.command = /^tebakjkt48/i;
export default handler;