let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Grito de otaku.mp3'
conn.sendFile(m.chat, vn, 'Grito de otaku.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /grito otaku|Grito otaku|no te exites|gaaa/
handler.command = new RegExp
module.exports = handler
