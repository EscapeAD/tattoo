const express    = require('express')
const path       = require('path')
const bodyParser = require('body-parser')
const router     = express.Router()
const app        = express()
const port       = 3000
const users       = require('./routes/users')

// Config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

// Routing config
app.use('/api', router)
router.use(users)

// Index
app.get('/', (req, res)=>{
  res.send('Invalid Endpoint')
})

// App listen/Serve
app.listen(port, (error)=>{
  if(error){
    console.log(`${error}`)
  }
  console.log(`Server Listening on ${port}`)
})
