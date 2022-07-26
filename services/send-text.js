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
    }else if(receiveMsg==='lift'){
            BotMsg = { type: 'text', text: 'https://liff.line.me/1657328935-knwvALPO' };
    
    }else if(receiveMsg==='แจ้งซ่อมสำเร็จ'){

        BotMsg = [
            { type: 'text', text: 'ขอบคุณที่แจ้งซ่อมเข้ามา..\n กรุณารอสักครู่' },
            { type: 'text', text: 'IT Support กำลังไปหาน้าาา!!'},
            { type: 'sticker', "packageId": "789",
            "stickerId": "10888"},
        ];

         
    }else{
        BotMsg = { type: 'text', text: 'พิมพ์ข้อความใหม่ นะครับ' };
    }

    return  BotMsg;
}