import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(oranglidi)}`), global.pauthor)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}
  handler.command = /^(doge)$/i
  handler.tags = ['sticker']
  handler.help = ['doge']
  handler.limit = true
  handler.group = true 
  
  export default handler
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
  global.oranglidi = [
"https://i.ibb.co/DrpDXPt/1.png",
"https://i.ibb.co/f2DghN2/image.png",
"https://i.ibb.co/D963fjq/10.png",
"https://i.ibb.co/p1zM0zF/100.png",
"https://i.ibb.co/R3cp3w9/101.png",
"https://i.ibb.co/Zgwz6x3/102.png",
"https://i.ibb.co/rZMnRVy/103.png",
"https://i.ibb.co/yWCxt6b/104.png",
"https://i.ibb.co/CJ4r17y/105.png",
"https://i.ibb.co/9Gb5xzW/106.png",
"https://i.ibb.co/Wx4K6vS/107.png",
"https://i.ibb.co/7rX2zWK/108.png",
"https://i.ibb.co/mXYxvtP/109.png",
"https://i.ibb.co/8c06Vht/11.png",
"https://i.ibb.co/X7FzVDN/110.png",
"https://i.ibb.co/wNtb0Wk/111.png",
"https://i.ibb.co/9tgdsN1/112.png",
"https://i.ibb.co/3NdPdbr/113.png",
"https://i.ibb.co/7YWFX5G/114.png",
"https://i.ibb.co/CwTQjBy/115.png",
"https://i.ibb.co/C5xV72Y/1.png",
"https://i.ibb.co/LZZdYL8/image.png",
"https://i.ibb.co/NnJHcSr/10.png",
"https://i.ibb.co/Xty3mB8/11.png",
"https://i.ibb.co/0mb8X89/12.png",
"https://i.ibb.co/nrTT1Vt/13.png",
"https://i.ibb.co/T0QF8r5/14.png",
"https://i.ibb.co/hcfvFzS/15.png",
"https://i.ibb.co/XbdMX8H/16.png",
"https://i.ibb.co/b7mrm1r/17.png",
"https://i.ibb.co/pKzwvdZ/18.png",
"https://i.ibb.co/Xy3jFfc/19.png",
"https://i.ibb.co/G9X8R5P/2.png",
"https://i.ibb.co/TkpD2c8/20.png",
"https://i.ibb.co/pdZk8g6/21.png",
"https://i.ibb.co/gWz4BdQ/22.png",
"https://i.ibb.co/JB155Pw/23.png",
"https://i.ibb.co/dcV67M3/24.png",
"https://i.ibb.co/R9tbwqR/25.png",
"https://i.ibb.co/52HC43W/26.png",
"https://i.ibb.co/RBp9PCv/27.png",
"https://i.ibb.co/0nZ8KBm/28.png",
"https://i.ibb.co/fngmMf8/29.png",
"https://i.ibb.co/Fq244df/3.png",
"https://i.ibb.co/tKWVms1/30.png",
"https://i.ibb.co/K0qyK3D/31.png",
"https://i.ibb.co/vXg2x4B/32.png",
"https://i.ibb.co/ZhdmQJP/33.png",
"https://i.ibb.co/hFzQLP8/34.png",
"https://i.ibb.co/0QXjv3n/4.png",
"https://i.ibb.co/S0k0PwG/5.png",
"https://i.ibb.co/dB4fJLP/6.png",
"https://i.ibb.co/7SJCMM3/7.png",
"https://i.ibb.co/4Rp5bLp/8.png",
"https://i.ibb.co/WF804M8/9.png",
"https://i.ibb.co/H2P4T8v/116.png",
"https://i.ibb.co/R03LtzF/117.png",
"https://i.ibb.co/yFc7ZJr/118.png",
"https://i.ibb.co/Qk1HKnr/119.png",
"https://i.ibb.co/ftBRgKC/12.png",
"https://i.ibb.co/pvgRjJp/13.png",
"https://i.ibb.co/bLBpCC2/14.png",
"https://i.ibb.co/4Z8VxVM/15.png",
"https://i.ibb.co/D8wkZsR/16.png",
"https://i.ibb.co/gzsktJh/17.png",
"https://i.ibb.co/fkHDbNH/18.png",
"https://i.ibb.co/h7qtfSV/19.png",
"https://i.ibb.co/qrf1RDt/2.png",
"https://i.ibb.co/9GqLSgd/20.png",
"https://i.ibb.co/WBtfg52/21.png",
"https://i.ibb.co/594XvND/22.png",
"https://i.ibb.co/qRDqF0d/23.png",
"https://i.ibb.co/HHDn1z1/24.png",
"https://i.ibb.co/ydxtJQP/25.png",
"https://i.ibb.co/KXs8X66/26.png",
"https://i.ibb.co/GFkdKP6/27.png",
"https://i.ibb.co/7p4pjHd/28.png",
"https://i.ibb.co/MZTRhGw/29.png",
"https://i.ibb.co/XbXws16/3.png",
"https://i.ibb.co/qRKnd21/30.png",
"https://i.ibb.co/mv3wcgh/31.png",
"https://i.ibb.co/Y8VJBkM/32.png",
"https://i.ibb.co/12QtYGY/33.png",
"https://i.ibb.co/RC7g75c/34.png",
"https://i.ibb.co/gSrp2zC/35.png",
"https://i.ibb.co/DWXkjC4/36.png",
"https://i.ibb.co/2YKDgTr/37.png",
"https://i.ibb.co/swfXNb7/38.png",
"https://i.ibb.co/B2r2KT2/39.png",
"https://i.ibb.co/mhsg2xy/4.png",
"https://i.ibb.co/55GjMZ3/40.png",
"https://i.ibb.co/NmVBV55/41.png",
"https://i.ibb.co/RBHt4Qk/42.png",
"https://i.ibb.co/VY8K75x/43.png",
"https://i.ibb.co/0czyc8P/44.png",
"https://i.ibb.co/647c2S7/45.png",
"https://i.ibb.co/jrkds4N/46.png",
"https://i.ibb.co/x6Vn8pC/47.png",
"https://i.ibb.co/5h4Dt27/48.png",
"https://i.ibb.co/tX4XV5z/49.png",
"https://i.ibb.co/ckvtm02/5.png",
"https://i.ibb.co/fq6jY4k/50.png",
"https://i.ibb.co/tHF31s3/51.png",
"https://i.ibb.co/DLH3Ryv/52.png",
"https://i.ibb.co/vxpK2h7/53.png",
"https://i.ibb.co/XYxq1qG/54.png",
"https://i.ibb.co/yBVPWcN/55.png",
"https://i.ibb.co/M6q8Rq6/56.png",
"https://i.ibb.co/8NVJ10g/57.png",
"https://i.ibb.co/N6z2907/58.png",
"https://i.ibb.co/KVrSFbw/59.png",
"https://i.ibb.co/v4rQtXv/6.png",
"https://i.ibb.co/6Z9R181/60.png",
"https://i.ibb.co/YQ7XPxL/61.png",
"https://i.ibb.co/xzrZkmt/62.png",
"https://i.ibb.co/pht3prq/63.png",
"https://i.ibb.co/QX9d3Hr/64.png",
"https://i.ibb.co/xKkxZDk/65.png",
"https://i.ibb.co/4m70KFK/66.png",
"https://i.ibb.co/FWBWMDP/67.png",
"https://i.ibb.co/1Q8FV79/68.png",
"https://i.ibb.co/2M1zJnR/69.png",
"https://i.ibb.co/SVdRF2G/7.png",
"https://i.ibb.co/fxX9chs/70.png",
"https://i.ibb.co/tZ0cJrJ/71.png",
"https://i.ibb.co/wc04J22/72.png",
"https://i.ibb.co/xHf31m4/73.png",
"https://i.ibb.co/jymm2vj/74.png",
"https://i.ibb.co/Q9fzCmB/75.png",
"https://i.ibb.co/LnbM46k/76.png",
"https://i.ibb.co/RYDWdRC/77.png",
"https://i.ibb.co/2hK7C77/78.png",
"https://i.ibb.co/RhfxvQm/79.png",
"https://i.ibb.co/8bY480Q/8.png",
"https://i.ibb.co/0cyhTnc/80.png",
"https://i.ibb.co/3p0MsXH/81.png",
"https://i.ibb.co/yq1FG4F/82.png",
"https://i.ibb.co/c2zrp9K/83.png",
"https://i.ibb.co/CW3dZHx/84.png",
"https://i.ibb.co/sqXCQZX/85.png",
"https://i.ibb.co/8mLrFLh/86.png",
"https://i.ibb.co/Yyn0wLF/87.png",
"https://i.ibb.co/ZNgS1Ck/88.png",
"https://i.ibb.co/H49ZgQj/89.png",
"https://i.ibb.co/m82HxLm/9.png",
"https://i.ibb.co/R0g0VS7/90.png",
"https://i.ibb.co/yNGj1kW/91.png",
"https://i.ibb.co/wLV5XX6/92.png",
"https://i.ibb.co/S67Lvyk/93.png",
"https://i.ibb.co/cLcVJt2/94.png",
"https://i.ibb.co/qBxMr8X/95.png",
"https://i.ibb.co/tXPwKq6/96.png",
"https://i.ibb.co/1rnZ360/97.png",
"https://i.ibb.co/qybj5fD/98.png",
"https://i.ibb.co/K7XdYw0/99.png",
"https://i.ibb.co/tq73c7d/image.png",
"https://i.ibb.co/9WZYyWW/1.png",
"https://i.ibb.co/c2bPNKy/10.png",
"https://i.ibb.co/J3mqqLB/11.png",
"https://i.ibb.co/T4LTjXk/12.png",
"https://i.ibb.co/r0ym8C7/13.png",
"https://i.ibb.co/v10ddMW/14.png",
"https://i.ibb.co/2sLvYzr/15.png",
"https://i.ibb.co/V3JxrSM/16.png",
"https://i.ibb.co/3d4RpGF/17.png",
"https://i.ibb.co/hmZTR1Q/18.png",
"https://i.ibb.co/1bNk8vc/19.png",
"https://i.ibb.co/Rhq2f9K/2.png",
"https://i.ibb.co/Y3p8DLj/20.png",
"https://i.ibb.co/ckJzVPp/21.png",
"https://i.ibb.co/QnVLMvq/22.png",
"https://i.ibb.co/b6MYdwh/23.png",
"https://i.ibb.co/6vwjnB7/24.png",
"https://i.ibb.co/XxWTqP4/25.png",
"https://i.ibb.co/k0DPwJ9/26.png",
"https://i.ibb.co/BgRSdJ0/27.png",
"https://i.ibb.co/gWjCWcp/28.png",
"https://i.ibb.co/1q7rXNf/29.png",
"https://i.ibb.co/WyYRgLq/3.png",
"https://i.ibb.co/F4Q0R52/30.png",
"https://i.ibb.co/QKyYT3t/31.png",
"https://i.ibb.co/3yJwwZZ/32.png",
"https://i.ibb.co/w784nsC/33.png",
"https://i.ibb.co/gmh68W2/34.png",
"https://i.ibb.co/SsFVp8D/35.png",
"https://i.ibb.co/xY9x68v/36.png",
"https://i.ibb.co/z5znZvD/37.png",
"https://i.ibb.co/LY2b0Dg/38.png",
"https://i.ibb.co/WGJtgL7/39.png",
"https://i.ibb.co/PGtj9PZ/4.png",
"https://i.ibb.co/mBTjwxZ/40.png",
"https://i.ibb.co/9YPHscb/41.png",
"https://i.ibb.co/bztz4JD/42.png",
"https://i.ibb.co/D7DYBGR/43.png",
"https://i.ibb.co/nrtPCNv/44.png",
"https://i.ibb.co/RDB1VdH/45.png",
"https://i.ibb.co/hLWgtmV/46.png",
"https://i.ibb.co/YDxPRgG/47.png",
"https://i.ibb.co/GFRMmWs/48.png",
"https://i.ibb.co/GvTkX7n/49.png",
"https://i.ibb.co/7zzy34y/5.png",
"https://i.ibb.co/fdTQLsJ/50.png",
"https://i.ibb.co/hH12RhM/51.png",
"https://i.ibb.co/x8Fp22R/52.png",
"https://i.ibb.co/wLHxZbx/53.png",
"https://i.ibb.co/55K7ngR/54.png",
"https://i.ibb.co/LNvsGxN/55.png",
"https://i.ibb.co/QYNCPLT/56.png",
"https://i.ibb.co/mC0fszz/6.png",
"https://i.ibb.co/0FJyRSn/7.png",
"https://i.ibb.co/6Jf06bc/8.png",
"https://i.ibb.co/XDhzDDD/9.png"
]