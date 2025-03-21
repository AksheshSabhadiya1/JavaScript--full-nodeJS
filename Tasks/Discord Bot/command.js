const { REST, Routes } = require('discord.js')
const { token, clientid } = require('./config')

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!!',
  },
];

const rest = new REST({ version: '10' }).setToken(token);

(async() => {
  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands(clientid), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})()
