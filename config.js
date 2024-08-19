
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sten10royal@gmail.com";
global.location = "Port-au-Prince,Haïti.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "50931461936@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3e1d82ab139d29975cad4.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50931461936";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "trur";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/994a791a5a601fe82d480.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||
Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURpWFRUWUM5Y1piWDh2NDJZeW41N1lQRTJTQ0NYTCtIYTZGcGtJQmdWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmxnblRmeVQ4VXBVNXJRS1RTRmVJZ1BTQUlad0VhRmFGUm9TOVZJN3EyYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QXhKS21nbWhhcXFVQVVsaVJoV1M5bUpHT21Rb0ZRSjhnVmR2dTBPUjBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWSWpsS0JES2tEQkZ2QkJQT0wvaHJWN1pGSHJ3bkl2RGRxMEtvZ0VzNDJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRKTWZVNUV0dXU5RldtSG56dE5jS0JRQVdidjdkYnl4YWt5QUNoRm54M1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlXRVVEN1ZrM2YyUHFwZiszUllwNVR0MURRYnlXSDYyeWt5NDZ1K1RmMTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUFnYXUzL2wrRmdLQ3M4U2MyZ1RlNmZueHM5b1l1WU9XaDhpc0F0VnprWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTJRVjNnQmtGZ2szTExjbGlLYzY3YUVadE9vQUlxZVVqL2NxcnVvZytVbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9zMEE5MGlYVU04UkpDR1gza2pJaXo5VG9LMVFuYzRzdDc2OEwvUnNWc1lSeFpwSFZwS0UvcWtKNVVkWVduY0RCWWtlYlM3K3B4NEIyaDNiT21RTERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiMkxaOUllUXFEMVZEVk9VL2pxbzlxWmVpMnhlTWs0ZEhnL1NPck5oUVVGTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTmtXcFF0NW9SR203bktuVnFFanZUZyIsInBob25lSWQiOiIyZWVjMGZjMi01MTI1LTRhNWQtYTUyOS1lYmQ5MzRiMjYyOTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMTk3RS9YcFNtbTNXV2JZUFdUb2RpKzFCbDdZPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtenR6NmhubGpTQUtmcGF3eVFKbGQ3TVhkZG89In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZk56TnNHRVBubGk3WUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXeEJMUStpb1p6ZmVicTRkdzFQNzJpYmxhcWFMZnVjaEY1VnZDbzByTjFrPSIsImFjY291bnRTaWduYXR1cmUiOiJvVjRZWC9hK2lrRWxYOHBFTVI5ak1aM1VFbEc4c0daWkZSSU1vblVmalBJbUZZSDFZSys5RzBsYmNSYTJxUXlJMDdMZzBNTUdxUmd4TlBXa3I2YXREUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV2JKUE9aRHdxdDlFazBDV1BwTnBrSVRoWXRFZkpuVkRBQXNCaGF0ci9NVWZlZWNacHk2SnVKOEVRNVI2bUJRUVF4d2dKNnBoVkphaFVsUWxIUW9GQVE9PSJ9LCJtZSI6eyJpZCI6IjUwOTQ5MTQzOTIyOjJAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDkxNDM5MjI6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWc1FTMFBvcUdjMzNtNnVIY05UKzlvbTVXcW1pMzduSVJlVmJ3cU5LemRaIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MDUyMjI5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURaUyJ9





  


//___________________________________________________________________________________________________


  
 Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFKSU9VUUswMzh1VFlDMGRqVkJibG9paTNERVZzWmE4WSt0b0JucCsyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURLaUlOZDdzWnJ2Zm10dkVjek16VlV1S29oM1VibHlid3RLcjZFOHFuND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTHlWRjkrQ3FLdzU3bFcxSkoxeFYyNnVJTi9VWEFnTlgwbU51Nk9lU1VzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3b0kxajA3UldpcEd5VHpBcFBLUHpHZC9TSWRsZUZlRXFoTzZaKzNRNWs0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9Jcm9vNFNJOHpsN1YzdGFoMkpkdHVENExzM3pBZUpSNytyZXNMa3c4a0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFPeXpJYUY5MVh2S3l1cWFqeExLRFU1WVZRcVdpQ1hMZjBzT3psMkRybGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0JKQzJmVE1QNHVuWHp5M3NNQjJJc3NXbk1wRm8wbThuNFNGY0UxUFRrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpMdTRYYkdMOUFqR3dDQTM0WHhheFdCMFYrR25sMVIrc3llK2UyVlF5UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtNekNhaFJtZWtxbzA3Q0E0dE5kR3doczFxdlFSa1ZJcnRTTzhaMkRmem4zUDFJYjluUERPZ2ZjR1hBV1A5d2xyNUhlY2R5Z2NHeWZwcUJsenRJR0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJ5dEkwZG1DUXZNTnJPNS81YWZacGYzSWdtWGJnODBPblJGTUxabDBvd3VzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQ5MTQzOTIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjAwODA4MzIyNTMwRTM3MUQzQzhDQTNBNUMwRkVDMjNEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQwNDQ2MDV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldRaVZNSDY0UURDRWNJOTN3bm15R0EiLCJwaG9uZUlkIjoiZWIzNGE2OTktNGE3ZC00ZjVjLWI5YTgtNjJlNzU2YzZlZWU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZaNXY2WFIxRlBxcktqWXZqd1Z5blJ3S3pSOD0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHp5dFJwWGx1Zk9RZTZYMWpGeUJXc0tvSENFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGJOek5zR0VLdXFpN1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV3hCTFEraW9aemZlYnE0ZHcxUDcyaWJsYXFhTGZ1Y2hGNVZ2Q28wck4xaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNEdMbklYRXJnR0NVUGQzSVBjK0p1akZQSjdYVU5jeXdyTmYzMGoyekR3c0dvWmlNMm54TG0zR0dVVGI1ZXN5ZXFwSFF0cEU0VnkyUFcyOUl4Y0FPREE9PSIsImRldmljZVNpZ25hdHVyZSI6InhtT0JkaFNGRGhjVE9id2M2OU5Tek1WM2dFWDVXUEkwUnBsNlVrS2ZldHNyQzd2Y2NLSk1Dd2FBdEZ4SmFac0xsWXN1Nmd3M0NOZndrRkZkK3dqWURRPT0ifSwibWUiOnsiaWQiOiI1MDk0OTE0MzkyMjoxQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQ5MTQzOTIyOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnNRUzBQb3FHYzMzbTZ1SGNOVCs5b201V3FtaTM3bklSZVZid3FOS3pkWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDA0NDYwMX0=
 Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𝙎-𝙏𝞢𝞜*",
  author: process.env.PACK_AUTHER || "DRK-ST-MD ",
  packname: process.env.PACK_NAME || "𝙎-𝙏𝞢𝞜",
  botname: process.env.BOT_NAME || "DRK-ST-MD",
  ownername: process.env.OWNER_NAME || "𝙎-𝙏𝞢𝞜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
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
