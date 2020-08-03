import { Application } from 'egg';

module.exports = (app:Application) => {
  const { controller, router, jwt } = app;
  const subRouter = router.namespace("/broker");

  subRouter.get('/', jwt, controller.home.index);
}
