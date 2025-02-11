const { Primbon } = await(await import('../lib/scraped-primbon.js'))
const primbon = new Primbon()
let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
let text
if (args.length >= 1) {
  text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
  text = m.quoted.text
} else return m.reply("Masukkan nama & tgl lahir, contoh .keberuntungan budi|2|januari|2023")
await m.reply('tunggu')
try {
  const inputText = text.split("|");

  if (inputText.length === 4 && inputText.every(input => input.trim() !== '')) {
    const potensiKeberuntungan = await primbon.potensi_keberuntungan(inputText[0], inputText[1], inputText[2], inputText[3]);

    const caption = `
=== Potensi Keberuntungan ===
Nama: ${potensiKeberuntungan.message.nama}
Tanggal Lahir: ${potensiKeberuntungan.message.tgl_lahir}
Potensi Keberuntungan: ${potensiKeberuntungan.message.result}
`;

    await m.reply(caption);
  } else {
    console.error("Mohon pastikan semua input teks diisi. Total 4 input diperlukan.");
    await m.reply("Mohon pastikan semua input teks diisi. Total 4 input diperlukan.");
  }
} catch (error) {
  console.error("Error occurred during conversion:", error);
  await m.reply("Terjadi kesalahan!");
}

}
handler.help = ["keberuntungan"]
handler.tags = ["primbon"]
handler.command = /^keberuntungan$/i
handler.group = true
export default handler