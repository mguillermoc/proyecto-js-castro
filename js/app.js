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
        const objeto = {"Tipo":Tipo,"Campo_ID": Campo}
        completo.push(objeto);
      }} else {
        Swal.fire({
          title: '¿Ya está compilado, quieres hacerlo nuevamente?',
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
          let completo = [];
          Juntar();
          Ordenar();
          Swal.fire('¡Compilado!', '', 'success')
        } else if (result.isDenied) {
        Swal.fire('Cancelado', '', 'info')
        }
        })
        }
};


function CrearCard (){
  const Card = document.createElement('div');
  Card.classList.add('card');
  let preview_2 = document.querySelector('.preview');
  preview_2.appendChild(Card)
}

function Ordenar (){  
  CrearCard();
  completo.forEach(element => {
if (element.Tipo=="1"){
  const Titulo = document.createElement('h1');
  Titulo.classList.add('titulo');
  Titulo.innerText = element.Campo_ID;
  let preview_1 = document.querySelector('.card');
  preview_1.appendChild(Titulo)
}
else if(element.Tipo=="2"){
  const Subtitulo = document.createElement('h3');
  Subtitulo.classList.add('subtitulo');
  Subtitulo.innerText = element.Campo_ID;
  console.log(Subtitulo)
  let preview_3 = document.querySelector('.card');
  preview_3.appendChild(Subtitulo)
}
else if(element.Tipo==3){
  const Texto = document.createElement('p');
  Texto.classList.add('texto');
  Texto.innerText = element.Campo_ID;
  console.log(Texto)
}
else if(element.Tipo==4){
  const Youtube = document.createElement('div');
  Youtube.classList.add('youtube');
  Youtube.innerText = element.Campo_ID;
  console.log(Youtube)
}
else if(element.Tipo==5){
  const Souncloud = document.createElement('div');
  Souncloud.classList.add('soundcloud');
  Souncloud.innerText = element.Campo_ID;
  console.log(Souncloud)
}
else if(element.Tipo==6){
  const Boton = document.createElement('button');
  Boton.classList.add('boton');
  Boton.innerText = element.Campo_ID;
  console.log(Boton)
  preview_1.append(Boton);
}
else if(element.Tipo==0){
  pass
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

