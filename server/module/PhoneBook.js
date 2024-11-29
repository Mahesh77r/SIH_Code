const mongoose = require('mongoose')

const DSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('forms',DSchema)

 