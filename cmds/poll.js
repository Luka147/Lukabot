
const Discord = require("discord.js");


module.exports = {
	title: "poll",
	cooldown: 20,
	details: [
		 {
				 perms      : "Everyone",
				 command    : "!poll <text>",
				 description: "start a poll"
		 }
 ],
 	run: async (client, message, text) => {
		if(text == undefined) {
			text = " ";
		}

		const embed = new Discord.MessageEmbed()
			.setColor(0x228b22)
			.setAuthor(message.author.username, message.author.avatarURL())
			.setTitle("Poll")
			.setDescription(`${text}`)
			.setTimestamp();
			
		message.channel.send(embed).then(message => {
			message.react("🤔")
		})
		
	}
};
