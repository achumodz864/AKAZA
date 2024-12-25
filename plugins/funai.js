const { commands, eypz } = require('../command'); 

eypz({
    pattern: "funai",
    desc: "Check Bot's Performance.",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if(!q) return await m.reply("_Enter a query for image !_")


let sng =('_Searching...!_');

const exyz = await conn.sendMessage(from, { text: sng }, { quoted: mek });


let endi = await fetch(`https://api-aswin-sparky.koyeb.app/api/image/pinterest?search=${q}`)


let js = await endi.json()
let res = js.result
var url = res.img



await conn.sendMessage(from, { image: { url: url } }, { quoted: mek })

const tick = ("✓")

await conn.sendMessage(from, { text: tick, edit: exyz.key });


} catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
