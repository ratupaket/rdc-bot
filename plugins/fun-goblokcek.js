let handler = async (m, { conn }) => {
    let gtg = [
        'goblok Level : 4%\n\nAMAN BANGET!',
        'goblok Level : 7%\n\nMasih Aman',
        'goblok Level : 12%\n\nAman Kok',
        'goblok Level : 22%\n\nHampir Aman',
        'goblok Level : 27%\n\ngoblok dikit',
        'goblok Level : 35%\n\ngoblok ¼',
        'goblok Level : 41%\n\nDah lewat dri Aman',
        'goblok Level : 48%\n\nSetengah goblok',
        'goblok Level : 56%\n\nLu goblok juga',
        'goblok Level : 64%\n\nLumayan Tolol',
        'goblok Level : 71%\n\nHebatnya kegoblokan lu',
        'goblok Level : 1%\n\n99% LU GAK GOBLOK!',
        'goblok Level : 77%\n\nGak akan Salah Lagi dah gobloknya lu',
        'goblok Level : 83%\n\nDijamin gobloknya',
        'goblok Level : 89%\n\ngoblok Banget!',
        'goblok Level : 94%\n\nSegoblok om Deddy',
        'goblok Level : 100%\n\nLU ORANG TER GOBLOK YANG PERNAH ADA!!!',
    ]
    let dia = gtg[Math.floor(Math.random() * gtg.length)]
    conn.reply(m.chat, `“${dia}”`, m)
}
handler.help = ['goblokcek']
handler.tags = ['fun']
handler.command = /^(goblokcek)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler