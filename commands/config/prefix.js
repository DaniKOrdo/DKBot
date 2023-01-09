const schema = require(`${process.cwd()}/models/server.js`);
module.exports = {
    name: 'prefix',
    aliases: ['prefijo'],
    description: 'Cambia el prefijo del bot en el servidor.',
    run: async (client, message, args, prefix) => {
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply(`❌ No tienes permisos para usar este comando.`);
        if(!args[0]) return message.reply(`❌ Debes especificar un prefijo.`);
        // if(args[0].length > 5) return message.reply(`❌ El prefijo no puede tener más de 5 caracteres.`);
        if(args[0] === prefix) return message.reply(`❌ El prefijo ya es este.`);

        await schema
    }
}