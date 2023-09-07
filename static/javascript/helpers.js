const arrayCesta = (valores) => {
  console.log('valores en arrayCesta: ',valores)
  
  
  let aCesta = []
  aCesta.push(valores)
  console.log('f arrayCesta: ',aCesta)
  localStorage.setItem("cesta",aCesta)
  let valoresNaStoraged = localStorage.getItem("cesta")
  console.log('..... ',valoresNaStoraged)
}
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
    console.log(listaConvertida,typeof listaConvertida)
    let resultado = 0;
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
export {
  arrayCesta,
  isCounting,
  pintarLista
}