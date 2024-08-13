import express from 'express';
const router = express.Router();

router.get('/response/get/header', (req, res) => {
  // headers: {
  //   'content-type': 'text/plain',
  //   'content-length': '0',
  //   'user-agent': 'Postcat',
  //   accept: '*/*',
  //   'eo-token': '98b54487-a30b-41bd-84e0-b57c386b0f43',
  //   host: 'localhost:3000',
  //   connection: 'close'
  // }

  // res.json(req.headers)

  res.set('content-type', 'text/html; charset=utf-8')
  res.set('token', '123456')
  res.set('token666', '666666')
  res.send('<h1>hello express 666</h1>')

})

export default router
