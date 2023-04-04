const myButton = document.querySelector('#myButton');
const textField = document.querySelector('#textField');
const duplicateField = document.querySelector('#duplicateField');

textField.addEventListener('input',()=>{
    duplicateField.textContent=textField.value;
});


myButton.addEventListener('click',()=>{
    console.log(textField.value);
});
document.querySelector('#myButton').onclick = function(e) {
    document.querySelector('#textField').value = "";
    duplicateField.textContent=textField.value;
}
    







