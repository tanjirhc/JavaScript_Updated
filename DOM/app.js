
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

    title.classList.toggle('title1');
    title.classList.toggle('title2');
    
    // if (title.classList.contains('title1')) {
    //   title.classList.remove('title1');
    //   title.classList.add('title2');
    // } else {
    //   title.classList.remove('title2');
    //   title.classList.add('title1');
    // }
  });  
}