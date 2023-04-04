
const linkChange = document.querySelector('#linkChange');

linkChange.addEventListener('click',(event) => {
   event.preventDefault();
   const newText = prompt ('Введите свой текст для ссылки');
   linkChange.textContent = newText;
})









