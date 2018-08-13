const Discord = require("discord.js");

module.exports = {
     title: "roles",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!roles",
            description: "Lists all roles from a certain discord server"
        }
    ],
	run: async (client, message) => {
    message.guild.read();
    
  }
};
