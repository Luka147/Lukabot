const Discord = require("discord.js");

module.exports = {
     title: "kick",
     cooldown: 20,
     details: [
        {
            perms      : "Admin",
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
            message.reply("Couldn't kick the user, please check my permissions and try again")              
            console.error(err);
          });
        } 
  }
};
