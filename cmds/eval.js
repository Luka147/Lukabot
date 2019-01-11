const Discord = require('discord.js');
const config = require('./Config.json');

module.exports = {
  title:"eval",
  cooldown: 10,
  details: [
    {
      perms: "Owner",
      command: "<prefix>eval",
      description: "evaluation"
    }
  ],

  run: async (message,args) => {
       
    if(message.author.id !== config.ownerID) return;
      
    try {
      const code = args[1];
      let evaled = eval(code);
   
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`${err}`);
    }
  }
};