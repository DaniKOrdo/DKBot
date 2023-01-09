module.exports = {
    name: 'juan',
    aliases: ['joan'],
    description: 'Indica lo que es el Juan.',
    run: async (client, message, args) => {
        const msg = await message.channel.send('Pensando...');
        msg.edit(`El Juan es un puto payaso!`);
    }
};
