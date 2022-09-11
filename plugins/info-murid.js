import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `KEUNTUNGAN PAKE BOT / NOKOS APA SIH?\n1. Lu Punya Bot Sendiri ✅️\n2. Wa Banyak Gk Pake Ribet✨️\n3. Penghasilan Ratusan Ribu💸\4. GrubLu Bakal Aman Dari Jpm😌\n5. Fitur Banyak🧃\nNOTE : UDAH TERMASUK DAPET SC MINI + NOKOS BOT`,wm + '\n\n' + botdate, giflogo, [['Join Murid ✅️','.order Join Murid Nih Om']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Yakin Gak Mau Join Kak?🤧💓',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['murid']
handler.tags = ['info']
handler.command = ['murid']
export default handler