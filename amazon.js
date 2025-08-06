const products=[{
    image:"images/6-piece-non-stick-baking-set-removebg-preview.png",
    name:"Non Stick Baking Set",
    price:1000
},{
    image: "images/6-piece-white-dinner-plate-set-removebg-preview.png",
    name:"Dinner Set",
    price:100000
},
{
    image:"images/adults-plain-cotton-tshirt-2-pack-teal-removebg-preview.png",
    name:"Cotton T-shirt",
    price:12500
},
{
    image:"images/athletic-cotton-socks-6-pairs-removebg-preview.png",
    name:"Cotton Socks",
    price:1000
},
{
    image:"images/bathroom-rug-removebg-preview.png",
    name:"Bathroom Mug",
    price:30000
},
{
    image:"images/black-2-slot-toaster-removebg-preview.png",
    name:"Toaster",
    price:150000
},
{
    image:"images/blackout-curtain-set-beige-removebg-preview.png",
    name:"Beige Curtains",
    price:14500
},
{
    image:"images/blackout-curtains-black-removebg-preview.png",
    name:"Black Curtains",
    price:50000
},
{
    image:"images/coffeemaker-with-glass-carafe-black-removebg-preview.png",
    name:"Coffee Maker",
    price:100000
},
{
    image:"images/cotton-bath-towels-teal-removebg-preview.png",
    name:"Bath Towels",
    price:15000
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
                    <button class="addbtn">Add to Cart</button>
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
                    <button class="addbtn">Add to Cart</button>
                </div>
            `
}
 document.querySelector('#items1').innerHTML=productsHTML1;
 document.querySelector('#items2').innerHTML=productsHTML2;
