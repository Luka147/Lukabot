const Discord = require("discord.js");

module.exports = {
     title: "ban",
     cooldown: 20,
     details: [
        {
            perms      : "Admin",
            command    : "!ban",
            description: "Bans a user"
        }
    ],
	run: async (client, message) => {
        let discordMember = "";
        if (message.mentions.members.first() != undefined) {
            discordMember = message.mentions.members.first();
        }
        if (!discordMember) message.reply("Please tag someone, !ban <tag>")  
        
        if (discordMember) {discordMember.ban('Optional reason that will display in the audit logs').then(() => {
            message.reply(`Banned ${discordMember.user.tag} ID: ${discordMember.id} from ${message.guild.name}`);
          }).catch(err => {
            message.reply("Couldn't ban the user, please check my permissions and try again")              
            console.error(err);
          });
        } 
  }
};
