const Discord = require("discord.js");

module.exports = {
     title: "admin",
     cooldown: 20,
     details: [
        {
            perms      : "Admin",
            command    : "!admin",
            description: "Shows admin commands"
        }
    ],
	run: async (client, message) => {
        
        const embed = new Discord.MessageEmbed()
        .setColor(0x3697ff)
        .setTitle("Admin")
        .setAuthor(message.author.username)
        .setDescription(`The cmds are \n **!kick** - Kicks tagged user :boot: \n **!ban** - Bans tagged user \n **!unban** - Unbans user with userID`)
        .setTimestamp();
        
        try {
        message.channel.send(embed);
        }
        catch (e) {
        message.reply(`Couldn't send message because of: ${e}`)
        }
    }
};