const config = require('../config/line');
const {sendText} = require('./send-text');
const {sendImages} =require('./send-img'); 
const {sendImageMap} =require('./send-imagemap'); 
const {sendFlex} =require('./send-flex'); 
const { sendFlexMySQL } = require('./send-flex-mysql');

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
            case "figer":
                BotMsg = await sendFlexMySQL();
            break;
            default:
                BotMsg = sendText(event);
        }    
           

    //use reply API
    return config.client.replyMessage(event.replyToken, BotMsg);

}