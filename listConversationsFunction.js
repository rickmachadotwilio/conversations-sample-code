require('dotenv').config({path:__dirname+'/./../../.env'})
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

console.log('accountSid ' + accountSid)

exports.handler = async function (context, event, callback) {
    
    const response = new Twilio.Response();

    try {
        const result = await client.conversations.v1.participantConversations
            //.list({identity: '7740b318-121f-4747-b9b1-2c3ea35b19d4', limit: 20})
            .list({address : 'whatsapp:+5511919XXXXXX', limit: 20})
            .then(res => console.log(res))
            .then(res => res.forEach(d => console.log(d.conversationFriendlyName)))
        
        response.setStatusCode(200);
        response.setBody(result);
        
        callback(null, response);

    } catch (error) {
        response.setStatusCode(501);
        response.setBody({
            message: 'Error fetching conversations.',
        });
        
        return callback(null, response);
    }

}