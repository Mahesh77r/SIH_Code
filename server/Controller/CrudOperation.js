const DSchema = require('../module/PhoneBook.js')



const addUser = async(req,res) => {
        const data = new DSchema(req.body)
        try{
            await data.save()
            res.status(201).json({
                status: 'Success',
                data : {
                    data
                }
            })
        }catch(err){
            res.status(500).json({
                status: 'Failed',
                message : err
            })
        }
    }
module.exports = addUser;

const viewUser = async (req,res) => {
        const data = await DSchema.find({})
        try{
            res.status(200).json({
                status : 'Success',
                data : {
                    data
                }
            })
        }catch(err){
            res.status(500).json({
                status: 'Failed',
                message : err
            })
        }
    }
    module.exports = viewUser;