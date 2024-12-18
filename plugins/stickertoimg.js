import sharp from 'sharp';

const TIMEOUT = 10000; // 10 detik

let handler = async (m, { conn, usedPrefix, command }) => {
  const notStickerMessage = `Reply sticker dengan command *${usedPrefix + command}*`;

  if (!m.quoted) throw notStickerMessage;

  const q = m.quoted || m;
  const mime = q.mimetype || '';

  if (!/image\/webp/.test(mime)) throw notStickerMessage;

  try {
    // Download sticker
    const media = await q.download();

    // Dekoding WebP tanpa webp-js
    const decodedBuffer = await sharp(media).toFormat('png')
      .resize(4096, 4096) // gambar jadi di tingkatkan resolusi jadi 4K
      .png({ quality: 100, progressive: true, compressionLevel: 9 }) // Kompresi minimum tapi kualitas nya op cuy :V
      .toBuffer(); // biasalah jadi buffer bjir
      
    // Send PNG image
    if (decodedBuffer.length > 0) {
      await conn.sendFile(m.chat, decodedBuffer, 'out.png', '*DONE*', m);
    } else {
      throw 'Gagal mengonversi stiker menjadi gambar.';
    }
  } catch (error) {
    console.error(error);
    if (error.message === 'Timeout of 10000ms exceeded') {
      m.reply('Proses konversi terlalu lama. Silakan coba lagi.');
    } else {
      m.reply(`Terjadi kesalahan: ${error.message}`);
    }
  }
};

handler.help = ['toimg (reply)'];
handler.tags = ['sticker'];
handler.command = ['toimg'];
handler.group = true

export default handler;