# OobaChatBasic
Chatbot api connection to [Oobabooga](https://github.com/oobabooga/text-generation-webui) using express.

## Build
git clone this repo

```npm install``` (install dependencies)

```node app``` (run app)

## Stream
open browser to http://localhost:6969/ or 127.0.0.1:6969
if using on a mobile device (which is what this is meant to do) find your pc ip that is running oobabooga.
Open Safari on iOS or whatever and use the ip http://192.x.x.x:6969 (replace the x with your ip)

## Setup
You will need to have oobabooga setup with api enabled. You will see these settings under session. Enable openai and api.
Load model in oobabooga.

In app_oobaController.js you can set the model you chose. As well as play around with the model settings.

This is meant to be bare. It's a simply chat window that can run the model externally from the pc it is ran on.

[Support on Patreon](https://patreon.com/junesiphone)

