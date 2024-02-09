import botData from './botData.js'
import * as MSGTYPE from './msgType.js'

const bot = botData.bot

bot.on('document', async (msg) => {
  await MSGTYPE.document(msg)
})

bot.on('sticker', async (msg) => {
  await MSGTYPE.sticker(msg)
})

bot.on('text', async (msg) => {
  await MSGTYPE.text(msg)
})

bot.on('photo', async (msg) => {
  await MSGTYPE.photo(msg)
})

bot.on('animation', async (msg) => {
  await MSGTYPE.animation(msg)
})

bot.on('video', async (msg) => {
  await MSGTYPE.video(msg)
})

bot.on('voice', async (msg) => {
  await MSGTYPE.voice(msg)
})
