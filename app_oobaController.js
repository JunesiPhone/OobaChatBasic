const openai = require('./app_config')
const history = [];
const generateResponse = async (req, res) => {
  const {title} = req.body
  let message = {role: 'user', content: `${title}`}
  history.push(message);
  const description = await openai.createChatCompletion({
    model: "TheBloke_Yarn-Mistral-7B-64k-AWQ",
    messages: history,
    max_tokens: 250,
    temperature: 0.7,
    top_k: 20,
    top_p: 0.9,
    typical_p: 1,
    min_p: 0,
    top_a: 0,
    repetition_penalty: 1.15,
    presence_penalty: 0,
    frequency_penalty: 0,
    tfs: 1,
    guidance_scale: 1,
    mirostat_tau: 5,
    mirostat_eta: 0.1,
    use_ooba: true,
    instruction_template: "Alpaca",
    add_bos_token: true,
    epsilon_cutoff: 0,
    eta_cutoff: 0,
    negative_prompt: '',
    do_sample: true,
    seed: -1,
    encoder_repetition_penalty: 1,
    no_repeat_ngram_size: 0,
    min_length: 0,
    num_beams: 1,
    length_penalty: 1,
    early_stopping: false,
    truncation_length: 0,
    max_tokens_second: 0,
    custom_token_bans: "",
    auto_max_new_tokens: false,
    ban_eos_token: false,
    skip_special_tokens: true,
    grammar_string: "",
    mode: "chat"
  });

  history.push(description.data.choices[0].message);
  res.status(200).json({
    tags: description.data.choices[0].message
  });
}

module.exports = { generateResponse }