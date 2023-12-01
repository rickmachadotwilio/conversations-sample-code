require('dotenv').config({path:__dirname+'/./../../.env'})
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid,authToken)

client.conversations.v1.conversations('CHaa44a95be0f44XXXXXXXXXXXXXXXXXXX')
      .fetch()
      .then(conversation => console.log(conversation));



