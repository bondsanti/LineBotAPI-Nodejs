const config = require('../config/line');
const Text = require('./send-text');
//const {sendImages} =require('./send-img');


exports.handleMessage = (event) => {
 

    let BotMsg;

            BotMsg = Text.sendText(event);
            //BotMsg = sendImages(event);


    
   

    //use reply API
    return config.client.replyMessage(event.replyToken, BotMsg);

}