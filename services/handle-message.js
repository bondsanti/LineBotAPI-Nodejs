const config = require('../config/line');


exports.handleMessage = (event) => {

    let BotMsg;

    let receiveMsg = event.message.text.toLowerCase().trim();

    if (receiveMsg ==='promotion') {
        BotMsg = { type: 'text', text: 'ยังไม่มีโปรโมชั่น' };
    
    }else if(receiveMsg ==='555'){
        BotMsg = { type: 'text', text: event.message.text };
       
    
    }else{
        BotMsg = { type: 'text', text: 'พิมพ์ข้อความใหม่ นะครับ' };
    }


    //use reply API
    return config.client.replyMessage(event.replyToken, BotMsg);

}