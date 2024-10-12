const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./TaskRouter')
const cors = require('cors');

require('dotenv').config();
mongoose.set('strictQuery',false);



mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("We were connected to Mongo"))
.catch((err) => console.log(err))


const PORT = 7000 || process.env.port;

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(PORT, ()=> {
    console.log(`I work through PORT ${PORT} `)
})
// tatyanachishkina
// cfnu36BXHQC77Jzj