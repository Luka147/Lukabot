const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports = {
     title: "puppy",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!puppy",
            description: "Get a random puppy"
        }
    ],
	run: async (client, message) => {
    randomPuppy()
      .then(url => {
          const embed = new Discord.MessageEmbed()
          .setColor(0xFF69B4)
          .setTitle("Isn't it cute :heart_eyes:")
          .setAuthor(message.author.username)
          .setTimestamp();
  
          try {
          message.channel.send(embed);
          }
          catch (e) {
          message.reply(`Couldn't send message because of: ${e}`)
          }

          files: [url]
        }).catch(console.error);
      })
    }
};
