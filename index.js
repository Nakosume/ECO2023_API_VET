const express = require('express')
const app = express()
const port = 3000

// Use Json middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors())

let vets = []
let users = []
let pets = []



app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})

app.get('/',(req,res)=>{
    res.send('API IS RUNNING')
})