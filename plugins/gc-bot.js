import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `JOIN GRUB OFFICIAL BOT BY DHYKK
[ FITUR BOT GEGE + ADA PROMO SETIAP MINGGU ]

LINK GC BOT¹ : https://chat.whatsapp.com/Daqh39CFd1I0WmuOqg73Ar

[IKUTIN PERATURAN YA BANH]`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Makasih ✅️','.huuu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://chat.whatsapp.com/Daqh39CFd1I0WmuOqg73Ar",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'GRUB BOT OFFICIAL AYNA💓🌿',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['gcbot']
handler.tags = ['info']
handler.command =  /^(gcbot)$/i

export default handler
