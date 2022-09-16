let completo = [];
const BtnAgregar = document.querySelector(".btn")


BtnAgregar.onclick = function(){
    const Tipo = document.getElementById("tipo").value
    const Campo = document.getElementById("seleccion").value
    completo.push(Campo,Tipo);
    console.log(completo)
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

