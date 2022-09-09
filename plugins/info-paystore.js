let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '3'
let sn = '5'
let ss = '7'
let sp = '10'
let sv = '6'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _${sh}k/GRUB (1 HARI)_
┊⫹⫺ *Standar:* _${sn}k/GRUB (1 MINGGU)_
┊⫹⫺ *Normal:* _${ss}k/GRUB (1 BULAN)_
┊⫹⫺ *Pro:* _${sp}k/GRUB (PERMANEN)_                                                      
┊⫹⫺ *Promo ❗️:* = _${sv}k/GRUB + GARANSI (PROMO PERMANEN)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _${ph}k (30 HARI)_
┊⫹⫺ *Normal:* _${pn}k (60 HARI)_
┊⫹⫺ *Pro:* _${pp}k (90 HARI)_
┊⫹⫺ *Vip:* _${pv}k (120 HARI)_
┊⫹⫺ *Permanent:* = _${ppm}k (Unlimited)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa Telkomsel:* [${ppulsa}]
• *Dana:* [${pdana}]
• *Gopay:* [${pgopay}]
• *Ovo:* [${povo}]
• *Link Aja:* [${plinkaja}]

–––––– *🐾 Kebijakan* ––––––
*JIKA DIBUAT MAIN² KITA BLACKLIST + DENDA + KENON*
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (PERHARI)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (PERMINGGU)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (PERBULAN)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (PERMANEN)' },
	{title: "🔖 PROMO (SEPTEMBER)", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (PERMANEN)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* HEMAT • Premium', description: 'PRICE: ' + ph + 'k (30 HARI)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* NORMAL • Premium', description: 'PRICE: ' + pn + 'k (60 HARI)' },
	{title: "🌟 PRO", rowId: '.order *Paket:* PRO • Premium', description: 'PRICE: ' + pp + 'k (90 HARI)' },
	{title: "🌟 VIP", rowId: '.order *Paket:* VIP • Premium', description: 'PRICE: ' + pv + 'k (120 HARI)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* PERMANENT • Premium', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
