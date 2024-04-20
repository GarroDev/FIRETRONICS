let total = 0;
        async function fetchProductDetails(id) {
            try {
                const response = await fetch('http://localhost:3002/cartitems', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id })
                });

                // Verificar si la solicitud fue exitosa
                if (!response.ok) {
                    throw new Error('Failed to fetch product details');
                }

                // Extraer los detalles del producto del cuerpo de la respuesta
                const productDetails = await response.json();

                // Almacenar los detalles del producto en el localStorage
                //localStorage.setItem('productDetails', JSON.stringify(productDetails));
                total += parseFloat(productDetails.Price) / 2;
                localStorage.setItem('total', JSON.stringify(total))
                // Mostrar los detalles del producto en la página
                //localStorage.setItem('ids', 2)
                displayProductDetails(productDetails);
            } catch (error) {
                console.error('Error fetching product details:', error.message);
            }
        }

        // Función para mostrar los detalles del producto en la página
        function displayProductDetails(productDetails) {
            // Obtener el contenedor de los detalles del producto
            const productDetailsContainer = document.getElementById('productDetailsContainer');

            // Crear el contenedor principal
            const containerProd = document.createElement('div');
            containerProd.className = 'containerProd';
            containerProd.style.display = 'flex';
            containerProd.id = 'product_' + productDetails.ID_Product;

            // Crear el contenedor de la imagen
            const imgContainer = document.createElement('div');
            imgContainer.style.flex = '0.2';
            imgContainer.style.marginLeft = '20px';

            // Crear la imagen
            const img = document.createElement('img');
            img.src = productDetails.IMG;
            img.style.maxWidth = '170px';
            img.style.maxHeight = '170px';
            imgContainer.appendChild(img);

            // Crear el contenedor de los detalles del producto
            const detailsContainer = document.createElement('div');
            detailsContainer.style.flex = '1';
            detailsContainer.style.marginLeft = '20px';

            // Crear el título del producto
            const nameElement = document.createElement('h5');
            nameElement.textContent = productDetails.Name;
            nameElement.style.textAlign = 'left';
            nameElement.style.marginTop = '10px';
            detailsContainer.appendChild(nameElement);

            // Crear el contenedor del precio y la descripción
            const priceDescriptionContainer = document.createElement('div');
            priceDescriptionContainer.style.display = 'flex';

            // Crear el contenedor del precio
            const priceContainer = document.createElement('div');
            priceContainer.style.flex = '0.5';

            // Crear el precio original tachado
            const originalPrice = document.createElement('s');
            originalPrice.textContent = '$ ' + productDetails.Price;
            originalPrice.style.textAlign = 'left';
            originalPrice.className = 'price';
            priceContainer.appendChild(originalPrice);

            // Crear el precio actual
            const currentPrice = document.createElement('h3');
            currentPrice.textContent = '$ ' + (productDetails.Price * 0.5).toFixed(2); // Aplicar descuento o cambio de precio aquí
            priceContainer.appendChild(currentPrice);

            // Crear la información de pago
            const paymentInfo = document.createElement('p');
            paymentInfo.textContent = ' en 36x ' + (productDetails.Price / 36).toFixed(2); // Puedes obtener esta información del servidor o calcularla
            paymentInfo.style.textAlign = 'left';
            priceContainer.appendChild(paymentInfo);

            priceDescriptionContainer.appendChild(priceContainer);

            // Crear el contenedor del botón y la puntuación
            const buttonRatingContainer = document.createElement('div');
            buttonRatingContainer.style.flex = '0.5';
            buttonRatingContainer.style.display = 'flex';
            buttonRatingContainer.style.justifyContent = 'space-between';

            // Crear el contenedor de los botones de cantidad
            const quantityButtonContainer = document.createElement('div');
            quantityButtonContainer.className = 'container';
            quantityButtonContainer.style.display = 'flex';

            // Crear los botones de cantidad
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

            decreaseButton.addEventListener('click', function () {
                const productId = this.getAttribute('data-product-id');
                // Aquí puedes llamar a la función para agregar el ID del producto al carrito
                buttons(productId, -1);
            });

            increaseButton.addEventListener('click', function () {
                const productId = this.getAttribute('data-product-id');
                // Aquí puedes llamar a la función para agregar el ID del producto al carrito
                buttons(productId, 1);
            });

            // Agregar los botones de cantidad al contenedor
            quantityButtonContainer.appendChild(decreaseButton);
            quantityButtonContainer.appendChild(quantitySpan);
            quantityButtonContainer.appendChild(increaseButton);

            // Crear el contenedor de la puntuación
            const ratingContainer = document.createElement('div');
            ratingContainer.className = 'puntuacion';

            // Crear el span para la puntuación actual
            const currentRatingSpan = document.createElement('span');
            currentRatingSpan.className = 'puntuacion-actual';
            currentRatingSpan.textContent = '4'; // Puedes obtener esta información del servidor
            ratingContainer.appendChild(currentRatingSpan);

            // Crear el span para la puntuación máxima
            const maxRatingSpan = document.createElement('span');
            maxRatingSpan.className = 'puntuacion-maxima';
            maxRatingSpan.textContent = '5'; // Puedes obtener esta información del servidor
            ratingContainer.appendChild(maxRatingSpan);

            // Crear el span para las estrellas
            const starsSpan = document.createElement('span');
            starsSpan.className = 'estrellas';
            starsSpan.innerHTML = '&#9733;&#9733;&#9733;&#9733;&#9734;'; // Puedes obtener esta información del servidor
            ratingContainer.appendChild(starsSpan);

            // Crear el span para el número de calificaciones
            const ratingCountSpan = document.createElement('span');
            ratingCountSpan.textContent = '(203)'; // Puedes obtener esta información del servidor
            ratingContainer.appendChild(ratingCountSpan);

            buttonRatingContainer.appendChild(quantityButtonContainer);
            buttonRatingContainer.appendChild(ratingContainer);

            priceDescriptionContainer.appendChild(buttonRatingContainer);

            detailsContainer.appendChild(priceDescriptionContainer);

            containerProd.appendChild(imgContainer);
            containerProd.appendChild(detailsContainer);

            // Agregar el contenedor principal al contenedor de detalles del producto
            productDetailsContainer.appendChild(containerProd);
        }

        function buttons(productId, n) {
            // Obtener el contenedor del producto
            const parsedProductId = parseInt(productId);
            const productContainer = document.getElementById('product_' + parsedProductId);

            // Obtener la etiqueta de cantidad
            const quantitySpan = productContainer.querySelector('.unidad');
            const price = productContainer.querySelector('.price');

            // Obtener la lista actual de IDs de productos del carrito desde el almacenamiento local
            let productIds = JSON.parse(localStorage.getItem('ids')) || [];

            // Encontrar el índice del producto en la lista de IDs
            const index = productIds.indexOf(parsedProductId);

            if (index !== -1) {


                // Obtener la cantidad actual del producto
                let quantity = parseInt(quantitySpan.textContent);
                let pricep = price.textContent;
                pricep = parseInt(pricep.replace('$', ''));
                console.log(pricep);
                // Incrementar o disminuir la cantidad según el valor de n
                quantity += n;


                if (quantity === 0 && n === -1) {
                    // Si la cantidad es 0 y n es -1, eliminar el contenedor del producto del HTML
                    productContainer.remove();

                    // Eliminar el ID del producto del array productIds
                    productIds.splice(index, 1);

                    // Actualizar el local storage con la lista de IDs actualizada
                    localStorage.setItem('ids', JSON.stringify(productIds));

                    //disminuir el valor total restando el precio del producto
                    total = localStorage.getItem("total")
                    total -= parseFloat(pricep) / 2;
                    localStorage.setItem('total', JSON.stringify(total));

                    const priceElement = document.getElementById('Price');
                    priceElement.textContent = parseFloat(localStorage.getItem("total"));
                    const priceT = document.getElementById('PriceT');
                    priceT.textContent = parseFloat(localStorage.getItem("total")) + 10
                } else {
                    // Actualizar la cantidad en la etiqueta quantitySpan
                    quantitySpan.textContent = quantity;

                    // Actualizar la cantidad en el local storage
                    // Esto es opcional si deseas mantener la cantidad actualizada en el almacenamiento local
                    // Puedes omitir esta parte si la cantidad en el almacenamiento local no es necesaria
                    productIds[index] = parsedProductId;
                    localStorage.setItem('ids', JSON.stringify(productIds));
                    if (n == -1) {
                        total = parseFloat(localStorage.getItem("total"));
                        total -= parseFloat(pricep) / 2;
                        localStorage.setItem('total', JSON.stringify(total));
                    } else {
                        total = parseFloat(localStorage.getItem("total"));
                        total += parseFloat(pricep) / 2;
                        localStorage.setItem('total', JSON.stringify(total));
                    }

                    const priceElement = document.getElementById('Price');
                    priceElement.textContent = parseFloat(localStorage.getItem("total"));
                    const priceT = document.getElementById('PriceT');
                    priceT.textContent = parseFloat(localStorage.getItem("total")) + 10
                }
            }
        }



        // Llamar a la función para obtener los detalles del producto cuando se cargue la página
        window.addEventListener('load', function () {
            // Obtener la lista de IDs de productos desde el localStorage
            const productIds = JSON.parse(localStorage.getItem('ids'));

            // Verificar si hay IDs de productos almacenados
            if (productIds && productIds.length > 0) {
                // Recorrer la lista de IDs de productos
                productIds.forEach(productId => {
                    // Obtener los detalles del producto del servidor y almacenarlos en localStorage
                    fetchProductDetails(productId);

                });
                const priceElement = document.getElementById('Price');
                priceElement.textContent = parseFloat(localStorage.getItem("total"));
                const priceT = document.getElementById('PriceT');
                priceT.textContent = parseFloat(localStorage.getItem("total")) + 10
            } else {
                console.error('No product IDs found in localStorage');
                const productDetailsContainer = document.getElementById('productDetailsContainer');
                // Crear un elemento de título
                // Crear un elemento de título
                const titleElement = document.createElement('h1');
                titleElement.innerHTML = "&nbsp;&nbsp;&nbsp;¡You haven't added products to your cart yet!";

                // Agregar el título al contenedor de detalles del producto
                productDetailsContainer.appendChild(titleElement);
            }
        });
