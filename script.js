document.addEventListener('DOMContentLoaded', function() {
    var helpButton = document.getElementById('helpButton');
    var helpPopup = document.getElementById('helpPopup');
    var closePopup = document.querySelector('.close');
    var submitHelp = document.getElementById('submitHelp');
    var helpList = document.getElementById('helpList');
  
    helpButton.addEventListener('click', function() {
      helpPopup.style.display = 'block';
    });
  
    closePopup.addEventListener('click', function() {
      helpPopup.style.display = 'none';
    });
  
    submitHelp.addEventListener('click', function() {
      var selectedOption = helpList.querySelector('.active').textContent;
      console.log("Opción seleccionada: " + selectedOption);
      helpPopup.style.display = 'none';
    });
  
    helpList.addEventListener('click', function(e) {
      var target = e.target;
      if (target.tagName === 'BUTTON') {
        var helpButtons = document.querySelectorAll('.help-button');
        for (var i = 0; i < helpButtons.length; i++) {
          helpButtons[i].style.display = 'none';
        }
        target.style.display = 'block';
        target.classList.add('active');
        // Aquí se agregar el código para mostrar otras preguntas en consecuencia
      }
    });
  });
  