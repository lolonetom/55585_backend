import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

let frase = 'Los estudiantes de la clase son super cool'

app.get ('/api/frase', (req, res)=> res.json({frase}))
app.get ('/api/frase/:idx', (req, res)=> {

    


})

app.listen(8080, () => { console.log('Eschucando ....'); })