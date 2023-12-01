require('dotenv').config({path:__dirname+'/./../../.env'})
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid,authToken)

const conversationSid = 'CHaa44a95be0f44XXXXXXXXXXXXXXXXXXX'

console.log('Fetching Participants of conversation : ' + conversationSid)

client.conversations.v1.conversations(conversationSid)
      .participants
      .list({limit: 20})
      //.then(participants => participants.forEach(p => console.log(p.sid , p.status)));
      .then(participants => participants.forEach(p => console.log(p.identity)));