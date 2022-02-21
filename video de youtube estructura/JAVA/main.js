const contenido = document.getElementById("contenido");


let nombre = "kiko palomares";
let edad= 12;

let edades= [23,45,2,42]

addcontent(`<h2>${nombre}</h2><h3>${edad}</h3>`);

for(let i =0;i<edades.length; i++){
    addcontent(`<h3>la edad es de ${edades[i]}años</h3`);

}
function addContent(newContent){
    contenido.innerHTML+=newContent;
}