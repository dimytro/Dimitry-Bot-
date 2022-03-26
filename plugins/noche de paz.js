let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Noche.mp3'
conn.sendFile(m.chat, vn, 'Noche.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /siu navideño|Siu navideño|siunav|Siunav/
handler.command = new RegExp
module.exports = handler