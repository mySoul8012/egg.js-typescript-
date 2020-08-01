

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    "wid": String
  });
  return mongoose.model('article', PostSchema);
};

