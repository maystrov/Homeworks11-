const mainEl = document.querySelector('#main-block');
const inputEl = document.querySelector('#input-id');
const btnEl = document.querySelector('#button-id');
const listEl = document.querySelector('#list-id');
const clearBtnEl = document.querySelector('#clear-button-id');

btnEl.onclick = () => {
    let newListItem = document.createElement('li');
    newListItem.innerText = inputEl.value;
    listEl.append(newListItem);
    inputEl.value = '';
}

clearBtnEl.onclick = () => {
    listEl.querySelectorAll('*').forEach(e => e.remove());
}

