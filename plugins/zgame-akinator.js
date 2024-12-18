import db from '../lib/database.js'
import {
  Aki
} from "aki-api";
const handler = async (m, {
  conn,
  usedPrefix,
  command,
  text
}) => {
  if (db.data.akinator = db.data.akinator || {}, "end" === text) {
    if (!db.data.akinator[m.sender]) return m.reply("Anda tidak sedang dalam sesi Akinator");
    delete db.data.akinator[m.sender], m.reply("Berhasil keluar dari sesi Akinator.");
  } else if ("start" === text) {
    if (db.data.akinator[m.sender]) return await conn.reply(m.chat, "Anda masih berada dalam sesi Akinator", db.data.akinator[m.sender].msg);
    try {
      db.data.akinator[m.sender] = new Aki({
        region: "id",
        childMode: !1,
        proxy: void 0
      }), await db.data.akinator[m.sender].start();
      let txt = `🎮 *Akinator* 🎮\n\n@${m.sender.split("@")[0]}\n${db.data.akinator[m.sender].question}\n\n`;
      txt += "0 - Ya\n", txt += "1 - Tidak\n", txt += "2 - Saya Tidak Tau\n", txt += "3 - Mungkin\n",
        txt += "4 - Mungkin Tidak\n\n", txt += `*${usedPrefix + command} end* untuk keluar dari sesi Akinator`;
      let soal = await conn.sendMessage(m.chat, {
        text: txt,
        mentions: [m.sender]
      }, {
        quoted: m
      });
      db.data.akinator[m.sender].msg = soal;
    } catch (e) {
      console.log(e), m.reply('server down');
    }
  } else m.reply("Contoh: .akinator start/end");
};
handler.menu = ["akinator"], handler.tags = ["game"], handler.command = /^(akinator)$/i,
  handler.limit = !0;
export default handler;