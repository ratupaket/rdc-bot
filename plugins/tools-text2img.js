import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*Masukan detail gambar!*`;
  try {
    conn.reply(m.chat, 'proses', m)
    const res = await fetch(`https://aemt.me/ai/generator/image?text=${text}`).then(res => res.buffer());
    const textResult = res.toString();
    const prompt = textResult.split('Negative prompt: ')[1].split('Steps:')[0].trim();
    const additionalText = textResult.split('Lora hashes:')[1].split('Version:')[0].trim();
    conn.sendFile(m.chat, res, 'image.jpg', `Negative prompt: ${prompt}\n${additionalText}`, m);
  } catch (error) {
    m.reply(`Error: ${error.message}`);
  }
};

handler.command = handler.help = ['text2img'];
handler.tags = ['tools'];
handler.limit = true;
handler.group = true
export default handler