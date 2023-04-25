let buttonGetConsult=document.getElementById('get-consult');
let modalwindow=document.getElementById('modal-window-get-consult__content');
let bgmodalwindow=document.getElementById('modal-window-get-consult');
let overlay=document.getElementById('overlay');
buttonGetConsult.addEventListener('click',function func(){
    event.preventDefault();
    modalwindow.style.display='block';
    overlay.style.display='block';
})