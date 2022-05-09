require('dotenv').config()
const { Telegraf } = require('telegraf');
const translator = require('translation-google');

const bot = new Telegraf(process.env.TOKEN)

bot.start((ctx) => {
    ctx.reply("hello, send me a text you want to translate");
});

bot.on('text', async (ctx) => {
    const text = ctx.update.message.text;
    const translate = await translator(text, { from: 'en', to: 'ta' });

    ctx.reply(translate.text);
})

bot.launch()