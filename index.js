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

vets.push({
    id: 1006106410,
    name:"Jhon",
    last:"Doe",
})

pets.push({
    id:1006106140,
    name:"pipi",
    age: 2,
    tipo:"gato",
    vetID:1006106410,
    userID:1234567890
})

users.push({
    id:1234567890,
    name:"Mr",
    last:"beast",
})


////////////////////////////////////////////////
app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})

app.get('/',(req,res)=>{
    res.send('API IS RUNNING')
})
////////////////////////////////////////////////
//vets//
app.get('/vets',(req,res)=>{
    res.send({"vets":vets})
})

//pets//
app.get('/pets',(req,res)=>{
    res.send({"pets":pets})
})
//users//
app.get('/users',(req,res)=>{
    res.send({"users":users})
})