
const Discord = require("discord.js");

module.exports = {
     title: "testsplit",
     cooldown: 20,
     details: [
        {
            perms      : "Everyone",
            command    : "!testsplit",
            description: "Split test"
        }
    ],
	run: async (client, message) => {
        
        let text = message.content.split(/[/]+/);
        message.reply(`text1: ${text[0]} \n text2: ${text[1]} \n text2: ${text[2]} \n text3: ${text[3]} \n text4: ${text[4]} \n`)
  }
};

