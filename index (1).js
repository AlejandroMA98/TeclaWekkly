async function getCategoria(params) {
    

            let url = "https://api.mercadolibre.com/sites/MLM/categories";
            const resp = await fetch(url);
            const data = await resp.json();
            let ctn = document.createElement('div');
            let nombre = document.createElement('h2');
            let x = "";
            for(const hey in data){
             console.log(data[hey].id);
             console.log(data[hey].name);
             x = x + `${data[hey].id}  ${data[hey].name}   ` ;
             }
             nombre.textContent= x
            ctn.appendChild(nombre);
            pokeDiv.appendChild(ctn);
}
token="APP_USR-3388052911498377-082319-9de407ac14e7aa4b2c735eff7fbfb50d-354069378";
    // Url para Electrónica, Audio y Video
    let urlElectronica = "https://api.mercadolibre.com/highlights/MLM/category/MLM1000?access_token="+token;
    // Url Computacion
    let urlComputacion = "https://api.mercadolibre.com/highlights/MLM/category/MLM1648?access_token="+token;
    // Url para Videojuegos
    let urlVideojuegos = "https://api.mercadolibre.com/highlights/MLM/category/MLM1144?access_token="+token;
async function getBestSeller(params) {
    
    const resp = await fetch(params);
    const data = await resp.json();
    let ctn = document.createElement('div');
    let nombre = document.createElement('h2');
    let x = "";
    let y = "";
    console.log(data.content[3].id);
    console.log(data.content[3].position);
    console.log(data.content[3].type);
    for(const items in data){
    
     x = x + `${data.content[items].id}  ${data.content[items].position}  ${data.content[items].position} ` ;
     //productos
     const url1= "https://api.mercadolibre.com/products/"+data.content[items].id;
     const resp1 = await fetch(params);
     const data1 = await resp.json();
     y = y + `${data1[items].id}  ${data1[items].name}  ${data1[items].pictures[0].url} ${data1[items].buy_box_winner.price}` ;


     }
     nombre.textContent= x
    ctn.appendChild(nombre);
    pokeDiv.appendChild(ctn);



}    
// getCategoria();

//   "id": "MLM16068738",
//   "status": "active",
//   "sold_quantity": 928,
//   "domain_id": "MLM-HAIR_CLIPPERS",
//   "permalink": "https://www.mercadolibre.com.mx/trimmer-kemei-km-1949-plateada-110v240v/p/MLM16068738",
//   "name": "Trimmer Kemei KM-1949 plateada 110V/240V",
//   "buy_box_winner": {},
//   "pickers": null,
//   "pictures": [
//     {
//       "id": "962572-MLA45333294851_032021",
//       "url": "https://mla-s1-p.mlstatic.com/962572-MLA45333294851_032021-F.jpg",
//       "suggested_for_picker": [],
//       "max_width": 577,
//       "max_height": 1200
//     },
//     {
//       "id": "665746-MLA45333535285_032021",
//       "url": "https://mla-s1-p.mlstatic.com/665746-MLA45333535285_032021-F.jpg",
//       "suggested_for_picker": [
//       ],
//       "max_width": 924,
//       "max_height": 1043
//     }
//   ],
//   "main_features": [],
//   "attributes": [],
//   "short_description": {},
//   "parent_id": "MLM16068737"

getBestSeller(urlElectronica);
getBestSeller(urlComputacion);
getBestSeller(urlVideojuegos);