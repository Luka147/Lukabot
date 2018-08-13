const Discord = require("discord.js");

module.exports = {
     title: "ping",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!ping",
            description: "Check latency of the bot"
        }
    ],
	run: async (client, message) => {
    message.reply("Pong!");
  }
};
