const products = [
  {
    id: 1,
    title: "Redragon MOUSE TITANOBOA2 M802-RGB-1",
    price: 163.9,
    poster: "mouse.jpg",
    store: "Amazon",
    link: "https://www.amazon.com.br/Redragon-MOUSE-TITANOBOA2-M802-RGB-1-Modelo/dp/B09Z32CFTW/ref=asc_df_B09Z32CFTW/?tag=googleshopp00-20&linkCode=df0&hvadid=379725868941&hvpos=&hvnetw=g&hvrand=3828116982615463402&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101050&hvtargid=pla-1972854918844&psc=1",
  },
  {
    id: 2,
    title: "Teclado Mecânico Redragon Dark Avenger RGB",
    price: 58.6,
    poster: "teclado.jpg",
    store: "Amazon",
    link: "https://www.amazon.com.br/Teclado-Mec%C3%A2nico-Redragon-Avenger-Branco/dp/B087YXFLMZ/ref=asc_df_B087YXFLMZ/?tag=googleshopp00-20&linkCode=df0&hvadid=379713309507&hvpos=&hvnetw=g&hvrand=4566265811699521917&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101050&hvtargid=pla-977907284359&psc=1",
  },
  {
    id: 3,
    title: 'Monitor Gamer AOC Hero 24" 144Hz IPS',
    price: 1269.45,
    poster: "monitor.jpg",
    store: "Amazon",
    link: "https://www.google.com/aclk?sa=l&ai=DChcSEwju47-UreuBAxVpQUgAHavFBgYYABALGgJjZQ&ase=2&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobfqByWOu2rgGwCAcXCYlzMYDHHnYGvVHJ2blqvMPDbzTgQSLabs8dkaAqkrEALw_wcB&sig=AOD64_3wJCeFuLZv5R-I7wgSYAaEbeyRdg&ctype=5&nis=6&adurl&ved=2ahUKEwi6iLCUreuBAxWhMrkGHZoWCOUQvhd6BQgBEJAB",
  },
  {
    id: 4,
    title: "SSD Kingston NV2 2TB NVMe M.2 2280",
    price: 257.99,
    poster: "ssd.jpg",
    store: "Amazon",
    link: "https://www.amazon.com.br/Kingston-Leitura-3500MB-Grava%C3%A7%C3%A3o-2800MB/dp/B0BDTC589G/ref=asc_df_B0BDTC589G/?tag=googleshopp00-20&linkCode=df0&hvadid=379713309483&hvpos=&hvnetw=g&hvrand=15999654709132464735&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101050&hvtargid=pla-2009784668632&psc=1",
  },
  {
    id: 5,
    title: "Nvidia Geforce RTX 4070 Ti Galax SG 12Gb GDDR6X ",
    price: 2485.62,
    poster: "rtx.jpg",
    store: "Amazon",
    link: "https://www.google.com/aclk?sa=l&ai=DChcSEwi2y_zIreuBAxWMX0gAHXuADAcYABAFGgJjZQ&ase=2&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobeT80uw8aa_DxgLqXFO8MGk7fjm6TNOwbck-VgL9Fdp0wPjWMZQNu4aAncIEALw_wcB&sig=AOD64_3XI_3nlPCi-oEifHvXeAIohDt-fw&ctype=5&nis=6&adurl&ved=2ahUKEwiQx_DIreuBAxWtH7kGHVnrD0AQvhd6BQgBEIEB",
  },
];

// Formatação monetária
const formatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 2,
});

// Declaração de constantes
const searchBtn = document.querySelector("#btnSearch");
const listContainer = document.querySelector(".list_prod");
const header = document.querySelector("#header");
const titlePage = document.querySelector("title");
const search = document.querySelector("#search");


//Renderização da lista de produtos
function renderList(products) {
  let list = "";

  if (products.length <= 0) {
    list += `<div id='no-products'>Nenhum produto encontrado</div>`;
  } else {
    products.forEach((product, index) => {
      list += `
                <div id="list">
                <div class='products'>
                    <div class="product">
                        <div class='product-img'>
                            <img src="./assets/${product.poster}" />
                        </div>
                        <div class='product-info'>
                            <div class="title">
                                <span class="product-title">${
                                  product.title
                                }</span>
                                <span class="product-price">${formatter.format(
                                  product.price
                                )}</span>
                                <p>Disponível em <a class="store-link" target=_blank href=${
                                  product.link
                                }>${product.store}</a></p>
                            </div>
                            <div class="store-info">
                                <a class="go-to-store" target=_blank href=${
                                  product.link
                                }>Ir para loja</a>
                                <div class="btn-action">
                                <button data-id=${index} class="check_btn">
                                <ion-icon name="checkmark-sharp"></ion-icon>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
    });
  }

  listContainer.innerHTML = list;

  const checkBtn = document.querySelectorAll("button.check_btn");
  let productsSelected = [];

  for (let i = 0; i <= checkBtn.length; i++) {
    let checked = false;
    checkBtn[i].addEventListener("click", () => {
      let key = checkBtn[i].getAttribute("data-id");

      if (!checked) {
        checkBtn[i].classList.add("active");
        checked = true;
        productsSelected.push(products[key]);
      } else {
        checkBtn[i].classList.remove("active");
        checked = false;
        productsSelected.splice(products[key], 1);
      }

      console.log(productsSelected);
    });
  }
}



// Checagem do input
function filterProducts(search) {
  if (search != "") {
    return products.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
  } else {
    renderManual();
  }
}

function titleUpdate(search) {
  let title = "";
  if (search != "") {
    title = `
      Busca Produto | ${search}
    `;
  } else {
    title = `
        Busca Produto
      `;
  }

  titlePage.innerHTML = title;
}

// Consulta de produtos
function searchProduct() {
  search.addEventListener("change", (e) => {
    let searched = e.target.value;
    const productsFound = filterProducts(searched);

    if (productsFound.length > 0) {
      renderList(productsFound);
    } else {
      listContainer.innerHTML = "Nenhum produto encontrado";
    }

    // productsFound.length > 0 ?
    // renderList(productsFound)
    // : listContainer.innerHTML = 'Nenhum produto encontrado';

    titleUpdate(searched);
  });
}

// Checagem se o botão é pressionado ou a tecla enter
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchProduct();
  }
});

searchBtn.addEventListener("click", searchProduct());
// |==================================================| //

// Renderização da tela inicial
function renderManual() {
  let list = `
     <div class="manual-content">
        <ion-icon name="search-circle-outline" class="manual-icon"></ion-icon>
        <h4>Utilize a barra de pesquisa acima para encontrar o produto desejado...</h4>
    </div>
    `;

  listContainer.innerHTML = list;
}


renderManual();

// TODO: Separar funções em módulos futuramente;
// TODO: Criar sistema de paginação;
// TODO: Sistema de filtro;
