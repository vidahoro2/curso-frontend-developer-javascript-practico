const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const moblileMenu = document.querySelector('.mobile-menu');
const carritoComprar = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


navbarEmail.addEventListener('click',()=>{

    const isNavbarEmailClosed = navbarEmail.classList.contains('inactive');
    if(!isNavbarEmailClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

})

menuHamIcon.addEventListener('click',()=>{

    const isMenuHamIconClosed = menuHamIcon.classList.contains('inactive');

    if(!isMenuHamIconClosed){
        shoppingCartContainer.classList.add('inactive');

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

    shoppingCartContainer.classList.toggle('inactive');
    // shoppingCartContainer.classList.toggle('inactive');


})


const productList = [];

productList.push({
    name: 'The Ordinary',
    price:120,
    image: 'https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Reloj',
    price:1210,
    image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Postre Artesanal',
    price:800,
    image: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
    name: 'Postre vegano',
    price:120,
    image: 'https://images.pexels.com/photos/8753567/pexels-photo-8753567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Helado Artesanal',
    price:1210,
    image: 'https://images.pexels.com/photos/12124891/pexels-photo-12124891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Cookies and Cream',
    price:800,
    image: 'https://images.pexels.com/photos/13330670/pexels-photo-13330670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});




function renderProducts(arr){

    // recorrer el Array de productos
for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText ='$' + product.price;
    const productName = document.createElement('p');
    productName.innerText =  product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
    

}

}

renderProducts(productList);