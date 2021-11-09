const express = require('express');
const app = express()

app.get('/',(req,res,next)=>{
    res.send('Hello from nodejs')
})


app.listen(8080,()=>{
    console.log('Listening to port 8080')
})
