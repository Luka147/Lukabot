const Discord = require("discord.js");
let fs = require("fs");

module.exports = {
     title: "ready",
     details: [
        {
            perms      : "xxxx",
            command    : "xxxx",
            description: "Activated whenever the bot starts"
        }
    ],

  run: async (client, configuration) => {

    // todo maybe have to use ../cmds
    fs.readdir('./cmds', (err, files) => {
        for (let i = 0; i < files.length; i++) {
            let info = require(`../cmds/${files[i]}`);
            if (!info.title || !info.details) continue;
            for (let j = 0; j < info.details.length; j++) {
                configuration.commands.push({
                    title      : info.title,
                    cooldown   : info.cooldown,
                    perms      : info.details[j].perms,
                    command    : info.details[j].command,
                    description: info.details[j].description
                })
            }
        }
    });


  }
};
