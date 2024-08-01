const url =
  "https://real-time-amazon-data.p.rapidapi.com/seller-products?seller_id=A02211013Q5HP3OMSZC7W&country=US&page=1&sort_by=RELEVANCE";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "967eb9e6a1msha0b0b17f7b55b7ep1992ddjsn4fe2a448c334",
    "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
  },
};

async function fetchData() {
  const loading = document.getElementById("loading");
  const productList = document.getElementById("product-list");

  loading.style.display = "block";
  productList.innerHTML = "";

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    displayData(result.data);
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    loading.style.display = "none";
  }
}

function displayData(data) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  data.seller_products?.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    const image = document.createElement("img");
    image.src = product.product_photo;
    image.alt = product.product_title;
    productDiv.appendChild(image);

    const title = document.createElement("h4");
    title.textContent = `${product.product_title}`;
    productDiv.appendChild(title);

    const price = document.createElement("p");
    price.textContent = `Price: ${product.product_price}`;
    productDiv.appendChild(price);

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${product.product_star_rating}`;
    productDiv.appendChild(rating);

    productList.appendChild(productDiv);
  });
}

fetchData();
