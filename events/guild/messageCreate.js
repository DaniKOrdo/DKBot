const config = require(`${process.cwd()}/config/config.json`);
const serverSchema = require(`${process.cwd()}/models/server.js`);
const { secure } = require(`${process.cwd()}/handlers/functions.js`);

module.exports = async (client, message) => {
    if(!message.guild || !message.channel || message.author.bot) return;

    let data = await secure(serverSchema, "guildID", message.guild.id, {
        guildID: message.guild.id,
        prefix: config.prefix
    });

    if(!message.content.startsWith(data.prefix)) return;

    const args = message.content.slice(data.prefix.length).trim().split(" ");
    const cmd = args.shift()?.toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.includes(cmd));

    if(command) {
        command.run(client, message, args, data.prefix);
    } else {
        return message.reply(`❌ Este comando no existe. Usa \`${data.prefix}help\` para ver todos los comandos.`);
    }
}