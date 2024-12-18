import cron from "node-cron";
import db from '../lib/database.js'

let handler = async function(m, {
  conn,
  usedPrefix,
  command,
  participants
}) {
  const user = db.data.users[m.sender];
  conn.barbar = conn.barbar || [];

  if(user.money < 1000) return m.reply("Untuk bermain, kamu harus memiliki uang bot sebanyak 1000");

  if(command === "barbar") return m.reply(help(usedPrefix));

  const data = db.data.users;
  const percent = randomInt(1, 10);
  const member = participants.map(v => v.id);
  const player = member.filter(v => data[v] && data[v].money !== 0 && v !== m.sender);
  const select = random(player);
  const attack = random([
    "menusuk mata lawan menggunakan tusuk gigi sampai lawan meninggal",
    "memakan lawan sampai lawan menjadi tulang berulang",
    "mengubur lawan hidup hidup seperti mayat",
    "membunuh lawan dengan bantuan kobo",
    "menendang lawan sampai masuk ke isekai",
    "membunuh lawan dengan bantuan thanos",
    "membuat jari kaki lawan tersandung sampai patah",
    "membunuh lawan menggunakan rasengan",
    "membunuh lawan menggunakan chidori",
    "membunuh lawan dengan bantuan kurama",
    "membunuh lawan dengan bantuan Madara"
  ]);
  const denda = parseInt(((50 / 100) * data[m.sender].money).toFixed(0));
  let turned = conn.barbar.find(player => player.id === m.sender);
  
  if(!turned) {
    conn.barbar.push({
      id: m.sender,
      win: 0,
      cooldown: 0
    });
    turned = conn.barbar.at(-1)
  }
  
  const cooldown = new Date(turned.cooldown + 5000);
  
  if(new Date() - turned.cooldown < 5000) {
    return m.reply(`💀 Cooldown 5 detik, denda * -${
      formatNumber(denda)
    }*(50%)`).then(() => data[m.sender].money -= denda);
  }

  if(conn.barbar.length !== 0) {
    cron.schedule("*/6 * * * * *", async() => conn.barbar.map(v => v.win === 0));
  }

  turned.cooldown = new Date() * 1;

  if(turned.win >= 5) {
    if(data[m.sender].guard >= 10) {
      data[m.sender].guard = 0;

      if(turned.win > 0) {
        turned.win -= 1;
      }

      let teks = "❏  *F I G H T*\n\n";
      teks += "Lawan Anda Adalah : @0 – Level : [ ∞ ]\n\n";
      teks += "*Draw!*, guard yang kamu miliki habis total karena melawan Pencipta WhatsApp dengan level Infinity";
      m.reply(teks);
    } else {
      const restrict = randomInt(5, 50);
      const money = parseInt(((restrict / 100) * data[m.sender].money).toFixed(0));
      data[m.sender].money -= money;
      data[m.sender].guard = 0;

      if(turned.win > 0) {
        turned.win -= 1;
      }

      let teks = "❏  *F I G H T*\n\n";
      teks += "Lawan Anda Adalah : @0 – Level : [ ∞ ]\n\n";
      teks += `*Kalah!*, lawanmu adalah Owner WhatsApp dengan level infinity, guardmu habis & saldo mu berkurang *-${
        formatNumber(money)
      }* Rupiah(${
        restrict
      }%)`;
      m.reply(teks);
    }
  } else {
    if(level(data[select].money)[0] > level(data[m.sender].money)[0]) {
      if(data[m.sender].guard >= 10) {
        if(data[select].premium && data[m.sender].premium) {
          let teks = `❏ *F I G H T*\n\n`;
          teks += `Lawan Anda Adalah: @${
            select.replace(/@.+/g, "")
          } Level: ${
            level(data[select].money)[0]
          }\n\n`;
          teks += `*Draw!*, kamu dan lawanmu sama-sama kaum elit global.`;
          m.reply(teks);
        } else if(data[select].premium) {
          const money = parseInt(((percent / 100) * data[m.sender].money).toFixed(0));
          data[m.sender].money -= money;
          data[select].money += money;

          if(turned.win > 0) {
            turned.win -= 1;
          }

          let teks = `❏ *F I G H T*\n\n`;
          teks += `Lawan Anda Adalah: @${
            select.replace(/@.+/g, "")
          }– Level: [${
            level(data[select].money)[0]
          }]\n\n`;
          teks += `*Kalah!*, lawanmu adalah bagian dari elit global, guard yang kamu miliki tidak berguna saldo mu berkurang sebanyak *-${
            formatNumber(money)
          }* Rupiah(${
            percent
          }%)`;

          m.reply(teks);
        } else {
          data[m.sender].guard -= 10;

          let teks = `❏ *F I G H T*\n\n`;
          teks += `Lawan Anda Adalah: @${
            select.replace(/@.+/g, "")
          }– Level: [${
            level(data[select].money)[0]
          }]\n\n`;
          teks += `*Draw!*, levelmu lebih rendah dari level lawan & karena kamu mempunyai guard saldo mu aman.`;

          m.reply(teks);
        }
      } else {
        if(data[select].premium && data[m.sender].premium) {
          let teks = `❏ *F I G H T*\n\n`;
          teks += `Lawan Anda Adalah: @${
            select.replace(/@.+/g, "")
          }– Level: [${
            level(data[select].money)[0]
          }]\n\n`;
          teks += `*Draw!*, kamu dan lawanmu sama-sama kaum elit global.`;

          m.reply(teks);
        } else if(data[select].premium) {
          const money = parseInt(((percent / 100) * data[m.sender].money).toFixed(0));
          data[m.sender].money -= money;
          data[select].money += money;

          if(turned.win > 0) {
            turned.win -= 1;
          }

          let teks = `❏ *F I G H T*\n\n`;
          teks += `Lawan Anda Adalah: @${
            select.replace(/@.+/g, "")
          }– Level: [${
            level(data[select].money)[0]
          }]\n\n`;
          teks += `*Kalah!*, lawanmu adalah bagian dari elit global, saldo mu berkurang sebanyak *-${
            formatNumber(money)
          }* Rupiah(${
            percent
          }%)`;

          m.reply(teks);
        } else {
          const restrict = data[m.sender].money > 500000000 ? 50 : percent;
          const money = parseInt(((restrict / 100) * data[m.sender].money).toFixed(0));
          data[m.sender].money -= money;
          data[select].money += money;

          if(turned.win > 0) {
            turned.win -= 1;
          }

          let teks = `❏ *F I G H T*\n\n`;
          teks += `Lawan Anda Adalah: @${
            select.replace(/@.+/g, "")
          }– Level: [${
            level(data[select].money)[0]
          }]\n\n`;
          teks += `*Kalah!*, levelmu lebih rendah dari level lawan, saldo mu berkurang sebanyak *-${
            formatNumber(money)
          }* Rupiah(${
            percent
          }%)`;

          m.reply(teks);
        }
      }
    } else {
      if(data[select].guard >= 10) {
        if(data[select].premium && data[m.sender].premium) {
          let teks = `❏ *F I G H T*\n\n`;
          teks += `Lawan Anda Adalah: @${
            select.replace(/@.+/g, "")
          }– Level: [${
            level(data[select].money)[0]
          }]\n\n`;
          teks += `*Draw!*, kamu dan lawanmu sama-sama kaum elit global.`;

          m.reply(teks);
        } else if(data[m.sender].premium) {
          const money = parseInt(((percent / 100) * data[select].money).toFixed(0));
          data[select].money -= money;
          data[m.sender].money += money;
          turned.win += 1;

          let teks = ` *F I G H T*\n\n`;
          teks += `Lawan Anda Adalah: @${
            select.replace(/@.+/g, "")
          }– Level: [${
            level(data[select].money)[0]
          }]\n\n`;
          teks += `*Menang!*, karena kamu bagian dari elit global, guard yang dimiliki lawan tidak berguna & kamu mendapatkan *+${
            formatNumber(money)
          }* Rupiah(${
            percent
          }%)`;

          m.reply(teks);
        } else {
          data[select].guard -= 10;

          let teks = ` *F I G H T*\n\n`;
          teks += `Lawan Anda Adalah: @${
            select.replace(/@.+/g, "")
          }– Level: [${
            level(data[select].money)[0]
          }]\n\n`;
          teks += `*Draw!*, lawan terlindungi oleh guard.`;

          m.reply(teks);
        }
      } else {
        const money = parseInt(((percent / 100) * data[select].money).toFixed(0));
        data[select].money -= money;
        data[m.sender].money += money;
        turned.win += 1;

        let teks = `❏ *F I G H T*\n\n`;
        teks += `Lawan Anda Adalah: @${
          select.replace(/@.+/g, "")
        }– Level: [${
          level(data[select].money)[0]
        }]\n\n`;
        teks += `*Menang!*, kamu berhasil ${
          attack
        }, dan mendapatkan *+${
          formatNumber(money)
        }* Rupiah(${
          percent
        }%)`;

        m.reply(teks);
      }
    }
  }
};

handler.help = ["barbar", "attack"]
handler.tags = ["game"]

handler.group = true
handler.limit = 20

handler.command = /^barbar|attack$/i

export default handler

const help = prefix => {
  return `❏  *G A M E - B A R B A R*
Game ini adalah game bertarung antar sesama anggota grup, berikut adalah alur permainannya:
• Saldo setiap anggota grup punya potensi untuk bisa diambil oleh anggota lain dengan fitur ini.
• Pemain yang menang akan mendapatkan Saldo dari pemain yang kalah.
• Money yang ditambahkan dan dikurangkan sebesar 1 - 10 persen.
• Money akan terlindungi apabila pemain mempunyai *Guard*, kirim *${prefix}buyguard* untuk membeli guard.
• Sekali proteksi dibutuhkan 10 guard, beli guard sebanyak mungkin agar saldo tetap aman.
• Pemain dengan status Elit Global(Premium) bisa membypass guard lawan.
• Untuk bermain silahkan kirim perintah *${prefix}attack*.
• 5 detik / eksekusi, jika spam akan terkena denda sebesar 50%.
`;
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function level(xp) {
  let XPAsli = xp;
  let level = 1;

  while(xp > 1) {
    xp /= 2;

    if(xp < 1) {
      level == level;
    } else {
      level += 1;
    }
  }

  let XPLevel = 1;

  while(XPAsli >= XPLevel) {
    XPLevel = XPLevel + XPLevel;
  }

  let sisaXP = XPLevel - XPAsli;

  if(sisaXP == 0) {
    sisaXP = XPLevel + XPLevel;
  }

  let kurang = XPLevel - sisaXP;
  return [level, XPLevel, sisaXP, kurang];
}

function formatNumber(n) {
  return n.toLocaleString("id")
}
