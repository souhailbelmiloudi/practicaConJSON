const miCadena =
  '[{"producto":"Manzanas","cantidad":5,"precio":1.50},{"producto":"Pan","cantidad":2,"precio":2.00},{"producto":"Leche","cantidad":1,"precio":3.00},{"producto":"Huevos","cantidad":12,"precio":0.25}]';

const listaCompra = JSON.parse(miCadena);

const contenedor = document.getElementById("contenedor");
const Guardad = document.getElementById("add");

Guardad.addEventListener("click", (e) => {
  const ListaCompra2=JSON.stringify(listaCompra)
  localStorage.setItem("listaCompra",ListaCompra2)
});

listaCompra.map((el, ind) => {
  const miEle = document.createElement("div");
  miEle.id = ind;
  miEle.innerHTML = `<P>${el.producto}  ${el.cantidad} KG por  ${el.precio} al KG</P>`;
  contenedor.append(miEle);
});
