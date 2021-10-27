async function deleteuser(){
    name_user = document.getElementById("name").value;

    let Token = localStorage.getItem("Tokens");
    let response = await fetch('http://localhost:3000/deleteUser/'+name_user,{
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + Token
    }
});
let aqui = await response.text();
console.log(aqui);

}