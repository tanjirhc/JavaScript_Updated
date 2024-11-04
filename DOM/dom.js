
window.onload = function () {
  main();
};

function main() {
  const input = document.getElementById('input-name');
  const addBtn = document.getElementById('add-btn');
  const nameList = document.getElementById('name-list');

  addBtn.addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = 'Dummy Text';
    nameList.appendChild(li);
    
  });
}