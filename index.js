const wait = require('wait');
require('dotenv').config();
require('module-alias/register');
const path = require('path');
const Bitzxier = require(`./structures/Bitzxier.js`);
const client = new Bitzxier();

// Use environment variables instead of config.json
(async () => {
    await client.initializeMongoose();
    await client.initializedata();
    await wait(3000);
    (await client.loadEvents()) - (await client.loadlogs());
    await client.loadMain();
    
    // Use process.env.TOKEN instead of this.config.TOKEN
    await client.login(process.env.TOKEN);
})();
