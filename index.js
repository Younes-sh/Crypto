// ---------   btn menu burger ---------
var menuBurger = document.querySelector('.menuBurger')
var btnMenuBurger = document.querySelector('.btnMenuBurger')
btnMenuBurger.addEventListener('click' , burgerHandler)
function burgerHandler () {
    btnMenuBurger.classList.toggle('open')
    menuBurger.classList.toggle('hidden')
}

var eventColor = document.querySelector('.eventColor')
eventColor.addEventListener('scroll',scrollBtnBackground);
function scrollBtnBackground () {
    eventColor.classList.add('bgColor')
}