
const btnEl = document.getElementById('btnEl');
const helloEl = document.getElementById('hello-span');
const inputStrEl = document.getElementById('input-name');
const mainEl = document.getElementById('main-block');

btnEl.onclick = () => {
    mainEl.classList.add('hidden');
    helloEl.textContent = `Hello, ${inputStrEl.value}`;
}