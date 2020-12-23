// Discord client and configuration
const Discord = require("discord.js")
const config = require("./config.json")

const client = new Discord.Client();

// OnClientReady event
client.once("ready", async () =>
{
    console.log("Bot online");
});

// OnMessageReceived event
client.on("message", async message => 
{
    // If sender is bot
    if(message.author.bot) { return; }

    // If doesn't starts with prefix
    if (!message.content.startsWith(config.prefix)) { return; }
    
    // Get args and command
	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    switch(command)
    {
        case "ping":
            message.reply("pong");
            break;

        case "massnick":
            // check permission
            if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) 
            {
                message.channel.send('I don\'t have permission to change your nickname!');
                break;
            }
    
            const nick = args.join(" ");

            message.channel.send('Nicking, could take some time');

            // for each member
            message.guild.members.cache.forEach(member => 
            {
                // set nickname if member isn't the bot
                if(member.id == client.user.id) { return; }
                member.setNickname(nick).catch(console.error);
            });
            break;
    }
});

// Login
client.login(config.token);