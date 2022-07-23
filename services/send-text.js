exports.sendText =  (event) =>{

    let BotMsg;

    let receiveMsg = event.message.text.toLowerCase().trim();

    if (receiveMsg ==='promotion') {
        BotMsg = { type: 'text', text: 'ยังไม่มีโปรโมชั่น' };
    
    }else if(receiveMsg ==='555'){
      
      BotMsg = { type: 'text', text: event.message.text };
       
    }else if(receiveMsg==='love'){
        BotMsg =  {
            "type": "sticker",
            "packageId": "6136",
            "stickerId": "10551378"
          } ;

    }else{
        BotMsg = { type: 'text', text: 'พิมพ์ข้อความใหม่ นะครับ' };
    }

    return  BotMsg;
}