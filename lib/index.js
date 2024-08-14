// * personnalisé par 𝙎-𝙏𝞢𝞜.
// * Date de modification : [13/08/24].

const Config = require("../config");
const fs = require("fs");
const acrcloud = require(__dirname + "/class/init");

// Importations des fonctions du scraper
const {
  Insta,
  pinterest,
  adultvid,
  hentai,
  tlang,
  botpic,
  language,
  getString,
  wikimedia,
  toAudio,
  toPTT,
  toVideo,
  sync,
  syncgit,
  ffmpeg,
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  fancy,
  randomfancy,
  ringtone,
  styletext,
  isAdmin,
  isBotAdmin,
  createUrl,
  mediafireDl,
  mediafire,
  dare,
  truth,
  random_question,
  amount_of_questions,
  spu,         // Ajout de la fonction spu
  tagall       // Ajout de la fonction tagall
} = require("./scraper");

// Importations des fonctions du serialized
const {
  unixTimestampSecond,
  generateMessageTag,
  processTime,
  getBuffer,
  smdBuffer,
  fetchJson,
  astroJson,
  runtime,
  clockString,
  sleep,
  isUrl,
  getTime,
  formatDate,
  formatp,
  jsonformat,
  logic,
  generateProfilePicture,
  bytesToSize,
  getSizeMedia,
  parseMention,
  GIFBufferToVideoBuffer,
  smsg,
  callsg
} = require("./serialized");

// Importations des styles de texte
const {
  listall,
  strikeThrough,
  wingdings,
  vaporwave,
  typewriter,
  analucia,
  tildeStrikeThrough,
  underline,
  doubleUnderline,
  slashThrough,
  sparrow,
  heartsBetween,
  arrowBelow,
  crossAboveBelow,
  creepify,
  bubbles,
  mirror,
  squares,
  roundsquares,
  flip,
  tiny,
  createMap,
  serif_I,
  manga,
  ladybug,
  runes,
  serif_B,
  serif_BI,
  fancy1,
  fancy2,
  fancy3,
  fancy4,
  fancy5,
  fancy6,
  fancy7,
  fancy8,
  fancy9,
  fancy10,
  fancy11,
  fancy12,
  fancy13,
  fancy14,
  fancy15,
  fancy16,
  fancy17,
  fancy18,
  fancy19,
  fancy20,
  fancy21,
  fancy22,
  fancy23,
  fancy24,
  fancy25,
  fancy26,
  fancy27,
  fancy28,
  fancy29,
  fancy30,
  fancy31,
  fancy32,
  fancy33,
  randomStyle
} = require("./stylish-font");

// Importations des bases de données
const {
  sck1
} = require(__dirname + "/database/user");
const {
  sck
} = require(__dirname + "/database/group");
const {
  alive
} = require(__dirname + "/database/alive");

// Importations des schémas
const {
  pg,
  dbs,
  groupdb,
  userdb,
  alivedb,
  bot_
} = require(__dirname + "/schemes");

// Importations des plugins
const {
  cmd,
  smd,
  commands
} = require(__dirname + "/plugins");

// Importations des fonctions personnalisées
const {
  sendAnimeReaction,
  yt,
  sendGImages,
  AudioToBlackVideo,
  textToLogoGenerator,
  photoEditor,
  updateProfilePicture,
  randomeFunfacts,
  getRandom,
  generateSticker,
  forwardMessage,
  plugins,
  audioEditor,
  send,
  react,
  note,
  sendWelcome,
  aitts
} = require("./asta.js");

// Écouteur de messages
client.on('message', async (message) => {
  if (message.body.startsWith('!tagall')) {
    await tagall(client, message);
  }

  if (message.body.startsWith('!spu')) {
    await spu(client, message);
  }

  // Ajoutez d'autres commandes ici si nécessaire
});

// Exports des modules
module.exports = {
  yt,
  plugins,
  forwardMessage,
  updateProfilePicture,
  sendAnimeReaction,
  sendGImages,
  textToLogoGenerator,
  photoEditor,
  randomeFunfacts,
  AudioToBlackVideo,
  getRandom,
  generateSticker,
  audioEditor,
  send,
  react,
  note,
  sendWelcome,
  aitts,
  pg,
  dbs,
  bot_,
  alive,
  sck,
  smd,
  commands,
  sck1,
  Insta,
  pinterest,
  adultvid,
  hentai,
  tlang,
  botpic,
  language,
  getString,
  wikimedia,
  toAudio,
  toPTT,
  toVideo,
  sync,
  syncgit,
  ffmpeg,
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  fancy,
  randomfancy,
  ringtone,
  styletext,
  isAdmin,
  isBotAdmin,
  createUrl,
  mediafireDl,
  mediafire,
  dare,
  truth,
  random_question,
  amount_of_questions,
  unixTimestampSecond,
  generateMessageTag,
  processTime,
  getBuffer,
  smdBuffer,
  fetchJson,
  astroJson,
  runtime,
  clockString,
  sleep,
  isUrl,
  getTime,
  formatDate,
  formatp,
  jsonformat,
  logic,
  generateProfilePicture,
  bytesToSize,
  getSizeMedia,
  parseMention,
  GIFBufferToVideoBuffer,
  smsg,
  callsg,
  listall,
  strikeThrough,
  wingdings,
  vaporwave,
  typewriter,
  analucia,
  tildeStrikeThrough,
  underline,
  doubleUnderline,
  slashThrough,
  sparrow,
  heartsBetween,
  arrowBelow,
  crossAboveBelow,
  creepify,
  bubbles,
  mirror,
  squares,
  roundsquares,
  flip,
  tiny,
  createMap,
  serif_I,
  manga,
  ladybug,
  runes,
  serif_B,
  serif_BI,
  randomStyle,
  addCommand: cmd,
  groupdb,
  userdb,
  alivedb,
  prefix: Config.HANDLERS.includes("null") ? "" : Config.HANDLERS[0],
  Config,
  setting: Config,
  stor: async () => {
    return await JSON.parse(fs.readFileSync(__dirname + "/store.json", "utf8"));
  },
  fancytext: (_0x886db4, _0x52dd8f) => {
    _0x52dd8f = _0x52dd8f - 1;
    return listall(_0x886db4)[_0x52dd8f];
  },
  parsedJid: (text = "") => {
    return text.match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g) || [];
  },
  getAdmin: async (_0x5a768e, _0x59ffdf) => {
    const _0x874421 = await _0x5a768e.groupMetadata(_0x59ffdf.chat);
    let a = [];
    for (let _0x584ff9 of _0x874421.participants) {
      if (_0x584ff9.admin != null) {
        a.push(_0x584ff9.id);
      }
    }
    return a;
  }
};
  
