import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  eggMongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  eggRouterPlus: {
    enable: true,
    package: 'egg-router-plus'
  },
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  }
};

export default plugin;
