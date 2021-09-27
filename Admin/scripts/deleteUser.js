async function deleteuser(){
    name = document.getElementById("name").value;

    let response = await fetch('http://localhost:3000/deleteUser/'+name,{
    method: 'DELETE',
});
let aqui = await response.text();
console.log(aqui);

}