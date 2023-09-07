let arrayCesta = [];
/*const arrayCesta = (valores) => {
  console.log('valores en arrayCesta: ',valores)
  
  
  let aCesta = []
  aCesta.push(valores)
  console.log('f arrayCesta: ',aCesta)
  localStorage.setItem("cesta",aCesta)
  let valoresNaStoraged = localStorage.getItem("cesta")
  console.log('..... ',valoresNaStoraged)
}*/
const isCounting = () => {
  numProductos.style.display = "block";
}
const pintarLista = () => {
  console.log('execústase pintarLista');
  let listaCompra = localStorage.getItem("cesta")
  let listaConvertida = "";
  console.log("cesta ",typeof listaCompra);
  
  if(typeof listaCompra === "string"){
    listaConvertida = JSON.parse(listaCompra)
    console.log('A lista: ',listaConvertida)
    let resultado = 0;
    const numFillos = lista.childNodes.length;
    /*if(numFillos != 0){
      console.log("numFillos: ",numFillos)
      for(let contador = 0 ; contador <= lista.childNodes.length;contador ++ ){
        lista.childNodes[contador].remove()
      }
    }*/
    
    
    const pintar = listaConvertida.map((item)=>{
          let elementoLista = document.createElement('li');
          
          elementoLista.innerHTML = `${item.producto} ${item.valor} ${item.cantidade}`;
          if(item.cantidade != undefined && item.cantidade != null){
            
            resultado += parseFloat(item.valor)*item.cantidade;
            console.log('resultado ', resultado)
          }
          lista.prepend(elementoLista)
          
      //console.log(item.producto,item.cantidade,item.valor)
    })

    let resultadoPintado = document.createElement('div');
    
    resultadoPintado.innerHTML= `Total: ${resultado} €`;
    lista.after(resultadoPintado)
  }
}
const pedidosFormulario = (form) => {
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
  isCounting()
}
export {
  arrayCesta,
  isCounting,
  pintarLista,
  pedidosFormulario
}