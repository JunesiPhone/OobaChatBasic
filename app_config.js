const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
  basePath: process.env.OPENAI_API_BASE
})

const openai = new OpenAIApi(configuration)
module.exports = openai