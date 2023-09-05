contacto.addEventListener('click',()=>{
  location.replace('/contacto')
})

tenda.addEventListener('click',()=>{
  location.replace('/tenda')
})

cursos.addEventListener('click',()=>{
  location.replace('/cursos')
})

sobreNos.addEventListener('click',()=>{
  location.replace('/sobrenos')
})

home.addEventListener('click',(event)=>{
  location.replace('/');
  console.log('event: ',event)
  //event.target.classList.toggle("colores")
})


show_menu.addEventListener("click",function(){
  if( menu.style.display == "block"){
   menu.style.display="none";
  }else{
    menu.style.display="block";
  }
  
})

enviar.addEventListener("click",async (e) => {
       e.preventDefault();
        console.log('hola estou no form click')
        let response = await fetch('/login', {
          method: 'POST',
          body: new FormData(miForm)
        });
    
        let result = await response.json();
           console.log('result: ',result.nombre_cli)
       if(result.nombre_cli != undefined){
         
        localStorage.setItem("usuarioLogueado",result.nombre_cli)
         let foto = `${result.nombre_cli}.png`;
         usuarios.setAttribute("src",foto)
         exit.style.display = 'inline';
       }
     }) 

exit.addEventListener("click",(e)=>{
        localStorage.removeItem("usuarioLogueado")
        let foto = `../imagenes/user.png`;
        usuarios.setAttribute("src",foto)
        exit.style.display = 'none';
      })

rexistrarUsuario.addEventListener("click",async (e)=>{
  e.preventDefault();
  console.log('hola estou no rexistrarUsuario click')
        let response = await fetch('/rexistro', {
          method: 'POST',
          body: new FormData(formRexistro)
        });
    
        let result = await response.json();
        console.log('resposta de rexistrarUsuario: ',result)
})

const isLogueado = () =>{
  let valor = localStorage.getItem("usuarioLogueado")
  let salidaBooleano = (valor != undefined) ? true : false;

  return salidaBooleno;
}

