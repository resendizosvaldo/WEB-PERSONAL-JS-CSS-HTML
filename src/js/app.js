/*let ubicacionPrincipal = window.pageYOffset;
window.addEventListener("scroll",
    function() {
        let desplazamientoActual = window.pageYOffset;
        if (ubicacionPrincipal >= desplazamientoActual) {
            document.getElementsByTagName("nav")[0].style.top = "0px"
        } else {
            document.getElementsByTagName("nav")[0].style.top = "-100px"
        }
        ubicacionPrincipal = desplazamientoActual;
    })


//menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function() {
    if (semaforo) {
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo = false;
    } else {
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        semaforo = true;
    }
    enlacesHeader.classList.toggle("menudos")

})
*/
(function() {
    const openMenu = document.querySelector('.nav__hamburguer');
    const navLinks = document.querySelector('.nav__links');
    const navClose = document.querySelector('.nav__close');
    const navs = document.querySelectorAll('.nav__link');

    const toggleNav = () => {
        navLinks.classList.toggle('nav__link--active');
    }

    openMenu.addEventListener('click', () => {
        toggleNav();
    });

    navClose.addEventListener('click', () => {
        toggleNav();
    })

    navs.forEach(links => {
        links.addEventListener('click', () => {
            toggleNav();
        })
    });



})();