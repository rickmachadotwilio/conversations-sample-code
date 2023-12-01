require('dotenv').config({path:__dirname+'/./../../.env'})
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid,authToken)



const address = '5511919302399';

console.log('Fetching user conversation address : ' + `whatsapp:${address}`);

const listActiveConversations = async (address) => {
      try {
          const participantConversations = await client.conversations.v1.participantConversations
              .list({ address: `whatsapp:+${address}`, limit: 1500 });
  
          const activeConversations = participantConversations.filter(conversation => conversation.conversationState === 'active');
  
          for (const activeConversation of activeConversations) {
              try {
                  const conversation = await client.conversations.v1.conversations(activeConversation.conversationSid).fetch();
                  //console.log(conversation.sid, ' ', conversation.state);
                  console.log(conversation);
              } catch (err) {
                  console.error(err);
              }
          }
      } catch (err) {
          console.error(err);
      }
  };
  

listActiveConversations(address);