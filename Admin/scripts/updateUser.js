async function updateuser(){
    user = document.getElementById("user").value;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let update = {user:user, email:email, password:password, name:name};
    let response = await fetch('http://localhost:3000/updateuser',{
    method: 'PATCH',
    headers: {
    'Content-Type' : 'application/json'
    },
    body: JSON.stringify(update)

});
let aqui = await response.text();
console.log(aqui);

}