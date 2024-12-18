let handler =  m => m.reply(`
Pulsa : 087809731800 (XL)
Dana : 085871219612
Gopay : 083819398580
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler