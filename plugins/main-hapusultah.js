import db from '../lib/database.js'
let handler = async(m, { conn, command, usedPrefix, text }) => {
  db.data.users[m.sender].ultah = db.data.users[m.sender].ultah || [];
  let i = 0;
  if (db.data.users[m.sender].ultah.length == 0) return m.reply('Kamu belum punya list ultah!');
  let txt = '🎂 Daftar Ulang Tahun 🎂\n\n';
  
  for (let ct in db.data.users[m.sender].ultah) {
    i += 1;
    txt += '[' + i + ']. ' + db.data.users[m.sender].ultah[ct].title + '\n';
  }
  
  txt += `\nPenggunaan: ${usedPrefix}hapusultah 1`;
  if (text.length == 0) return m.reply(txt);
  
  let ultah = db.data.users[m.sender].ultah;
  let split = text.split('|');
  
  if (ultah.length == 0) return m.reply('Kamu belum memiliki list ultah!');
  let n = Number(split[0]) - 1;
  
  if (ultah[n] == undefined) return m.reply('List Ultah tidak ditemukan!');
  
  let tmp = [];

  for (let ct in ultah) {
    if (ct != n) {
      tmp.push(ultah[ct]);
    } else {
      continue;
    }
  }

  let cdang = db.data.users[m.sender].ultah; // Define cdang here
  db.data.users[m.sender].ultah = tmp;

  conn.reply(m.chat, `Berhasil menghapus list ultah!!`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  });
};

handler.help = ['hapusultah title'];
handler.tags = ['main'];
handler.command = /^hapusultah$/i;
handler.group = true;
//handler.owner = true;
export default handler