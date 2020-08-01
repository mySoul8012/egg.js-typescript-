import { Application } from 'egg';

// 主路由
export default (app: Application) => {
  const { controller, router } = app;
  router.get('/', controller.home.index);
  // 前台路由
  require('./router/v1/broker')(app);
  require('./router/v1/schedule')(app);
  require('./router/v1/setting')(app);
  require('./router/v1/hot')(app);
  require('./router/v1/guide')(app);
  require('./router/v1/user')(app);
  require('./router/v1/compaine')(app);
  require('./router/v1/comment')(app);
  require('./router/v1/qa')(app);
  require('./router/v1/upload')(app);

  // 后台路由

};
