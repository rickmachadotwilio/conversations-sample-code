require('dotenv').config({ path: __dirname + '/./../../.env' })
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const messagingServiceSid = process.env.MESSAGING_SERVICE_SID;
const client = require('twilio')(accountSid, authToken)

console.log('Creating a Conversation Message ...')

const conversationSid = 'CHaa44a95be0f44XXXXXXXXXXXXXXXXXXX'
const author = 'whatsapp:+551150XXXXXX'
const contentSid = 'HXe2df5ba960fc7d1428c6XXXXXXXXXXXX'

console.log('messagingServiceSid ...', messagingServiceSid)

// Send Message using ContentSid --> Content API 
client.conversations.v1.conversations(conversationSid).messages
    .create({
        author: author,
        to: 'whatsapp:+5511919XXXXXX', 
        from: 'whatsapp:+551150XXXXXX',
        // body: 'anything here ...',
        contentSid: contentSid,
        contentVariables: { "1": "Rick Machado" },
        messagingServiceSid: messagingServiceSid, 
        xTwilioWebhookEnabled: true,

    })
    //}, console.log)
    .then(message => console.log(message.sid));


// xTwilioWebhookEnabled: true  adds the X-Twilio-Webhook-Enabled header to the request
// https://support.twilio.com/hc/en-us/articles/4403669397019-Troubleshooting-Webhook-Delivery-for-Conversations-or-Chat
