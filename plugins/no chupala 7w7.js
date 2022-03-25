let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/no chupala.mp3'
conn.sendFile(m.chat, vn, 'no chupala.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /no chupala|No chupala|nochupala|Nochupala/
handler.command = new RegExp
module.exports = handler
