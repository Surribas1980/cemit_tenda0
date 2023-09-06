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
export {
  arrayCesta,
  isCounting
}