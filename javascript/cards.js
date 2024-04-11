//INICIO DE CARDS 
let products = []
async function getProducts() {
    try {
        const response = await fetch('json/products.json');
        const data = await response.json();
        drawProducts(data)
        products = data
        return data;
    } catch (error) {
        console.error('Error al cargar los productos:', error);
        return []; 
    }
}
getProducts()

const productContainer = document.querySelector("#imagenes");

function drawProducts(products) {
    products.forEach((product) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('producto');
        newDiv.innerHTML = `<img src="${product.img}" alt="${product.title}" />
              <div class="informacion">
                <h2>${product.title}</h2>
                <p class="precio">$${product.price} <span>(10 unidades)</span></p>
                <button class="comprarBtn" onclick="buySushi('${product.title}')">Comprar</button>
                <div class="descripcion">${product.description}</div>
              </div>`;
        productContainer.appendChild(newDiv);
    
        newDiv.addEventListener('mouseover', () => {
            const descripcion = newDiv.querySelector('.descripcion');
            descripcion.style.display = 'block';
        });
    
        newDiv.addEventListener('mouseout', () => {
            const descripcion = newDiv.querySelector('.descripcion');
            descripcion.style.display = 'none';
        });
    });
}

document.getElementById('hacerPedidoBtn').addEventListener('click', function () {
    document.getElementById('hola').scrollIntoView({ behavior: 'smooth', block:'center' });
});

function buySushi(nombreSushi) {
    document.getElementById('selection').value = nombreSushi;
    ShowPrice();
    document.getElementById('pedidoSection').scrollIntoView({ behavior: 'smooth', block:'center' });
}