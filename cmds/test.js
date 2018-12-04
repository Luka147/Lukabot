
const Discord = require("discord.js");


module.exports = {
		title: "test",
		cooldown: 20,
		details: [
			 {
					 perms      : "Everyone",
					 command    : "!test",
					 description: "test react"
			 }
	 ],
 	run: async (client, message, text) => {
		message.reply(`${text}`)
		message.react('🤔')
  
  }
};
