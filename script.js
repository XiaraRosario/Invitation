
const btnAceptar = document.getElementById('btnAceptar');
const btnNoAceptar = document.getElementById('btnNoAceptar');
const contenidoInicial = document.getElementById('contenidoInicial');
const contenidoFinal = document.getElementById('contenidoFinal');
const foto = document.getElementById('foto');
const mensajeFinal = document.getElementById('mensajeFinal');
const invitacion = document.getElementById('invitacion');

let posX = 0;
let posY = 0;
let puedeMover = true; 

const imagenUrl = 'Assets/memes-romance-4.jpg'; 

btnAceptar.addEventListener('click', function() {
    contenidoInicial.style.display = 'none'; 
    contenidoFinal.style.display = 'block'; 

    foto.src = imagenUrl;
    mensajeFinal.textContent = 'Sabía que sí querías, bb. ¡Nos vemoss!';
});


btnNoAceptar.addEventListener('mouseover', function() {
    if (puedeMover) {
     
        posX += (Math.random() * 600) - 300; 
        posY += (Math.random() * 150) - 75;  
        
      
        posX = Math.min(Math.max(posX, -window.innerWidth / 2 + 100), window.innerWidth / 2 - 100);
       
        posY = Math.min(Math.max(posY, -75), 75);
        
        invitacion.style.transition = 'transform 0.2s ease-out'; 
        invitacion.style.transform = `translate(${posX}px, ${posY}px)`;
    }
});
