// tabs training
const iconosTabs = document.querySelector('.tabs__icons')
const iconos = document.querySelectorAll('.icon-tab')
const tabsWindows = document.querySelectorAll('.tabs__windows-item')
const imgTab = document.getElementById('tab-img')
// welcome slider
const welcomeHero = document.getElementById('welcome__hero-team')
// Modal ubi courts
const modalCloseButton = document.querySelector('.courts__button')
const modalSection = document.querySelector('.courts')
const modalOpenButton = document.getElementById('modal-open')

// Logica para las tabs de la seccion training
iconosTabs.addEventListener('click',(e)=>{
    if(e.target && e.target.tagName === 'svg'){
        for(i=0;i<iconos.length;i++){
            // Quitar el color de activo a todos los iconos
            iconos[i].classList.remove('icon-tab--active')
            // Que no aparesca ninguna ventana de las tabs
            tabsWindows[i].classList.remove('tabs__windows-item--active')
        }
        // se cambia el color de blanco a verde del icono clickeado
        e.target.classList.add('tabs__icons-item--active')
        
        // Primera tab
        if(e.target.getAttribute('id') === 'tecnica'){
            iconos[0].classList.add('icon-tab--active')
            tabsWindows[0].classList.add('tabs__windows-item--active')
            imgTab.setAttribute('src','./assets/training/tecnica.webp')

        // Segunda tab
        } else if(e.target.getAttribute('id') === 'estrategia'){
         iconos[1].classList.add('icon-tab--active')
         tabsWindows[1].classList.add('tabs__windows-item--active')
         imgTab.setAttribute('src','./assets/training/estrategia.webp')

         // Tercera tab
        } else if(e.target.getAttribute('id') === 'fisico'){
         iconos[2].classList.add('icon-tab--active')
         tabsWindows[2].classList.add('tabs__windows-item--active')
         imgTab.setAttribute('src','./assets/training/fisico.webp')

         // Cuarta tab
        } else if(e.target.getAttribute('id') === 'mentalidad'){
         iconos[3].classList.add('icon-tab--active')
         tabsWindows[3].classList.add('tabs__windows-item--active')
         imgTab.setAttribute('src','./assets/training/mentalidad.webp')
        }
    }
})


// Cambio automatico de imagenes de la seccion welcome

// Añadir ubicaciones de los archivos
let imagenes = [
    '../assets/news/welcome-pro.webp',
    '../assets/news/guerreras.webp',
    '../assets/news/welcome-pro.webp'
]

let contador = 0
// cambiar imagen del elemento
function rotarImagenes(){
    contador++
    if(contador <= 2){
        welcomeHero.style.backgroundImage = `url(${imagenes[contador]})`
    } else{
        contador = 0
    }
      
}

onload=function()
{
    // Cargamos una imagen aleatoria
    rotarImagenes();

    // Indicamos que cada 5 segundos cambie la imagen
    setInterval(rotarImagenes,5000);
}

// Logica del modal que muestra las ubicaciones de las canchas

// abrir modal
modalOpenButton.addEventListener('click',()=>{
    modalSection.classList.add('courts--active')
})

// cerrar modal
modalCloseButton.addEventListener('click',()=>{
    modalSection.classList.remove('courts--active')
})



