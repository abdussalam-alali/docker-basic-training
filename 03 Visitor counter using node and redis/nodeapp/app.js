const express = require('express')
const redis = require('redis')
const app = express()
const client = redis.createClient({
    host:'redis-server',
})
client.set('visitors',0);
app.get('/',(req,res)=>{
    client.get('visitors',(err,value)=>{
        res.send("Your visitor number is :"+ value)
        client.set('visitors', parseInt(value) + 1)
    })
})

app.listen(8080,()=>{
    console.log('Server is listening to requests on port 8080')
})
