
window.onload = function () {
  main();
}

function main() {
  const btn = document.getElementById('click-btn');
  btn.onclick = function () {
    alert('clicked');
  }
}