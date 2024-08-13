export default function method(app) {
  // 创建一个 GET /hello 路由
  app.get('/hello/:id', (req, res) => {
    const { params } = req;
    console.log('params', params);
    res.json(params);
  });

  app.get(/foo/, (req, res) => {
    const {  path } = req;
    console.log('path', path);
    res.json(path);
  });

  app.get('/method/get', (req, res) => {
    res.send('GET request');
  });
  app.post('/method/post', (req, res) => {
    res.send('POST request');
  });
  app.put('/method/put', (req, res) => {
    res.send('PUT request');
  });
  app.delete('/method/delete', (req, res) => {
    res.send('DELETE request');
  });

  app.all('/method/all', (req, res) => {
    const { method } = req;
    res.send(`${method} request all...`);
  });

  app
    .route('/route/any')
    .all((req, res, next) => {
      console.log('pre all:', 'method:', req.method, ' - path:', req.path);
      next();
    })
    .get((req, res) => {
      console.log('get request');
      res.send('get request');
    })
    .post((req, res) => {
      console.log('post request');
      res.send('post request');
    });
}
