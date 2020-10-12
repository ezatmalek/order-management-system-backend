const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var OrderSchema = new Schema({
  service_number: {
    type: String
  },
  segment_group: {
    type: String
  },
  product_name: {
    type: String
  },
  order_status: {
    type: String
  },
  remark: {
    type: String
  },
  state: {
    type: String
  }
}, {
  collection: 'orders'
})

module.exports = mongoose.model('Order', OrderSchema);