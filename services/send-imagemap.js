exports.sendImageMap = ()=>{

  let BotMsg;

      BotMsg = {
        "type": "imagemap",
        "baseUrl": process.env.BASE_URL +"/images/static/imagemap",
        "altText": "โปรดเลือกเมนูของเรา",
        "baseSize": {
          "width": 1040,
          "height": 1040
        },
        "video": {
          "originalContentUrl": process.env.BASE_URL +"/images/static/imagemap/video.mp4",
          "previewImageUrl": process.env.BASE_URL +"/images/static/imagemap/preview.jpg",
          "area": {
            "x": 0,
            "y": 0,
            "width": 1040,
            "height": 521
          },
          "externalLink": {
            "linkUri": "https://liff.line.me/1657328935-knwvALPO",
            "label": "ดูวีดีโอทั้งหมด"
          }
        },
        "actions": [
          {
            "type": "uri",
            "linkUri": "https://liff.line.me/1657328935-knwvALPO",
            "area": {
              "x": 0,
              "y": 521,
              "width": 520,
              "height": 520
            }
          },
          {
            "type": "message",
            "text": "love",
            "area": {
              "x": 521,
              "y": 521,
              "width": 520,
              "height": 520
            }
          }
        ]
      }

      return BotMsg;
}