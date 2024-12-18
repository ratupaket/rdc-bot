import db from "../lib/database.js"
import { plugins } from "../lib/plugins.js"
import { xpRange } from "../lib/levelling.js"
import { readMore, ranNumb, padLead, runtimes } from "../lib/others.js"
import { promises } from "fs"
import { join } from "path"
import got from "got"
import os from "os"

let tags = {
  "info": "MENU INFO"
}

const defaultMenu = {
  before: `
Nama : *%name*
Limit : *%limit Limit*
Level : *%level*
Total XP : *%totalexp*
Uptime: *%uptime*

Info Penggunaan
Ⓛ = Limit
Ⓟ = Premium
%readmore`.trimStart(),
  header: "❒ *%category* ❒",
  body: "• %cmd %islimit %isPremium",
  footer: "",
}

let handler = async(m, { conn, usedPrefix: _p, __dirname, isPrems }) => {
  try {
    let meh = padLead(ranNumb(43), 3)
    let _package = JSON.parse(await promises.readFile(join(__dirname, "../package.json")).catch(_ => ({}))) || {}
    let { limit, role, level, exp } = db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender).replaceAll("\n","")
    let uptime = runtimes(process.uptime())
    let osuptime = runtimes(os.uptime())
    let help = Object.values(plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: "customPrefix" in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let _text = [
      before.replace(": *%limit", `${isPrems ? ": *Unlimited" : ": *%limit"}`),
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + "\n" + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : "%p" + help)
                .replace(/%islimit/g, menu.limit ? "(Ⓛ)" : "")
                .replace(/%isPremium/g, menu.premium ? "(Ⓟ)" : "")
                .trim()
            }).join("\n")
          }),
          footer
        ].join("\n")
      }),
    ].join("\n")
    let text = typeof conn.menu == "string" ? conn.menu : typeof conn.menu == "object" ? _text : ""
    let replace = {
      "%": "%",
      p: _p, uptime, osuptime,
      me: conn.getName(conn.user.jid),
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : "[unknown github url]",
      limit, name, role, level,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, "g"), (_, name) => "" + replace[name])
    await conn.sendFThumb(m.chat, db.data.datas.namebot, text.trim(), "https://telegra.ph/file/6af96963fb63b2debacb2.jpg", db.data.datas.linkgc, m)
  } catch(e) {
    throw e
  }
}

handler.help = ["menuinfo"]
handler.tags = ["submenu"]
handler.command = /^menuinfo$/i

handler.exp = 3

export default handler
