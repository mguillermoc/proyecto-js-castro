let completo = [];
IdUnico = 0;
IdUnico2 = 0;
const BtnJuntar = document.querySelector("#codificar");
var BtnBorrar = document.getElementsByClassName("btn2");
const BtnAgregar = document.querySelector("#agregar");
const CajaPrincipal = document.querySelector("main")


 
BtnJuntar.onclick = function(){
    var Formulario = document.getElementsByClassName('formulario');
    for(var i=0; i< Formulario.length; i++){
    const inputs = Formulario[i].elements;
    const Tipo = inputs[0].value;
    const Campo = inputs[1].value;
    const objeto = {"Tipo":Tipo,"Campo ID": Campo}
    completo.push(objeto);
    console.log(completo);
}
}



BtnAgregar.onclick= function(){
    let FormToDup = document.querySelector(".formulario");
    let clonar = FormToDup.cloneNode(true);
    let clonarElementos = clonar.elements;
    const botonid = clonarElementos[2]
    botonid.id = `boton_${IdUnico2 += 1}`;
    clonar.id = IdUnico += 1
    CajaPrincipal.appendChild(clonar)
}











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

