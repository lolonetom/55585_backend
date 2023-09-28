class ProductManager {

    constructor(){
        this.products = []
    }
    
    #getMaxId(){
        let maxId = 0;
        this.products.map((product) => {
            if(product.id > maxId) maxId = product.id;
        })
        return maxId;
    }
    addProduct =(title, description, price,thumbnail,code,stock) =>{
        
//PIMERO SE VALIDA QUE NO EXISTA EL CODIGO DEL PRODUCTO AGREGADO, CASO CONTRARIO SE AGREGARÁ EL PRODUCTO AL ARRAY //
        const validarCode = 
            this.products.find((product) => product.code === code);
        if(validarCode){
            console.log('Ya existe el codigo del producto');
        }else{
        const product ={
            id: this.#getMaxId() + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        this.products.push(product);
        }


    }
    
    getProduct=()=>{
        return this.products;
    }

    getProductById=(id)=>{
        return this.products.find((product)=> product.id === id);
    }


};

const productManager = new ProductManager();
productManager.addProduct('producto prueba1', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 10);
productManager.addProduct('producto prueba2', 'Este es un producto prueba', 300, 'Sin imagen', 'abc1234', 10);
console.log(productManager.getProduct());
productManager.addProduct('producto prueba1', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 10);
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2));