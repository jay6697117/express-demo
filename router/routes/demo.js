import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/router/get', (req, res) => {
  res.send('GET router request');
});

router.post('/router/post', (req, res) => {
  res.send('POST router request');
});

router.get('/response/json', (req, res) => {
  console.log('req :>> ', req.url);
  // res.json({
  //   name: 'express',
  //   type: 'framework'
  // })

  // json
  // res.send({
  //   name: 'express',
  //   type: 'framework'
  // })

  // string
  // res.send('hello express');

  // html
  res.send('<h1 style="color:red">/demo hello express</h1>');
});

router.get('/response/download', (req, res) => {
  // 指定文件路径
  res.download(path.resolve(__dirname, '../../package.json'));
});

export default router;
