const config = require('../config/line');
const {sendText} = require('./send-text');
const {sendImages} =require('./send-img'); 
const {sendImageMap} =require('./send-imagemap'); 
const {sendFlex} =require('./send-flex'); 

exports.handleMessage =  async (event) => {
 

    let BotMsg;


        switch (event.message.text.toLowerCase().trim()) {
            case "img":
                BotMsg = sendImages();
            break;
            case "map":
                BotMsg = sendImageMap();
            break;
            case "covid":
                BotMsg = await sendFlex();
            break;
            default:
                BotMsg = sendText(event);
        }    
           

    //use reply API
    return config.client.replyMessage(event.replyToken, BotMsg);

}