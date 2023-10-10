import express from 'express'

const app = express()

app.get('/saludo/:name', (req,res)=>{
    console.log(req.params)
    const {name} = req.params

    res.send(`Saludo para mi amigo ${name}`)


})

app.listen(8080)