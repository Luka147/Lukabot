const Discord = require("discord.js");

module.exports = {
     title: "mrwoo",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!mrwoo",
            description: "Picture of an idiot v.2"
        }
    ],
	run: async (client, message, text) => {
        
        const embed = new Discord.MessageEmbed()
        .setColor(0xFF69B4)
        .setTitle("Mrwoo")
        .setAuthor(message.author.username)
        .setDescription('Istuč čete')
        .setImage('https://i.imgur.com/BiDwhlc.jpg')
        .setTimestamp();
        
        try {
        message.channel.send(embed);
        }
        catch (e) {
        message.reply(`Couldn't send message because of: ${e}`)
        }
  }
};
