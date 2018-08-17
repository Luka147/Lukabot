const Discord = require("discord.js");

module.exports = {
     title: "User info",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!user",
            description: "Prints out all user info"
        }
    ],
	run: async (client, message) => {
        
        let discordMember = "";
        if (message.mentions.members.first() != undefined) {
        discordMember = message.mentions.members.first();
        }
        if (!discordMember) discordMember = message.member;   
        
        const embed = new Discord.MessageEmbed() //start the embed message template
            .setTitle(discordMember.user.username)      
            .setColor(0x33cc33)
            .setFooter("Lukabot", client.user.avatarURL({ format: "png" }))
            .setThumbnail(discordMember.user.avatarURL())
            .setTimestamp()
            .addField(":baby: Created at: ", discordMember.user.createdAt)
            .addField(":family: Member of: ", message.guild.name + " since: " + discordMember.joinedAt)
            .addField(":white_circle: Presence: ", discordMember.presence.status)
            .addField(":medal: Roles:", discordMember.roles.array("\n"), true); //end the embed message template
	    await message.channel.send(embed);
    }
};  