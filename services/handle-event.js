const config = require('../config/line');
const service = require('./handle-message');
const { handlePostback } = require('./handle-postback');

// event handler
exports.handleEvent = (event) => {
    //console.log(event);
    // if (event.type !== 'message' || event.message.type !== 'text') {
    //   // ignore non-text-message event
    //   return Promise.resolve(null);
    // }
  
    // // create a echoing text message
    // const echo = { type: 'text', text: event.message.text };
  
    // // use reply API
    // return config.client.replyMessage(event.replyToken, echo);

    switch (event.type) {
        case "message":
            // console.log('message');
            switch (event.message.type) {
                case "text":
                   // console.log('Text message');
                   service.handleMessage(event);
                   break;
                case "follow":
                    console.log('New Follow'+ event.source.userId);
                    break;
                case "unfollow":
                    console.log('UnFollow'+ event.source.userId);
                    break;
                default:
                    throw new Error("Unknow message "+JSON.stringify(event.message.type));
            }
            break;
        case "postback":
            //console.log('ID:'+ event.postback.data);
           handlePostback(event);
            break;
        default:
            throw new Error("Unknow event "+JSON.stringify(event));
         
    }
  }

  
  