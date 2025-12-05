function agregarItem(texto) {
  const lista = document.getElementById('lista');
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}

// Evento del botón
document.getElementById('btnAgregar').addEventListener('click', () => {
  const input = document.getElementById('inputTexto');
  const texto = input.value.trim();

  if (texto === "") {
    alert("Escribe algo para agregar");
    return;
  }

  agregarItem(texto);
  input.value = "";
});

console.log("App lista");

