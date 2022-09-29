const express = require('express')
const app = express()

app.get('/' , (req, res)=>{
  res.json({
    mesg: 'I am alive'
  })
})

app.listen(3000)
