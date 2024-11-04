
window.onload = function () {
  main();
}

function main() {
  const btn = document.getElementById('click-btn');
  let times = 0;
  btn.onclick = function () {
    alert('clicked ' + times++);
  }
}