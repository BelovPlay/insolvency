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
        phoneNumberGetCall.value='';
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
    phoneNumberGetCall.value='';
})
closeModalGetConsult.addEventListener('click',function(){
    ModalWindowGetConsult.style.display='none';
    phoneNumberGetCall.value='';
})
// Валидация формы получения консультации
let numbers=[];
let phoneNumber=document.getElementById('modal-window__input');
let getNumber=document.getElementById('modal-window__get-consult');
getNumber.addEventListener('click',function func(){
    event.preventDefault();
    if(((phoneNumber.value[0]==='7')||(phoneNumber.value[0]==='8')||(phoneNumber.value[0]==='+' && phoneNumber.value[1]==='7'))&&(phoneNumber.value.length<13)){
        numbers.push(phoneNumber.value);
        ModalWindowRecievingRequest.style.display='block';
        bgModalWindowRecieving.style.display='block';
        ModalWindowGetConsult.style.display='none';
        console.log(numbers);
        phoneNumber.value='';
    }else{
        alert('Проверьте правильность введеных данных');
    }
})
// Модальное окно получения заявки от клиента
// Открытие закрытие модального окна получения заявки от клиента
let BtnCloseModalWindow=document.getElementById('modal-window-get-receiving-request__link');
let ModalWindowRecievingRequest=document.getElementById('modal-window-get-receiving-request__content');
let bgModalWindowRecieving=document.getElementById('modal-window-get-receiving-request');
let closeModalConfirmRecieving=document.getElementById('close-modal-window-recieving-modal');
BtnCloseModalWindow.addEventListener('click',function func(){
    event.preventDefault();
    ModalWindowRecievingRequest.style.display='none';
    bgModalWindowRecieving.style.display='none';
})
closeModalConfirmRecieving.addEventListener('click',function(){
    ModalWindowRecievingRequest.style.display='none';
    bgModalWindowRecieving.style.display='none';
})