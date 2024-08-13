import method from './routes/method.js';
import demo from './routes/demo.js';
import header from './routes/header.js';
import restful from './routes/restful.js';

// 路由列表
const routers = [demo, header];

export default function router(app) {
  // 挂载方法
  method(app);
  // 注册路由列表
  app.use(routers);
  // 将restful路由注册到 /api 路径下，路由会自动拼接上 /api 前缀
  app.use('/api', restful);
}
