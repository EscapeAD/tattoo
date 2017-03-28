const express = require('express')
const router  = express.Router()

router.use('/users', router)

router.get("/", (req, res, next)=>{
  res.json({success: true, msg: 'Successfully grab Users'})
})


module.exports = router
