const Discord = require("discord.js");

module.exports = {
     title: "lettawi",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!lettawi",
            description: "Check latency of the bot"
        }
    ],
	run: async (client, message) => {
    message.reply("Lettawi peder");
    channel.send({
        files: ['https://i.imgur.com/0gqGRE0.png']
    })
    .catch(console.error);
  }
};
