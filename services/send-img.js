exports.sendImages = (event)=>{

  let BotMsg;

  let receiveMsg = event.message.text.toLowerCase().trim();

  if(receiveMsg==='จันทร์'){
    BotMsg = {
      "type": "image",
      "originalContentUrl": process.env.BASE_URL + "/images/monday.png",
      "previewImageUrl": process.env.BASE_URL + "/images/monday.png"
    }
  }else if(receiveMsg==='อังคาร'){
    BotMsg = {
      "type": "image",
      "originalContentUrl": process.env.BASE_URL + "/images/tuesday.png",
      "previewImageUrl": process.env.BASE_URL + "/images/tuesday.png"
    }
  }else{
    BotMsg = { type: 'text', text: 'พิมพ์ข้อความใหม่ นะครับ' };
  }



      return BotMsg;
}