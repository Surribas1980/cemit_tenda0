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

  let producto = form.elements.producto.value;
  let valor = form.elements.valor.value;
  let cantidade = form.elements.cantidade.value;
  
  console.log('valores collidos : ', producto,valor,cantidade)
})

engadir1.addEventListener("click",(e)=>{
  e.preventDefault();
  let form = document.forms.formDatos1; 

  let producto = form.elements.producto.value;
  let valor = form.elements.valor.value;
  let cantidade = form.elements.cantidade.value;
  
  console.log('valores collidos : ', producto,valor,cantidade)
})
engadir2.addEventListener("click",(e)=>{
  e.preventDefault();
  let form = document.forms.formDatos2; 

  let producto = form.elements.producto.value;
  let valor = form.elements.valor.value;
  let cantidade = form.elements.cantidade.value;
  console.log('valores collidos : ', producto,valor,cantidade)
})
engadir3.addEventListener("click",(e)=>{
  e.preventDefault();
  let form = document.forms.formDatos3; 

  let producto = form.elements.producto.value;
  let valor = form.elements.valor.value;
  let cantidade = form.elements.cantidade.value;
  console.log('valores collidos : ', producto,valor,cantidade)
})

