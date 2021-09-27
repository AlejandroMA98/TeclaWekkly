async function agregarUsuario(){
    user = document.getElementById("user").value;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let add = {user:user, name:name, email:email, password:password};
    let response = await fetch('http://localhost:3000/addUser',{
    method: 'POST',
    headers: {
    'Content-Type' : 'application/json'
    },
    body: JSON.stringify(add)

});
let aqui = await response.text();
console.log(aqui);

}