const Discord = require("discord.js");
var Jimp = require('jimp');

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
        Jimp.read('C:/Users/Luka/Desktop/927.png')
        .then(image => {
            image.resize(640, 640)
            image.quality(60) // set JPEG quality
            Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {
                image.print(font, 350, 150, 'Hello world!')
            })
            image.write('C:/Users/Luka/Desktop/retarded.png'); // save
        })
        .catch(err => {
          console.error(err);
        });
        message.channel.send({
            files: [{
              attachment: 'C:/Users/Luka/Desktop/retarded.png',
              name: 'retarded.png'
            }]
          })
            .then(console.log)
            .catch(console.error);     
  }
};
