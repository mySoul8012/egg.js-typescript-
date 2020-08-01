
import { Application } from 'egg';

module.exports = (app:Application) => {
  const { controller, router } = app;
  const subRouter = router.namespace("/admin/homePage");

  subRouter.get('/', controller.home.index);
}
