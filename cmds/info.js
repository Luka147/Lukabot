const Discord = require("discord.js");

module.exports = {
     title: "Server info",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!info",
            description: "Prints out all server info"
        }
    ],
	run: async (client, message) => {
    message.guild.read();
    
  }
};
