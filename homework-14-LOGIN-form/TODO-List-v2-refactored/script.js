(() => {
    const addItemBtnEl = document.getElementById('add-item-btn');
    const todoInputEl = document.getElementById('todo-item-text');
    const todoListEl = document.getElementById('todo-list');

    const actionsBlockEl = document.getElementById('actions-block');
    const checkAllBtnEl = document.getElementById('action-check-all');
    const deleteAllBtnEl = document.getElementById('action-delete-all');

    todoInputEl.focus();

    const onAddTodoItem = () => {
        const value = todoInputEl.value;
        if (!value.trim()) return;

        if (todoListEl.childElementCount === 0) {
            actionsBlockEl.classList.remove('hidden');
        }

        const liEl = document.createElement('li');
        const spanEl = document.createElement('span');
        const checkEl = document.createElement('input');
        const btnEl = document.createElement('button');

        spanEl.innerText = value;
        spanEl.classList.add('span-item')

        checkEl.type = 'checkbox';
        checkEl.classList.add('marker');

        btnEl.innerText = 'Delete';
        btnEl.classList.add('delete-btn');

        liEl.append(checkEl, spanEl, btnEl);
        todoListEl.append(liEl);

        liEl.addEventListener('change', onItemCheck);
        liEl.addEventListener('click', onItemClick);

        todoInputEl.value = ''
        todoInputEl.focus();
    }

    const onItemCheck = e => {
        if (e.target.classList.contains('marker'))  {
            e.target.classList.toggle('checked');
            e.target.nextElementSibling.classList.toggle('checked');
        }
    }

    const onItemClick = e => {
        if (e.target.classList.contains('delete-btn'))
            e.target.parentElement.remove();
            if (todoListEl.childElementCount === 0) {
                actionsBlockEl.classList.add('hidden');
            }
        else if (e.target.tagName == 'SPAN') {
            console.log(e.target);
            console.log(e.target.previousElementSibling);
            e.target.classList.toggle('checked');
            if (e.target.previousElementSibling.checked){
                e.target.previousElementSibling.checked = false;
            }
            else e.target.previousElementSibling.checked = true;
        }
    }

    const onCheckAll = () => {
        Array.from(todoListEl.children).forEach(e => {
            liArr = e.children;
            liArr[1].classList.toggle('checked');
            e.children[0].checked ? e.children[0].checked = false : e.children[0].checked = true;
            
        })
    }

    const onDeleteAll = () => {
        Array.from(todoListEl.children).forEach(e => e.remove());
        if (todoListEl.childElementCount === 0) {
            actionsBlockEl.classList.add('hidden');
        }
    }

    deleteAllBtnEl.addEventListener('click', onDeleteAll);
    checkAllBtnEl.addEventListener('click', onCheckAll);
    addItemBtnEl.addEventListener('click', onAddTodoItem);

    todoInputEl.addEventListener('keydown', event => {
        if (event.code == 'Enter') onAddTodoItem();
    });

})();