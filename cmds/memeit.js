const Discord = require("discord.js")
var Jimp = require('jimp')
const IMAGET_PATH = 'D:/github/Lukabot/Templates/'
const IMAGEG_PATH = 'D:/github/Lukabot/Generated/'
const TEMPLATE_FILE = '-template.png'
const NEW_FILE = '.png'
const quality = 60
let imageX
let imageY
let textX
let textY
let textA
let textB 
let textC
let textD 
let maxWidth
let textCount

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
      return message.reply("You did not include the memeName & the text. - !memeit <memeName> <text1 here> / <text2 here> / and so on.")
    let memeName = args[1];
    let memeText = "";
    for (i = 2; i < args.length; i++) memeText += args[i] + " ";
    
    let text = memeText.content.split(/[/]+/);

    let image = await Jimp.read(IMAGET_PATH + memeName + TEMPLATE_FILE).catch(e => {
        return console.log("couldnt read image" + e)
    })

    initDimensions();
    setDimensions(memeName);
    if (text.length != textCount)
      return message.reply(`This meme needs ${textCount} words/sentences - !memeit <memeName> <text1 here> / <text2 here> / and so on.`)
    if (imageX == 0 || imageY == 0)
      return console.log("MemeIt: Seems like you forgot to set the variables in setDimensions()")

    image.resize(imageX, imageY)
         .quality(quality);

    let font = await Jimp.loadFont(`D:/github/Lukabot/Font/memeit.fnt`).catch(e => {
        return console.log("couldnt get font" + e)
    })

    image.print(font, textX, textY, text[0], maxWidth);
    
    if (textA != 0 || textB != 0) {
      image.print(font, textA, textB, text[1], maxWidth);
    }

    if (textC != 0 || textD != 0) {
      image.print(font, textC, textD, text[2], maxWidth);
    }

    await image.writeAsync(IMAGEG_PATH + memeName + NEW_FILE).catch(e => {
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
    switch (memeName.trim()) {

        case "retarded":
          imageX  = 640
          imageY = 640
          textX = 350
          textY = 40
          textA = 0 
          textB = 0
          textC = 0
          textD = 0
          maxWidth = 260
          textCount = 1
          break;
        
        case "drake":
          imageX  = 717
          imageY = 717
          textX = 370
          textY = 80
          textA = 370
          textB = 440
          textC = 0
          textD = 0
          maxWidth = 300
          textCount = 1
          break;
          
        case "wesmart":
          imageX  = 640 
          imageY = 360
          textX = 200
          textY = 20
          textA = 200
          textB = 300
          textC = 0
          textD = 0
          maxWidth = 225
          textCount = 1
          break;
        
        case "fry":
          imageX  = 552
          imageY = 414
          textX = 100
          textY = 15
          textA = 100
          textB = 375
          textC = 0
          textD = 0
          maxWidth = 350
          textCount = 1
          break;
        
        case "distracted":
          imageX  = 1125
          imageY = 750
          textX = 630
          textY = 400
          textA = 870
          textB = 475
          textC = 220
          textD = 580
          maxWidth = 200
          textCount = 1
          break;
        
        case "buttons":
          imageX  = 600
          imageY = 908
          textX = 85
          textY = 135
          textA = 290
          textB = 90
          textC = 0
          textD = 0
          maxWidth = 180
          textCount = 1
          break;
        
        

        // this block for every new meme (gotta figure out the numbers with trying)
        
        //case "":
        //  imageX  = 
        //  imageY = 
        //  textX = 
        //  textY = 
        //  maxWidth =
        //textCount = 1
        // break;

        default:
          break;
      }
}

function initDimensions(){
  imageX  = 0
  imageY = 0
  textX = 0
  textY = 0
  maxWidth = 0
  textCount = 0
}

