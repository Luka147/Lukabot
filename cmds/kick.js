const Discord = require("discord.js");

module.exports = {
     title: "kick",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!kick",
            description: "Kicks a user"
        }
    ],
	run: async (client, message) => {
        let discordMember = "";
        if (message.mentions.members.first() != undefined) {
            discordMember = message.mentions.members.first();
        }
        if (!discordMember) message.reply("Please tag someone, !kick <tag>")  
        
        if (discordMember) {discordMember.kick('Optional reason that will display in the audit logs').then(() => {
            message.reply(`Successfully kicked ${discordMember.user.tag}`);
          }).catch(err => {
            console.error(err);
          });
        } else {
            message.reply('I was unable to kick the member');
        }
  }
};
