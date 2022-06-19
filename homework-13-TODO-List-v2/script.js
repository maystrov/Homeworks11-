
const mainEl = document.querySelector('#main-block');
const inputEl = document.querySelector('#input-id');
const btnEl = document.querySelector('#button-id');
const listEl = document.querySelector('#list-id');
const clearBtnEl = document.querySelector('#clear-button-id');



const addNewItem = () => {
    if (!inputEl.value.trim()) return ;
    const newListItem = document.createElement('li');
    newListItem.innerText = '  ' + inputEl.value + '  ';
    listEl.append(newListItem);
    inputEl.value = '';
    inputEl.focus();
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete Item'
    newListItem.append(deleteBtn);
    deleteBtn.classList.add('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        newListItem.remove();
    });

    const checkboxEl = document.createElement('INPUT');
    checkboxEl.setAttribute('type', 'checkbox');
    newListItem.prepend(checkboxEl);

    checkboxEl.addEventListener('click', e => {
        if (e.target.checked) newListItem.classList.add('line-through');
        else newListItem.classList.remove('line-through');
    } )
}

btnEl.addEventListener('click', addNewItem);

clearBtnEl.onclick = () => {
    listEl.querySelectorAll('*').forEach(e => e.remove());
}

inputEl.addEventListener('keydown', e => {
    if (e.code == 'Enter') addNewItem();
}) 

const deleteItem = e => {
    console.log(e.target);
}

const deleteBtns = document.querySelectorAll('.delete_btn');
Array.from(deleteBtns).forEach(el => {
    el.addEventListener('click', deleteItem());
})






                                           

