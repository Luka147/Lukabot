const Discord = require('discord.js');

module.exports = {
  details: [
      {
          perms      : "BotOwner",
          command    : "<prefix>eval evalText",
          description: "Execute artibrary javascript code (bot owner only)"
      }
  ],

  run: async (client, message, config) => {
    
    client.clean = async (text) => {
      if (text && text.constructor.name == "Promise")
          text = await text;
      if (typeof evaled !== "string")
          text = require("util").inspect(text, {
              depth: 1
          });

      text = text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203))
          .replace(config.token, "Nibba you tried");

      return text;
    };
    
    if (message.author.id !== config.ownerID)
      return;

    message.content = message.content.replace(/(?:\r\n|\r|\n)/g, ' ');
    let text = message.content.split(/[ ](.+)/)[1];
    text = text.trim().split(' ');

    const code = text.join(" ");
    try {
      const evaled = eval(code);
      const clean = await client.clean(evaled);
      message.channel.send(`\`\`\`js\n${clean}\n\`\`\``).catch(e => { });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${await client.clean(err)}\n\`\`\``).catch(e => { });
    }
  }
}
