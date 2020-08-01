
import { Application } from 'egg';

module.exports = (app:Application) => {
  const { controller, router } = app;
  const subRouter = router.namespace("/admin/user");

  subRouter.get('/', controller.home.index);
}
