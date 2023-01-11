const {DisTube} = require('distube');
// const {SpotifyPlugin} = require('@distube/spotify');
// const {SoundCloudPlugin} = require('@distube/soundcloud');

module.exports = (client, Discord) => {
    client.distube = new DisTube(client, {
        emitNewSongOnly: false,
        leaveOnEmpty: true,
        leaveOnFinish: false,
        leaveOnStop: true,
        savePreviousSongs: true,
        emitAddListWhenCreatingQueue: false,
        searchSongs: 0,
        nsfw: false,
        emptyCooldown: 30,
        ytdlOptions: {
            highWaterMark: 1024 * 1024 * 64,
            quality: 'highestaudio',
            format: 'audioonly',
            liveBuffer: 60000,
            dlChunkSize: 1024 * 1024 * 4,
        },
        // youtubeDL: false,
        // plugins: [
        //     new SpotifyPlugin({
        //         parallel: true,
        //         emitEventsAfterFetching: true,
        //     }),
        //     new SoundCloudPlugin()
        // ]
    });

    client.distube.on("playSong", (queue, song) => {
        queue.textChannel.send({
            embeds: [new Discord.EmbedBuilder()
            .setTitle(`Reproduciendo \`${song.name}\` - \`${song.formattedDuration}\``)
            .setThumbnail(song.thumbnail)
            .setURL(song.url)
            .setColor(client.color)
            .setFooter({text: `Añadida por ${song.user.tag}`, iconURL: song.user.displayAvatarURL({dynamic: true})})
            ]
        })
    })

    client.distube.on("addSong", (queue, song) => {
        queue.textChannel.send({
            embeds: [new Discord.EmbedBuilder()
            .setTitle(`✅ Añadido \`${song.name}\` - \`${song.formattedDuration}\``)
            .setThumbnail(song.thumbnail)
            .setURL(song.url)
            .setColor(client.color)
            .setFooter({text: `Añadida por ${song.user.tag}`, iconURL: song.user.displayAvatarURL({dynamic: true})})
            ]
        })
    });

    client.distube.on("initQueue", (queue) => {
        queue.autoplay = true;
    });
}