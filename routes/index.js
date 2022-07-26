const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const jwt_decode = require('jwt-decode');

const db = require('../config/mysql');
const { createRichmenu } = require('../services/create-richmenu');
const { deleteRichmenu } = require('../services/delete-richmenu');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getfiger', async function(req, res, next) {
  const conn = await db.connectionMySQL();
  const [rows] = await conn.query("select * from pro_room order by id desc limit 12");
  //const [rows] = await conn.query("select * from scanfiger order by id desc limit 12");
  return res.status(200).json(rows);
});

router.get('/getfiger/:id', async function(req, res, next) {
  const conn = await db.connectionMySQL();
  const [rows] = await conn.query("select * from pro_room where id =?",[req.params.id]);
  //const [rows] = await conn.query("select * from scanfiger where id =?",[req.params.id]);
  return res.status(200).json(rows[0]);
});

//create richmenu
router.get('/createrichmenu', async function(req, res, next) {
  await createRichmenu();
  return res.status(200).json({message:'สร้างเมนูสำเร็จ'});
});

router.get('/deleterichmenu', async function(req, res, next) {
  await deleteRichmenu();
  return res.status(200).json({message:'ลบเมนูสำเร็จ'});
});


router.get('/auth/callback', async function(req, res, next) {
  //console.log(req.query.code);

  //get access token
  const params = new URLSearchParams({
  grant_type:'authorization_code',
  code:req.query.code,
  redirect_uri:process.env.BASE_URL +"/auth/callback",
  client_id:process.env.LOGIN_LINE_ID,
  client_secret:process.env.LOGIN_LINE_SECRET
  });

  const response = await axios.post('https://api.line.me/oauth2/v2.1/token',params,{
      headers:{"Content-Type":"application/x-www-form-urlencoded"}
  });


  //get profile from id token
  const user = jwt_decode(response.data.id_token);

  return res.status(200).json({
    user:user,
    response: response.data});
});



module.exports = router;
