const mongoose = require('mongoose') 

const demo = mongoose.Schema({

    name:{
        type: String,
		
    },
    quantity:{
        type: Number,
		
    },
    year:{
        type: Number,
		
    },
    price:{
        type: Number,
		
    },
   
})

const InSchema = mongoose.model('inventory', demo)

module.exports = InSchema











