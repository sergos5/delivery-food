'use strict'

const modal = document.querySelector('.cart-modal__overlay');
const cartBtn = document.querySelector('#cart-button');
const closeBtn = document.querySelector('.cart-modal__header--close')

const openModal = () => {
     modal.classList.add('open') 
}

const closeModal = () => {
    modal.classList.remove('open') 
}

cartBtn.addEventListener('click', ()=> {
    openModal()
})

closeBtn.addEventListener('click', ()=> {
    closeModal()
})


