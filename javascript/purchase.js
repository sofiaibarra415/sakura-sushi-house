//CARRITO DE COMPRAS
function loadedProducts() {
    let headerTable = `<table class="table table-hover table-dark finalizar-pedido" style="padding-top: 10px;border-collapse: collapse;">
    <thead>
    <tr style="border-top: none;">
        <th colspan="7" class="text-center"><img src="./images/carrocompras.png" alt="Carrito de compras" style="display: block; margin: 0 auto;max-width: 100px; max-height: 100px;"></th>
      </tr>
      <tr class="items">
        <th scope="col">#</th>
        <th scope="col">Producto</th>
        <th scope="col">Cantidad de porcion/es</th>
        <th scope="col">Precio por porcion</th>
        <th scope="col">Subtotal</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>`;
    let bodyTable = "";
    let total = 0;
    pedido.forEach((item, indice) => {
        bodyTable += `<tr>
        <th scope="row">${indice + 1}</th>
        <td>${item.name}</td>
        <td>
            <div class="cantidad-container">
                <button class="aumentar-cantidad" onclick="increase(${indice})">+</button>
                <span>${item.qty}</span>
                <button class="disminuir-cantidad" onclick="decrease(${indice})">-</button>
            </div>
        </td>
        <td>$${item.price}</td>
        <td>$${parseInt(item.qty) * parseInt(item.price)}</td>
        <td><span class="icono-eliminar" onclick="deleteItem(${indice})">Eliminar</span></td>
      </tr>`;
        total += parseInt(item.qty) * parseInt(item.price);
    });
    let footerTable = `<tr>
      <td colspan="4"></td>
      <td class="total">TOTAL</td>
      <td class="monto">$${total}</td>
    </tr>
    </tbody>
    </table>`;
    window.localStorage.setItem("pedido", JSON.stringify(pedido))
    if (pedido.length) {
        const table = document.querySelector("#pedido-final > table")
        const form = document.querySelector("#form-cliente")
        if (table) table.remove()
        document.querySelector("#pedido-final").insertAdjacentHTML("afterbegin", headerTable + bodyTable + footerTable)
    } else {
        const table = document.querySelector("#pedido-final > table")
        if (table) table.remove()
    }
}

const pedidosEnStorage = window.localStorage.getItem("pedido")
pedido = JSON.parse(pedidosEnStorage)
loadedProducts()

function increase(indice) {
    pedido[indice].qty++;
    loadedProducts();
}

function decrease(indice) {
    if (pedido[indice].qty > 1) {
        pedido[indice].qty--;
        loadedProducts();
    }
}