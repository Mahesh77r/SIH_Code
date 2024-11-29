const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const Connection = require('./Database.js')
const Crud = require('./Routes/CrudRoutes.js')
Connection();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())
app.use((req, res, next) => {
	res.locals.path = req.path;
	next();
});

app.use('/',Crud)



const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})