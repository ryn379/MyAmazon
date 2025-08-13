import {products} from './products.js'

export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart={cartcnt:0,
        l:[]
    }
}
else {
    cart.cartcnt = cart.l.reduce((sum, item) => sum + parseInt(item.quantity), 0);
}

export function updateCartButtons() {
    document.querySelector('#cartp').innerText = cart.cartcnt;
    cart.l.forEach(item => {
        const btn = document.querySelector(`#item${item.id}`);
        if(btn){
            btn.innerText = "Remove";
            const product = products.find(p => p.id == item.id);
            if(product) product.flag = true;
            btn.closest('.item').querySelector('.addtocart').style.display = "flex";
        }
    });
}

export function addToCart(btn,index){
        const parent=btn.closest('.item');
        const product=products[index];
        if(!product.flag){
            parent.querySelector('.addtocart').style.display="flex";
            cart.l.push({
                image:btn.dataset.imageName,
                name:btn.dataset.productName,
                price:Number(btn.dataset.priceName),
                quantity:parent.querySelector('.sel').value,
                id:btn.dataset.idName
            });
            localStorage.setItem('cart',JSON.stringify(cart));
            cart.cartcnt = cart.l.reduce((sum, item) => sum + parseInt(item.quantity), 0);
            product.flag=true;
            parent.querySelector('.addbtn').innerText="Remove";
            document.querySelector('#cartp').innerText=cart.cartcnt;
        }
        else{
            parent.querySelector('.addtocart').style.display = "none";
            cart.l = cart.l.filter(i => i.id != product.id); 
            product.flag = false;
            btn.innerText = "Add to Cart";
            cart.cartcnt = cart.l.reduce((sum, item) => sum + parseInt(item.quantity), 0);
            document.querySelector('#cartp').innerText = cart.cartcnt;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
    console.log(cart.l);
