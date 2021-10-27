
async function Listpro(){
    let Token = localStorage.getItem("Tokens");
    const data = await fetch('http://localhost:3000/users',{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer ' + Token
        },
  
    });
 
    const listaUsuario = await data.json();
    console.log(listaUsuario)
    console.log(listaUsuario[0])
    console.log(listaUsuario[0][0])

    console.log(typeof(listaUsuario));
        
    let usuarios = document.getElementById("usuarios");
    
    let user =``;
    
        for (let i = 0; i < listaUsuario[0].length; i++) {
            var contenedor = document.createElement("tr");
            console.log(listaUsuario[0][i])
        
            user = `
            <tr>
            <td>${listaUsuario[0][i].id}</td>
            <td>${listaUsuario[0][i].user}</td>
            <td>${listaUsuario[0][i].name}</td>
            <td>${listaUsuario[0][i].email}</td>
            <td>${listaUsuario[0][i].password}</td>
            </tr>`;
        
        contenedor.innerHTML += user
        usuarios.appendChild(contenedor)
        }

}
Listpro();