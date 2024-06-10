document.getElementById('clearCacheCookiesBtn').addEventListener('click', function() {
  // Borrar todas las cookies
  document.cookie.split(";").forEach(function(c) {
      // Obtener el nombre de la cookie
      var cookieName = c.trim().split("=")[0];
      // Establecer la cookie con una fecha de expiración pasada para borrarla
      document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
  });

  // Borrar cookies de subdominios
  var domainParts = window.location.hostname.split('.');
  while (domainParts.length > 1) {
      domainParts.shift();
      var domain = '.' + domainParts.join('.');
      document.cookie.split(";").forEach(function(c) {
          var cookieName = c.trim().split("=")[0];
          document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + domain;
      });
  }

  // Forzar recarga para intentar limpiar caché
  window.location.reload(true);
});
