let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *Indosat:* [${085838571629}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${085896661014}]
│ • *Gopay:* [${085838571629}]
│ • *Ovo:* [${XXXXXXXXXXXX}]
│ • *Link Aja:* [${XXXXXXXXXXXX}]
❏────
`.trim()
  m.reply(txt)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
