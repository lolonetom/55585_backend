import express from 'express'

const app = express()

app.get('/saludo', (req, res)=>{
    res.send('<h3>Saludos para todo el curso </h3>')

})

app.get('/health', (req, res)=>{
    res.send('ok')

})

app.listen(8080, ()=>{
    console.log('Server está corriendo');
})