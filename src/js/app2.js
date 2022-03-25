(function(){
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal__close');
    const modalContainer = document.querySelector('.modal__container');
    const openMenu = document.querySelector('.nav__hamburguer');
    const navLinks = document.querySelector('.nav__links');
    const navClose = document.querySelector('.nav__close');
    const navs = document.querySelectorAll('.nav__link');
    const btnModal = document.querySelector('.modal__cta');

    const toggleNav = ()=>{
        navLinks.classList.toggle('nav__link--active');
    }

    window.addEventListener('load', ()=>{
        modal.classList.toggle('modal__show');
    });

    modalClose.addEventListener('click', ()=>{
        modal.classList.toggle('modal__out');
    });

    btnModal.addEventListener('click', ()=>{
        modal.classList.toggle('modal__out');
    })
    
    openMenu.addEventListener('click', ()=>{
        toggleNav();
    });

    navClose.addEventListener('click', ()=>{
        toggleNav();
    })

    navs.forEach(links => {
        links.addEventListener('click', ()=>{
            toggleNav();
        })
    });    
    


})();