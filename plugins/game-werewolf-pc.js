import get from '../lib/werewolf.js'

const handler = async function(m, { conn, args }) {
  conn.werewolf = conn.werewolf || {}
  const { sender } = m;
  const ww = conn.werewolf;
  const value = args[0];
  const target = args[1];
  if(get.playerOnGame(sender, ww) === false)
    return m.reply("Kamu tidak dalam sesi game");
  if(get.dataPlayer(sender, ww).status === true)
    return m.reply(
      "Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam"
    );
  if(get.dataPlayer(sender, ww).isdead === true)
    return m.reply("Kamu sudah mati");
  if(!target || target.length < 1) return m.reply("Masukan nomor player");
  if(isNaN(target)) return m.reply("Gunakan hanya nomor");
  let byId = get.getPlayerById2(sender, parseInt(target), ww);
  if(byId === false) return m.reply("Player tidak terdaftar");
  if(byId.db.isdead === true) return m.reply("Player sudah mati");
  if(byId.db.id === sender && value !== "deff")
    return m.reply("Tidak bisa menggunakan skill untuk diri sendiri");
  if(value === "kill") {
    if(get.dataPlayer(sender, ww).role !== "werewolf")
      return m.reply("Peran ini bukan untuk kamu");
    if(byId.db.role === "sorcerer" || byId.db.role === "werewolf")
      return m.reply("Tidak bisa menggunakan skill untuk teman");
    return m
      .reply("Berhasil membunuh player " + parseInt(target))
      .then(() => {
        get.dataPlayer(sender, ww).status = true;
        get.killWerewolf(sender, parseInt(target), ww);
      });
  } else if(value === "dreamy") {
    if(get.dataPlayer(sender, ww).role !== "seer")
      return m.reply("Peran ini bukan untuk kamu");
    let dreamy = get.dreamySeer(m.sender, parseInt(target), ww);
    return m
      .reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`)
      .then(() => {
        get.dataPlayer(sender, ww).status = true;
      });
  } else if(value === "deff") {
    if(get.dataPlayer(sender, ww).role !== "guardian")
      return m.reply("Peran ini bukan untuk kamu");
    return m.reply(`Berhasil melindungi player ${target}`).then(() => {
      get.protectGuardian(m.sender, parseInt(target), ww);
      get.dataPlayer(sender, ww).status = true;
    });
  } else if(value === "sorcerer") {
    if(get.dataPlayer(sender, ww).role !== "sorcerer")
      return m.reply("Peran ini bukan untuk kamu");
    let sorker = get.sorcerer(m.sender, target);
    return m
      .reply(`Berhasil membuka identitas player ${target} adalah ${sorker}`)
      .then(() => {
        get.dataPlayer(sender, ww).status = true;
      });
  }
}

handler.help = ["wwpc"]
handler.tags = ["game"]

handler.private = true

handler.command = /^wwpc$/i

export default handler
