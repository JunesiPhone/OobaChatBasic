const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

//I know the .env is uploaded. It does nothing the api key is fake. The base url is just from oobabooga

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY, // any key doesn't matter we arent using openai just leaving this here incase you use openai.
  basePath: process.env.OPENAI_API_BASE // http://127.0.0.1:5000/v1
});

const openai = new OpenAIApi(configuration);
module.exports = openai;