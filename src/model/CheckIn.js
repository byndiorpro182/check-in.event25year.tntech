const mongoose = require('mongoose')

const CheckInSchema = new mongoose.Schema({
  id: mongoose.SchemaTypes.ObjectId,
  employeeCode: mongoose.SchemaTypes.String,
  location : mongoose.SchemaTypes.String,
  createBy : mongoose.SchemaTypes.String,
  checkInDate: mongoose.SchemaTypes.Date,
  note : mongoose.SchemaTypes.String,
  createDate : {
    type : mongoose.SchemaTypes.Date,
    default : Date.now
  }
});


module.exports = mongoose.model('CheckIn', CheckInSchema);