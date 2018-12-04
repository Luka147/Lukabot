/**
 * ! Help command
 * 
 * ? Well... Show the information of the commands? Hehe
 */
const Discord = require('discord.js');

module.exports = {
     title: "Help",
     cooldown: 1,
     details: [
        {
            perms      : "Everyone",
            command    : "<prefix>help",
            description: "Shows the help menu"
        },
        {
          perms      : "Everyone",
          command    : "<prefix>help <command>",
          description: "Shows the help menu of a specific command"
      }
    ],

    run: async (client, message, args, configuration) => {

        if (args.length === 1) {
            let a = configuration.commands;
            let help = {
                everyone : [],
                admin    : []
            }

            for (let i = 0; i < a.length; i++) {
              if (!help[a[i].perms.toLowerCase()].includes(a[i].title)){
                help[a[i].perms.toLowerCase()].push(a[i].title);
              }
            }

            const emb = new Discord.MessageEmbed()
              .setColor([70, 139, 204])
              .setAuthor("Help command", client.user.displayAvatarURL())
              //.setFooter('Private message ".help <Command>" for details')
              .setFooter(`Execute "!help <Command>" for details`)
              if (help.everyone.length  !== 0) emb.addField("Everyone commands", help.everyone.join("\n"))
              if (help.admin.length     !== 0) emb.addField("Admin commands", help.admin.join("\n"))
              message.channel.send(emb).catch(e => { console.log(e) });

        } else if (args.length === 2) {

          //let filtered = configuration.commands.filter(c => c.title.toLowerCase().includes(args[1].toLowerCase()));
          let filtered = configuration.commands.filter(c => c.title.toLowerCase() === (args[1].toLowerCase()));
          if (filtered.length > 0) {
            const emb = new Discord.MessageEmbed()
            .setColor([70, 139, 204])
            .setAuthor("Help command: " + args[1], client.user.displayAvatarURL())
            let fieldAdded = false;
            for (let i = 0; i < filtered.length; i++) {
              fieldAdded = true;
              emb.addField(filtered[i].command, `${filtered[i].description}\n\`[${filtered[i].perms}]\``);
            }
            if (!fieldAdded) return;
            message.channel.send(emb).catch(e => { console.log(e) });
          }
        }
    }
}
