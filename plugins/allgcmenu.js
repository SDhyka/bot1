let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- Nomor

  let teks = 'Pilih dibawah kak ! o(〃＾▽＾〃)o'
const sections = [
   {
	title: `${htjava} SOUND MENU –––––––––·•`,
	rows: [
    {title: "GRUB BOT OFFICIAL ✅️", rowId: ".gcbot"},
	{title: "GRUB JB DYKK × RIFF¹", rowId: ".gcdykk"},
    {title: "GRUB JB ²", rowId: ".gc2"},
	{title: "GRUB JB ³", rowId: ".gc3"},
	{title: "GRUB JB ⁴", rowId: ".gc4"},
	{title: "GRUB JB ⁵", rowId: ".gc5"},
	{title: "GRUB JB ⁶", rowId: ".gc6"},
]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".owner nomor"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *GC JB/ANIME SERU* ${htka}`,
  buttonText: "Silahkan Pilih !",
  sections
}

  try {
    if (/(gcmenu)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['gcmenu']
handler.tags = ['main']
handler.command = /^(allgc|gcall|gcmenu|menugc|allmenugc)/i


export default handler
