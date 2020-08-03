import { Application } from 'egg';

// 主路由
export default (app: Application) => {
  const { controller, router } = app;
  router.get('/', controller.home.login);
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
  require('./router/admin/user')(app);
  require('./router/admin/broker')(app);
  require('./router/admin/companies')(app);
  require('./router/admin/product')(app);
  require('./router/admin/comment')(app);
  require('./router/admin/question')(app);
  require('./router/admin/answer')(app);
  require('./router/admin/homePage')(app);
};
