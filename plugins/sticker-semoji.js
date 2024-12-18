import axios from "axios"
import * as cheerio from "cheerio";
import moment from "moment"
import emojiRegex from "emoji-regex"
import { addExif, sticker } from "../lib/sticker.js"

const reg = emojiRegex()

let handler = async function(m, { conn, text }) {
  let em
  if(!(em = reg.exec(text)?.[0])) return m.reply("Masukkan emoji!")

  const res = await emojipedia(em)
  await m.reply(`${res.title}

${res.description}

*• Short Codes :*   
${res.shortCodes.map((v, i) => `${i + 1}. ${v.code} (${v.platform})`).join("\n")}

*• Emoji Lists :*   
${Object.values(res.displays).map((v, i) => `${i + 1}. ${v.title} • ${v.items[0].title}`).join("\n")}
`)
}

handler.before = async function(m, { conn }) {
  if(!m.quoted) return
  if(!(m.quoted.fromMe && m.quoted.isBaileys && /(\*• Short Codes :\*   )/g.test(m.quoted.text))) return

  const split = m.quoted.text.split("\n")
  const id = split.slice(split.indexOf("*• Short Codes :*   "), split.indexOf("*• Emoji Lists :*   ")).find(v => v.endsWith("(Emojipedia)")).split(":")[1].replace(/_/g, "-")
  const platforms = split.slice(split.indexOf("*• Emoji Lists :*   ") + 1, -1).map(v => ({
    no: v.split(".")[0],
    title: v.split(". ").slice(1).join(". ").split(" • ")[0]
  }))
  if(!platforms.find(v => v.no === m.text)) return

  const res = await emojipedia(id)
  const url = Object.values(res.displays).find(v => v.title === platforms.find(v => v.no === m.text).title).items[0].image
  const { data } = await axios.get(url, { responseType: "arraybuffer" })
  let stc
  if(url.endsWith("webp")) stc = data
  else stc = await sticker(data, null, pauthor)
  stc = await addExif(stc, packname, pauthor)

  await conn.sendMessage(m.chat, {
    sticker: stc
  }, {
    quoted: m
  })
}


handler.help = ["semoji2", "smoji2"]
handler.tags = ["sticker"]

handler.command = /^se?moji2$/i
handler.group = true
handler.limit = 10

export default handler


async function emojipedia(q) {
  const { data: _data } = await axios.get(`https://emojipedia.org/${encodeURIComponent(q)}`)
  const $ = cheerio.load(_data)

  const { data } = JSON.parse($("#__NEXT_DATA__").text()).props.pageProps.dehydratedState.queries.at(-1).state

  const {
    title,
    description: _desc,
    shortcodes: _short,
    vendorsAndPlatforms: _vap
  } = data
  const description = cheerio.load(_desc).text().trim()
  const shortCodes = _short.map(v => ({
    code: v.code,
    platform: v.vendor.title
  }))
  const displays = {}
  for(const i of _vap) displays[i.slug] = {
    title: i.title,
    items: i.items.map(v => ({
      date: moment(v.date*1000).format("YYYY-MM-DD"),
      title: v.title,
      image: `https://em-content.zobj.net/${v.image.source}`
    }))
  }

  return {
    title,
    description,
    shortCodes,
    displays
  }
}
