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
          message.reply(`member cound: ${message.guild.members.array().length}`);
	
	  const embed = new Discord.MessageEmbed() //start the embed message template
            .setTitle("title")
            .setAuthor(message.author.username)
            .setColor(0x6441a5)
            .setDescription("description")
            .setFooter("[LOOOL]", client.user.avatarURL({ format: "png" }))
	    // picture as thumbnail
            //.setThumbnail()
            .setTimestamp()
            .setURL(`www.discord.js.org`)
            .addField("field1", "value1", false)
            .addField("member count", message.guild.members.array().length, false)
            .addField("field3", "value 3", true); //end the embed message template
	  await message.channel.send(embed);
  }
};
