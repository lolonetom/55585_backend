import express from 'express'
import productManager from './ProductManager.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const products = (productManager)

app.get('/products', (req, res) => { res.json(products) })

app.get('/products/:pid', (res, req)=>{

    const pid = parseInt(req.params.pid)
    const product = products.find(p => p.pid === pid)

    if(!product){
        return res.status(404).json({error: 'Product Not Found'})
    }
    res.json(product)

})




//Log para saber que el servicio está activo//
app.listen(8080, () => { console.log('Escuchando puerto 8080'); })