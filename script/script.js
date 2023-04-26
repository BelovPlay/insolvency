//Модальное окна заказа звонка
let openModalWindowGetCall=document.getElementById('contacts__link-get-call'); // Ссылка для открытия модального окна заказа звонка
let modalWindowGetCall=document.getElementById('modal-window-get-call'); // Модальное окно заказа звонка
let closeModalWindowGetCall=document.getElementById('close-modal-window-get-call'); // Кнопка для закрытия модального окна
let MobileNumberModalWindowGetCall=document.getElementById('modal-window__input-get-call'); // поле для ввода мобильного телефона
let BtnGetCall=document.getElementById('modal-window__get-call'); // кнопка для заявки
let phoneNumbersForCalling=[]; // номера телефонов для обзвона 
let ModalWindowSuccces=document.getElementById('modal-window-get-receiving-request'); // окно успешного получения телефонного номера
let BtnSuccess=document.getElementById('modal-window-get-receiving-request__link'); // кнопка подтверждения успешной заявки
// Функция открытия модального окна
openModalWindowGetCall.addEventListener('click',function(){
    event.preventDefault();
    modalWindowGetCall.style.display='block';
})
// Функция закрытия модального окна
closeModalWindowGetCall.addEventListener('click',function(){
    modalWindowGetCall.style.display='none';
})
// Функция отправки номера в массив при прохождении валидации
BtnGetCall.addEventListener('click',function(){
    event.preventDefault();
    if(MobileNumberModalWindowGetCall.value[0]==8 && MobileNumberModalWindowGetCall.value.length<12){
        phoneNumbersForCalling.push(MobileNumberModalWindowGetCall.value);
        console.log(phoneNumbersForCalling);
        ModalWindowSuccces.style.display='block';
    }
    // else if(){

    // }else{
    //     alert('Проверь корректность введеных данных');
    // }
})
BtnSuccess.addEventListener('click',function(){
    event.preventDefault();
    modalWindowGetCall.style.display='none';
    ModalWindowSuccces.style.display='none';
    MobileNumberModalWindowGetCall.value='';
})