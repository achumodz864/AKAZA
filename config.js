const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/eypz/1727903040279_XEWG3FC67.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*I'm Still ALIVE🌸*",
OWNER_NAME: process.env.OWNER_NAME || "Unknown-404",
MENU: process.env.MENU || "https://ironman.koyeb.app/ironman/anime/waifu?type=long_hair",
BOT_NAME: process.env.BOT_NAME || "NEXTRO-MD",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
wait: "⏳",
done: "✅",
fail: "❌"
};
