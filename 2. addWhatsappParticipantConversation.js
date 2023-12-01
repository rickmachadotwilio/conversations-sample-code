require('dotenv').config({path:__dirname+'/./../../.env'})
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid,authToken)

const conversationSid = 'CHaa44a95be0f44XXXXXXXXXXXXXXXXXXX'

client.conversations.v1.conversations(conversationSid)
  .participants
  .create({
     'messagingBinding.address': 'whatsapp:+5511919XXXXXX',     //customer whatsapp phone
     'messagingBinding.proxyAddress': 'whatsapp:+551150XXXXXX'   // Twilio whatsapp sender 
   })
  .then(participant => console.log(participant.sid)); 