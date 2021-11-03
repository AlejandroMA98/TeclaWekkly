async function CompraCarro(){
    let car = await JSON.parse(localStorage.getItem("simpleCart_items"));
    console.log(car)
  
        for (d in car) {
            console.log(car[d])
            let product_name = car[d].name
            let count = car[d].quantity
            let price = car[d].price
            console.log(product_name, count, price);
            let productsCar = {product_name:product_name,count:count, price:price};

            let response = await fetch('http://localhost:3000/compra',{
                method: 'POST',
                headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(productsCar)
        
            });
            let aqui = await response.text();
            console.log(aqui);
            let Token = localStorage.removeItem("simpleCart_items");
            location.href="Ofertas.html";
        }
}