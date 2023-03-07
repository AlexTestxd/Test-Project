
const ecomerceContent = document.querySelector(".e-comerce-container");



const tienda = function(nombre,pulgadas,precio) {
    img = ` <img src="./assets/tv.png">`,
    nombre = `  <h3>Nombre: ${nombre}</h3>`,
    pulgadas = `  <h4>Pulgadas: ${pulgadas}</h4>`,
    precio = `  <h4>Precio: $ ${precio}</h4>`
    return [img,nombre,pulgadas,precio];

}
for(let i = 1; i < 20; i++) { 
    let resultado = tienda(`CHALLENGER`,"40", "850 usd");
    let div = document.createElement("DIV");
    div.classList.add(`flex-item`);
    div.tabIndex = i;
    div.innerHTML = resultado[0] + resultado[1] + resultado[2] +resultado[3]
    ecomerceContent.appendChild(div)
    
 }
