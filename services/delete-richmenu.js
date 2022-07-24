const { client } = require("../config/line");


exports.deleteRichmenu = async () => {


  //  delete alias to richmenu
  await client.deleteRichMenuAlias("richmenu-alias-aa");



};
