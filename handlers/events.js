const fs = require('fs');
const allEvents = [];

module.exports = async (client) => {
    try {
        try {
            console.log('DKLOG: Loading events...'.bgYellow);
        } catch {}
        let amount = 0;
        const loadDir = (dir) => {
            const eventFiles = fs.readdirSync(`./events/${dir}/`).filter(files => files.endsWith('.js'));
            for (const file of eventFiles) {
                try {
                    const event = require(`../events/${dir}/${file}`);
                    const eventName = file.split('.')[0];
                    allEvents.push(eventName);
                    client.on(eventName, event.bind(null, client));
                    amount++;
                    console.log(`DKLOG: Event [/${dir}/${file}] loaded!`.brightGreen);
                } catch (e) {
                    console.log(`DKLOG: Event [/${dir}/${file}] failed to load!`.brightRed);
                    console.log(e);
                }
            }
        }
        await ['client', 'guild'].forEach(e => loadDir(e));
        console.log(`DKLOG: Loaded ${amount} events!`.brightGreen);
    } catch (e) {
        console.log(e.bgRed);
    }
}