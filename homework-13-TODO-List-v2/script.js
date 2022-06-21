const mainEl = document.querySelector("#main-block");
const inputEl = document.querySelector("#input-id");
const btnEl = document.querySelector("#button-id");
const listEl = document.querySelector("#list-id");
const clearBtnEl = document.querySelector("#clear-button-id");
const checkAllBtn = document.querySelector('#check-all-btn');

const addNewItem = () => {
  if (!inputEl.value.trim()) return;
  const newListItem = document.createElement("li");
  const listItemText = document.createElement('p')
  listItemText.innerText = inputEl.value;
  newListItem.append(listItemText);
  listEl.append(newListItem);
  inputEl.value = "";
  inputEl.focus();

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete Item";
  newListItem.append(deleteBtn);
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    newListItem.remove();
  });

  const checkboxEl = document.createElement("INPUT");
  checkboxEl.setAttribute("type", "checkbox");
  newListItem.prepend(checkboxEl);

  checkboxEl.addEventListener("click", (e) => {
    if (e.target.checked) listItemText.classList.add("line-through");
    else listItemText.classList.remove("line-through");
  });
};

btnEl.addEventListener("click", addNewItem);

clearBtnEl.onclick = () => {
  listEl.querySelectorAll("*").forEach((e) => e.remove());
};

const allListItems = Array.from(listEl.children);
const checkAllFunct = () => {
    allListItems.forEach(e => {
        console.log(e.children[0]);
    })
}

const checkAllFunc = () => {
    Array.from(listEl.children).forEach(e => {
        e.children[1].classList.add('line-through');
        e.children[0].checked = true;
    })
}

checkAllBtn.addEventListener('click', checkAllFunc);

inputEl.addEventListener("keydown", (e) => {
  if (e.code == "Enter") addNewItem();
});

const deleteItem = (e) => {
  console.log(e.target);
};

const deleteBtns = document.querySelectorAll("delete_btn");
Array.from(deleteBtns).forEach((el) => {
  el.addEventListener("click", deleteItem());
});