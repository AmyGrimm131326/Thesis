const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('./db/db')
const PORT = 4000

// this is where im creating router
const router = require('./routes/routes')

// this is parsing my json file and url encoding
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Allow requested resources no matter where the HTTP was initiated
app.use(cors())

// this is where im connecting to my router(api) if i had 2 pages location route.
app.use('/', router)

app.listen(PORT,()=>{
    console.log(`Server running on port:${PORT}`);  
})