exports.sendText = (event) =>{

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
    }else if(receiveMsg==='จันทร์'){
            BotMsg = {
              "type": "image",
              "originalContentUrl": process.env.BASE_URL + "/images/monday.png",
              "previewImageUrl": process.env.BASE_URL + "/images/pre_monday.png"
            }
    }else if(receiveMsg==='อังคาร'){
            BotMsg = {
              "type": "image",
              "originalContentUrl": process.env.BASE_URL + "/images/tuesday.png",
              "previewImageUrl": process.env.BASE_URL + "/images/pre_tuesday.png"
            }
    }else{
        BotMsg = { type: 'text', text: 'พิมพ์ข้อความใหม่ นะครับ' };
    }

    return  BotMsg;
}