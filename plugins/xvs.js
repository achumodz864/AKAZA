const { commands, eypz } = require('../command'); 



eypz({
    pattern: "xvs",
    desc: "Check Bot's Performance.",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if(!q) return m.reply("_Enter a query !_");

var ing = ('_Searching...!_')

const search = await conn.sendMessage(from, { text: ing }, { quoted: mek });

var fek = await fetch(`https://raganork-network.vercel.app/api/xvideos/search?query=${q}`)
var data = await fek.json();
        let txt = `\n*XV SEARCH RESULTS*\n\n`;
      
        for (let i=1; i<11; i++){
  txt+=`
*TITLE* : ${data.result[i].title}> *DURATION* : ${data.result[i].duration}> *URL* : ${data.result[i].url}\n`
        }


await conn.sendMessage(from, { text: txt, edit: search.key });
      

} catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
