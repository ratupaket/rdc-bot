import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(pinguin)}`), global.pauthor)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}
  handler.command = /^(pinguin)$/i
  handler.tags = ['sticker']
  handler.help = ['pinguin']
  handler.limit = true
  handler.group = true 
  
  export default handler
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
  global.pinguin = [
"https://i.ibb.co/VD3vRrR/081ea6058addbe981d49b5371c257fac.jpg",
"https://i.ibb.co/gv8SQR0/0c2ccded50ee2e199776f2dea58dee52.jpg",
"https://i.ibb.co/k3gDqF1/1877a905bc6a5fdecac604d2dc2b3844.jpg",
"https://i.ibb.co/RQzsT5W/1ab383c6c5f83975405f6d3c0a1afeb3.jpg",
"https://i.ibb.co/yBCfSVY/21edfa58b5786df0ff7cf8705f391000.jpg",
"https://i.ibb.co/9yGyyNw/2946fa12be04508c3b3c9bf3b2d7b90e.jpg",
"https://i.ibb.co/jRWSrK8/34f48095d659f611669bd61c093601ae.jpg",
"https://i.ibb.co/rfLZNcf/36f6d57b6942ac81de19388e96e40b94.jpg",
"https://i.ibb.co/RjYyr4P/47879acdc07754511250b8b87c51c393.jpg",
"https://i.ibb.co/tpSWhVW/4868b0d306b91cee984480da24b325f4.jpg",
"https://i.ibb.co/B3sWK8j/4b3667f0b65414b68d1f553535dc38a9.jpg",
"https://i.ibb.co/zVXxhBR/4d44f393cbe361af181147639ab29ea6.jpg",
"https://i.ibb.co/tQ2tpHh/4eee6fe5ec5fafe08e229cc2b7adb960.jpg",
"https://i.ibb.co/N7dZHSq/66691fda1c889dc36d0a468ff52c94fa.jpg",
"https://i.ibb.co/FKvjFLY/6a1bb68646bd630a82db11fdd91e89f0.jpg",
"https://i.ibb.co/mN55sBz/6a20fbdf1e5aedabe2330bbd0e65d145.jpg",
"https://i.ibb.co/0K6X0vV/73ee8137528b36f55a53cde3467a8b36.jpg",
"https://i.ibb.co/k0kW5QV/80a1db3dd1cf5a1a1de03c090e4cedb6.jpg",
"https://i.ibb.co/m6zVVpg/83597f04939bce274b8758ae626383ff.jpg",
"https://i.ibb.co/ByFkHTk/840acf320e286d249fef63f6cb042c08.jpg",
"https://i.ibb.co/hgr95DT/99d36c5417316781cd8962a1977a59dc.jpg",
"https://i.ibb.co/6PFw060/a51c6a6a46b95943406d16ae50e590ef.jpg",
"https://i.ibb.co/44v8kgH/a595e00cccf8a72a04f2c12c267d136a.jpg",
"https://i.ibb.co/jL8bRmk/aa3cfee49b56ecee18c1f77e0550b59b.jpg",
"https://i.ibb.co/Fs4vwT2/abcc0e4643fd10dbe66f6dded6dc520d.jpg",
"https://i.ibb.co/F3Pg6wm/b041fb87af20c462a5168cc5d27cb37f.jpg",
"https://i.ibb.co/DfNxJ1p/ba8e6b83b3b162a320af1832dc7127f6.jpg",
"https://i.ibb.co/JK1925H/bfe8c5e7478c54bd7b386b9473d76b20.jpg",
"https://i.ibb.co/kBNrBgj/c2c3650ec11199cae17226f11ce9429c.jpg",
"https://i.ibb.co/Gx63R8B/c8394ef91a4a5a9ad3bb96875edcbc52.jpg",
"https://i.ibb.co/t8xzT7j/ca410c888f95bb7e99ef5d2de07b0437.jpg",
"https://i.ibb.co/X7y3yb9/cdc1487e1d839913f05675e9da247e8f.jpg",
"https://i.ibb.co/mqmdwpt/d7f392de170e823889cef19ec3b10ac5.jpg",
"https://i.ibb.co/4ZkSWTS/d867a1ea20d2bc03f0e6ee0dc8fa213e.jpg",
"https://i.ibb.co/LZnQnTp/da19ac1cf69800d5153d8468b87f52ad.jpg",
"https://i.ibb.co/pbcp08z/da596a9393a64e932e46e7fa513172cd.jpg",
"https://i.ibb.co/r33D9fD/ded7b70db19f313aba2ef5c6659e6982.jpg",
"https://i.ibb.co/L5VsryQ/df4efd1e7ce0404c1a548efd1ebbd84a.jpg",
"https://i.ibb.co/XsJmqMk/e36a429d7368a5a6b283808b445f63e0.jpg",
"https://i.ibb.co/MMBH7tK/e5b148fa2d822ed37ccce3c6b7e4a162.jpg",
"https://i.ibb.co/tKwgpyM/e9cacf5c82c97a757d438457f1fc3d0d.jpg",
"https://i.ibb.co/CVQzQYX/edc66fe4ad1a8bad6de4b2e4da8e60a7.jpg",
"https://i.ibb.co/TqsPbfh/edec9c6660bfcf57d4b51fea19dd71d8.jpg",
"https://i.ibb.co/GWDpMg2/f2ccc93fcf15717affb7ab51cac10e39.jpg",
"https://i.ibb.co/Bz1BCmm/f5444381860e87b6e668d69a33163e0e.jpg",
"https://i.ibb.co/x7dDz5V/fa3b6ecdcbc3eb5b65796cb81c199e98.jpg",
"https://i.ibb.co/9gGJw1d/faabfd3d2ba9b14dee51d16bf2a133d2.jpg",
"https://i.ibb.co/DQNg19K/fedad59f899e3e51f473777e6c4e56ef.jpg",
"https://i.ibb.co/h9ZSWfQ/Sticker-To-Img-1.png",
"https://i.ibb.co/NyV0hWt/Sticker-To-Img-10.png",
"https://i.ibb.co/MnLnRxm/Sticker-To-Img-11.png",
"https://i.ibb.co/QHvvJT6/Sticker-To-Img-12.png",
"https://i.ibb.co/qCkvKyB/Sticker-To-Img-13.png",
"https://i.ibb.co/qB1zwDz/Sticker-To-Img-14.png",
"https://i.ibb.co/bFkKb5y/Sticker-To-Img-15.png",
"https://i.ibb.co/Gny1PYt/Sticker-To-Img-16.png",
"https://i.ibb.co/cNJkC23/Sticker-To-Img-17.png",
"https://i.ibb.co/FqtMz46/Sticker-To-Img-18.png",
"https://i.ibb.co/PGwmM7S/Sticker-To-Img-19.png",
"https://i.ibb.co/Cwz4zty/Sticker-To-Img-2.png",
"https://i.ibb.co/tBQNdj7/Sticker-To-Img-20.png",
"https://i.ibb.co/5KmQT3j/Sticker-To-Img-21.png",
"https://i.ibb.co/MZpDDxg/Sticker-To-Img-22.png",
"https://i.ibb.co/PN4830c/Sticker-To-Img-23.png",
"https://i.ibb.co/WPmWJBj/Sticker-To-Img-24.png",
"https://i.ibb.co/KK7j1CY/Sticker-To-Img-25.png",
"https://i.ibb.co/zQTSHYf/Sticker-To-Img-26.png",
"https://i.ibb.co/f8nnbF3/Sticker-To-Img-27.png",
"https://i.ibb.co/3YFSwjW/Sticker-To-Img-28.png",
"https://i.ibb.co/Ksw6HXz/Sticker-To-Img-29.png",
"https://i.ibb.co/2v8fFxS/Sticker-To-Img-3.png",
"https://i.ibb.co/2smZHs2/Sticker-To-Img-30.png",
"https://i.ibb.co/41bc8FQ/Sticker-To-Img-31.png",
"https://i.ibb.co/gThHk8p/Sticker-To-Img-32.png",
"https://i.ibb.co/MfjH207/Sticker-To-Img-4.png",
"https://i.ibb.co/DC659S1/Sticker-To-Img-5.png",
"https://i.ibb.co/4gmzxcC/Sticker-To-Img-6.png",
"https://i.ibb.co/Zfd3fs3/Sticker-To-Img-7.png",
"https://i.ibb.co/gmhQ16h/Sticker-To-Img-8.png",
"https://i.ibb.co/P5BXQDb/Sticker-To-Img-9.png",
"https://i.ibb.co/sw93bH3/Sticker-To-Img.png"
  ]