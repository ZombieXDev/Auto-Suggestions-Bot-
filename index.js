const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log(`Connected in ${client.guilds.cache.size} Server`);
  console.log(`Uses it ${client.users.cache.size} 
Server`);
});


client.on('message', function(message) {
let args = message.content.split(" ").slice('').join(" ");
if(message.author.bot)return;
const sugch = message.channel.id === process.env.channel
if (!sugch) return false;
if(message.content.startsWith('')){
  message.delete()
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL())
.setColor("00fff7")
.setThumbnail(message.author.avatarURL())
.setDescription(`> **${args}**`)
.setFooter(`اقتراح من | ${message.author.id}`)
.setTimestamp()
message.channel.send(embed).then(msg => {
  msg.react('👍').then( r => {
    msg.react('👎')
  })
})
}
});

require('./server')();
client.login(process.env.token);
