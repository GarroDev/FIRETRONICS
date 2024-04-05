// Cambia de pestaña cada 5 segundos
var tabs = ['tab1', 'tab2', 'tab3', 'tab4']; // Agregar más identificadores de pestañas si es necesario
var currentIndex = 0;

setInterval(function() {
    $('#' + tabs[currentIndex]).removeClass('active');
    $('#' + tabs[currentIndex]).tab('show');
    currentIndex = (currentIndex + 1) % tabs.length;
}, 5000); // Cambia cada 5 segundos 

document.addEventListener('DOMContentLoaded', function() {
    var helpButton = document.getElementById('helpButton');
    var helpPopup = document.getElementById('helpPopup');
    var closePopup = document.querySelector('.close');
    var helpList = document.getElementById('helpList');
    var chatArea = document.getElementById('chatArea'); // Asegúrate de tener un elemento con id 'chatArea' en tu HTML
  
    helpButton.addEventListener('click', function() {
      helpPopup.style.display = 'block';
    });
  
    closePopup.addEventListener('click', function() {
      helpPopup.style.display = 'none';
    });
  
    helpList.addEventListener('click', function(e) {
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
        if (target.value === 'problema' || target.value === 'consulta' || target.value === 'sugerencia') {
          newOptions = [
            { text: "Sub-opción 1", value: "subopcion1" },
            { text: "Sub-opción 2", value: "subopcion2" }
          ];
        } else if (target.value === 'subopcion1' || target.value === 'subopcion2') {
          newOptions = [
            { text: "Sub-opción 3", value: "subopcion3" },
            { text: "Sub-opción 4", value: "subopcion4" }
          ];
        }
        
        // Limpiar las opciones anteriores y agregar las nuevas al DOM
        helpList.innerHTML = '';
        newOptions.forEach(function(option) {
          var newButton = document.createElement('button');
          newButton.textContent = option.text;
          newButton.value = option.value;
          newButton.classList.add('help-button', 'list-group-item', 'list-group-item-action', 'chatsub');
          helpList.appendChild(newButton);
        });
      }
    });
  });
  
