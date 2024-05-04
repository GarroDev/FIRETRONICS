let total=0;
    async function fetchProductDetails(id) {
      try {
        const response = await fetch('http://localhost:3002/cartitems', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id })
        });

        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        
        // Extract product details from the response body.
        const productDetails = await response.json();

        // Store product details in the localStorage
        //localStorage.setItem('productDetails', JSON.stringify(productDetails));
        total += parseFloat(productDetails.Price)/2;
        localStorage.setItem('total', JSON.stringify(total))
        // Display product details on the page
        //localStorage.setItem('ids', 2)
        displayProductDetails(productDetails);
      } catch (error) {
        console.error('Error fetching product details:', error.message);
      }
    }

    // Function to display product details on the page
    function displayProductDetails(productDetails) {
        // Obtener el contenedor de los detalles del producto
        const productDetailsContainer = document.getElementById('productDetailsContainer');

        // Create the main container
        const containerProd = document.createElement('div');
        containerProd.className = 'containerProd';
        containerProd.style.display = 'flex';
        containerProd.id = 'product_' + productDetails.ID_Product;

        // Create the image container
        const imgContainer = document.createElement('div');
        imgContainer.style.flex = '0.2';
        imgContainer.style.marginLeft = '20px';

        // Create the image
        const img = document.createElement('img');
        img.src = productDetails.IMG;
        img.style.maxWidth = '170px';
        img.style.maxHeight = '170px';
        imgContainer.appendChild(img);
        
        // Create the product details container
        const detailsContainer = document.createElement('div');
        detailsContainer.style.flex = '1';
        detailsContainer.style.marginLeft = '20px';

        // Create the product title
        const nameElement = document.createElement('h5');
        nameElement.textContent = productDetails.Name;
        nameElement.style.textAlign = 'left';
        nameElement.style.marginTop = '10px';
        detailsContainer.appendChild(nameElement);

        // Create the price and description container
        const priceDescriptionContainer = document.createElement('div');
        priceDescriptionContainer.style.display = 'flex';

        // Create the price container
        const priceContainer = document.createElement('div');
        priceContainer.style.flex = '0.5';

        // Create the original price crossed out
        const originalPrice = document.createElement('s');
        originalPrice.textContent = '$ ' + productDetails.Price;
        originalPrice.style.textAlign = 'left';
        originalPrice.className='price';
        priceContainer.appendChild(originalPrice);

        // Create the current price
        const currentPrice = document.createElement('h3');
        currentPrice.textContent = '$ ' + (productDetails.Price * 0.5).toFixed(2); 
        priceContainer.appendChild(currentPrice);

        // Create payment information
        const paymentInfo = document.createElement('p');
        paymentInfo.textContent = ' en 36x '+(productDetails.Price/36).toFixed(2);
        paymentInfo.style.textAlign = 'left';
        priceContainer.appendChild(paymentInfo);

        priceDescriptionContainer.appendChild(priceContainer);

        // Create the button container and punctuation
        const buttonRatingContainer = document.createElement('div');
        buttonRatingContainer.style.flex = '0.5';
        buttonRatingContainer.style.display = 'flex';
        buttonRatingContainer.style.justifyContent = 'space-between';

        // Create the container for the quantity buttons
        const quantityButtonContainer = document.createElement('div');
        quantityButtonContainer.className = 'container';
        quantityButtonContainer.style.display = 'flex';

        // Create quantity buttons
        const decreaseButton = document.createElement('button');
        decreaseButton.className = 'btn btn-secondary';
        decreaseButton.textContent = '-';
        const quantitySpan = document.createElement('span');
        quantitySpan.className = 'unidad';
        quantitySpan.textContent = '1';
        const increaseButton = document.createElement('button');
        increaseButton.className = 'btn btn-secondary';
        increaseButton.textContent = '+';

        const productId = productDetails.ID_Product;
        decreaseButton.setAttribute('data-product-id', productId);
        increaseButton.setAttribute('data-product-id', productId);
        
        decreaseButton.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        // Here you can call the function to add the product ID to the cart
        buttons(productId,-1);
        });

        increaseButton.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        // Here you can call the function to add the product ID to the cart
        buttons(productId,1);
        });

        // Add quantity buttons to the container
        quantityButtonContainer.appendChild(decreaseButton);
        quantityButtonContainer.appendChild(quantitySpan);
        quantityButtonContainer.appendChild(increaseButton);

        // Add the quantity buttons to the container // Create the score container
        const ratingContainer = document.createElement('div');
        ratingContainer.className = 'puntuacion';

        // Create the span for the current score
        const currentRatingSpan = document.createElement('span');
        currentRatingSpan.className = 'puntuacion-actual';
        currentRatingSpan.textContent = '4'; 
        ratingContainer.appendChild(currentRatingSpan);

        // Create the span for the maximum score
        const maxRatingSpan = document.createElement('span');
        maxRatingSpan.className = 'puntuacion-maxima';
        maxRatingSpan.textContent = '5'; 
        ratingContainer.appendChild(maxRatingSpan);

        // Create the span for the stars
        const starsSpan = document.createElement('span');
        starsSpan.className = 'estrellas';
        starsSpan.innerHTML = '&#9733;&#9733;&#9733;&#9733;&#9734;'; 
        ratingContainer.appendChild(starsSpan);

        // Create the span for the number of ratings
        const ratingCountSpan = document.createElement('span');
        ratingCountSpan.textContent = '(203)'; 
        ratingContainer.appendChild(ratingCountSpan);

        buttonRatingContainer.appendChild(quantityButtonContainer);
        buttonRatingContainer.appendChild(ratingContainer);

        priceDescriptionContainer.appendChild(buttonRatingContainer);

        detailsContainer.appendChild(priceDescriptionContainer);

        containerProd.appendChild(imgContainer);
        containerProd.appendChild(detailsContainer);

        // Add the main container to the product details container
        productDetailsContainer.appendChild(containerProd);
    }

    function buttons(productId, n) {
    // Get the product container
    const parsedProductId = parseInt(productId);
    const productContainer = document.getElementById('product_' + parsedProductId);
    
    // Get quantity label
    const quantitySpan = productContainer.querySelector('.unidad');
    const price=productContainer.querySelector('.price');

    // Get current list of cart product IDs from local storage
    let productIds = JSON.parse(localStorage.getItem('ids')) || [];

    // Find the product index in the ID list
    const index = productIds.indexOf(parsedProductId);
    
    if (index !== -1) {
        
        
        // Get current product quantity
        let quantity = parseInt(quantitySpan.textContent);
        let pricep = price.textContent;
        pricep=parseInt(pricep.replace('$', ''));
        console.log(pricep);
        // Increase or decrease the quantity according to the value of n
        quantity += n;
        
        
        if (quantity === 0 && n === -1) {
            // If the quantity is 0 and n is -1, remove the product container from HTML
            productContainer.remove();

            // Remove the product ID from the array productIds
            productIds.splice(index, 1);

            // Update the local storage with the updated list of IDs
            localStorage.setItem('ids', JSON.stringify(productIds));

            //decrease the total value by subtracting the price of the product
            total = localStorage.getItem("total")
            total -= parseFloat(pricep)/2;
            localStorage.setItem('total', JSON.stringify(total));

            const priceElement = document.getElementById('Price');
            priceElement.textContent = parseFloat(localStorage.getItem("total"));
            const priceT = document.getElementById('PriceT');
            priceT.textContent = parseFloat(localStorage.getItem("total"))+10
        } else {
            // Update quantity in quantitySpan tag
            quantitySpan.textContent = quantity;

            // Update the amount in local storage
            // This is optional if you want to keep the quantity updated in local storage.
            // You can omit this part if the amount in local storage is not needed.
            productIds[index] = parsedProductId;
            localStorage.setItem('ids', JSON.stringify(productIds));
            if (n==-1){
                total = parseFloat(localStorage.getItem("total"));
                total -= parseFloat(pricep)/2;
                localStorage.setItem('total', JSON.stringify(total));
            }else{
                total = parseFloat(localStorage.getItem("total"));
                total += parseFloat(pricep)/2;
                localStorage.setItem('total', JSON.stringify(total));
            }

            const priceElement = document.getElementById('Price');
            priceElement.textContent = parseFloat(localStorage.getItem("total"));
            const priceT = document.getElementById('PriceT');
            priceT.textContent = parseFloat(localStorage.getItem("total"))+10
        }
    }
}



    // Call the function to get the product details when the page is loaded
    window.addEventListener('load', function() {
    // Get the list of product IDs from the localStorage
    const productIds = JSON.parse(localStorage.getItem('ids'));

    // Check for stored product IDs
    if (productIds && productIds.length > 0) {
        // Scroll through the list of product IDs
        productIds.forEach(productId => {
            // Get the product details from the server and store them in localStorage
            fetchProductDetails(productId);
            
        });
        const priceElement = document.getElementById('Price');
        priceElement.textContent = parseFloat(localStorage.getItem("total"));
        const priceT = document.getElementById('PriceT');
        priceT.textContent = parseFloat(localStorage.getItem("total"))+10
    } else {
        console.error('No product IDs found in localStorage');
        const productDetailsContainer = document.getElementById('productDetailsContainer');
        // Create a title element
        const titleElement = document.createElement('h1');
        titleElement.innerHTML = "&nbsp;&nbsp;&nbsp;¡You haven't added products to your cart yet!";
        
        // Add the title to the product details container
        productDetailsContainer.appendChild(titleElement);
    }
});
