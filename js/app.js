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
      }
      CrearCard();
      setTimeout(6000)
      Ordenar();
    } else {
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
            while(completo.length > 0) {
              completo.pop();
          };
          setTimeout(6000)
          let borrar_1 = document.querySelector('.card');
          borrar_1.remove();
          let borrar_2 = document.querySelector('.boton2');
          borrar_2.remove();
          Juntar();
          // Swal.fire('¡Compilado!', '', 'success')
        } else if (result.isDenied) {
        Swal.fire('Cancelado', '', 'info')
        }
        })
        }
};
function Base64(){
  let preview_10 = document.querySelector('.card');
  const result = window.btoa(preview_10.innerHTML);
  Swal.fire({
    title: 'El código en Base 64 es:',
    text: result,
  })
  // alert('El codigo en Base 64 es:'+ '\n' + result);
}


function boton_cod(){
const Btn_codificar = document.createElement('a');
Btn_codificar.classList.add('boton2');
Btn_codificar.innerText = "codificar";
Btn_codificar.addEventListener('click', function handleClick(event) {
  Base64 ();
});
let preview_8 = document.querySelector('.preview');
preview_8.appendChild(Btn_codificar)
}


function CrearCard (){
  const Card = document.createElement('div');
  Card.classList.add('card');
  let preview_2 = document.querySelector('.preview');
  preview_2.appendChild(Card)
}

function Ordenar (){  
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
  let preview_3 = document.querySelector('.card');
  preview_3.appendChild(Subtitulo)
}
else if(element.Tipo==3){
  const Texto = document.createElement('p');
  Texto.classList.add('texto');
  Texto.innerText = element.Campo_ID;
  let preview_4 = document.querySelector('.card');
  preview_4.appendChild(Texto)
}
else if(element.Tipo==4){
  const Youtube = document.createElement('div');
  Youtube.classList.add('youtube');
  Youtube.innerHTML = element.Campo_ID;
  let preview_5 = document.querySelector('.card');
  preview_5.appendChild(Youtube)
}
else if(element.Tipo==5){
  const Souncloud = document.createElement('div');
  Souncloud.classList.add('soundcloud');
  Souncloud.innerHTML = element.Campo_ID;
  let preview_6 = document.querySelector('.card');
  preview_6.appendChild(Souncloud)
}
else if(element.Tipo==6){
  const Boton = document.createElement('a');
  Boton.classList.add('boton');
  Boton.innerText = "Descargar";
  var t = Boton.setAttribute("href",element.Campo_ID);
  Boton.setAttribute("target","_blank");
  let preview_7 = document.querySelector('.card');
  preview_7.appendChild(Boton)
}
else if(element.Tipo==0){
  const Texto2 = document.createElement('p');
  Texto2.classList.add('texto');
  Texto2.innerText = element.Campo_ID;
  let preview_9 = document.querySelector('.card');
  preview_9.appendChild(Texto2)
};
});
boton_cod ();
}





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
        // Swal.fire('¡Compilado!', '', 'success')
    } else if (result.isDenied) {
  Swal.fire('Cancelado', '', 'info')
}
})
}

