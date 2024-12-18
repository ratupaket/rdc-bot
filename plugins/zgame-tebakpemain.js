import fetch from "node-fetch";
import db from '../lib/database.js'
let timeout = 120000
let poin = 3499
let handler = async (m, { conn, usedPrefix, isPrems, command }) => {
  conn.tebakpemain = conn.tebakpemain ? conn.tebakpemain : {};
  let id = m.chat;
  if (id in conn.tebakpemain) return await conn.reply(m.chat, "Masih ada soal belum terjawab di chat ini", conn.tebakpemain[id][0]), !1;
  let src = await (await fetch("https://raw.githubusercontent.com/JarPyth/scrape/main/games/tebakpemain.json")).json(),
    randoms = src[Math.floor(Math.random() * src.length)],
    json = {
      url: randoms.img,
      jawaban: randoms.jawaban,
      posisi: randoms.posisi,
      negara: randoms.negara,
      liga: randoms.liga,
      klub: randoms.klub,
      nopung: randoms.nopung
    },
    caption = `*\`🕹️ GAME - ${command.toUpperCase()}\`*

*Soal:*
◦ Posisi : ${json.posisi}
◦ Negara : ${json.negara}
◦ Liga : ${json.liga}
◦ Klub : ${json.klub}
◦ Nomor Punggung : ${json.nopung}
*Clue:*
- ${"```" + json.jawaban.replace(/[AIUEOaiueo]/gi, "_") + "```"}

*Hadiah:* ${poin} XP  
*Waktu:* ${(timeout / 1e3).toFixed(2)} detik

Balas pesan ini untuk menjawab!`;
  conn.tebakpemain[id] = [await conn.reply(m.chat, caption, m), json, poin, setTimeout(async () => {
    conn.tebakpemain[id] && await conn.reply(m.chat, `*\`TIMEOUT - ${command.toUpperCase()}\`*
Jawabannya adalah *${json.jawaban}*`, conn.tebakpemain[id][0]), delete conn.tebakpemain[id];
  }, timeout)];
};
handler.help = ["tebakpemain"], handler.tags = ["game"], handler.command = /^tebakpemain/i;
export default handler;