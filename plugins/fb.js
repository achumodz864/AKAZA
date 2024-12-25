>const { commands, eypz } = require('../command');

eypz({
    pattern: "fb",
    desc: "dl fb Performance.",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {


if(!q) return m.reply("_Give a fb link for download...!_");


var ing = ('_Downloading...!_')

const search = await conn.sendMessage(from, { text: ing }, { quoted: mek });


let response = await fetch(`https://api-aswin-sparky.koyeb.app/api/downloader/fbdl?url={$q}`)

let resp = await response.json();

for (i of resp.data){
if (i.resolution === "360p (SD)") 



await conn.sendMessage(from, { video: { url: i.url } }, { quoted: mek })
}

var txt = "✓"
await conn.sendMessage(from, { text: txt, edit: search.key });

} catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
