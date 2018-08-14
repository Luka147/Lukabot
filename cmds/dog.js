const Discord = require("discord.js");

module.exports = {
     title: "dog",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!dog",
            description: "Prints a hecking good boy doggo"
        }
    ],
	run: async (client, message) => {
       
        const embed = new Discord.MessageEmbed()
        .setColor(0xe6e600)
        .setTitle("Wowee")
        .setAuthor(message.author.username)
        .setImage('https://i.imgur.com/RWE7EFP.png')
        .setTimestamp();
        
        try {
        message.channel.send(embed);
        }
        catch (e) {
        message.reply(`Couldn't send message because of: ${e}`)
        }
    }    
};