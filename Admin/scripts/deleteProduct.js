async function deleteproduct(){
    id_product = document.getElementById("id_product").value;

    let Token = localStorage.getItem("Tokens");
    let response = await fetch('http://localhost:3000/deleteproduct/'+id_product,{
    method: 'DELETE',
    headers:{
        
        'Authorization': 'Bearer ' + Token
    }

});
let aqui = await response.text();
console.log(aqui);

}