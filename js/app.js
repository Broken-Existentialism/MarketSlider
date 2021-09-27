"use strict"
let lastScroll = 0;
const defaultOffset = 200;
const headerBody = document.querySelector('.header-body');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => headerBody.classList.contains('hide');
window.addEventListener('scroll', ()=>{

    if(scrollPosition() > lastScroll){
        if(scrollPosition() > 60 && !containHide()){
            headerBody.classList.toggle('hide');
            
        }
    } 
    else if(scrollPosition() < lastScroll){
        if(scrollPosition() < 60 && containHide()){
            headerBody.classList.toggle('hide');
            
        }
    }

    lastScroll = scrollPosition();
});

$(document).ready(function () {
    $('.slider').slick({
        adaptiveHeight: true,
        autoplay:true,
        autoplaySpeed: 3000
    });
    $('.slider-menu').slick({
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 8,
        slidesToScroll: 8
    });
    $('.slider-restaurant').slick({
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 5,
        slidesToScroll: 5
    });
    
});

let dataRestaurant = {
    mcDonalds:3.9,
    vasabi: 4
}

const itemsSliderRestaurant = document.querySelectorAll('.slider-restaurant-item');
itemsSliderRestaurant.forEach((elem) =>{
    if( elem.querySelector('.rating__value')){
        elem.querySelector('.rating__value').textContent = dataRestaurant[elem.id];
    }
});
