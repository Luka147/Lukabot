const Discord = require("discord.js");

module.exports = {
     title: "unban",
     cooldown: 20,
     details: [
        {
            perms      : "everyone",
            command    : "!unban",
            description: "Unbans a user"
        }
    ],
	run: async (client, message,args) => {
    }
};