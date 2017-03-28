const express    = require('express')
const path       = require('path')
const bodyParser = require('body-parser')
const app        = express()
const port       = 3000






app.listen(port, (error)=>{
  if(error){
    console.log(`${error}`)
  }
  console.log(`Server Listening on ${port}`)
})
