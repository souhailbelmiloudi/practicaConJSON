
////  1º FASE
const miCadena =
  '[{"producto":"Manzanas","cantidad":5,"precio":1.50},{"producto":"Pan","cantidad":2,"precio":2.00},{"producto":"Leche","cantidad":1,"precio":3.00},{"producto":"Pollo","cantidad":5,"precio":3.25}]';

const listaCompra = JSON.parse(miCadena);

const contenedor = document.getElementById("contenedor");
const Guardad = document.getElementById("add");
const Eliminar=document.getElementById("eliminar");
const misElementos=document.getElementsByClassName('misElementos');
const borrarpr=document.getElementById("borrarpr");
const borrar=document.getElementById("borrar");




const imprimirLista=()=>{
 
  listaCompra.map((el, ind) => {
     //crear un elemento Dom
    const miEle = document.createElement("div");
    miEle.id = ind;
    miEle.classList.add("misElementos");
    miEle.innerHTML = `<P> ${ind+1} =>${el.producto} , ${el.cantidad} kilogramo, ${el.precio}  € por kilogramo</P>`;
    contenedor.append(miEle);
  });
  
}

////  2º FASE

const guardarDatos=()=>{
  const ListaCompra2=JSON.stringify(listaCompra)
  localStorage.setItem("listaCompra",ListaCompra2)
};

const eliminarDatos=()=>{
  localStorage.clear();
}


////////  3º FASE

//crear una lista de id de los elemntos 
const creaListaIds=()=>{

  let listaids = [];
  Array.from(misElementos).forEach(element => {
  listaids.push(element.id);
    
});
  return listaids
}

// settimeout para restrasasr la ejecución de creaListaIds hasta que se ejecute los elemnetos DOm
setTimeout(() => {
  console.log(creaListaIds())
}, 1);


/// borrar elementos

const borrarDatos=(id)=>{
  document.getElementById(id-1).remove()
}





//eventos
Guardad.addEventListener("click", (e) => {
  guardarDatos();
})

Eliminar.addEventListener("click", (e) => {
  eliminarDatos();
})



borrarpr.addEventListener("click", (e) => {
 
  const respuesta = prompt("Por favor, ingresa el numero del producto que quieres borrar si son mas de uno separalos con coma ");
  
  if(respuesta === ""){
    const respuesta = prompt("No ingresaste nada ,Por favor, ingresa el numero del producto que quieres borrar si son mas de uno separalos con coma");

  }else if(respuesta.length>1){

    let listaAborrar=respuesta.split(",");
    listaAborrar.forEach(el=>{
      borrarDatos(el)
    })

  }else if(respuesta.length==1){
    borrarDatos(respuesta)
  }
})

borrar.addEventListener("click",(e)=>{
const listaAborrar =[1,2]
listaAborrar.forEach(el=>{
  borrarDatos(el)
})

})

imprimirLista();
