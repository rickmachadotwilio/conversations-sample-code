require('dotenv').config({path:__dirname+'/./../../.env'})
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid,authToken)

console.log('Fetching the Latest Conversation Message ...')

const conversationSid = 'CHaa44a95be0f44XXXXXXXXXXXXXXXXXXX'

client.conversations.v1.conversations(conversationSid).messages
      .list({order: 'asc', limit: 100})
      .then(messages => messages.forEach(m => console.log(m.body))
      .catch(e => console.log(e)));