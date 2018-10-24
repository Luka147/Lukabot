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
    let userID = args[1]
    if (isEmpty(userID))
      return message.reply("You gotta provide me the ID to use: \`!unban <ID>\`")

    // here you have the potential id in userID
  }
}

function isEmpty(str) {
  return (!str || 0 === str.length);
}