const CheckIn = require('express')()
const model = require('./../model/index')

CheckIn.get('/', (req,res)=>{
   model.CheckIn.find({},(err,docs)=>{
        if (err) throw err
        let buf = JSON.parse(JSON.stringify(docs)) || []
        for(let i = 0; i< buf.length; i++){
            buf[i].checkInDate = new Date(buf[i].checkInDate).toLocaleString()
            buf[i].createDate = new Date(buf[i].createDate).toLocaleString()
        }

        res.send(buf)
    })
})

CheckIn.post('/', (req,res)=>{
    model.CheckIn.create(req.body).then(docs =>{
        res.send(docs)
    }).catch(err => res.status(400).send(err))
})

CheckIn.put('/:id', (req,res)=>{
    model.CheckIn.findOneAndUpdate({
        _id : req.params.id
    },req.body, (err,docs)=>{
        if(err) res.status(400).send(err)
        res.send(docs)
    })
})

CheckIn.delete('/:id', (req,res)=>{
    model.CheckIn.findOneAndDelete({
        _id : req.params.id
    }, (err,docs)=>{
        if(err) res.status(400).send(err)
        res.send(docs)
    })
})

module.exports = CheckIn