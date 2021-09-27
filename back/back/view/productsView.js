const productController = require('../controller/productsController')
const midd = require('../middlewares/midd');

module.exports = async (app) => {
    app.get('/products',midd.middAutentication, async(req,res) => {
        res.send(await productController.listProducts());
        
    });

    app.get('/product/:id',async(req,res) => {
        let productId = req.params.id
        res.send(await productController.findProduct(productId));
    });

    app.post('/products',async(req,res) => {
        let product = req.body;
        res.send(await productController.addProduct(product));
    });
    app.patch('/updateproducts',async(req,res) => {
        let product = req.body;
        res.send(await productController.updateproduct(product));
    });
    app.delete('/deleteproduct/:id', async(req,res)=>{
        let productId = req.params.id
        res.send(await productController.deleteproduct(productId));
    });

};
