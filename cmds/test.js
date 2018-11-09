
const Discord = require("discord.js");

module.exports = {
	title: "test",
 	perms: "Everyone",
 	commands: ["!test <Message>"],
 	description: ["test embed"],

 	run: async (client, message, text) => {
		message.reply(`${text}`)
		message.react('🤔')
  
  }
};
