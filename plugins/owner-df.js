import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `teksnya mana?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} menu`;

  if (command === 'sfp') {
    if (!m.quoted.text) throw `balas pesan nya!`;
    let path = `plugins/${text}.js`;
    await fs.writeFileSync(path, m.quoted.text);
    m.reply(`tersimpan di ${path}`);
  } else if (command === 'df') {
    let path = `plugins/${text}.js`;
    if (!fs.existsSync(path)) throw `file plugin ${text}.js tidak ditemukan`;
    fs.unlinkSync(path);
    m.reply(`file plugin ${text}.js berhasil dihapus`);
  }
};

handler.help = ['df'].map(v => v + ' <teks>');
handler.tags = ['owner'];
handler.command = /^df$/i;
handler.rowner = true;

export default handler