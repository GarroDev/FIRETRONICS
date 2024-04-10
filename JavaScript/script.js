// Cambia de pestaña cada 5 segundos
var tabs = ['tab1', 'tab2', 'tab3', 'tab4']; // Agregar más identificadores de pestañas si es necesario
var currentIndex = 0;

setInterval(function () {
    $('#' + tabs[currentIndex]).removeClass('active');
    $('#' + tabs[currentIndex]).tab('show');
    currentIndex = (currentIndex + 1) % tabs.length;
}, 5000); // Cambia cada 5 segundos 

document.addEventListener('DOMContentLoaded', function () {
    var helpButton = document.getElementById('helpButton');
    var helpPopup = document.getElementById('helpPopup');
    var closePopup = document.querySelector('.close');
    var helpList = document.getElementById('helpList');
    var chatArea = document.getElementById('chatArea'); // Asegúrate de tener un elemento con id 'chatArea' en tu HTML

    helpButton.addEventListener('click', function () {
        helpPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', function () {
        helpPopup.style.display = 'none';
    });

    helpList.addEventListener('click', function (e) {
        var target = e.target;
        if (target.tagName === 'BUTTON') {
            // Agregar el texto del botón al área de chat
            var userMessage = document.createElement('p');
            userMessage.textContent = target.textContent;
            userMessage.classList.add('Usr')
            chatArea.appendChild(userMessage);

            // Agregar un mensaje del sistema
            var sysMessage = document.createElement('p');
            sysMessage.textContent = "Select the best option for you";
            sysMessage.classList.add('Sys');
            chatArea.appendChild(sysMessage);

            // Definir las nuevas opciones basadas en la selección
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

            // Limpiar las opciones anteriores y agregar las nuevas al DOM
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
    input.classList.add('input-text', 'list-group-item', 'list-group-item-action','HelpMesage');
    chatArea.appendChild(input);
}

function createSendButton() {
    var sendButton = document.createElement('button');
    sendButton.textContent = 'Send';
    sendButton.classList.add('HelpButton', 'help-button' ,'list-group-item', 'list-group-item-action', 'chatsub');
    sendButton.addEventListener('click', function () {
        location.reload(); // Recarga
    });
    chatArea.appendChild(sendButton);
}
window.addEventListener('load', function() {
    // Obtener la lista de IDs de productos desde el localStorage
    const ids = JSON.parse(localStorage.getItem('ids'));
    
    // Verificar si la lista de IDs es válida y tiene elementos
    if (Array.isArray(ids) && ids.length > 0) {
        // Obtener el elemento <span> que muestra el número de productos en el carrito
        const itemCountSpan = document.getElementById('cartItemCount');
        
        // Actualizar el contenido del elemento <span> con el número de elementos en la lista de IDs
        itemCountSpan.textContent = ids.length;
    } else {
        console.error('Invalid or empty IDs list in localStorage');
    }
});  