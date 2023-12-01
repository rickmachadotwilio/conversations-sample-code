require('dotenv').config({path:__dirname+'/./../../.env'})
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid,authToken)

console.log('Fetching Active conversations by Participants ...')

const from = 'whatsapp:+5511964XXXXX';


const fetchConversations = async (from) => {
    console.log("Fetching user conversation address ", `${from}`);
    try {
        const userConversations = await client.conversations.v1.participantConversations
            .list({ address: `${from}` });

        const openConversation = await userConversations.find(conv => conv.conversationState === 'active');
        
        if (openConversation == null || openConversation.length == 0) {
            console.log('No Active Conversation for', from, 'found')
        }else{
            console.log("Found user conversation", openConversation)
        }
        
    } catch (error) {
        console.log('#### error ', error)
    }
}
 
fetchConversations(from);