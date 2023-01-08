const Discord = require('discord.js');
const config = require('');
require('colors');

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILDS_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ],
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

function requireHandler() {
    ['command', 'events'].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord);
        } catch (e) {
            console.log(e);
        }
    });
}
requireHandler();

client.login(config.token);