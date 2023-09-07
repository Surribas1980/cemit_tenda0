import {isCounting as Contando} from "./helpers.js";

let arrayCesta = [];

usuarios.addEventListener("click",()=>{
  
  let elemento = document.getElementById("navegacion_user")
  if(elemento.style.display == "block"){
    elemento.style.display="none";
  }else{
    elemento.style.display="block";
  }
})
engadir.addEventListener("click",(e)=>{
  e.preventDefault();
  let form = document.forms.formDatos; 
  
  let pedidoCesta = {};
  pedidoCesta.producto = form.elements.producto.value;
  pedidoCesta.valor = form.elements.valor.value;
  pedidoCesta.cantidade = form.elements.cantidade.value;
  pedidoCesta.numPedidos = arrayCesta.length;
  numProductos.textContent = arrayCesta.length + 1;
  console.log('numProductos.data: ',numProductos.data)
  arrayCesta.push(pedidoCesta)
  localStorage.setItem("numProductos",numProductos.textContent)
  localStorage.setItem("cesta",arrayCesta)
  console.log('valores collidos : ', arrayCesta);
  Contando()
})

engadir1.addEventListener("click",(e)=>{
  e.preventDefault();
  let form = document.forms.formDatos1;
let pedidoCesta = {};
  
  pedidoCesta.producto = form.elements.producto.value;
  pedidoCesta.valor = form.elements.valor.value;
  pedidoCesta.cantidade = form.elements.cantidade.value;
  pedidoCesta.numPedidos = arrayCesta.length;
  numProductos.textContent = arrayCesta.length + 1;
  arrayCesta.push(pedidoCesta)
  localStorage.setItem("numProductos",numProductos.textContent)
  localStorage.setItem("cesta",arrayCesta)
  console.log('valores collidos : ', arrayCesta)
 Contando()
})
engadir2.addEventListener("click",(e)=>{
  e.preventDefault();
  let form = document.forms.formDatos2; 
  let pedidoCesta = {};
  
  pedidoCesta.producto = form.elements.producto.value;
  pedidoCesta.valor = form.elements.valor.value;
  pedidoCesta.cantidade = form.elements.cantidade.value;
  pedidoCesta.numPedidos = arrayCesta.length;
  numProductos.textContent = arrayCesta.length + 1;
  arrayCesta.push(pedidoCesta)
  localStorage.setItem("numProductos",numProductos.textContent)
  localStorage.setItem("cesta",arrayCesta)
  console.log('valores collidos : ', arrayCesta)
Contando()
})
engadir3.addEventListener("click",(e)=>{
  e.preventDefault();
  let form = document.forms.formDatos3; 
  let pedidoCesta = {};
  
  pedidoCesta.producto = form.elements.producto.value;
  pedidoCesta.valor = form.elements.valor.value;
  pedidoCesta.cantidade = form.elements.cantidade.value;
  pedidoCesta.numPedidos = arrayCesta.length;
  numProductos.textContent = arrayCesta.length + 1;
  arrayCesta.push(pedidoCesta)
  
  localStorage.setItem("numProductos",numProductos.textContent)
  localStorage.setItem("cesta",JSON.stringify(arrayCesta))
  let valoresNaStoraged = localStorage.getItem("cesta")
  console.log('..... ',valoresNaStoraged)
  
  console.log('valores collidos : ', arrayCesta)
  Contando()
})



