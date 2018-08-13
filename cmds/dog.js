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
    message.channel.send({ 
        files: ['https://giphy.com/gifs/doggo-Z3aQVJ78mmLyo']
    })
    .catch(console.error);
  }
};