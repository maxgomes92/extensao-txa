const onChange = () => {
  document.getElementById("active-label")
    .innerHTML = "Impossível desativar o Lalau"
}

window.onload = function () {
  document.getElementById("active-toggle")
    .addEventListener('change', onChange)
}