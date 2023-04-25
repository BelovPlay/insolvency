// Открытие закытие модального окна для кнопки заказать звонок
let getCall=document.getElementById('contacts__link-get-call');
let ModalWindowGetCall=document.getElementById('modal-window-get-call');
let closeModalGetCall=document.getElementById('close-modal-window-get-call');
getCall.addEventListener('click',function func(){ 
    event.preventDefault();
    ModalWindowGetCall.style.display='block';
})
closeModalGetCall.addEventListener('click',function(){
    ModalWindowGetCall.style.display='none';
})
// Валидация формы заказа звонка
let getCalls=[];
let phoneNumberGetCall=document.getElementById('modal-window__input-get-call');
let getNumberGetCall=document.getElementById('modal-window__get-call');
getNumberGetCall.addEventListener('click',function func(){
    event.preventDefault();
    if(((phoneNumberGetCall.value[0]==='7')||(phoneNumberGetCall.value[0]==='8')||(phoneNumberGetCall.value[0]==='+' && phoneNumberGetCall.value[1]==='7'))&&(phoneNumberGetCall.value.length<13)){
        getCalls.push(phoneNumberGetCall.value);
        console.log(getCalls);
    }else{
        alert('Проверьте правильность введеных данных');
        phoneNumberGetCall.value='';
    }
})
// Модальное окно получения консультации в главной секции
// Открытие закрытие модального окна получения консультации
let GetConsult=document.getElementById('get-consult'); 
let ModalWindowGetConsult=document.getElementById('modal-window-get-consult');
let closeModalGetConsult=document.getElementById('close-modal-window');
GetConsult.addEventListener('click',function func(){
    event.preventDefault();
    ModalWindowGetConsult.style.display='block';
})
closeModalGetConsult.addEventListener('click',function(){
    ModalWindowGetConsult.style.display='none';
})
// Валидация формы получения консультации
let numbers=[];
let phoneNumber=document.getElementById('modal-window__input');
let getNumber=document.getElementById('modal-window__get-consult');
getNumber.addEventListener('click',function func(){
    event.preventDefault();
    if(((phoneNumber.value[0]==='7')||(phoneNumber.value[0]==='8')||(phoneNumber.value[0]==='+' && phoneNumber.value[1]==='7'))&&(phoneNumber.value.length<13)){
        numbers.push(phoneNumber.value);
        console.log(numbers);
    }else{
        alert('Проверьте правильность введеных данных');
    }
})