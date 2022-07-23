exports.sendImages = ()=>{

  let BotMsg;

    BotMsg = {
      "type": "image",
      "originalContentUrl": process.env.BASE_URL + "/images/monday.png",
      "previewImageUrl": process.env.BASE_URL + "/images/monday.png"
    }

      return BotMsg;
}