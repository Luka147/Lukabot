const Discord = require("discord.js");

module.exports = {
     title: "unban",
     cooldown: 20,
     details: [
        {
            perms      : "everyone",
            command    : "!ban",
            description: "Unbans a user"
        }
    ],
	run: async (client, message) => {
        let discordMember = "";
        if (message.mentions.members.first() != undefined) {
            discordMember = message.mentions.members.first();
        }
        if (!discordMember) message.reply("Please tag someone, !unban <tag>")  
        
        if (discordMember) {discordMember.unban('Optional reason that will display in the audit logs').then(() => {
            message.reply(`Successfully unbanned ${discordMember.user.tag}`);
          }).catch(err => {
            message.reply("Couldn't unban the user, please check my permissions and try again")              
            console.error(err);
          });
        } 
  }
};