import {cart} from './cart.js';

load();
function load() {
    const listContainer = document.querySelector('#item-list');
    listContainer.innerHTML = '';

    cart.l.forEach(item => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `
            <div class="item">
                <div class="headingItem">
                    <p class="deliver">Delivery Date: 10 August</p>
                    <img src="${item.image}" alt="">
                </div>
                <div class="order">
                    <div class="item-summary">
                        <h2>${item.name}</h2>
                        <p class="price">$${item.price}</p>
                        <p class="quantity">Quantity: ${item.quantity}</p>
                        <button class="update-btn" data-id="${item.id}">Update</button>
                        <button class="delete-btn" data-id="${item.id}">Delete</button>
                    </div>
                </div>
            </div>
        `;
        listContainer.appendChild(listItem);
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
    const summ = document.createElement('div');
    summ.id = 'summary';
    summ.innerHTML = `
        <h3>Order Summary</h3>
        <p>Items (${cart.cartcnt}): </p>
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