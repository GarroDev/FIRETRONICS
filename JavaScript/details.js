function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const id = getUrlParameter('id');
const productIMG = getUrlParameter('product');
const productName = getUrlParameter('productName');
const productPrice = getUrlParameter('productPrice');
const productStock = getUrlParameter('productStock');
const prodD = getUrlParameter('productD');

const productDetailsDiv = document.getElementById('productDetails');
const productNameDiv = document.getElementById('setnameElement');
const productIMGDiv = document.getElementById('setIMGElement');
const productPriceDiv = document.getElementById('setPriceElement');
const productIDDiv = document.getElementById('setIDElement');
const productStockeDiv = document.getElementById('setStockElement');
const productDescriptionDiv = document.getElementById('setDescriptionElement');

// Crear elementos individuales para cada dato
const idElement = document.createElement('p');
idElement.innerHTML = `<strong>ID:</strong> ${id}`;

const imgElement = document.createElement('img');
imgElement.src = productIMG;
imgElement.alt = productName;

const nameElement = document.createElement('p');
nameElement.innerHTML = `<strong></strong> ${productName}`;

const priceElement = document.createElement('p');
priceElement.innerHTML = `<strong>Price:</strong> ${productPrice}`;

const stockElement = document.createElement('p');
stockElement.innerHTML = `<strong>Stock:</strong> ${productStock}`;

const descriptionElement = document.createElement('p');
descriptionElement.innerHTML = `<strong>Description:</strong> ${prodD}`;


// Agregar los elementos al div principal
/*productDetailsDiv.appendChild(idElement);
productDetailsDiv.appendChild(imgElement);
productDetailsDiv.appendChild(nameElement);
productDetailsDiv.appendChild(priceElement);
productDetailsDiv.appendChild(stockElement);*/

// Agregar nombre al div secundacion
productNameDiv.appendChild(nameElement);
productIMGDiv.appendChild(imgElement);
productPriceDiv.appendChild(priceElement);
productIDDiv.appendChild(idElement);
productStockeDiv.appendChild(stockElement);
productDescriptionDiv.appendChild(descriptionElement); 


// Crear y agregar el botón "Add to Cart"
const addToCartButton = document.createElement('button');
addToCartButton.textContent = 'Add to Cart';
addToCartButton.classList.add('btn', 'btn-primary');

addToCartButton.addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('ids')) || [];
    cart.push([parseInt(id), parseInt(productStock),1]);
    localStorage.setItem('ids', JSON.stringify(cart));
    alert('Product added to cart!');
});

//productDetailsDiv.appendChild(addToCartButton);
productNameDiv.appendChild(addToCartButton);
productIMGDiv.appendChild(addToCartButton);
productPriceDiv.appendChild(addToCartButton);
productIDDiv.appendChild(addToCartButton);
productStockeDiv.appendChild(addToCartButton);
productDescriptionDiv.appendChild(addToCartButton);
productDetailsDiv.appendChild(addToCartButton);


