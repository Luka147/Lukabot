const Discord = require("discord.js");
const memes = require('memie-generator');

module.exports = {
     title: "meme",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!meme",
            description: "Get a random meme"
        }
    ],
	run: async (client, message, memes) => {
        
        console.log(memes.randomImages());
        console.log(memes.allImages);

        console.log(memes.randomWords());
        console.log(memes.allWords);
        return;

        const embed = new Discord.MessageEmbed()
        .setColor(0xffff66)
        .setTitle(":laughing:")
        .setAuthor(message.author.username)
        .setImage(memes.randomImages())
        .setTimestamp();

        try {
        message.channel.send(embed);
        }
        catch (e) {
        message.reply(`Couldn't send message because of: ${e}`)
        }


    }
};
