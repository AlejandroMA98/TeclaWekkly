async function ListCompra(){
    let Token = localStorage.getItem("Tokens");
    const data = await fetch('http://localhost:3000/listCompras',{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer ' + Token
        },
  
    });

    const listaProducts = await data.json();
    console.log(listaProducts)
    console.log(listaProducts[0])
    console.log(listaProducts[0][0])

    console.log(typeof(listaProducts));
        
    let products = document.getElementById("products");
    
    let producto =``;
    
        for (let i = 0; i < listaProducts[0].length; i++) {
            var contenedor = document.createElement("tr");
            console.log(listaProducts[0][i])
        
            producto = `
            <tr>
            <td>${listaProducts[0][i].id}</td>
            <td>${listaProducts[0][i].product_name}</td>
            <td>${listaProducts[0][i].count}</td>
            <td>${listaProducts[0][i].price}</td>
            </tr>`;
        
            contenedor.innerHTML += producto
        products.appendChild(contenedor)
        }
        
}
ListCompra();