/*// Función para obtener parámetros de la URL
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split("&");
  
    pairs.forEach(pair => {
      const [key, value] = pair.split("=");
      params[key] = decodeURIComponent(value);
    });
  
    return params;
  }
  
  // Obtener los parámetros de la URL
  const queryParams = getQueryParams();
  
  // Obtener el nombre del usuario
  const userName = queryParams.name || "Usuario";
  
  // Mostrar el nombre del usuario en el <h1>
  const userNameElement = document.getElementById("user-name");
  userNameElement.textContent = `Bienvenido, ${userName}!`;
  */

  // Función para obtener parámetros de la URL


  //-----------------INTENTO 2
  /*

function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split("&");
  
    pairs.forEach(pair => {
      const [key, value] = pair.split("=");
      params[key] = decodeURIComponent(value);
    });
  
    return params;
  }
  
  // Obtener los parámetros de la URL
  const queryParams = getQueryParams();
  
  // Obtener el nombre del usuario
  const userName = queryParams.name;
  
  // Mostrar el nombre del usuario en el <h1> solo si existe
  if (userName) {
    const userNameElement = document.getElementById("user-name");
    userNameElement.textContent = `${userName}`;
  }

  // Almacenar el nombre de usuario en el almacenamiento local
if (userName) {
    localStorage.setItem('userName', userName);
  }
  
*/

function getQueryParams() {
  const params = {};
  const queryString = window.location.search.substring(1);
  const pairs = queryString.split("&");

  pairs.forEach(pair => {
      const [key, value] = pair.split("=");
      params[key] = decodeURIComponent(value);
  });

  return params;
}

// Obtener los parámetros de la URL
const queryParams = getQueryParams();

// Obtener el nombre del usuario de la URL
let userName = queryParams.name;

// Si no se encuentra en la URL, buscar en el almacenamiento local
if (!userName) {
  userName = localStorage.getItem('userName');
}

// Mostrar el nombre del usuario en el <h1> solo si existe
if (userName) {
  const userNameElement = document.getElementById("user-name");
  userNameElement.textContent = `${userName}`;
}

// Almacenar el nombre de usuario en el almacenamiento local si se obtuvo de la URL
if (queryParams.name) {
  localStorage.setItem('userName', queryParams.name);
}

       
   