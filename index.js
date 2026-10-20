
import { Bot } from "grammy"
import { registerCommands } from "./Src/commands.js"

const token = process.env.BOT_TOKEN

if (!token) {
  throw new Error("Не задан BOT_TOKEN в переменных окружения")
}

const bot = new Bot(token)

registerCommands(bot)

bot.catch((err) => {
  console.error("Ошибка бота:", err)
})

bot.start()
