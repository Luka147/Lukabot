const Discord = require("discord.js");

module.exports = {
     title: "Server info",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!info",
            description: "Prints out all server info"
        }
    ],
	run: async (client, message) => {
	  const embed = new Discord.MessageEmbed() //start the embed message template
            .setTitle(":computer: "+ message.guild.name)
            .setAuthor(message.author.username)
            .setColor(0xff2424)
            .setDescription("Created at: "+ message.guild.createdAt)
            .setFooter("Lukabot", client.user.avatarURL({ format: "png" }))
	        // picture as thumbnail
            //.setThumbnail()
            .setTimestamp()
            .addField(":crown: Server owner: ", message.guild.owner, false)
            .addField(":family: Member count: ", message.guild.members.array().length, false)
            .addField(":medal: Roles:", message.author.roles.name.array(), true); //end the embed message template
	  await message.channel.send(embed);
  }
};
