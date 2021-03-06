const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./Config.json');

let configuration = {
  commands               : []
}

client.on('ready', () => {
  require('./events/ready').run(client, configuration);
  client.user.setActivity("!help for more info")
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {
  messageProcess(message);
});

async function messageProcess(message) {
  //nothing to do if the user is a bot
  if (message.author.bot) return;
  //split message by space
  let args = message.content.split(/[ ]+/);
  //nothing to do if the first letter is not config.prefix
  if (args[0].toLowerCase().substring(0, 1) != config.prefix) return;
  //split on first space to get the text after
  let text = message.content.split(/[ ](.+)/)[1];
  // command in extra variable (example "ping" in cmd).
  let cmd = message.content.startsWith(config.prefix) ? args[0].substring(1).toLowerCase() : undefined;
  
  if (message.channel.type != "dm") {
    // lets make sure the user who typed the message is fetched
    await message.guild.members.fetch(message.author.id).then(m => {
      message.member = m;
      switch (cmd) {
        case "ping":
          require("./cmds/ping.js").run(client, message);
          break;
        case "hello":
          message.reply("Hello there! :wave:");
          break;
        case "coins":
          message.reply("**You successfully recieved 10 000 coins on gamdom.**");
          break;

        case "h":
          require("./cmds/h").run(client, message, args, configuration);
          break;
        
        case "help":
          require("./cmds/help.js").run(client, message);
          break;
        case "dog":
          require("./cmds/dog.js").run(client, message);
          break;
        case "test":
          require("./cmds/test.js").run(client, message, text);
          break;
        case "lettawi":
          require("./cmds/lettawi.js").run(client, message);
          break;
        case "mrwoo":
          require("./cmds/mrwoo.js").run(client, message);
          break;
        case "puppy":
          require("./cmds/puppy.js").run(client, message);
          break;
        case "poll":
          require("./cmds/poll.js").run(client, message, text);
          break;
        case "meme":
          require("./cmds/meme.js").run(client, message);
          break;
        case "info":
          require("./cmds/info.js").run(client, message);
          break;
        case "user":
          require("./cmds/user.js").run(client, message);
          break;
        case "kick":
          require("./cmds/kick.js").run(client, message);
          break;
        case "ban":
          require("./cmds/ban.js").run(client, message);
          break;
        case "eval":
          require("./cmds/eval.js").run(client, message, config);
          break;
        case "admin":
          require("./cmds/help-admin.js").run(client, message);
          break;
        case "unban":
          require("./cmds/unban.js").run(client, message, args);
          break;
        case "memeit":
          require("./cmds/memeit.js").run(client, message, args);
          break;
        case "listroles":
          message.guild.roles.array().forEach(role => {
            message.channel.send(role.name + " - " + role.id);
          });
          break;
        default:
          message.reply(`command \`${cmd}\` not found`);
          break;
      }
      
      // delete the command so only the output is there
      message.delete().catch(console.error);
    
    });
  } else {
    //if someone dms your bot it will go in here
  }
}
client.login(config.token)