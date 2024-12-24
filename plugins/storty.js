const config = require('../config')
const {eypz , commands} = require('../command')

eypz({
    pattern: "story",
    desc: "instagram.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{


    if (!q) {

        return await m.reply('_Enter a Instagram Username !_');

    }


let resi = await fetch(`https://api.devstackx.in/v1/igstory/username?id=${q}`);
		
let resix = await resi.json()
	
let hi = await resix.data

			for (let i of hi) {



let ing = await conn.sendMessage(from, {text:"_Downloading...!_"}, {quoted : mek });

await conn.sendMessage(from,{[i.type]: {url: i.url}},{quoted: mek})

await conn.sendMessage(from, { text: "_Story Downloaded !_✅️", edit: ing.key });
			}
}catch(e){
console.log(e)
reply(`_Error !_\n\n_No data available. The user might have a private account or there  is no available story.!_`)
}

})
