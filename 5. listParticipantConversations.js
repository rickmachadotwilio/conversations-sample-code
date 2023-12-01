require('dotenv').config({path:__dirname+'/./../../.env'})
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid,authToken)

console.log('Fetching conversations Participants ...');

const from = 'whatsapp:+5511919XXXXXX';

// client.conversations.participantConversations
//     .list({identity: 'Web User 123456789', limit: 20})
//     .then(participantConversations => participantConversations.forEach(p => console.log('Conversation Sid : ' + p.conversationSid + ' Conversation Friendly Name: ' + p.conversationFriendlyName)));


// client.conversations.v1.participantConversations
//     .list({ address: 'whatsapp:+5511919XXXXXX', limit: 10 })
//     .then(participantConversations => participantConversations.forEach(p => console.log('Conversation Sid : ' + p.conversationSid + ' Conversation State: ' + p.conversationState)));
const fetchConversationsParticipants = async (from) => {
    try {
        const userConversations = await client.conversations.v1.participantConversations
            .list({ address: `${from}` , limit: 10 });

        for (const conversation of userConversations) {
            const participants = await client.conversations.v1.services('IS998d87d1b3e94c999c4460XXXXXXXXXX')
                .conversations(conversation.conversationSid)
                .participants
                .list({ limit: 10 });

            console.log(`Participants for Conversation ${conversation.sid}:`);
            participants.forEach(p => console.log('Participant:', p));
        }
    } catch (err) {
        console.error(err);
    }
};

fetchConversationsParticipants(from);
