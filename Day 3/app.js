const express = require('express')
app = express()

app.get("/", (req, res) =>{
    res.send("Hello World, API")
})
app.listen(3000, ()=>{
    console.log("3000 is working")
})

console.log("End app")