const Discord = require("discord.js")
var Jimp = require('jimp')
const IMAGET_PATH = 'D:/github/Lukabot/Templates/'
const IMAGEG_PATH = 'D:/github/Lukabot/Generated/'
const TEMPLATE_FILE = '-template.png'
const NEW_FILE = '.png'
const quality = 60
let imageX  = 0
let imageY = 0
let textX = 0
let textY = 0
let maxWidth = 0

module.exports = {
     title: "memeit",
     cooldown: 20,
     details: [
        {
            perms      : "everyone",
            command    : "!memeit <memeName> <text here>",
            description: "Meme it !"
        }
    ],
  run: async (client, message, args) => {
    if (args.length < 3)
      return message.reply("You did not include the memeName & the text. - !memeit <memeName> <text here>")
    let memeName = args[1];
    let text = "";
    
    for (i = 2; i < args.length; i++) {
        text += args[i] + " ";
    }

    let image = await Jimp.read(IMAGET_PATH + memeName + TEMPLATE_FILE).catch(e => {
        return console.log("couldnt read image" + e)
    })

    setDimensions(memeName);
    if (imageX == 0 || imageY == 0)
      return console.log("MemeIt: Seems like you forgot to set the variables in setDimensions()")

    image.resize(imageX, imageY)
         .quality(quality);

    let font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).catch(e => {
        return console.log("couldnt get font" + e)
    })

    image.print(font, textX, textY, text, maxWidth);
    await image.writeAsync(IMAGEG_PATH + NEW_FILE).catch(e => {
        return console.log("error while writing file: " + e)
    })

    message.channel.send({
      files: [{
        attachment: IMAGEG_PATH + memeName + NEW_FILE,
        name: memeName + NEW_FILE
       }]
    }).catch(console.error);     
  }
}

function setDimensions(memeName) {
    switch (cmd) {

        case "retarded":
          imageX  = 640
          imageY = 640
          textX = 350
          textY = 40
          maxWidth = imageX / 2 -24
          break;

        // this block for every new meme (gotta figure out the numbers with trying)
        
        //case "":
        //  imageX  = 
        //  imageY = 
        //  textX = 
        //  textY = 
        //  quality = 
        //  maxWidth =
        // break;

        default:
          break;
      }
}

