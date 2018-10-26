const Discord = require("discord.js")
var Jimp = require('jimp')
const IMAGET_PATH = 'D:/github/Lukabot/Templates/'
const IMAGEG_PATH = 'D:/github/Lukabot/Generated/'
const TEMPLATE_FILE = 'retarded-template.png'
const NEW_FILE = 'retarded.png'
const x  = 640
const y = 640
const maxWidth = x / 2 -24

module.exports = {
     title: "retarded",
     cooldown: 20,
     details: [
        {
            perms      : "everyone",
            command    : "!retarded",
            description: "Oh no it's retarded"
        }
    ],
  run: async (client, message) => {
    let text = message.content.split(/[ ](.+)/)[1];
    if (isEmpty(text))
      return message.reply("please provide a text - !retarded <text>")

    text = text.trim() // trim removes spaces on the beginning and the end

    let image = await Jimp.read(IMAGET_PATH + TEMPLATE_FILE).catch(e => {
        return console.log("couldnt read image" + e)
    })

    image.resize(640, 640)
         .quality(60);

    let font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).catch(e => {
        return console.log("couldnt get font" + e)
    })

    image.print(font, 350, 40, text, maxWidth);
    await image.writeAsync(IMAGEG_PATH + NEW_FILE).catch(e => {
        return console.log("error while writing file: " + e)
    })

    message.channel.send({
      files: [{
        attachment: IMAGEG_PATH + NEW_FILE,
        name: NEW_FILE
       }]
    }).catch(console.error);     
  }
}

function isEmpty(str) {
    return (!str || 0 === str.length);
  }
