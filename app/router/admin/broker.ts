
import { Application } from 'egg';

module.exports = (app:Application) => {
  const { controller, router } = app;
  const subRouter = router.namespace("/admin/broker");

  subRouter.get('/', controller.home.login);
}
