const express = require("express");
const app = express();
const routeController = require('./routes/v1/')();
app.use(express.json());
require('dotenv').config();
PORT = process.env.PORT
app.get('/',(req,res)=>{
    res.send('Hii');
});




app.use('/api/v1', routeController)

app.listen(PORT,()=>console.log('Server Started at port ',PORT))