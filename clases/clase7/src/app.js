import express from 'express'

const app = express()


//Necesario para identificar json en app post
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const products = [
    { id: 1, name: 'Bears', price: 100, stock: 29 },
    { id: 2, name: 'Wine', price: 200, stock: 13 },
]


app.get('/', (req, res) => { res.send('OK') })

app.get('/api/products', (req, res) => { res.json(products) })
app.get('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const product = products.find(p => p.id === id)

    if (!product) {
        return res.status(404).json({ error: 'Product Not Found' })
    }
    res.json(product)

})

app.post('/api/products', (req, res)=>{
    const product = req.body
    product.id = products.length + 1

    if(!product.name || !product.price || !product.stock){
        return res.status(400).json({error: 'Faltan datos para el producto'})
    }

    products.push(product)
    res.status(201).send({status: 'success', message: 'Product Created'})

})

app.put('/api/products/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const product =req.body

    if(!product.name || !product.price || !product.stock){
        return res.status(400).json({error: 'Faltan datos para el producto'})
    }

    const idxProduct = products.findIndex(p => p.id === id)
    if(idxProduct < 0){
        return res.status(404).json({error: 'Product not found'})
    }

    products[idxProduct] = productres.json({status: 'success', message: 'Product updated!'})
})


app.delete('/api/products/:id', (req, res)=>{



})


app.listen(8080, () => { console.log('Eschucando ....'); })