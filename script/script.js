// //=====================================================================================================Модальное окна заказа звонка======================================================================================
// let openModalWindowGetCall=document.getElementById('contacts__link-get-call'); 
// Ссылка для открытия модального окна заказа звонка
let modalWindowGetCall=document.getElementById('modal-window-get-call'); 
// Модальное окно заказа звонка
// let closeModalWindowGetCall=document.getElementById('close-modal-window-get-call'); 
// Кнопка для закрытия модального окна
let MobileNumberModalWindowGetCall=document.getElementById('modal-window__input-get-call'); 
// поле для ввода мобильного телефона
let BtnGetCall=document.getElementById('modal-window__get-call'); 
// кнопка для заявки на получение звонка
// let phoneNumbersForCalling=[]; 
// номера телефонов для обзвона 
let ModalWindowSuccces=document.getElementById('modal-window-get-receiving-request'); 
// окно успешного получения телефонного номера
let BtnSuccess=document.getElementById('modal-window-get-receiving-request__link'); 
// кнопка подтверждения успешной заявки
// // Функция открытия модального окна
// openModalWindowGetCall.addEventListener('click',function(){
//     event.preventDefault();
//     modalWindowGetCall.style.display='block';
// })
// // Функция закрытия модального окна
// closeModalWindowGetCall.addEventListener('click',function(){
//     modalWindowGetCall.style.display='none';
//     MobileNumberModalWindowGetCall.value='';
// })
// // Функция отправки номера в массив при прохождении валидации
BtnGetCall.addEventListener('click',function(){
    event.preventDefault();
    if((MobileNumberModalWindowGetCall.value[0]==8 && MobileNumberModalWindowGetCall.value.length<12 && MobileNumberModalWindowGetCall.value.length>10) ||(MobileNumberModalWindowGetCall.value[0]==7 && MobileNumberModalWindowGetCall.value.length<12 && MobileNumberModalWindowGetCall.value.length>10)||(MobileNumberModalWindowGetCall.value[0]=='+' && (MobileNumberModalWindowGetCall.value)[1]=='7' && MobileNumberModalWindowGetCall.value.length<13 && MobileNumberModalWindowGetCall.value.length>11)){
        phoneNumbersForCalling.push(MobileNumberModalWindowGetCall.value);
        console.log(phoneNumbersForCalling);
        ModalWindowSuccces.style.display='block';
    }else{
        alert('Проверь корректность введеных данных');
    }
})
// // Кнопка для скрытия модальных окон и очищения инпута 
BtnSuccess.addEventListener('click',function(){
    event.preventDefault();
    modalWindowGetCall.style.display='none';
    ModalWindowSuccces.style.display='none';
    MobileNumberModalWindowGetCall.value='';
})
// //====================================================================================================Модальное окно получения консультации=============================================================================
// // Ссылка для открытия модального окна получения консультации
// let openModalWindowGetConsult=document.getElementById('get-consult');
// // Модальное окно получения консультации
// let modalWindowGetConsult=document.getElementById('modal-window-get-consult');
// // Кнопка для закрытия модального окна получения консультации
// let closeModalWindowGetConsult=document.getElementById('close-modal-window-get-consult');
// // поле для ввода мобильного телефона
// let MobileNumberModalWindowGetConsult=document.getElementById('modal-window__input-get-consult');
// // кнопка для заявки получения консультации
// let BtnGetConsult=document.getElementById('modal-window__get-consult');
// // номера телефонов для предоставления консультаций
// let phoneNumbersForConsult=[];
// // Функция открытия модального окна получения консультации
// openModalWindowGetConsult.addEventListener('click',function(){
//     event.preventDefault();
//     modalWindowGetConsult.style.display='block';
// })
// // Функция закрытия модального окна получения консультации
// closeModalWindowGetConsult.addEventListener('click',function(){
//     modalWindowGetConsult.style.display='none';
//     MobileNumberModalWindowGetConsult.value='';
// })
// // Функция отправки номера в массив при прохождении валидации получения консультации
// BtnGetConsult.addEventListener('click',function(){
//     event.preventDefault();
//     if((MobileNumberModalWindowGetConsult.value[0]==8 && MobileNumberModalWindowGetConsult.value.length<12 && MobileNumberModalWindowGetConsult.value.length>10) ||(MobileNumberModalWindowGetConsult.value[0]==7 && MobileNumberModalWindowGetConsult.value.length<12 && MobileNumberModalWindowGetConsult.value.length>10)||(MobileNumberModalWindowGetConsult.value[0]=='+' && (MobileNumberModalWindowGetConsult.value)[1]=='7' && MobileNumberModalWindowGetConsult.value.length<13 && MobileNumberModalWindowGetConsult.value.length>11)){
//         phoneNumbersForConsult.push(MobileNumberModalWindowGetConsult.value);
//         console.log(phoneNumbersForConsult);
//         ModalWindowSuccces.style.display='block';
//     }else{
//         alert('Проверь корректность введеных данных');
//     }
// })
// // Кнопка для скрытия модальных окон и очищения инпута получения консультации
// BtnSuccess.addEventListener('click',function(){
//     event.preventDefault();
//     modalWindowGetConsult.style.display='none';
//     ModalWindowSuccces.style.display='none';
//     MobileNumberModalWindowGetConsult.value='';
// })
//====================================================================================================Модальное окно получения банкротства=============================================================================
let ModalWindowBankruptcy=document.getElementById('modal-window-get-bankruptcy'); // Модальное окна получения банкротства
let OpenModalWindowBankruptcy=document.getElementById('get-bankruptcy'); // Ссылка для открытия модального окна получения банкротства
let BtnCloseModalWindowBankruptcy=document.getElementById('close-modal-window-get-bankruptcy'); // Кнопка для закрытия модального окна получения банкротства
let MobileNumberGetBankruptcy=document.getElementById('modal-window__input-get-bankruptcy'); // поле для ввода мобильного телефона
let BtnGetBankruptcy=document.getElementById('modal-window__get-bankruptcy'); // кнопка для заявки получения бакротства
let PhoneNumbersForBankruptcy=[]; // номера телефонов для предоставления банкротства
let btnCloseModalWindows=document.getElementById(''); // Кнопка для скрытия модальных окон и очищения инпута получения банкротства
// Функция открытия модального окна получения банкротства
OpenModalWindowBankruptcy.addEventListener('click',function(){
    event.preventDefault();
    ModalWindowBankruptcy.style.display='block';
})
// Функция закрытия модального окна получения банкротства
BtnCloseModalWindowBankruptcy.addEventListener('click',function(){
    ModalWindowBankruptcy.style.display='none';
    MobileNumberGetBankruptcy.value='';
})

// Функция отправки номера в массив при прохождении валидации получения банкротства
BtnGetBankruptcy.addEventListener('click',function(){
    event.preventDefault();
    if((MobileNumberGetBankruptcy.value[0]==8 && MobileNumberGetBankruptcy.value.length<12 && MobileNumberGetBankruptcy.value.length>10) ||(MobileNumberGetBankruptcy.value[0]==7 && MobileNumberGetBankruptcy.value.length<12 && MobileNumberGetBankruptcy.value.length>10)||(MobileNumberGetBankruptcy.value[0]=='+' && (MobileNumberGetBankruptcy.value)[1]=='7' && MobileNumberGetBankruptcy.value.length<13 && MobileNumberGetBankruptcy.value.length>11)){
        PhoneNumbersForBankruptcy.push(MobileNumberGetBankruptcy.value);
        console.log(PhoneNumbersForBankruptcy);
        ModalWindowSuccces.style.display='block';
    }else{
        alert('Проверь корректность введеных данных');
    }
})