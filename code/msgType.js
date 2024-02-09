import botData from './botData.js'
const bot = botData.bot

async function document(msg) {
  const chatId = msg.chat.id

  const data = getInfoFromData(getData())
  await sendData(chatId, data)

  function getData() {
    const data = {
      id: msg.document.file_id,
      name: msg.document.file_name,
      type: msg.document.mime_type,
      size: formatFileSize(msg.document.file_size),
    }

    return data
  }
}

async function sticker(msg) {
  const chatId = msg.chat.id

  const data = getInfoFromData(getData())
  await sendData(chatId, data)

  function getData() {
    const data = {
      id: msg.sticker.file_id,
      animated: msg.sticker.is_animated,
      video: msg.sticker.is_video,
      emoji: msg.sticker.emoji,
    }

    return data
  }
}

async function text(msg) {
  const chatId = msg.chat.id

  const data = getInfoFromData(getData())
  await sendData(chatId, data)

  function getData() {
    const data = {
      text: msg.text,
    }

    return data
  }
}

async function photo(msg) {
  const chatId = msg.chat.id
  const data = getInfoFromData(getData())

  function getData() {
    const data = {
      id: msg.photo[0].file_id,
    }
    return data
  }

  await sendData(chatId, data)
}

async function animation(msg) {
  const chatId = msg.chat.id
  const data = getInfoFromData(getData())

  function getData() {
    const data = {
      id: msg.animation.file_id,
      name: msg.animation.file_name,
      type: msg.animation.mime_type,
      duration: `${msg.animation.duration} sec`,
      width: `${msg.animation.width}px`,
      height: `${msg.animation.height}px`,
      size: formatFileSize(msg.animation.file_size),
    }
    return data
  }

  await sendData(chatId, data)
}

async function video(msg) {
  const chatId = msg.chat.id
  const data = getInfoFromData(getData())

  function getData() {
    const data = {
      id: msg.video.file_id,
      name: msg.video.file_name,
      type: msg.video.mime_type,
      duration: `${msg.video.duration} sec`,
      width: `${msg.video.width}px`,
      height: `${msg.video.height}px`,
      size: formatFileSize(msg.video.file_size),
    }
    return data
  }

  await sendData(chatId, data)
}

async function voice(msg) {
  const chatId = msg.chat.id
  const data = getInfoFromData(getData())

  function getData() {
    const data = {
      id: msg.voice.file_id,
      duration: `${msg.voice.duration} sec`,
      size: formatFileSize(msg.voice.file_size),
    }
    return data
  }

  console.log(msg)
  await sendData(chatId, data)
}

// functions
function getInfoFromData(data) {
  const info = Object.keys(data).map((key) => {
    return `${key.toString().toUpperCase()}:\n\`${data[key]}\``
  })
  return info
}

async function sendData(chatId, data) {
  for (let i = 0; i < data.length; i++) {
    await bot.sendMessage(chatId, data[i], { parse_mode: 'Markdown' })
  }
}

function formatFileSize(sizeInBytes) {
  const units = ['B', 'KB', 'MB', 'GB']
  let unitIndex = 0
  let fileSize = sizeInBytes

  while (fileSize >= 1024 && unitIndex < units.length - 1) {
    fileSize /= 1024
    unitIndex++
  }

  return `${fileSize.toFixed(2)} ${units[unitIndex]}`
}

export { document, sticker, text, photo, animation, video, voice }
