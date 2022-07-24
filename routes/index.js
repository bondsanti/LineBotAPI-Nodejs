const express = require('express');
const router = express.Router();
const { createRichmenu } = require('../services/create-richmenu');
const { deleteRichmenu } = require('../services/delete-richmenu');

const db = require('../config/mysql');

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



module.exports = router;
