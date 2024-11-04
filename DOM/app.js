
window.onload = function () {
  main();
}

function main() {
  const btn = document.getElementById('click-btn');
  let times = 0;
  btn.addEventListener('click', function (e) {
    console.log(e);
    alert('clicked ' + times++);
  });
  
}