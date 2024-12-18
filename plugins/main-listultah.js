import db from '../lib/database.js'
const handler = async (m, { conn, usedPrefix, text }) => {
  db.data.users[m.sender].ultah = db.data.users[m.sender].ultah || [];
  let i = 0;

  if (db.data.users[m.sender].ultah.length === 0)
    return m.reply("Kamu belum punya daftar ulang tahun!");

  let txt = "🎂 Daftar Ulang Tahun 🎂\n\n";

  for (let ct in db.data.users[m.sender].ultah) {
    i += 1;
    txt += `${i}. ${db.data.users[m.sender].ultah[ct].title}\n`;
  }

  if (text.length === 0) {
    return conn.reply(
      m.chat,
      `${txt}\nPenggunaan: ${usedPrefix}listultah 1`
    );
  }

  let ultah = db.data.users[m.sender].ultah;
  let split = text.split("|");

  if (ultah.length === 0) return m.reply("Kamu belum memiliki daftar ultah!");
  let n = Number(split[0]) - 1;

  let isi =
    db.data.users[m.sender].ultah[n]?.isi || "🤔 Tidak ditemukan!";

  conn.reply(m.chat, `${isi}`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text),
    },
  });
};

handler.help = ["listultah *<title>*"];
handler.tags = ["main"];
handler.command = /^listultah$/i;

export default handler