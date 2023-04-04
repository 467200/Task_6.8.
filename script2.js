const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');

})

const alertCommand = document.querySelector('#alertCommand');
alertCommand.addEventListener('click', () => {
    alert('Служит для отображения информации пользователям');
})

const promptCommand = document.querySelector('#promptCommand');
promptCommand.addEventListener('click', () => {
    alert('Служит для ввода информации пользователями');
})



