
window.onload = function () {
  main();
}

function main() {
  const btn = document.getElementById('click-btn');
  const title = document.getElementById('title');
  
  btn.addEventListener('click', function (e) {
    title.innerText = 'Changed DOM Element';
  });  
}