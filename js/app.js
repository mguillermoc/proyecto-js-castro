let completo = [];
let completo2=[];
IdUnico = 0;
IdUnico2 = 0;
const BtnJuntar = document.querySelector("#codificar");
const BtnAgregar = document.querySelector("#agregar");
const CajaPrincipal = document.querySelector("main")


BtnAgregar.onclick= function(){
    let FormToDup = document.querySelector(".formulario");
    let clonar = FormToDup.cloneNode(true);
    let clonarElementos = clonar.elements;
    const botonid = clonarElementos[2]
    botonid.id = `boton_${IdUnico2 += 1}`;
    clonar.id = IdUnico += 1
    CajaPrincipal.appendChild(clonar)   
}


function QuitarCampo(deleteButton) {
  let EsUnico = document.querySelectorAll(".btn2")
  if (EsUnico.length==1){
    alert("🛑No puedes borrar todos los campos😜")
  }
  else{
  deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode);
}
}

function Juntar (){
  if(completo.length==0){
    var Formulario = document.getElementsByClassName('formulario');
         for(var i=0; i< Formulario.length; i++){
        const inputs = Formulario[i].elements;
        const Tipo = inputs[0].value;
        const Campo = inputs[1].value;
        const objeto = {"Tipo":Tipo,"Campo ID": Campo}
        completo.push(objeto);
      }} else {alert("Ya está complilado");}
console.log(completo);     
};


function Ordenar (){
completo.forEach(element => {
if (element.Tipo=="0"){
console.log("Elemento")
completo2.push("Elemento")
}
else if(element.Tipo=="1"){
console.log("Título s/ Texto")
completo2.push("Título s/ Texto")
}
else if(element.Tipo==2){
console.log("Título c/ Texto")
completo2.push("Título c/ Texto")
}
else if(element.Tipo==3){
console.log("Texto s/ Título")
completo2.push("Texto s/ Título")
}
else if(element.Tipo==4){
console.log("YouTube")
completo2.push("YouTube")
}
else if(element.Tipo==5){
console.log("Soundcloud")
completo2.push("Soundcloud")
}
else if(element.Tipo==6){
console.log("Titulo c/ sub")
completo2.push("Titulo c/ sub")
}
else if(element.Tipo==7){
console.log("Botón de descarga")
completo2.push("Botón de descarga")
};
});}


BtnJuntar.onclick = function(){
    Swal.fire({
        title: '¿Quiere compilar el Formulario?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: 'No',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
          denyButton: 'order-3',
        }
      }).then((result) => {
        if (result.isConfirmed) {
        Juntar();
        Ordenar();
        console.log(completo2)
        Swal.fire('¡Compilado!', '', 'success')
    } else if (result.isDenied) {
  Swal.fire('Cancelado', '', 'info')
}   
})
} 





// const container = document.querySelector(".container1");
// var cardTag="";
// function getPhotos(images) {
//    images.map(image => {
//      cardTag = `<div class="card">
//               <img src=${image.src.large} />
//          </div>`;
//      container.innerHTML += cardTag;
//    })
// }

// fetch("https://api.pexels.com/v1/search?query=landscape&per_page=1",{
//  headers: {
//    Authorization: "563492ad6f91700001000001dbd8867872fb42ff9505d754c1bfed1e"
//  }
// })
// .then(resp => {
//   return resp.json()
// })
// .then(data => {
//   getPhotos(data.photos);
// })




// BtnJuntar.onclick = function(){
//     var Formulario = document.getElementsByClassName('formulario');
//     for(var i=0; i< Formulario.length; i++){
//     const inputs = Formulario[i].elements;
//     const Tipo = inputs[0].value;
//     const Campo = inputs[1].value;
//     const objeto = {"Tipo":Tipo,"Campo ID": Campo}
//     completo.push(objeto);
//     console.log(completo);
// }
// }











// const test = get.ElementsByClassName("btn");

// test.onclick = function() {
//     alert("funciona");
// }

// function titulo(){
//     pass
// }
// function youtube(){
//     pass
// }
// function souncloud(){
//     pass
// }
// function subtitulo(){
//     pass
// }
// function descarga(){
//     pass
// }

// document.getElementById("btn-agregar").addEventListener("click",agregar)

// function agregar(){
//     completo.push("1")
// }

