const sequelize = require('../db/conexion');

module.exports = class productsModel {
    constructor(product){
        this.product = product;
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM products");
        return result;
    }
    async find (productId){
        let result = await sequelize.query("SELECT * FROM products WHERE id = " + productId+";");
        return result;
    }
    async add (product){
        let result = await sequelize.query("INSERT INTO products(product_name,properties,price)VALUES('"+product.product_name+"','"+product.properties+"',"+product.price+");");
        return result;
    }
    async delete (productId){
        let result = await sequelize.query("DELETE FROM products WHERE id_product = " + productId+";");
        return result;
    }
    async update (product){
        let result = await sequelize.query("UPDATE products SET product_name = '"+product.product_name+"',properties='"+product.properties+"',price='"+product.price+"' WHERE id_product = '"+product.id_product+"';");
        return result;
    }
    async sold (product){
        let result = await sequelize.query("INSERT INTO sold_products(product_name,count,price)VALUES('"+product.product_name+"','"+product.count+"',"+product.price+");");
        return result;
    }
    async compras (){
        let result = await sequelize.query("SELECT * FROM sold_products");
        return result;
    }

}