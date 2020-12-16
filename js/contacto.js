
const formulario = document.querySelector('.formulario');
const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    if(nombre.value === "" || telefono.value === "" || email.value === "" || asunto.value === "" || mensaje.value === ""){
        mensajeError('Todos los campos son obligatorios');
        return;
    }
}

function mensajeError(mensaje) {
    const alerta = document.querySelector('.error');
    if(!alerta){
        const parrafoMensaje = document.createElement('p');
        parrafoMensaje.classList.add('error');
        parrafoMensaje.textContent = mensaje;
        formulario.appendChild(parrafoMensaje);
    
        setTimeout(() => {
            parrafoMensaje.remove();
        }, 3000);
    }
}