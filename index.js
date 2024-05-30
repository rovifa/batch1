import express from 'express';
import batchRoute from './router/batch1.js'

const app = express();
const port = 8080

app.use(express.json());

app.use('/batch', batchRoute);

app.listen(port, () =>{
    console.log("server running di port ",port)
})