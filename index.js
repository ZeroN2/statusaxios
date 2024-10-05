const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const date = require('date-and-time');
const timezone = require('date-and-time/plugin/timezone');
const keepAlive = require('./server');


keepAlive();
const client = new Client({
	checkUpdate: false,
	syncStatus: false,
});

date.plugin(timezone);

client.on('ready', () => {
	setInterval(() => {
		const timenow = date.formatTZ(new Date(), 'HH:mm:ss', 'Asia/Bangkok');
		const r = new Discord.RichPresence()
			.setApplicationId('1089666122988650567')
			.setType('STREAMING')
			.setURL('https://youtube.com/watch?v=0k5LSHkUpyQ&si=WaCqe1g0VNeTOd7D')
			.setState('Rank Up by.Axios')
			.setName('Rank Up by.Axios')
			.setDetails(`Active [ ${timenow} ]`)
			.setAssetsLargeImage('https://cdn.discordapp.com/attachments/1255985247191961641/1291986658048348161/nakroth-nakroth-db.gif?ex=670217d7&is=6700c657&hm=d241d678171fbefc82d26e489cd392b0f4d7455910deaac8bc579f47a52f9d96&')
			.setAssetsLargeText(`Ping : ${Math.round(client.ws.ping)} ms`)
			//.setAssetsLargeText('สถานะล็อคอินโปร : Working ✅')
			.setAssetsSmallImage('https://cdn.discordapp.com/attachments/1255985247191961641/1292001446614667274/tumblr_53610ab2dc14042ef1c7b5da85901713_209b383e_540.webp?ex=6702259d&is=6700d41d&hm=2fd717cc39a466fdd6b687dee4f9ddb650c5bd659517d65197a879d65025f9b6&')
		.setAssetsSmallText('Bot')
		.setAssetsSmallText('Bot1')
		.addButton('__  [ - Join DC / Free Rank - ]  __', 'https://discord.gg/QtYT8eV3z4')
		.addButton('__  [ - No Link - ] __', 'https://www.google.com');
		client.user.setActivity(r);


		function generateRandomString(length) {
			let result = '';
			const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			const charactersLength = characters.length;
			for (let i = 0; i < length; i++) {
				result += characters.charAt(Math.floor(Math.random() * charactersLength));
			}
			return result;
		}


		
		client.settings.setCustomStatus({
		  status: null, // 'online' | 'idle' | 'dnd' | 'invisible' | null
		  text: generateRandomString(7) + " | " + generateRandomString(7) + " | " + generateRandomString(7), // String | null
		  emoji: null, // UnicodeEmoji | DiscordEmoji | null
		  expires: null, // Date.now() + 1 * 3600 * 1000 <= 1h to ms
		});
		

		client.user.setHypeSquad('HOUSE_BRAVERY');
		client.user.setHypeSquad('HOUSE_BRILLIANCE');
		client.user.setHypeSquad('HOUSE_BALANCE');
	}, 1000);
});

client.login(process.env.TOKEN);
