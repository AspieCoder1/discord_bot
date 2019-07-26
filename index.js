const Discord = require('discord.js');
const weather = require('./weather/weather');

require('./config/config');
console.log(process.env.token);
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
	console.log('Bot is now connected');
	client.channels.find(x => x.name === 'test').send("Hello! I'm now connected");
});

client.on('message', msg => {
	if (msg.content === 'hello') {
		msg.channel.send(`Hello ${msg.author}`);
	}
});

client.on('message', async msg => {
	const content = msg.content;

	if (content.includes('!weather')) {
		const split_string = msg.content.split('!weather');
		const address = split_string[1].trim();
		const res = await weather(address);
		console.log('Index.js', res);
	}
});

client.login(token);
