const {
	Client
} = require('discord.js-selfbot-v13');
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
			.setAssetsLargeImage('https://cdn.discordapp.com/attachments/983135496190455908/1271575846167252992/anime-eyes-gif-pfp-8.gif?ex=66b7d6ca&is=66b6854a&hm=32e416b04cbe139b88492f222574a57aa902ee33842e2e1f088a436f9f597c1d&')
			.setAssetsLargeText(`Ping : ${Math.round(client.ws.ping)} ms`)
			//.setAssetsLargeText('สถานะล็อคอินโปร : Working ✅')
			.setAssetsSmallImage('https://cdn.discordapp.com/attachments/983135496190455908/1271707261521100912/g2TPZK8.gif?ex=66b8512e&is=66b6ffae&hm=72aae309285d683b9c64892c84f2f5134ba2204d80637ecf5edf3a304e735351&')
		//.setAssetsSmallText('Bot')
		//.setAssetsSmallText('Bot1')
		//.addButton('__  [ - Mod ViP Free - ]  __', 'https://t.me/zxvxzv_cracked_mod_vip')
		//.addButton('__  [ - JOIN FOR TESTER - ] __', 'https://www.zxvc.xyz/discord');
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


		/*
		client.settings.setCustomStatus({
		  status: null, // 'online' | 'idle' | 'dnd' | 'invisible' | null
		  text: generateRandomString(10) + " | " + generateRandomString(10) + " | " + generateRandomString(10), // String | null
		  emoji: null, // UnicodeEmoji | DiscordEmoji | null
		  expires: null, // Date.now() + 1 * 3600 * 1000 <= 1h to ms
		});
		*/

		client.user.setHypeSquad('HOUSE_BRAVERY');
		client.user.setHypeSquad('HOUSE_BRILLIANCE');
		client.user.setHypeSquad('HOUSE_BALANCE');
	}, 1000);
});
