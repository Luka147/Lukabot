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
        .setDescription(`The cmds are \n **!help** - help menu \n **!ping** - plays ping pong with you \n **!user or !user <tag>** - shows users info \n **!mrwoo** - idiot v.2 \n **!lettawi** - idiot v.1 \n **!dog** - Wowee \n **!puppy** - displays a random dog pic \n **!coins** - gives coins `)
        .setTimestamp();
        
        try {
        message.channel.send(embed);
        }
        catch (e) {
        message.reply(`Couldn't send message because of: ${e}`)
        }
  }
};

