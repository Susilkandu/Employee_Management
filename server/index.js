const app = require('express')();
const bodyParser= require('body-parser')
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const PORT  = process.env.PORT || 8080;
app.use('/Admin',require('./routes/AdminRoutes'))
app.listen(PORT,()=>{
    console.log(`server is running on on ${PORT}`);
})