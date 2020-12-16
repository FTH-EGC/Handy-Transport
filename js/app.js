
const hero = document.querySelector('#hero');

document.addEventListener('DOMContentLoaded', () => {
    cambiarImagen();
})


function cambiarImagen() {
    const imagenes = ['slide2.jpg','slide3.jpg','slide4.jpg','slide5.jpg','slide1.jpg'];
    let i = 0;
    let tiempo = 0;

    setInterval(() => {
        hero.style.backgroundPositionY = `-${tiempo}px`;

        if(tiempo > 40){
            tiempo = 0;
            hero.style.backgroundImage = `url(../img/${imagenes[i]})`;
            if(i === imagenes.length - 1){
                i = 0
            }else{
                i++;
            }
        }
        tiempo++;
    }, 100);
}