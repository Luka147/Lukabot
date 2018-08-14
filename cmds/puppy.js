const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports = {
     title: "puppy",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!puppy",
            description: "Get a random puppy"
        }
    ],
	run: async (client, message) => {
    randomPuppy()
    .then(url => {
      message.channel.send( {
        files: [url]
      }).catch(console.error);
    })
  }
};
