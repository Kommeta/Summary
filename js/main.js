"use strict"

//прокрутка при клике на меню

const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if(menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

//закрытие меню, при наведении на раздел
         if(iconMenu.classList.contains('active')) {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');         //добавление класса
            menuBody.classList.remove('active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

//меню бургер
const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu_body');
if(iconMenu){                          //проверяем есть ли такой класс
   const menuBody = document.querySelector('.menu_body');
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');         //добавление класса
      menuBody.classList.toggle('active');
   });
}

//Слайдер-------------------------

new Swiper('.swiper');