const addBtn = document.querySelector('#btn');
const ulList = document.querySelector('#list');

addBtn.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = 'Mango';
    ulList.appendChild(li);
})