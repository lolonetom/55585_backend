class ProductManager {

    constructor(path){
        this.path = path
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
    
    async #saveToFile(){
        const writeToFile = () => {fs.writeFileSync(this.path, JSON.stringify(this.products))};
        return writeToFile;
    }

    
    async getProduct (){
        try {
            if (fs.existsSync(this.path)) {
                const products = await fs.promises.readFile(this.path, 'utf-8');
                const productsjs = JSON.parse(products);
                return productsjs;

            } else {
                return this.products;
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getProductById(id) {
        try {
            const productsFile = await this.getProducts();
            productsFile.push(id);
            await fs.promises.writeFile(this.path, JSON.stringify(productsFile));
            return this.products.find((product) => product.id === id);
        } catch (error) {
            console.log(error);
        }
    }


};

const productManager = new ProductManager('./product.json');

const test = async () => {
    const getProducts = await productManager.getProducts();
    console.log('los productos: ', getProducts);
    await productManager.addProducts(prod1);
    const getProducts2 = await productManager.getProducts();
    console.log('los productos: ', getProducts2);
}

test()
