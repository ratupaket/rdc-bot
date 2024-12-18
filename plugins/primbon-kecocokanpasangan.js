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
} else return m.reply("Masukkan namanya, contoh .cocoknamapasangan aku|kamu")
await m.reply('tunggu')
try {
  const inputText = text.split("|");

  if (inputText.length === 2 && inputText.every(input => input.trim() !== '')) {
    const kecocokanNamaPasangan = await primbon.kecocokan_nama_pasangan(inputText[0], inputText[1]);

    const caption = `
=== Kecocokan Nama Pasangan ===
Nama Anda: ${kecocokanNamaPasangan.message.nama_anda}
Nama Pasangan: ${kecocokanNamaPasangan.message.nama_pasangan}
Sisi Positif Anda: ${kecocokanNamaPasangan.message.sisi_positif}
Sisi Negatif Anda: ${kecocokanNamaPasangan.message.sisi_negatif}
Gambar: ${kecocokanNamaPasangan.message.gambar}
Catatan: ${kecocokanNamaPasangan.message.catatan}
`;

    await m.reply(caption);
  } else {
    console.error("Mohon pastikan semua input teks diisi. Total 2 input diperlukan.");
    await m.reply("Mohon pastikan semua input teks diisi. Total 2 input diperlukan.");
  }
} catch (error) {
  console.error("Error occurred during conversion:", error);
  await m.reply("Terjadi kesalahan!");
}

}
handler.help = ["cocoknamapasangan"]
handler.tags = ["primbon"]
handler.command = /^cocoknamapasangan$/i
handler.group = true
export default handler