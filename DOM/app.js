
window.onload = function () {
  main();
}

function main() {
  const btn = document.getElementById('click-btn');
  const title = document.getElementById('title');

  let currentTitle = title.textContent;
  let nextTitle = 'Changed DOM Element';
  
  btn.addEventListener('click', function (e) {
    title.innerText = nextTitle;
    const temp = currentTitle;
    currentTitle = nextTitle;
    nextTitle = temp;
    
  });  
}