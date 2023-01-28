const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const moblileMenu = document.querySelector('.mobile-menu');
const carritoComprar = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');


navbarEmail.addEventListener('click',()=>{

    const isNavbarEmailClosed = navbarEmail.classList.contains('inactive');
    if(!isNavbarEmailClosed){
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

})

menuHamIcon.addEventListener('click',()=>{

    const isMenuHamIconClosed = menuHamIcon.classList.contains('inactive');

    if(!isMenuHamIconClosed){
        productDetail.classList.add('inactive');

    }

    moblileMenu.classList.toggle('inactive');

})

carritoComprar.addEventListener('click',()=>{
    const isMobileMenuClosed =  moblileMenu.classList.contains('inactive');
    const isNavbarEmailClosed = navbarEmail.classList.contains('inactive');    
    if(!isMobileMenuClosed){
        moblileMenu.classList.add('inactive');
    }
    if(!isNavbarEmailClosed){
        desktopMenu.classList.add('inactive');

    }

    productDetail.classList.toggle('inactive');
    // productDetail.classList.toggle('inactive');


})

