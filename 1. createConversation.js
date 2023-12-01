require('dotenv').config({path:__dirname+'/./../../.env'})
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid,authToken)

client.conversations.v1.conversations
    .create({friendlyName : 'conversation and Content API'})
    .then(conversation => console.log(conversation.sid))
    .catch(e => console.log(e))


