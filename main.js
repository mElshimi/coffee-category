const menuBody = document.getElementById("menu-body");
const categories = [];
const products = [];

async function getCategories() {
  try {
    const response = await fetch(`http://localhost:4020/categories`);
    const data = await response.json();
    categories.push(...data);
    console.log(categories);
    renderCategories();
  } catch (error) {
    console.log(error);
  }
}

async function getProductByCategory() {
  try {
    const response = await fetch(`http://localhost:4020/products`);
    const data = await response.json();
    products.push(...data);
    console.log(products);
  } catch (error) {
    console.log(error);
  }
}

function renderCategories() {
  let categoryHTML = "";

  categories?.forEach((category) => {
    return (categoryHTML += `<div class="category mt-5 pt-5">
          <div class="container">
            <div class="category-header text-center">
              <h2 class="category-name">${category.name}</h2>
              <div class="category-icon">
                <img class="w-100" src="assets/imgs/ic.png" alt="icon header" />
              </div>
            </div>
            <div class="category-body">
              <div class="row row-gap-5 col">
${products
  .filter((product) => product.categoryId === category.id)
  .map(
    (product) =>
      `<div class="col-md-6">
          <div>
            <div
              class="menu-item d-flex align-items-center justify-content-between"
            >
              <img src="assets/imgs/Americano.png" alt="item-img" />
              <div class="item-info">
                <h4>${product.name}</h4>
                <p>Fresh Brewed coffee and steamed milk</p>
              </div>
              <h2 class="item-price">${product.price} EGP</h2>
            </div>
          </div>
        </div>`
  )
  .join("")}
              </div>
            </div>
          </div>
        </div>`);
  });
  menuBody.innerHTML = categoryHTML;
}
getProductByCategory();
getCategories();
