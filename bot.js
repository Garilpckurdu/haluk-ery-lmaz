const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hocam') {
    	message.reply('düt düt!');
  	}
});

client.on('message', message => {
    if (message.content === 'tanrımız') {
    	message.reply('eller yukarı!');
  	}
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong!');
  	}
});

client.on('message', message => {
    if (message.content === 'FBI') {
    	message.reply('FBI, OPEN UP!!');
  	}
});

client.on('message', message => {
    if (message.content === 'hocam bir espiri yapsanıza') {
    	message.reply('Hacca giden dedeye ne denir? Hacim');
  	}
});

client.on('message', message => {
    if (message.content === 'sosis') {
    	message.content('salam');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
