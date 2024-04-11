const addBtn = document.querySelector('#agregar');
const finishBtn = document.getElementById("finish");

addBtn.addEventListener('click', () => {
    document.getElementById('datosCliente').style.display = 'block';
    loadedProducts();
});

function deleteItem(indice) {
    pedido.splice(indice, 1);
    loadedProducts();

    if (pedido.length === 0) {
        document.getElementById('datosCliente').style.display = 'none';
        localStorage.removeItem('visibleCostumerData');
    }
}

function finalizeOrder() {
    const nameSurname = document.getElementById('nameSurname').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('adress').value;

    if (!nameSurname || !phone || !address) {
        Swal.fire({
            title: 'Error',
            text: 'Todos los campos deben ser completados.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            document.getElementById('datosCliente').style.display = 'block';
            localStorage.setItem('visibleCostumerData', 'true'); 
        });
    } else {
        Swal.fire({
            title: `Perfecto ${nameSurname}, llevaremos tu pedido a ${address}`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
        pedido = [];
        loadedProducts();
        localStorage.removeItem('visibleCostumerData');
    }
}

finishBtn.addEventListener("click", finalizeOrder);

const visibleCostumerData = localStorage.getItem('visibleCostumerData');
if (visibleCostumerData === 'true') {
    document.getElementById('datosCliente').style.display = 'block';
} else {
    document.getElementById('datosCliente').style.display = 'none';
}

addBtn.addEventListener('click', function () {
    document.getElementById('datosCliente').style.display = 'block';
    localStorage.setItem('visibleCostumerData', 'true');
});

let customerDataDisplayed = false;
addBtn.addEventListener('click', function () {
    if (!customerDataDisplayed) {
        document.getElementById('nameSurname').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('adress').value = '';
        customerDataDisplayed = true;
    }
});

finishBtn.addEventListener('click', function () {
    document.getElementById('datosCliente').style.display = 'none';
    localStorage.removeItem('visibleCostumerData');
});