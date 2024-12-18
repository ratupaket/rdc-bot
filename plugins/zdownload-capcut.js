import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) {
        throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://www.capcut.com/t/Zs8kn4BYU/`;
    }
    try {
        if (!args[0].match(/capcut/gi)) {
            throw `URL Tidak Ditemukan!`;
        }
        m.reply('*Mohon tunggu..*');
        const response = await axios.get(`https://api.botcahx.eu.org/api/dowloader/capcut?url=${args[0]}&apikey=rdculous`);
        const res = response.data;
        const { 
            video_ori, 
            title, 
            digunakan,
            cover,
            author_profile
        } = res.result;
        conn.sendFile(m.chat, video_ori, 'capcut.mp4', `Title: ${title}\nDigunakan: ${digunakan}\nThumbnail: ${cover}\nProfile: ${author_profile}`, m);
    } catch (e) {
        console.log(e);
        throw `Terjadi Kesalahan!`;
    }
};

handler.help = handler.command = ['capcut', 'cc', 'capcutdl', 'ccdl'];
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
export default handler