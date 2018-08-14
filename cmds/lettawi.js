const Discord = require("discord.js");

module.exports = {
     title: "lettawi",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!lettawi",
            description: "Picture of an idiot"
        }
    ],
	run: async (client, message, text) => {
        
        const embed = new Discord.MessageEmbed()
        .setColor(0xFF69B4)
        .setTitle("Lettawi")
        .setAuthor(message.author.username)
        .setDescription('Gay')
        .setImage('https://i.imgur.com/0gqGRE0.png')
        .setTimestamp();
        
        try {
        message.channel.send(embed);
        }
        catch (e) {
        message.reply(`Couldn't send message because of: ${e}`)
        }
  }
};
