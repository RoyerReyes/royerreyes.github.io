<script src="./js/carrito.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.querySelector('.cart__items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.querySelector('.nav__cart-count');

    document.querySelectorAll('.product__add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const productName = product.querySelector('h3').textContent;
            const productPrice = parseFloat(product.querySelector('span').textContent.replace('$', ''));

            const cartItem = {
                name: productName,
                price: productPrice,
                quantity: 1
            };

            const existingItem = cart.find(item => item.name === cartItem.name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push(cartItem);
            }

            updateCart();
        });
    });

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let count = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItemsContainer.appendChild(li);
            total += item.price * item.quantity;
            count += item.quantity;
        });

        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = count;
    }
});
