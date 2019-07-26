const Discord = require('discord.js');

require('./config/config');
console.log(process.env.token);
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
	console.log('bot is now connected');

	client.channels.find(x => x.name === 'test').send("Hello! I'm now connected");
});

client.on('message', msg => {
	if (msg.content === 'hello') {
		msg.channel.send(`Hello ${msg.author}`);
	}
});

client.login(token);
