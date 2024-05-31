import express from 'express';
import batchRoute from './router/batch1.js'
import authRoute from './router/auth.js'


const app = express();
const port = 8080

app.use(express.json());

app.use('/batch', batchRoute);
app.use('/login', authRoute)

app.listen(port, () =>{
    console.log("server running di port ",port)
})