import {addToCart, cart} from './cart.js'
import {products} from './products.js'

let productsHTML1="";
let productsHTML2="";
for(let i=0;i<5;i++){
    const product=products[i];
        productsHTML1+=`
        <div class="item">   
                    <img src="${product.image}" alt="">
                    <p>${product.name}</p>       
                    <div class="rating">
                        <img src="images/rating-35.png" alt="">
                        <p class="rating-count">87</p>
                    </div>
                    <p class="price">$${(product.price/100).toFixed(2)}</p>
                    <div class="quantity">
                        <select class="sel">
                            <option selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                    <div class="addtocart">
                        <img src="images/amazon-mobile-logo-white.png" alt="">
                        <p>Added</p>
                    </div>
                    <button class="addbtn" data-id-name="${product.id}" data-price-name="${product.price}" data-image-name="${product.image}" data-product-name="${product.name}">Add to Cart</button>
                </div>
            `
}
for(let i=5;i<products.length;i++){
    const product=products[i];
        productsHTML2+=`
        <div class="item">   
                    <img src="${product.image}" alt="">
                    <p>${product.name}</p>       
                    <div class="rating">
                        <img src="images/rating-35.png" alt="">
                        <p class="rating-count">87</p>
                    </div>
                    <p class="price">$${(product.price/100).toFixed(2)}</p>
                    <div class="quantity">
                        <select class="sel">
                            <option selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                    <div class="addtocart">
                        <img src="images/amazon-mobile-logo-white.png" alt="">
                        <p>Added</p>
                    </div>
                    <button class="addbtn"data-id-name="${product.id}" data-price-name="${product.price}" data-image-name="${product.image}" data-product-name="${product.name}">Add to Cart</button>
                </div>
            `
}

 document.querySelector('#items1').innerHTML=productsHTML1;
 document.querySelector('#items2').innerHTML=productsHTML2;

document.querySelectorAll('.addbtn').forEach((button,index) => {
    button.addEventListener('click',()=>{
        addToCart(button,index);
    });
});

const Fcart = document.getElementById('cartNo');
document.querySelectorAll('.addbtn').forEach(button => {
    button.addEventListener('click', e => {
        const imgSrc = button.getAttribute('data-image-name');
        const img = document.createElement('img');
        img.src = imgSrc;
        img.className = 'fly-img';
        const rect = button.getBoundingClientRect();
        img.style.top = rect.top + 'px';
        img.style.left = rect.left + 'px';
        img.style.width = '50px';
        document.body.appendChild(img);
        const cartRect = Fcart.getBoundingClientRect();
        setTimeout(() => {
            img.style.top = cartRect.top + 'px';
            img.style.left = cartRect.left + 'px';
            img.style.width = '20px';
            img.style.opacity = '0';
        }, 100);

        setTimeout(() => {
            img.remove();
        }, 800);
    });
});
