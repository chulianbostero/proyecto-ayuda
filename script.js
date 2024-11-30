// script.js
const reloj = document.getElementById('reloj');

setInterval(() => {
  const fecha = new Date();
  const horas = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();

  const horaActual = `${horas}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  reloj.textContent = horaActual;
}, 1000);