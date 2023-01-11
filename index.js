const Discord = require('discord.js');
const config = require('./config/config.json');
require('colors');

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildVoiceStates,
        Discord.GatewayIntentBits.GuildMessageReactions,
        Discord.GatewayIntentBits.GuildEmojisAndStickers,
    ],
    partials: [Discord.Partials.User, Discord.Partials.Channel, Discord.Partials.GuildMember, Discord.Partials.Message, Discord.Partials.Reaction]

})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.color = config.color;

function requireHandlers() {
    ['commands', 'events', "distube"].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord);
        } catch (e) {
            console.log(`requireHandlers: ${e}`.red.brightCyan);
        }
    });
}
requireHandlers();

client.login(config.token);