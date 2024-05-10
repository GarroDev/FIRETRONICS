function mostrarOcultarElementos() {
  const profileAlmacenado = sessionStorage.getItem('profile');

  if (profileAlmacenado === '2') {
    // Hide the buttons
    const botones = document.querySelectorAll('.Log-Btn1');
            botones.forEach(boton => boton.style.display = 'none');

            // Show alternative containers
            const contenedorCuenta = document.querySelector('.Log-Btn2');
            contenedorCuenta.style.display = 'block';
  } else {
    const botones = document.querySelectorAll('.Log-Btn1');
            botones.forEach(boton => boton.style.display = 'block');

            // Show alternative containers
            const contenedorCuenta = document.querySelector('.Log-Btn2');
            contenedorCuenta.style.display = 'none';
  }
}

function cambiarValorAlmacenamiento() {
    // Get the valueo of the var perfil
    const perfilAlmacenado = sessionStorage.getItem('profile');
  
    // If actual values is "2"(Buttons hiden), if not chage value
    if (perfilAlmacenado === '2') {
      sessionStorage.setItem('profile', '1');
    } else {
      sessionStorage.setItem('profile', '2');
    }
  
    // Reload the page to apply the changes
    location.reload();
  }
  function cambiarValorAlmacenamiento1() {
    localStorage.setItem('profile', 2);
    location.reload();
  }

// Execute funtion on page reload
window.addEventListener('load', mostrarOcultarElementos);

// Switches tabs every 5 seconds
var tabs = ['tab1', 'tab2', 'tab3', 'tab4']; // Add more tab identifiers if needed
var currentIndex = 0;

setInterval(function () {
    $('#' + tabs[currentIndex]).removeClass('active');
    $('#' + tabs[currentIndex]).tab('show');
    currentIndex = (currentIndex + 1) % tabs.length;
}, 5000); // Changes every 5 seconds 

document.addEventListener('DOMContentLoaded', function () {
    var helpButton = document.getElementById('helpButton');
    var helpPopup = document.getElementById('helpPopup');
    var closePopup = document.querySelector('.close');
    var helpList = document.getElementById('helpList');
    var chatArea = document.getElementById('chatArea'); // Make sure you have an element with id 'chatArea' in your HTML

    helpButton.addEventListener('click', function () {
        helpPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', function () {
        helpPopup.style.display = 'none';
    });

    helpList.addEventListener('click', function (e) {
        var target = e.target;
        if (target.tagName === 'BUTTON') {
            // Add button text to the chat area
            var userMessage = document.createElement('p');
            userMessage.textContent = target.textContent;
            userMessage.classList.add('Usr')
            chatArea.appendChild(userMessage);

            // Add a system message
            var sysMessage = document.createElement('p');
            sysMessage.textContent = "Select the best option for you";
            sysMessage.classList.add('Sys');
            chatArea.appendChild(sysMessage);

            // Define new options based on the selection
            var newOptions = [];
            var newOptions2 = [];
            if (target.value === 'Problema') {
                newOptions = [
                    { text: "I have an issue with an order", value: "Subopcion1" },
                    { text: "I have an issue with a payment", value: "Subopcion2" }
                ];
            } else if (target.value === 'Subopcion1') {
                newOptions = [
                    { text: "I want to track an order", value: "Subopcion" },
                    { text: "I want to cancel an order", value: "Subopcion" }
                ];
            } else if (target.value === 'Subopcion2') {
                newOptions = [
                    { text: "I did a payment but I havent got a confirmation", value: "Subopcion" },
                    { text: "I want to cancel a payment", value: "Subopcion" }
                ];
            } else if (target.value === 'Consulta') {
                newOptions = [
                    { text: "I want to search a product I am not able to find ", value: "Subopcion" },
                    { text: "I am seraching for this x project", value: "Subopcion" }
                ];
            } else if (target.value === 'Sugerencia') {
                newOptions = [
                    { text: "I want to do a sugestion for the payments", value: "Subopcion3" },
                    { text: "I want to file a complaint with someone", value: "Subopcion" }
                ];
            } else if (target.value === 'Subopcion3') {
                newOptions = [
                    { text: "The payments are slow", value: "Subopcion" },
                    { text: "The payments are easy to do", value: "Subopcion" },
                    { text: "The payments are a bit hard to uderstand", value: "Subopcion" }
                ];
            } else if (target.value === 'Subopcion') {
                createTextInput();
                createSendButton();
            }

            // Clear the previous options and add the new ones to the DOM
            helpList.innerHTML = '';
            newOptions.forEach(function (option) {
                var newButton = document.createElement('button');
                newButton.textContent = option.text;
                newButton.value = option.value;
                newButton.classList.add('help-button', 'list-group-item', 'list-group-item-action', 'chatsub');
                helpList.appendChild(newButton);
            });
        }
    });
});

function createTextInput() {
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Write here your message');
    input.classList.add('input-text', 'list-group-item', 'list-group-item-action', 'HelpMesage');
    chatArea.appendChild(input);
}

function createSendButton() {
    var sendButton = document.createElement('button');
    sendButton.textContent = 'Send';
    sendButton.classList.add('HelpButton', 'help-button', 'list-group-item', 'list-group-item-action', 'chatsub');
    sendButton.addEventListener('click', function () {
        location.reload(); // Recharge
    });
    chatArea.appendChild(sendButton);
}
window.addEventListener('load', function () {
    // Get the list of product IDs from the localStorage
    const ids = JSON.parse(localStorage.getItem('ids'));

    // Check if the list of IDs is valid and has elements
    if (Array.isArray(ids) && ids.length > 0) {
        // Get the <span> element showing the number of products in the cart.
        const itemCountSpan = document.getElementById('cartItemCount');

        // Update the content of the <span> element with the number of elements in the ID list.
        itemCountSpan.textContent = ids.length;
    } else {
        console.error('Invalid or empty IDs list in localStorage');
    }
});  

const miBotonWhatsApp = document.getElementById('miBotonWhatsApp');

miBotonWhatsApp.addEventListener('click', function() {
    const numeroWhatsApp = "+573054020427";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}`;
    window.open(urlWhatsApp, '_blank');
});

// Function to obtain URL parameters
function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Get the value of the 'Profile' parameter from the URL
var Profile = getParameterByName('Profile');

// Verificar si Profile es igual a 1
if (Profile === '2') {
    // Perform actions if Profile is equal to 1
    //alert('Profile value is: ' + Profile);
    // You can perform more actions here as needed
} else {
    // alert('Profile value is: no data');
}