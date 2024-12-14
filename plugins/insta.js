const config = require('../config')
const {eypz , commands} = require('../command')

eypz({
    pattern: "og",
    desc: "instagram.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{

if(!q){return m.reply("_Enter a instgram url !_")}



let res = await fetch(`https://api.devstackx.in/v1/igdl?url=${q}`);
			
		
let resp = await res.json()	
			
let hehe = await resp.data
let url =  await hehe[0].url
let utype = await hehe[0].type



let ing = await conn.sendMessage(from, {text:"_Downloading...!_"}, {quoted : mek });


if( utype === "video" ) {
 await conn.sendMessage(m.chat, { video: { url: url }, mimetype: 'video/mp4' })

return await conn.sendMessage(from, { text: "_Video Downloaded !_✅️", edit: ing.key });
				}

 await conn.sendMessage(from,{image: {url: url}},{quoted: mek})

return await conn.sendMessage(from, { text: "_Image Downloaded !_✅️", edit: ing.key });

}catch(e){
console.log(e)
reply(`${e}`)
}
})
