require('dotenv').config({path:__dirname+'/./../../.env'})
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid,authToken)

console.log('Creating a Conversation Message ...')

const conversationSid = 'CHaa44a95be0f44XXXXXXXXXXXXXXXXXXX'

const author = 'whatsapp:+17863XXXXXX'
const contentSid = 'HX1daee55203144237733fXXXXXXXXXXXX'

client.conversations.v1.conversations(conversationSid).messages
    .create({
        author: author, 
        body: `${author} - Ola Cliente`,
        xTwilioWebhookEnabled: true
    })   
    //}, console.log)
    .then(message => console.log(message.sid));


// xTwilioWebhookEnabled: true  adds the X-Twilio-Webhook-Enabled header to the request
// https://support.twilio.com/hc/en-us/articles/4403669397019-Troubleshooting-Webhook-Delivery-for-Conversations-or-Chat
