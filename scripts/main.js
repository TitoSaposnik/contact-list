//Apuntadores.
const nombre = document.querySelector(".nombre")
const numero = document.querySelector(".numero")
const direccion = document.querySelector(".direccion")
const btnAgregarTarea = document.querySelector(".btn-agregar-tarea")
const listadoTareas = document.querySelectorAll(".listado-tarea")
const db = window.localStorage

btnAgregarTarea.onclick = () =>{
    let contacto = {
        id:Math.random(1,100) ,
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value
    }
    console.log(contacto)
}
