import { Service } from 'egg';
//import {MongoClient} from 'mongodb'

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // 建立连接
    console.log(name)
    //let connect = await MongoClient.connect('mongodb://insurv:insurv2019@182.92.125.68:27017/insurv_dev2?authSource=insurv_dev2'))
    return this.ctx.model.Article.find();
    //console.log(this.config);
    //console.log(name)
  }
}
