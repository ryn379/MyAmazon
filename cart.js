import {products} from './products.js'

let stored = JSON.parse(localStorage.getItem('cart'));
if(!stored){
    stored={cartcnt:0,
        l:[]
    }
}
export let cart = stored;

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
            cart.cartcnt+=parseInt(parent.querySelector('.sel').value);
            product.flag=true;
            parent.querySelector('.addbtn').innerText="Remove";
            document.querySelector('#cartp').innerText=cart.cartcnt;
        }
        else{
            parent.querySelector('.addtocart').style.display="none";
            let item;
            cart.l.forEach((i)=>{
                if(i.name===product.name){
                    item=i;
                }
            });
            if(item){
                cart.cartcnt-=parseInt(item.quantity);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            cart.l=cart.l.filter(item=>item.name!=product.name);
            product.flag=false;
            document.querySelector('#cartp').innerText=cart.cartcnt;
            parent.querySelector('.addbtn').innerText="Add to Cart";
        }
    }
    console.log(cart.l);
