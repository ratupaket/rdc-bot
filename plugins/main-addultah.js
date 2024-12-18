import db from '../lib/database.js'
const handler = async (m, { conn, command, usedPrefix, text }) => {
  let fail = '*format salah!!*\n\n*contoh:* ' + usedPrefix + command + ' 02/04/2003 katz|harapan saya semoga tahun ini gak jomblo';
  db.data.users[m.sender].ultah = db.data.users[m.sender].ultah || [];
  let ultah = db.data.users[m.sender].ultah;
  let split = text.split('|');
  let title = split[0];
  let isi = split[1];
  if (ultah.some(ult => ult.title === title)) return m.reply('Teks tidak tersedia!\n\nTeks Mungkin : Sudah digunakan');
  if (!title || !isi) return m.reply(fail);
  let cttn = {
    'title': title,
    'isi': isi
  };
  db.data.users[m.sender].ultah.push(cttn);
  conn.reply(m.chat, `berhasil membuat daftar ulang tahun 🎂\nUntuk melihat Ketik: ${usedPrefix}listultah`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  });
};

handler.help = ['addultah *<title|isi>*'];
handler.tags = ['main'];
handler.command = /^addultah$/i;
handler.group = true;

export default handler