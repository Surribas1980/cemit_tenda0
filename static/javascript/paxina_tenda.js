import {isCounting as Contando, pedidosFormulario} from "./helpers.js";

//let arrayCesta = [];

usuarios.addEventListener("click",()=>{
  
  let elemento = document.getElementById("navegacion_user")
  if(elemento.style.display == "block"){
    elemento.style.display="none";
  }else{
    elemento.style.display="block";
  }
})
engadir0.addEventListener("click",(e)=>{
  e.preventDefault();
  let form = document.forms.formDatos; 
  pedidosFormulario(form)
  
})

engadir1.addEventListener("click",(e)=>{
  e.preventDefault();
  let form = document.forms.formDatos1;
  pedidosFormulario(form)

})
engadir2.addEventListener("click",(e)=>{
  e.preventDefault();
  let form = document.forms.formDatos2;
  pedidosFormulario(form)
  
})
engadir3.addEventListener("click",(e)=>{
  e.preventDefault();
  let form = document.forms.formDatos3; 
  pedidosFormulario(form)
})



