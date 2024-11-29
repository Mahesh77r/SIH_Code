const mongoose = require('mongoose') 


const demo = mongoose.Schema({

    nappli:{
        type: String,
		required: [true, " Name is required"],
		unique: false
    },
    norgan:{
        type: String,
		required: [true, " Address is required"],
		unique: false
    },
    state :{
        type: String,
		required: [true, " Phone number is required"],
		unique: false
    },
    district:{
        type: String,
		required: [true, " Phone number is required"],
		unique: false
    },
    pincode:{
        type: Number,
		required: [true, " Phone number is required"],
		unique: false
    },
    address:{
        type: String,
		required: [true, " Phone number is required"],
		unique: false
        //unique: [true, " Phone number Already Exists"],
    },
    email:{
        type: String,
		required: [true, " Phone number is required"],
        unique: false
		//unique: [true, " Phone number Already Exists"],
    },
    password:{
        type: String,
		required: [true, " Phone number is required"],
		unique: false
    },
    cpassword:{
        type: String,
		required: [true, " Phone number is required"],
		unique: false
    },
    phoneno:{
        type: Number,
		required: [true, " Phone number is required"],
        unique: false
		//unique: [true, " Phone number Already Exists"],
    },
    // achievement:{
    //     type: String,
	// 	required: [true, " Phone number is required"],
	// 	unique: [true, " Phone number Already Exists"],
    // },
    otherinformation:{
        type: String,
		required: [true, " Phone number is required"],
		unique: false
    },
})

const EventRegister= mongoose.model('event', demo)

module.exports = EventRegister











