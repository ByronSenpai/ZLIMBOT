const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n'as pas la permission d'exÃ©cuter cette commande!");
    if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then(connection => {
            let embed = new Discord.RichEmbed()
            .setTitle("technobase.fm")
            .setDescription("**Connected**")
            .setColor('#606060')
			.setURL("https://www.technobase.fm/")
			.setImage("https://i.imgur.com/oBRWIUH.jpg")
			.setTimestamp()
            connection.playArbitraryInput(`http://listen.technobase.fm/tunein-mp3-asx`);
			message.channel.send(embed);
			message.delete().catch();
        })
        .catch(console.log);
    } else {
        message.reply('Tu dois etre dans un channel vocal !');
    }
};

module.exports.help = {
    name: "technobase"
}    
