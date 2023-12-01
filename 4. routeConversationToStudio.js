require('dotenv').config({path:__dirname+'/./../../.env'})
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid,authToken)

console.log('Routing the conversation to a Studio Flow ... (Webhook Studio)')

const conversationSid = 'CHaa44a95be0f44XXXXXXXXXXXXXXXXXXX';
const flowSid = 'FWd1884a2f7f0b754bed1XXXXXXXXXX';
const serviceSid = 'IS998d87d1b3e94c999cXXXXXXXXXXX'

client.conversations.v1.services(serviceSid).conversations(conversationSid).webhooks
      .create({
         'configuration.filters': ['onMessageAdded'],   
         'configuration.flowSid': flowSid,
         'configuration.replayAfter': 0,
         target: 'studio'
       })
      .then(webhook => console.log(webhook.sid));


/*       const webhookStudio = await client.conversations.services(serviceSid).conversations(conversationSid).webhooks
      .create({
          'configuration.filters': ['onMessageAdded'],
          "configuration.flowSid": flowSid,
          "configuration.replayAfter": 0,
          target: "studio"
      })
      .then(webhook => console.log(webhook.sid)); */