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
	  const embed = new Discord.MessageEmbed() //start the embed message template
            .setTitle(":bust_in_silhouette: "+ message.author.username)
            .setColor(0x33cc33)
            .setFooter("Lukabot", client.user.avatarURL({ format: "png" }))
            .setThumbnail(message.author.avatarURL())
            .setTimestamp()
            .addField(":baby: Created at: ", message.author.createdAt)
            .addField(":family: Member of: ", message.guild.name + " since: " + message.author.joinedAt)
            .addField(":white_circle: Presence: ",+ message.author.presence)
            .addField(":medal: Roles:", message.author.roles.array(), true); //end the embed message template
	  await message.channel.send(embed);
  }
};  