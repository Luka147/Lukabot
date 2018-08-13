const Discord = require("discord.js");

module.exports = {
     title: "dog",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!dog",
            description: "Prints a hecking good boy doggo"
        }
    ],
	run: async (client, message) => {
    message.reply("Doggo is in the progress of making");
  }
};