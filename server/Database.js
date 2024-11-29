const mongoose = require('mongoose')
const Connection =()=>
{

    const DB = 'mongodb+srv://ganesh:ganesh123@cluster0.spcfs6p.mongodb.net/SIHPRO?retryWrites=true&w=majority'
    //const DB = 'mongodb+srv://mahesh:mahesh123@cluster0.ek8sc.mongodb.net/SIHPROJECT0000?retryWrites=true&w=majority'
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() =>{
        console.log('Database connected..')
    })
    
}
module.exports = Connection;