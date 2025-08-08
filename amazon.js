const products=[{
    image:"images/6-piece-non-stick-baking-set-removebg-preview.png",
    name:"Non Stick Baking Set",
    price:1000,
    flag:false,
},{
    image: "images/6-piece-white-dinner-plate-set-removebg-preview.png",
    name:"Dinner Set",
    price:100000,
    flag:false,
  
},
{
    image:"images/adults-plain-cotton-tshirt-2-pack-teal-removebg-preview.png",
    name:"Cotton T-shirt",
    price:12500,
    flag:false,
 
},
{
    image:"images/athletic-cotton-socks-6-pairs-removebg-preview.png",
    name:"Cotton Socks",
    price:1000,
    flag:false,
},
{
    image:"images/bathroom-rug-removebg-preview.png",
    name:"Bathroom Mug",
    price:30000,
    flag:false,
},
{
    image:"images/black-2-slot-toaster-removebg-preview.png",
    name:"Toaster",
    price:150000,
    flag:false,
},
{
    image:"images/blackout-curtain-set-beige-removebg-preview.png",
    name:"Beige Curtains",
    price:14500,
    flag:false,
},
{
    image:"images/blackout-curtains-black-removebg-preview.png",
    name:"Black Curtains",
    price:50000,
    flag:false,
},
{
    image:"images/coffeemaker-with-glass-carafe-black-removebg-preview.png",
    name:"Coffee Maker",
    price:100000,
    flag:false,
},
{
    image:"images/cotton-bath-towels-teal-removebg-preview.png",
    name:"Bath Towels",
    price:15000,
    flag:false
}];
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
                    <button class="addbtn" data-image-name="${product.image}" data-product-name="${product.name}">Add to Cart</button>
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
                    <button class="addbtn" data-image-name="${product.image}" data-product-name="${product.name}">Add to Cart</button>
                </div>
            `
}

 document.querySelector('#items1').innerHTML=productsHTML1;
 document.querySelector('#items2').innerHTML=productsHTML2;
document.querySelectorAll('.addbtn').forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        const parent=btn.closest('.item');
        const product=products[index];
        if(!product.flag){
            parent.querySelector('.addtocart').style.display="flex";
            cart.l.push({
                name:btn.dataset.productName,
                qty:parent.querySelector('.sel').value
            });
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
                cart.cartcnt-=parseInt(item.qty);
            }
            cart.l=cart.l.filter(item=>item.name!=product.name);
            product.flag=false;
            document.querySelector('#cartp').innerText=cart.cartcnt;
            parent.querySelector('.addbtn').innerText="Add to Cart";
        }
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
