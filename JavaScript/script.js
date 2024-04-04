// Cambia de pestaña cada 5 segundos
var tabs = ['tab1', 'tab2', 'tab3', 'tab4']; // Agregar más identificadores de pestañas si es necesario
var currentIndex = 0;

setInterval(function() {
    $('#' + tabs[currentIndex]).removeClass('active');
    $('#' + tabs[currentIndex]).tab('show');
    currentIndex = (currentIndex + 1) % tabs.length;
}, 5000); // Cambia cada 5 segundos 


