const fs = require('fs');
module.exports = (client) => {
    try {
        let commands = 0;
        fs.readdirSync('./commands/').forEach(dir => {
            const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../commands/${dir}/${file}`);
                if (command.name) {
                    client.commands.set(command.name, command);
                    commands++;
                } else {
                    console.log(`DKLOG: Command [/${dir}/${file}] is missing!`.brightRed);
                    continue;
                }
                if (command.aliases && Array.isArray(command.aliases)) command.aliases.forEach(alias => client.aliases.set(alias, command.name));
            }
        });
        console.log(`DKLOG: Loaded ${commands} commands!`.brightGreen);
    } catch (e) {
        console.log(e.bgRed);
    }
};