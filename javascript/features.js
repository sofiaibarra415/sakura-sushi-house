//ELEGIR TIPO/CANTIDAD DE SUSHI/AGREGAR A LA ORDEN
let pedido = []
function ShowPrice() {
    let typesOfSushi = document.getElementById('selection').value;
    let producto = products.find(item => item.title === typesOfSushi);

    if (!producto) {
        Swal.fire({
            icon: 'warning',
            title: 'Producto no encontrado',
            text: 'No se encontraron productos disponibles.',
            confirmButtonText: 'OK'
        });
        return;
    }

    let priceByUnit = producto.price;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let totalPrice = priceByUnit * cantidad;

    document.getElementById('priceByUnit').innerText = 'Precio por porción: $' + priceByUnit.toFixed(2);
    document.getElementById('totalPrice').innerText = 'Precio total: $' + totalPrice.toFixed(2);
}
const selection = document.getElementById("selection");
selection.addEventListener("change", ShowPrice);

const cantidad = document.getElementById("cantidad");
cantidad.addEventListener("input", ShowPrice);

function addOrder() {
    let typesOfSushi = document.getElementById('selection').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    const product = products.find(item => item.title === typesOfSushi);

    if (!product) {
        Swal.fire({
            icon: 'warning',
            title: 'Producto no encontrado',
            text: 'No se encontraron productos disponibles.',
            confirmButtonText: 'OK'
        });
        return;
    }

    const exist = pedido.find((p) => p.name === typesOfSushi);

    if (!!exist) {
        const pedidoModificado = pedido.map((p) => {
            if (p.name === typesOfSushi) {
                return {
                    name: p.name,
                    qty: parseInt(p.qty) + cantidad,
                    price: p.price
                }
            } else {
                return p
            }
        })
        pedido = pedidoModificado;
    } else {
        pedido.push({
            name: product.title,
            qty: cantidad,
            price: product.price
        });
    }
    loadedProducts();
}
const button = document.querySelector("#agregar");
button.addEventListener("click", function () {
    addOrder();
});

const btn = document.querySelector('#agregar')
btn.addEventListener('click', () => {
    Swal.fire({
        title: 'Buenisimo!',
        text: 'Agregaste un producto al carrito!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
})