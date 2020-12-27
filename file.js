
const menuBtn = document.querySelector('#menu_icon');

//events

menuBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('navOpen');
    console.log('hello brother!');
});