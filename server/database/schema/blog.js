const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new mongoose.Schema({
  title: String,
  type: Number,
  description: String,
  // 录入数据的时间记录
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

// 每次存储数据之前，都调用一下这个方法
BlogSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  }
  else {
    this.meta.updateAt = Date.now();
  }

  next();
});

BlogSchema.statics = {
  fetch: function(cb) {
    return this
      .find({})
      .sort('meta.updateAt')
      .exec(cb);
  },
  findById: function(id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb);
  }
};

module.exports = MovieSchema;
