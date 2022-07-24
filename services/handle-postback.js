const {client} = require("../config/line");

exports.handlePostback = (event) => {
    let postbackData = event.postback.data; //String

    let data = JSON.parse(postbackData);

    let msg;
    if (data.type === 'figer') {
        // console.log(data.id); 
        msg = [
            { type: 'text', text: 'รายละเอียดโปรโมชั่นนี้' },
            { type: 'text', text: 'ราคา: ' + data.price },
        ];
    }

   // ลอง push message / broadcast
   // console.log('User ID = ' + event.source.userId);
   // let msg2 = {type:'text',text:'ข้อความนี้มาจากการ push'}
   // return client.pushMessage(event.source.userId,msg2,false); //ส่งที่ละข้อความ
   // return client.broadcast(msg2);//ส่งทุกคนที่ติดตามเรา

   return client.replyMessage(event.replyToken, msg);
}
