const { Client, Events, GatewayIntentBits } = require("discord.js");
const URL = require("./models/model");
const { MongoDBCon } = require("./connection/connection");
const { handleURL } = require("./controller/url");
const { token } = require("./config");
const express = require('express')
const app = express()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

MongoDBCon()
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Not Connected ", error));

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {

    const url = message.content.split("create ")[1];
    if (!url) return message.reply("❌ Please provide a valid URL.");

    const data = await handleURL(url);
    if (!data || !data.shorturl) {
      return message.reply("❌ Failed to generate a short URL.");
    }

    return message.reply({
      content: `Genarating ShortURL for ${data.redirecturl} is http://localhost:5833/${data.shorturl} `
    });
  }
  message.reply({
    content: "Hi From Bot",
  });
});

app.get('/:shorturl',async(req, res, next)=>{
  const shorturl = req.params.shorturl
  const findurl = await URL.findOne({ shorturl: shorturl }) 

  if(!findurl) return  res.status(404).send("Short URL not found.")
  
  res.redirect(findurl.redirecturl)
})

client.on("interactionCreate", (interaction) => {
  interaction.reply("Pong!!");
});

client.login(token);

app.listen(5833, ()=>{
  console.log("server running on http://localhost:5833");
})