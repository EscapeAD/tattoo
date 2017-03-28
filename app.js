const express    = require('express')
const path       = require('path')
const bodyParser = require('body-parser')
const app        = express()
const port       = 3000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
  res.send('Hello')
})

app.listen(port, (error)=>{
  if(error){
    console.log(`${error}`)
  }
  console.log(`Server Listening on ${port}`)
})
