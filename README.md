# Massnick Bot

Simple lightweight massnick bot for discord, written in JavaScript.

# Dependencies

- [Git](https://git-scm.com)
- [NodeJS](https://nodejs.org)
- [NPM](https://www.npmjs.com)
    - [DiscordJS](https://www.npmjs.com/package/discord.js)

# Run instructions

```sh
# Clone this repo
git clone https://github.com/stevancorre/massnick-bot.git
cd massnick-bot

# Install dependencies
npm i
```

In order to run the bot, you'll need to get a Discord bot token. 
- Go on the [discord's website](https://discord.com), then [developper portal](https://discord.com/developers). Go under [applications](https://discord.com/developers/applications). <br>
  - If you don't have an application already configured, click **New** and choose any name. <br>
- Go under **Bots**, click **Add Bot**, then click **Copy** (under your bot's token). <br>
- Rename `config.default.json` to `config.json` and change its content to:
    ```json
    {
      "token": "your token",
      "prefix": "command prefix"
    }
    ```
    - `executeOnMention` allows (true) or not (false) the bot to execute command on mention

Now, you can run the bot
```sh
# Run
node .
```

To invite the bot in your server,
- Go in your application, click **OAuth2**
- In *Scopes*, select **Bot**
- In *Bot permissions*, select **Administrator**
- Go on the link that has been generated

# How to use

Check ping
```sh
<prefix>ping
```

Massnick
```sh
<prefix>massnick <nick>
```