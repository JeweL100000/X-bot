//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidpromise2003@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Mek-d1/X-bot";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VarIiQL5a24AU5ZCVV0G";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VarIiQL5a24AU5ZCVV0G";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/mx0z4n.jpg";
global.devs = "2349133354644";
global.sudo = process.env.SUDO || "12567980814";
global.owner = process.env.OWNER_NUMBER || "2349133354644";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/mx0z4n.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2347013349642,234xxxxx";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://x-bot-session-generator.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0tMQVI0ZjRZUGZUL0YyMFFlMHg3d0ZFSjFjYWpEMzRoQytkMm1RWG0xST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1FWR1ZJT2d3cXcvTHp2Q1IyQzJPK0dBRENKa2RybndqMmhTTjNBWmJFUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVT0tPMlNjTXdaSWR6U2tJRGhyK0dHQWRUdUlZUVlXeG9aeVcvU0pDaUdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDbHlEMTJHelpVb1JIUnZGbHlvc1o1OGZDYS9JVlNMWktzSFRxRC80Smo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldLZEVic2NuSHpwZ1BLU2xFQjB4RjA4NjdMR2NwQ1pRcUFoekRxK1lMMzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllxN0RiMG5aNWhYRHJGOU9MOURDaDhReUFuU2pEMTR0dVFON0x1a0NXM1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1LL25WZ01Fc04vekpXVkU0SVZEV3VJMkU1R0pwMHpTWGlNTjVPTTdFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidE1IdTFEaXprN3hJTG9vRjk5SGRtUkpHcHdvR1Z6V3NnUm5KdVFpVjNqbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUzT1lhUjZFZzRURWNYRDhqcmdxM0N2MFVsd1R5cUJlUDZUejJJWElHYi9zTW1BL3ZqL2QreFgvdHZubVlIUUZmWDB1R2REY2FIMXVxa0pybmJ2YUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJtT093Y0lzdXZGZnNqRDdIMFZIeWxHMFg5TXhYSmpTMkRnd2NRNHdZMC9ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuOHA5c2JHT1RscU1UZ0gzMDE5ck1nIiwicGhvbmVJZCI6IjBmMjQ0NjQ2LWY3NGQtNGYyYi04ZDU2LTk0NmQwODNlZWMyZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RGRPUU1vWXlkcDR5RFdqYmNkM1pvNHJYMVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHhEVUlhR2NaeGs0azEvOGIzWXRabFlEdXMwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhQN1I4NTQ5IiwibWUiOnsiaWQiOiIyMzQ5MDMxNTE3NzM0OjYyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKQ21nTUFIRU1UOHNyd0dHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5azYwV3ZkVHY0UWpic3hpZUpPUXVBSkpvVHkvNTRZeGd3eWF4UzhRWkJZPSIsImFjY291bnRTaWduYXR1cmUiOiJGakFXQi8zRjBoT0ZEQXhSUmtTR0V6dmpzMFVnUVp4UGhKQk11Ymxnb1pZVXhYU3l3U25PRE5xU0dERlk4WmZtR2tadFB5SWpFcndxRTM3YmoyTkhEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMlBBT2EyQnhOTlpKZGRRL2ZKM1VtUzZ5bnM5eWZpakpzRVpGMHFrRlM2WUtWR0dSWVlwVjEzYjdCU3BDQzgvVXVYRFpwS0sxVmZxc0NoWFZhdWxtQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDMxNTE3NzM0OjYyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZaT3RGcjNVNytFSTI3TVluaVRrTGdDU2FFOHYrZUdNWU1NbXNVdkVHUVcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzcyNzcwMTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRjJYIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©X-:bot",
  author: process.env.PACK_AUTHER || "X-bot",
  packname: process.env.PACK_NAME || "",
  botname: process.env.BOT_NAME || "X-bot",
  ownername: process.env.OWNER_NAME || "-X-",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
