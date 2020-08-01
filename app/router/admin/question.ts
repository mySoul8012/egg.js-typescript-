
import { Application } from 'egg';

module.exports = (app:Application) => {
  const { controller, router } = app;
  const subRouter = router.namespace("/admin/question");

  subRouter.get('/', controller.home.index);
}
