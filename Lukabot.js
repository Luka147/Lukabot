const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./Config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.bot) return;
  let args = msg.content.split(/[ ]+/);
  if (args[0].toLowerCase().substring(0, 1) != config.prefix) return;
  if (msg.content === `${config.prefix}ping`) {
    msg.reply('Pong!');
  }
});

client.login(config.token);