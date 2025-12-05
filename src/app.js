function suma(a, b) {
  return a + b;
}

function agregarItem(texto) {
  const lista = document.getElementById('lista');
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}

console.log("App lista");

module.exports = { suma, agregarItem };
