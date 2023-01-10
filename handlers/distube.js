const {DisTube} = require('distube');
// const {SpotifyPlugin} = require('@distube/spotify');
// const {SoundCloudPlugin} = require('@distube/soundcloud');

module.exports = (client) => {
    client.distube = new DisTube(client, {
        emitNewSongOnly: false,
        leaveOnEmpty: true,
        leaveOnFinish: false,
        leaveOnStop: true,
        emitAddListWhenCreatingQueue: false,
        searchSongs: 3,
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
}