import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(babyyuli)}`), global.pauthor)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}
  handler.command = /^(babyyuli)$/i
  handler.tags = ['sticker']
  handler.help = ['babyyuli']
  handler.limit = true
  handler.group = true 
  
  export default handler
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
  global.babyyuli = [
"https://i.ibb.co/4FdcB5F/blush-sticker.png",
"https://i.ibb.co/64bVxq0/confounded-sticker.png",
"https://i.ibb.co/9gyxQMz/disappointed-relieved-sticker.png",
"https://i.ibb.co/mvpqjsm/expressionless-sticker.png",
"https://i.ibb.co/m0Lg57Q/grin-sticker.png",
"https://i.ibb.co/Y7KntpN/grinning-sticker.png",
"https://i.ibb.co/9YHXDX6/hand-over-mouth-sticker-1.png",
"https://i.ibb.co/hy6jy5K/hand-over-mouth-sticker.png",
"https://i.ibb.co/XWJ7Kdv/heart-eyes-sticker-1.png",
"https://i.ibb.co/TWFfbz1/heart-eyes-sticker.png",
"https://i.ibb.co/HHwqdMm/heartpulse-sticker.png",
"https://i.ibb.co/K0xrzbD/hugs-sticker-1.png",
"https://i.ibb.co/7grjzC4/hugs-sticker.png",
"https://i.ibb.co/CbzFtqS/joy-sticker.png",
"https://i.ibb.co/RB4kTvB/kissing-closed-eyes-sticker-1.png",
"https://i.ibb.co/CvcB18G/kissing-closed-eyes-sticker.png",
"https://i.ibb.co/r21BN29/kissing-smiling-eyes-sticker.png",
"https://i.ibb.co/N9PRjpV/mask-sticker.png",
"https://i.ibb.co/DRWw4TY/pensive-sticker-1.png",
"https://i.ibb.co/84HqGvN/pensive-sticker.png",
"https://i.ibb.co/m5PMDZV/pleading-sticker.png",
"https://i.ibb.co/10B3rNn/raised-eyebrow-sticker.png",
"https://i.ibb.co/Khdt26M/relaxed-sticker-1.png",
"https://i.ibb.co/0Mp5YP2/relaxed-sticker-2.png",
"https://i.ibb.co/N6pBR56/relaxed-sticker-3.png",
"https://i.ibb.co/WvtxKCM/relaxed-sticker-4.png",
"https://i.ibb.co/vJKcm3Z/relaxed-sticker.png",
"https://i.ibb.co/23ByT6B/rofl-sticker-1.png",
"https://i.ibb.co/YPCh0db/rofl-sticker-2.png",
"https://i.ibb.co/bHJtQnG/rofl-sticker.png",
"https://i.ibb.co/XjBjH1r/sleeping-sticker.png",
"https://i.ibb.co/T1zNfTW/smile-sticker.png",
"https://i.ibb.co/D7WvJsc/smiling-face-with-three-hearts-sticker-1.png",
"https://i.ibb.co/5vYSXjB/smiling-face-with-three-hearts-sticker-2.png",
"https://i.ibb.co/QcPby2s/smiling-face-with-three-hearts-sticker-3.png",
"https://i.ibb.co/jgC6dh9/smiling-face-with-three-hearts-sticker-4.png",
"https://i.ibb.co/H4J4yMs/smiling-face-with-three-hearts-sticker-5.png",
"https://i.ibb.co/0V94tR8/smiling-face-with-three-hearts-sticker-6.png",
"https://i.ibb.co/SKkQbzJ/smiling-face-with-three-hearts-sticker-7.png",
"https://i.ibb.co/tJBpc4j/smiling-face-with-three-hearts-sticker.png",
"https://i.ibb.co/dMqkXZd/smirk-sticker.png",
"https://i.ibb.co/x6BbLHS/sob-sticker-1.png",
"https://i.ibb.co/gtm2JKJ/sob-sticker-2.png",
"https://i.ibb.co/KwCpj6Y/sob-sticker-3.png",
"https://i.ibb.co/r0HSCW9/sob-sticker.png",
"https://i.ibb.co/syKgjmC/sweat-smile-sticker-1.png",
"https://i.ibb.co/pJwvqD5/sweat-smile-sticker-2.png",
"https://i.ibb.co/jVsHYM9/sweat-smile-sticker.png",
"https://i.ibb.co/jrfNTWs/unamused-sticker-1.png",
"https://i.ibb.co/M7GLR7z/unamused-sticker.png",
"https://i.ibb.co/Zf8GhzC/undefined-sticker-1.png",
"https://i.ibb.co/wWQZw6g/undefined-sticker.png",
"https://i.ibb.co/0yqmXf0/upside-down-face-sticker.png",
"https://i.ibb.co/YRv03Jx/vomiting-sticker.png",
"https://i.ibb.co/P4DbkN9/weary-sticker.png",
"https://i.ibb.co/HXJWs55/wink-sticker-1.png",
"https://i.ibb.co/GtN71Sr/wink-sticker.png",
"https://i.ibb.co/pXHLxRX/woozy-sticker.png",
"https://i.ibb.co/30cTkyx/worried-sticker.png",
"https://i.ibb.co/R623fPg/yum-sticker-1.png",
"https://i.ibb.co/GkkMbbb/yum-sticker.png",
"https://i.ibb.co/12d1KM3/zany-sticker.png",
"https://i.ibb.co/P4VZZFJ/hugs-sticker.png",
"https://i.ibb.co/xYVF2Zw/joy-sticker.png",
"https://i.ibb.co/qjp7VHP/kissing-closed-eyes-sticker.png",
"https://i.ibb.co/Dbn2kLW/pleading-sticker.png",
"https://i.ibb.co/khYGLDX/raised-eyebrow-sticker.png",
"https://i.ibb.co/pZhBmk6/relaxed-sticker-1.png",
"https://i.ibb.co/ThXjqGx/relaxed-sticker.png",
"https://i.ibb.co/59RmdXX/smiling-face-with-three-hearts-sticker.png",
"https://i.ibb.co/c27Gq9t/undefined-sticker.png",
"https://i.ibb.co/Wx1DDLn/paperclips-sticker-1.png",
"https://i.ibb.co/tq6bCnb/paperclips-sticker-2.png",
"https://i.ibb.co/9TDGgdf/paperclips-sticker-3.png",
"https://i.ibb.co/cFhyQcX/paperclips-sticker-4.png",
"https://i.ibb.co/7C9nsMg/paperclips-sticker-5.png",
"https://i.ibb.co/61Zd9Bw/paperclips-sticker-6.png",
"https://i.ibb.co/r3nmthp/paperclips-sticker-7.png",
"https://i.ibb.co/KqkGcKG/paperclips-sticker-8.png",
"https://i.ibb.co/MCZFkNc/paperclips-sticker.png",
"https://i.ibb.co/xDbd3wH/persevere-sticker.png",
"https://i.ibb.co/R9prnTF/pleading-sticker-1.png"
  ]