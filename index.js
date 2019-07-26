const dotenv = require('dotenv');
dotenv.config();

const Discord = require('discord.js');

const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
	console.log('bot is now connected');

	client.channels.find(x => x.name === 'test').send("Hello! I'm now connected");
});

client.on('message', msg => {
	console.log(msg);
	if (msg.content === 'hello') {
		msg.channel.send(`Hello ${msg.author}`);
	}
});

client.login(token);
