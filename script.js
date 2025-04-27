"use strict";


const btnClose = document.querySelector('.icon-close');
const btnMenu = document.querySelector('.icon-menu');

const overlay = document.querySelector('.overlay');
const nav = document.querySelector('.nav-mobile');

btnClose.addEventListener('click', function(){
    overlay.classList.add('hidden');
    nav.classList.add('hidden');
    btnClose.classList.add('hidden');
})

btnMenu.addEventListener('click', function(){
    overlay.classList.remove('hidden');
    nav.classList.remove('hidden');
    btnClose.classList.remove('hidden');
})

