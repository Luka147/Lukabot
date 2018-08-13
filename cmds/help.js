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
    const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Help')
        // Set the color of the embed
        .setColor('0xae347b')
        // Set the main content of the embed
        .setDescription('Hello, this is a slick embed!');
         // Send the embed to the same channel as the message
         message.channel.send(embed);
  }
};

