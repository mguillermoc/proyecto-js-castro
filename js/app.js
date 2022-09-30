let completo = [];
IdUnico = 0;
IdUnico2 = 0;
const BtnJuntar = document.querySelector("#codificar");
var BtnBorrar = document.getElementsByClassName("btn2");
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
            var Formulario = document.getElementsByClassName('formulario');
                 for(var i=0; i< Formulario.length; i++){
                const inputs = Formulario[i].elements;
                const Tipo = inputs[0].value;
                const Campo = inputs[1].value;
                const objeto = {"Tipo":Tipo,"Campo ID": Campo}
            }
        Swal.fire('¡Compilado!', '', 'success')
    } else if (result.isDenied) {
  Swal.fire('Cancelado', '', 'info')

}   
})
} 


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

