window.addEventListener('load', function () {
    // Obtener la variable total del localStorage
    const total = parseFloat(localStorage.getItem('total'));

    // Verificar si la variable total es un número válido
    if (!isNaN(total)) {
        // Obtener el campo de entrada total
        const totalInput = document.getElementById('total');

        // Asignar el valor numérico de total al campo de entrada
        totalInput.value = parseFloat(total.toFixed(2)) + 10; // Redondear a dos decimales y asignar como valor

        // Si necesitas mostrar el símbolo de dólar, puedes agregarlo al inicio del valor
        // totalInput.value = '$' + total.toFixed(2);
    } else {
        console.error('Invalid total value in localStorage');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bill');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que se envíe el formulario

        // Obtener los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const zip = document.getElementById('zip').value;
        const country = document.getElementById('country').value;
        const total = document.getElementById('total').value;
        const payment = document.getElementById('payment').value;
        const installments = document.getElementById('installments').value;

        // Construir la factura con los valores recogidos
        const facturaHTML = `
<div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
  <h2 style="text-align: center; color: #333;">Bill - Firetronics®</h2>
  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px;"><strong>Name:</strong></td>
      <td style="padding: 8px;">${name}</td>
    </tr>
    <tr>
      <td style="padding: 8px;"><strong>Address:</strong></td>
      <td style="padding: 8px;">${address}</td>
    </tr>
    <tr>
      <td style="padding: 8px;"><strong>City:</strong></td>
      <td style="padding: 8px;">${city}</td>
    </tr>
    <tr>
      <td style="padding: 8px;"><strong>Card Number:</strong></td>
      <td style="padding: 8px;">${zip}</td>
    </tr>
    <tr>
      <td style="padding: 8px;"><strong>Country:</strong></td>
      <td style="padding: 8px;">${country}</td>
    </tr>
    <tr>
      <td style="padding: 8px;"><strong>Total:</strong></td>
      <td style="padding: 8px;">${total}</td>
    </tr>
    <tr>
      <td style="padding: 8px;"><strong>Payment Method:</strong></td>
      <td style="padding: 8px;">${payment}</td>
    </tr>
    <tr>
      <td style="padding: 8px;"><strong>Installments:</strong></td>
      <td style="padding: 8px;">${installments}</td>
    </tr>
  </table>
</div>
`;

        // Mostrar la factura en una nueva ventana
        const facturaWindow = window.open('', '_blank');
        facturaWindow.document.body.innerHTML = facturaHTML;
    });
});