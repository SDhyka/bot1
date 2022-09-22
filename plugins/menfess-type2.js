|let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Maaf Format Anda Salah\n\nContoh:\n.menfess2 62××××|hallo sayang', m)
    if (!pesan) return conn.reply(m.chat, 'Maaf Format Anda Salah\n\nContoh:\n.menfess2 62××××|hallo sayang', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban1 = `${number}`
    var nomor = m.sender
    let spam2 = `𝑷𝒊𝒏𝒈ᬊ𝑷𝒐𝒏𝒈 💓
ᴀᴅᴀ ᴘᴇsᴀɴ ʀᴀʜᴀsɪᴀ ɴɪʜ ʙᴜᴀᴛ ᴋᴀᴍᴜ - ☏
➥ ${pesan}

ꗃMᴀᴜ Kɪʀɪᴍ Pᴇsᴀɴ Kᴀʏᴀᴋ Gɪɴɪ Jᴜɢᴀ? Bɪsᴀ Pᴀᴋᴇ Bᴏᴛ Iɴɪ
.ᴍᴇɴғᴇss2 62××××××××|Isɪ ᴘᴇsᴀɴ ᴋᴀᴍᴜ🧃`

    conn.reply(korban1 + '@s.whatsapp.net', spam2, m)

    let logs = `Sukses Mengirim Pesan Type 2
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}
⬡──⬡─────────⬡──⬡
💌 Isi Pesan : ${pesan}
⬡──⬡─────────⬡──⬡`

    conn.reply(m.chat, logs, m)
}
handler.help = ['menfess2 nomor|pesan']
handler.tags = ['nocategory']

handler.command = /^(menfess2|confess2|menfes2|confes2)$/i

handler.limit = true
handler.private = true
export default handler
