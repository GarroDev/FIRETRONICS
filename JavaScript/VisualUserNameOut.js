const userName = localStorage.getItem('userName');
        
// Mostrar el nombre de usuario si existe
if (userName) {
  const userNameElement = document.getElementById("user-name");
  userNameElement.textContent = `${userName}`;}