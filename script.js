const products = [
    {
        id: 1,
        title: 'Mouse',
        price: 10.9,
        poster: 'mouse.jpg',
        store: 'Kaboom'
    },
    {
        id: 2,
        title: 'Teclado',
        price: 58.60,
        poster: 'teclado.jpg',
        store: 'Pichau'
    },
    {
        id: 3,
        title: 'Monitor',
        price: 1269.45,
        poster: 'mouse.jpg',
        store: 'Pichau'
    },
    {
        id: 4,
        title: 'HD',
        price: 257.99,
        poster: 'mouse.jpg',
        store: 'Pichau'
    },
    {
        id: 5,
        title: 'GTX-5090',
        price: 2485.62,
        poster: 'mouse.jpg',
        store: 'Pichau'
    },
    {
        id: 6,
        title: 'GTX-5090',
        price: 2485.62,
        poster: 'mouse.jpg',
        store: 'Pichau'
    },
    {
        id: 7,
        title: 'GTX-5090',
        price: 2485.62,
        poster: 'mouse.jpg',
        store: 'Pichau'
    },
];


const formatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
})

const searchBtn = document.querySelector('#btnSearch');
const listContainer = document.querySelector('.list_prod');
const header = document.querySelector('#header');
const search = document.querySelector('#search');

function filterProducts(search) {
    if (search != '') {
        return products.filter(product => {
            return product.title.toLowerCase().includes(search.toLowerCase());
        })
    } else {
        renderManual();
    }
}

function searchProduct() {
    search.addEventListener('change', (e) => {
        const searched = e.target.value;
        const productsFound = filterProducts(searched);

        productsFound.length > 0 ?
            renderList(productsFound)
            : listContainer.innerHTML = 'Nenhum produto encontrado';
    });
}

searchBtn.addEventListener('click', searchProduct());

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchProduct();
    } else {

    }
})


function renderManual() {
    let list =
        `
     <div class="manual-content">
        <ion-icon name="search-circle-outline" class="manual-icon"></ion-icon>
        <h4>Utilize a barra de pesquisa acima para encontrar o produto desejado...</h4>
    </div>
    `

    listContainer.innerHTML = list;
}

function renderList(products) {
    let list = '';

    if (products.length <= 0) {
        list += `<div id='no-products'>Nenhum produto encontrado</div>`
    } else {
        products.forEach((product, index) => {
            list +=
                `
                <div id="list">
                <div class='products'>
                    <div class="product">
                        <div class='product-img'>
                            <img src="./${product.poster}" />
                        </div>
                        <div class='product-info'>
                            <div class="title">
                                <span class="product-title">${product.title}</span>
                                <span class="product-price">${formatter.format(product.price)}</span>
                                <p>Disponível em <a class="store-link" href="#">${product.store}</a></p>
                            </div>
                            <div class="store-info">
                                <a class="go-to-store" href="#">Ir para loja</a>
                            </div>
                            <div class="btn-action">
                                <button data-id=${index} class="check_btn">
                                    <ion-icon name="checkmark-sharp"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        });
    }


    listContainer.innerHTML = list;

    const checkBtn = document.querySelectorAll('button.check_btn');
    let productsSelected = [];

    for (let i = 0; i <= checkBtn.length; i++) {
        let checked = false;
        checkBtn[i].addEventListener('click', () => {

            let key = checkBtn[i].getAttribute('data-id');

            if (!checked) {
                checkBtn[i].classList.add('active');
                checked = true;
                productsSelected.push(products[key]);
            } else {
                checkBtn[i].classList.remove('active');
                checked = false;
                productsSelected.splice(products[key], 1);
            }

            console.log(productsSelected);

        })
    }

}

renderManual();