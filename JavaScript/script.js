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
            sysMessage.textContent = "El sistema está procesando tu solicitud...";
            sysMessage.classList.add('Sys');
            chatArea.appendChild(sysMessage);

            // Definir las nuevas opciones basadas en la selección
            var newOptions = [];
            var newOptions2 = [];
            if (target.value === 'problema' || target.value === 'consulta' || target.value === 'sugerencia') {
                newOptions = [
                    { text: "Tengo un problema con un pedido", value: "subopcion1" },
                    { text: "Tengo un problema con un pago", value: "subopcion2" }
                ];
            } else if (target.value === 'subopcion1') {
                newOptions = [
                    { text: "Deseo rastrear su pedido", value: "subopcion" },
                    { text: "Deseo cancelar un pedido", value: "subopcion" }
                ];
            } else if (target.value === 'subopcion2') {
                newOptions = [
                    { text: "Quiero pagar pero no se procesa", value: "subopcion" },
                    { text: "Quiero cancelar un pago", value: "subopcion" }
                ];
            } else if (target.value === 'consulta') {
                newOptions = [
                    { text: "Quiero buscar un producto que no encuentro", value: "subopcion" },
                    { text: "Estoy buscando x producto", value: "subopcion" }
                ];
            } else if (target.value === 'sugerencia') {
                newOptions = [
                    { text: "Quiero hacer una sugerencia sobre los pagos", value: "subopcion3" },
                    { text: "Quiero quejarme con alguien", value: "subopcion" }
                ];
            } else if (target.value === 'subopcion3') {
                newOptions = [
                    { text: "Los pagos son muy lentos", value: "subopcion" },
                    { text: "Los pagos son faciles de hacer", value: "subopcion" },
                    { text: "los pagos se me complpicaron un poco", value: "subopcion" }
                ];
            } else if (target.value === 'subopcion') {
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
    input.setAttribute('placeholder', 'Escribe tu mensaje aquí');
    input.classList.add('input-text', 'list-group-item', 'list-group-item-action','HelpMesage');
    chatArea.appendChild(input);
}

function createSendButton() {
    var sendButton = document.createElement('button');
    sendButton.textContent = 'Enviar';
    sendButton.classList.add('HelpButton', 'help-button' ,'list-group-item', 'list-group-item-action', 'chatsub');
    sendButton.addEventListener('click', function () {
        location.reload(); // Recarga
    });
    chatArea.appendChild(sendButton);
}