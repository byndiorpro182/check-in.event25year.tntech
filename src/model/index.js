const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_STR,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },(err)=>{
    if(err)
        throw err
    console.log('MongoDB connected!')
})

const model = {
    CheckIn : require('./CheckIn')
}


module.exports = model