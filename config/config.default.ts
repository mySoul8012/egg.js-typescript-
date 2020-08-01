import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1596255586890_4906';

  // add your egg config in here
  config.middleware = [];

  // mongodb 配置
  config.mongoose = {
    url: 'mongodb://insurv:insurv2019@182.92.125.68:27017/insurv_dev2?authSource=insurv_dev2',
    options: {
      server: {
        poolSize: 40,
      },
    },
  };


  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };



  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
