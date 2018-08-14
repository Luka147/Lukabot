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
        
        //console.log(memes.randomImages());
        console.log(memes.allImages);

        //console.log(memes.randomWords());
        console.log(memes.allWords);
	let test = await memes.randomImages();
	let test2 = await memes.randomWords();
	console.log("test: " + test);
        console.log("test2: " + test2);
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
