
const Discord = require("discord.js");

module.exports = {
	title: "test",
 	perms: "Everyone",
 	commands: ["!test <Message>"],
 	description: ["test embed"],

 	run: async (client, message, text) => {
		if(text == undefined) {
			text = " ";
		}

		const embed = new Discord.MessageEmbed()
			.setColor(0x228b22)
			.setTitle("this is the title")
			.setAuthor(message.author.username, message.author.avatarURL(),)
			.setDescription(`${text}`)
			.setThumbnail(message.author.avatarURL())
			.setFooter('', client.user.avatarURL({ format: "png" }))
			.setTimestamp();
			
		try {
			message.channel.send(embed);
		}
		catch (e) {
			message.reply(`Couldn't send message because of: ${e}`)
		}
  }
};
