export async function before(m, { conn }) {
  conn.exam = conn.exam ? conn.exam : {}
  if(conn.exam[m.chat]) {
    if(!m.text) return

    const [, , , a, b, c] = conn.exam[m.chat].map(v => v?.toLowerCase?.())
    const ans = conn.exam[m.chat][1].trim().toLowerCase()
    const _ans =
               ans === a ? "a" :
               ans === b ? "b" :
               "c"

    if(m.text.toLowerCase() === ans || m.text.toLowerCase() === _ans) {
      await m.reply("Kamu benar.. jawabannya adalah " + conn.exam[m.chat][1])
      clearTimeout(conn.exam[m.chat][2])
      delete conn.exam[m.chat]
      // db.data.users[msg.sender].limit += 1
      // db.data.users[msg.sender].limitgame += 1
    } else {
      await m.reply("Jawaban kamu salah, soal berakhir")
      clearTimeout(conn.exam[m.chat][2])
      delete conn.exam[m.chat]
    }
  }
}