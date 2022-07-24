const axios = require('axios').default;


exports.sendFlexMySQL = async () =>{

  // api => https://covid19.ddc.moph.go.th/
  const response = await axios.get(process.env.BASE_URL + "/getfiger", {
     headers: { "Content-Type": "application/json" }
  });


//console.log(response.data);

let bubbles =[];
let promotions = response.data;



bubbles = promotions.map((item)=>{
  let postbackType = { type: 'figer' };
  let newItem = {...postbackType, ...item};

    return {
        "type": "bubble",
        "hero": {
          "type": "image",
          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "cover",
          "action": {
            "type": "uri",
            "uri": "https://linecorp.com"
          }
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "spacing": "md",
          "action": {
            "type": "uri",
            "uri": "https://linecorp.com"
          },
          "contents": [
            {
              "type": "text",
              "text": `[ID: ${item.id}] ${item.name}`,
              "size": "xl",
              "weight": "bold"
            },
            {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "contents": []
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "button",
              "style": "primary",
              "color": "#905c44",
              "margin": "xxl",
              "action": {
                "type": "postback",
                "label": "ดูเพิ่มเติม",
                "data": JSON.stringify(newItem),
              }
            }
          ]
        }
      }
})

let BotMsg = {
  type: "flex",
  altText: "รายงาน สแกนนิ้ว ประจำวัน",
  contents: {
    type:"carousel",
    contents:bubbles
  }

}
    return BotMsg;
}