class car{

    constructor(name){
        this.name = name; 
        this.product_name = [];
        this.price_product = 0;
        this.code_promo = "";
        this.descuento = 0;
        this.total = 0;
    }

    message(mensaje){
        console.log(mensaje);
    }

    Add_Product(product_name ,code_promo){
        this.product_name.push(product_name);

        if(code_promo == "SINPROMO"){
            this.message("ES VALIDO");
            for (let i = 0; i < this.product_name.length; i++) {
                const element = this.product_name[1];
                this.price_product = this.price_product + element[1];
                var precio = this.price_product - (this.price_product *0.10)
            }
            this.price_product = precio;
            
        }else{
            this.message("No se ingreso un codigo");
        }
    }

    totalproduct(){  
        var total = 0;
        for (let i = 0; i < this.product_name.length; i++) {
            const articlesInCart = this.product_name[1];
            var total = total + articlesInCart[1]
        }
        this.total = total;
    }
    
    borrarproducto(){
        for (let i = 0; i < this.product_name.length; i++) {
            this.product_name[0] = "";
        }
    }
}

const producto = new car('Producto');

let Pro = ["Laptop",5000];

let promo = "";

producto.Add_Product(Pro,promo);
producto.Add_Product(Pro,promo);
producto.totalproduct();


// json = document.getElementById("json");

console.log(json.innerHTML = "Producto: " + JSON.stringify(producto, undefined, 2));

