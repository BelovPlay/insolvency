// Модальное окно получения консультации в главной секции
// Открытие закрытие модального окна
let ModalWindowGetConsult=document.getElementById('get-consult'); 
let closeModal=document.getElementById('close-modal-window');
let modalwindow=document.getElementById('modal-window-get-consult');
ModalWindowGetConsult.addEventListener('click',function func(){
    event.preventDefault();
    modalwindow.style.display='block';
})
closeModal.addEventListener('click',function(){
    modalwindow.style.display='none';
})
// Валидация формы 
let numbers=[];
let phoneNumber=document.getElementById('modal-window__input');
phoneNumber.addEventListener('blur',function func(){
    if(((phoneNumber.value[0]==='7')||(phoneNumber.value[0]==='8')||(phoneNumber.value[0]==='+' && phoneNumber.value[1]==='7'))&&(phoneNumber.value>=11)){
        arr.push(phoneNumber.value);
    }
    console.log(numbers);
})