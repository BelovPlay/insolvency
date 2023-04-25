let buttonGetConsult=document.getElementById('get-consult');
let modalwindow=document.getElementById('modal-window-get-consult__content');
buttonGetConsult.addEventListener('click',function func(){
    event.preventDefault();
    modalwindow.style.display='block';
})