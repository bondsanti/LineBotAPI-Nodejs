const axios = require('axios').default;
const commaNumber = require('comma-number');

exports.sendFlex = async () =>{

  // api => https://covid19.ddc.moph.go.th/
  const response = await axios.get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all", {
     headers: { "Content-Type": "application/json" }
  });


//console.log(response.data);

let BotMsg = {
  type: "flex",
  altText: "รายงาน Covid ประจำวัน",
  contents: {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "อัพเดทสถาณการณ์ Covid19",
          "weight": "bold",
          "color": "#1DB446",
          "size": "sm"
        },
        {
          "type": "text",
          "text": "รายงานจำนวนผู้ติดเชื้อ",
          "size": "xs",
          "color": "#aaaaaa",
          "wrap": true
        },
        {
          "type": "separator",
          "margin": "xxl"
        },
        {
          "type": "box",
          "layout": "vertical",
          "margin": "xxl",
          "spacing": "sm",
          "contents": [
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "text",
                  "text": "ผู้ติดเชื้อ ใหม่",
                  "size": "sm",
                  "color": "#fc0303",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": commaNumber(response.data[0].new_case)+" ราย",
                  "size": "sm",
                  "color": "#fc0303",
                  "align": "end"
                }
              ]
            },

            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "text",
                  "text": "รักษาหาย",
                  "size": "sm",
                  "color": "#03fc1c"
                },
                {
                  "type": "text",
                  "text": commaNumber(response.data[0].new_recovered)+" ราย",
                  "size": "sm",
                  "color": "#03fc1c",
                  "align": "end"
                }
              ]
            }
          ]
        },
        {
          "type": "separator",
          "margin": "xxl"
        },
        {
          "type": "box",
          "layout": "horizontal",
          "margin": "md",
          "contents": [
            {
              "type": "text",
              "text": "ณ วันที่",
              "size": "xs",
              "color": "#aaaaaa",
              "flex": 0
            },
            {
              "type": "text",
              "text": response.data[0].update_date,
              "color": "#aaaaaa",
              "size": "xs",
              "align": "end"
            }
          ]
        }
      ]
    },
    "styles": {
      "footer": {
        "separator": true
      }
    }
  }

}
    return BotMsg;
}