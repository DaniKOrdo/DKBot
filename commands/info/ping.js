module.exports = {
    name: 'ping',
    aliases: ['latencia', 'latency'],
    description: 'Latency of the bot.',
    run: async (client, message, args) => {
        const msg = await message.channel.send('Pinging...');
        msg.edit(`El ping del bot es de \`${client.ws.ping}ms\``);
    }
};
