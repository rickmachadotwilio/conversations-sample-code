require('dotenv').config({path:__dirname+'/./../../.env'})
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid,authToken)

const To = '+551196XXXXXX'

console.log('Fetching user conversation address : ' + `whatsapp:${To}`)

client.conversations.v1.participantConversations
      .list({address: `whatsapp:${To}`, limit: 20})
      .then(participants => participants.forEach(c => console.log(c)));
  