let handler =  m => m.reply(`
LIST HARGA PANEL
Silahkan ketik .owner untuk mengetahui harga panel
`.trim()) // Tambah sendiri kalo mau
handler.help = ['panel']
handler.tags = ['info']
handler.command = /^panel$/i

export default handler