const mongoose = require('mongoose') 
// const  autoIncrement  = require('mongoose-auto-increment')
const demo = mongoose.Schema({
    ninfra: {
        type: String,
		
    },
    towner: {
        type: String,
		
    },
    norgan: {
        type: String,
		
    },
    status: {
        type: String,
		
    },
    eyear: {
        type: String,
		
    },
    nadmi: {
        type: String,
		
    },
    tinfra: {
        type: String,
		
    },
    nreg: {
        type: String,
		
    },
    otherinformation: {
        type: String,
		
    },
    address: {
        type: String,
		
    },
    address2: {
        type: String,
		
    },
    nhouse: {
        type: String,
		
    },
    Street: {
        type: String,
		
    },
    Landmark: {
        type: String,
		
    },
    Locality: {
        type: String,
		
    },
    pincode: {
        type: String,
		
    },
    state: {
        type: String,
		
    },
    district: {
        type: String,
		
    },
    subdistrict: {
        type: String,
		
    },
    city: {
        type: String,
		
    },
    cperson: {
        type: String,
		
    },
    designation: {
        type: String,
		
    },
    email: {
        type: String,
		
    },
    nfax: {
        type: String,
		
    },
    phoneno: {
        type: String,
		
    },
    aphoneno: {
        type: String,
		
    },
    sdiscipline: {
        type: String,
		
    },
    tevent: {
        type: String,
		
    },
    ssmen: {
        type: String,
		
    },
    sswomen: {
        type: String,
		
    },
    password: {
        type: String,
		
    },
    cpassword: {
        type: String,
		
    },
    sport:{
        type: String,
		
    },
    age:
    {
        type:String,
        
    },
    lat:
    {
        type:String
    },
    lng:{
        type:String
    }
})
// autoIncrement.initialize(mongoose.connection);
// demo.plugin(autoIncrement.plugin,'forms')
const signUp = mongoose.model('UserInfo', demo)

module.exports = signUp



