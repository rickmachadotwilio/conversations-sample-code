require('dotenv').config({ path: __dirname + '/./../../.env' })
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const address = '5511919XXXXXX'

const conversationCleanup = async (address) => {
    const participantConversations = await client.conversations.v1.participantConversations
        .list({ address: `whatsapp:+${address}`, limit: 1500 })
        .catch(err => console.error(err));

    participantConversations
        .filter(conversation => conversation.conversationState === 'active')
        .forEach(activeConversation => {
            client.conversations.v1.conversations(activeConversation.conversationSid)
                .update({ state: 'closed' })
                .then(conversation => console.log(conversation.sid, ' ', conversation.state))
                .catch(err => console.error(err));
        })



}

conversationCleanup(address);


