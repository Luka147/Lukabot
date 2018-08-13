const Discord = require("discord.js");

module.exports = {
     title: "help",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!help",
            description: "Shows all commands from the bot"
        }
    ],
	run: async (client, message) => {
    message.reply('!help and !ping');
  }
};

