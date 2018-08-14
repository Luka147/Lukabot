const Discord = require("discord.js");

module.exports = {
     title: "help",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!help",
            description: "Shows all commands from the bot"
        }
    ],
	run: async (client, message) => {
        
        const embed = new Discord.MessageEmbed()
        .setColor(0x3399ff)
        .setTitle("Help")
        .setAuthor(message.author.username)
        .setDescription(`The cmds are !help, !ping, !mrwoo, !lettawi, !dog. `)
        .setTimestamp();
        
        try {
        message.channel.send(embed);
        }
        catch (e) {
        message.reply(`Couldn't send message because of: ${e}`)
        }
  }
};

