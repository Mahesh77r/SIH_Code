const mongoose = require('mongoose') 

const demo = mongoose.Schema({

    nappli:{
        type: String,
		required: [true, " Name is required"],
		unique: [false, " Name Already Exists"],
    },
    norgan:{
        type: String,
		required: [true, " Address is required"],
		unique: [true, " Address Already Exists"],
    },
    state :{
        type: String,
		required: [true, " Phone number is required"],
		unique: [true, " Phone number Already Exists"],
    },
    district:{
        type: String,
		required: [true, " Phone number is required"],
		unique: [true, " Phone number Already Exists"],
    },
    pincode:{
        type: Number,
		required: [true, " Phone number is required"],
		unique: [true, " Phone number Already Exists"],
    },
    address:{
        type: String,
		required: [true, " Phone number is required"],
		unique: [true, " Phone number Already Exists"],
    },
    email:{
        type: String,
		required: [true, " Phone number is required"],
		unique: [true, " Phone number Already Exists"],
    },
    password:{
        type: String,
		required: [true, " Phone number is required"],
		unique: [true, " Phone number Already Exists"],
    },
    cpassword:{
        type: String,
		required: [true, " Phone number is required"],
		unique: [true, " Phone number Already Exists"],
    },
    phoneno:{
        type: Number,
		required: [true, " Phone number is required"],
		unique: [true, " Phone number Already Exists"],
    },
    achievement:{
        type: String,
		required: [true, " Phone number is required"],
		unique: [true, " Phone number Already Exists"],
    },
    otherinformation:{
        type: String,
		required: [true, " Phone number is required"],
		unique: [true, " Phone number Already Exists"],
    },
})

const ClubRegister = mongoose.model('club', demo)

module.exports = ClubRegister











