import {cart as Cart} from './cart.js';

let cart=JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart=Cart;
}
load();
function load() {
    const listContainer = document.querySelector('#item-list');
    listContainer.innerHTML = '';

    cart.l.forEach(
        (item) => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `
            <div class="item">
                <div class="headingItem">
                    <p id="date-heading${item.id}" class="deliver">Delivery Date: </p>
                    <img src="${item.image}" alt="">
                </div>
                <div class="order">
                    <div class="item-summary">
                        <h2>${item.name}</h2>
                        <p class="price">$${item.price/100}</p>
                        <p class="quantity">Quantity: ${item.quantity}</p>
                        <button class="update-btn" data-id="${item.id}">Update</button>
                        <button class="delete-btn" data-id="${item.id}">Delete</button>
                    </div>
                    <div class="delivery-div" id="delivery${item.id}">
                        <h4>choose delivery option</h4>
                        <div class="delivery-option">
                            <div class="delivery-inputs">
                                <input type="radio" id="input1${item.id}" name="delivery${item.id}">
                                <label for="input1${item.id}" id="label1${item.id}"></label>
                            </div>
                            <div class="delivery-inputs">
                                <input type="radio" id="input2${item.id}" name="delivery${item.id}">
                                <label for="input2${item.id}" id="label2${item.id}"></label>
                            </div>
                            <div class="delivery-inputs">
                                <input type="radio" id="input3${item.id}" name="delivery${item.id}">
                                <label for="input3${item.id}" id="label3${item.id}"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        listContainer.appendChild(listItem);
        document.querySelector(`#date-heading${item.id}`).innerHTML=`Delivery Date : ${dayjs().format('D MMM')}`
        let date=dayjs();
        document.querySelector(`#label1${item.id}`).textContent=date.format('dddd-MMMM D');
        document.querySelector(`#input1${item.id}`).value = date.format('D MMM');
        document.querySelector(`#input1${item.id}`).checked=true;

        document.querySelector(`#label2${item.id}`).textContent=date.clone().add(7,'days').format('dddd-MMMM D');
        document.querySelector(`#input2${item.id}`).value = date.clone().add(7,'days').format('D MMM');

        document.querySelector(`#label3${item.id}`).textContent=date.clone().add(14,'days').format('dddd-MMMM D');
        document.querySelector(`#input3${item.id}`).value = date.clone().add(7,'days').format('D MMM');

        document.querySelectorAll(`input[name="delivery${item.id}"]`).forEach(
            (radio)=>{
                radio.addEventListener('change',
                    ()=>{
                        const selected=document.querySelector(`input[name="delivery${item.id}"]:checked`);
                        if(selected){
                            document.querySelector(`#date-heading${item.id}`).innerHTML=`Delivery Date : ${selected.value}`;
                        }
                    }
                )
            }
        )
    });
    document.querySelectorAll('.update-btn').forEach(btn => {
        btn.addEventListener('click', () => updateQuantity(btn.dataset.id));
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => deleteItem(btn.dataset.id));
    });

    const container = document.querySelector('#container');
    container.querySelector('#summary')?.remove();
    let sum = cart.l.reduce((acc, item) => acc + item.price * item.quantity, 0);
    sum=sum/100;
    const summ = document.createElement('div');
    summ.id = 'summary';
    summ.innerHTML = `
        <h3>Order Summary</h3>
        <p>Items (${Number(cart.cartcnt)}): </p>
        <p>Total: $${sum}</p>
        <p>Shipping: $5</p>
        <p>Tax: $5</p>
        <h2>Order total: $${sum + 10}</h2>
        <button>Place Order</button>
    `;
    container.appendChild(summ);
}

function updateQuantity(id) {
    const item = cart.l.find(product => product.id == id);
    if (!item) return;

    const newQty = parseInt(prompt(`Enter new quantity for ${item.name}:`, item.quantity), 10);
    if (isNaN(newQty) || newQty <= 0) {
        alert("Invalid quantity");
        return;
    }
    item.quantity = newQty;
    cart.cartcnt = cart.l.reduce((acc, prod) => acc + prod.quantity, 0);
    localStorage.setItem('cart', JSON.stringify(cart)); 
    load();
}

function deleteItem(id) {
    cart.l = cart.l.filter(product => product.id != id);
    cart.cartcnt = cart.l.reduce((acc, prod) => acc + prod.quantity, 0);
    localStorage.setItem('cart', JSON.stringify(cart));
    load();
}