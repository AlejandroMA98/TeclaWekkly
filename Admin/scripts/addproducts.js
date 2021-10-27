async function agregarProductos(){
    product_name = document.getElementById("product_name").value;
    properties = document.getElementById("properties").value;
    price = document.getElementById("price").value;

    let add = {product_name:product_name, properties:properties, price:price};

    let Token = localStorage.getItem("Tokens");
    let response = await fetch('http://localhost:3000/products',{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + Token
    },
    body: JSON.stringify(add)

});
let aqui = await response.text();
console.log(aqui);

}