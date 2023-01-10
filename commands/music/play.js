module.exports = {
    name: 'play',
    aliases: ['p', 'yt'],
    description: 'Reproducir música de YouTube.',
    run: async (client, message, args, prefix) => {
        if(!message.member.voice.channel) return message.reply(`❌ Debes estar en un canal de voz.`);
        if(!args[0]) return message.reply(`❌ Debes especificar una canción.`);
        // if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(`❌ Debes estar en el mismo canal de voz que yo.`);
        client.distube.play(message.member.voice?.channel, args.join(' '), {
            member: message.member,
            textChannel: message.channel,
            message
        });
        message.reply(`🎵 Reproduciendo \`${args.join(' ')}\`.`);
    }
};
