const {eypz , commands} = require('../command')



eypz({
    pattern: "yplay",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return m.reply("_Enter a song name!_\n_Eg:- play starboy_")


const dls = '_Searching...!_';
     const sdl =  await conn.sendMessage(from, { text: dls, quoted : mek });

const fg = require('api-dylux')
const yts = require('yt-search')


const search = await yts(q)
const data = search.videos[0];
const yturl = data.url
const st = data.title
const length = data.timestamp

const msg_dl =  `_Downloading :  ${st} , *${length}*_`

     const dl_msg =  await conn.sendMessage(from, { text: msg_dl , edit: sdl.key });
        






let down = await fg.yta(yturl)
let durl = down.dl_url

return durl
return await conn.sendMessage(from,{audio: {url:durl},mimetype:"audio/mpeg"},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})
