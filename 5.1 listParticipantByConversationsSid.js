require('dotenv').config({path:__dirname+'/./../../.env'})
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid,authToken)

console.log('Fetching conversations Participants ...');

const conversationSid = 'CHaa44a95be0f44XXXXXXXXXXXXXXXXXXX';
const conversationServiceSid = 'IS998d87d1b3e94c999c4XXXXXXXXXXXX'

client.conversations.v1.services(conversationServiceSid)
    .conversations(conversationSid)
    .participants
    .list({ limit: 10 })
    .then(participants => {
        participants.forEach(p => console.log('Participant:', p));
    })
    .catch(error => {
        console.error(error);
    });