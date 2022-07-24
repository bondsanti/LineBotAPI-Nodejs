const mysql = require('mysql2/promise');


exports.connectionMySQL = async()=>{
    // const conn = await mysql.createConnection({
    //     host:'codingthailand.com',
    //     user:'line',
    //     password:'dvETVz2A2WCsFhKX',
    //     database:'line',
    //     port:'3306'
    // });
    const conn = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'line-api-nodejs',
        port:'3306'
    });

    return conn;
}


