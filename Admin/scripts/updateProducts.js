async function updateproducts(){
    id_product = document.getElementById("id_product").value;
    product_name = document.getElementById("product_name").value;
    properties = document.getElementById("properties").value;
    price = document.getElementById("price").value;

    let update = {id_product:id_product, product_name:product_name, properties:properties, price:price};
    let response = await fetch('http://localhost:3000/updateproducts',{
    method: 'PATCH',
    headers: {
    'Content-Type' : 'application/json'
    },
    body: JSON.stringify(update)

});
let aqui = await response.text();
console.log(aqui);

}