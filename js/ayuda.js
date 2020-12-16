

const iconos = document.querySelectorAll('.fas');


iconos.forEach(icono => {
    icono.addEventListener('click', modificarDiv);
})

function modificarDiv(e) {
    const preguntaFrecuente = e.target.parentElement.parentElement;
    const icono = e.target;
    const infoPregunta = e.target.parentElement.parentElement.children[1];

    if(icono.classList.contains('fa-plus-circle')){
        preguntaFrecuente.classList.add('abierto');
        preguntaFrecuente.classList.remove('cerrado');
        icono.classList.add('fa-minus-circle');
        icono.classList.remove('fa-plus-circle');
        icono.style.color = '#2dd4d4';
        infoPregunta.classList.add('d-block');
        infoPregunta.classList.remove('info-pregunta');
    }else{
        preguntaFrecuente.classList.remove('abierto');
        preguntaFrecuente.classList.add('cerrado');
        icono.classList.remove('fa-minus-circle');
        icono.classList.add('fa-plus-circle');
        infoPregunta.classList.remove('d-block');
        infoPregunta.classList.add('info-pregunta');
        icono.style.color = '#000000';
    }

}