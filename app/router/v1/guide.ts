import { Application } from 'egg';

module.exports = (app:Application) => {
  const { controller, router } = app;
  const subRouter = router.namespace("/guides");

  subRouter.get('/', controller.home.index);
}
