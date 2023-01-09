const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');
const config = require('./config/config.json');
require('colors');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

function requireHandlers() {
    ['commands', 'events'].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord);
        } catch (e) {
            console.log(`requireHandlers: ${e}`.red.brightCyan);
        }
    });
}
requireHandlers();

client.login(config.token);