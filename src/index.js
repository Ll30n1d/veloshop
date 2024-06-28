//react zone 

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//react zone

//dropdown menu

const dropdownBtn = document.querySelector('.dropdownBtn1')
const dropdownBtnAnim = document.querySelector('.nav__bar__item-btn')
const dropdownMenu1 = document.querySelector('.nav__bar__item-dropdown-catalog')
const headerImg = document.querySelector('.header__content__img')
const nav = document.querySelector('.nav')
const navTxt1 = document.querySelector('.nav__bar__item-link1')
const navTxt2 = document.querySelector('.nav__bar__item-link2')


dropdownBtn.addEventListener('click', () => {
    dropdownMenu1.classList.add('dropdown-block');
    dropdownBtnAnim.classList.add('nav__bar__item-btn-transform');
    navTxt1.classList.add('nav__bar__item-link1-active')
})

headerImg.addEventListener('click', () => {
    dropdownMenu1.classList.remove('dropdown-block');
    dropdownBtnAnim.classList.remove('nav__bar__item-btn-transform');
    navTxt1.classList.remove('nav__bar__item-link1-active')
})   

nav.addEventListener('mouseover', () => {
    dropdownMenu1.classList.remove('dropdown-block');
    dropdownBtnAnim.classList.remove('nav__bar__item-btn-transform');
    navTxt1.classList.remove('nav__bar__item-link1-active')
})

const dropdownBtn2 = document.querySelector('.dropdownBtn2')
const dropdownBtnAnim2 = document.querySelector('.nav__bar__item-btn2')
const dropdownMenu2 = document.querySelector('.nav__bar__item-dropdown-4customers')

dropdownBtn2.addEventListener('click', () => {
    dropdownMenu2.classList.add('dropdown-block2');
    dropdownBtnAnim2.classList.add('nav__bar__item-btn-transform');
    navTxt2.classList.add('nav__bar__item-link2-active')
})

headerImg.addEventListener('click', () => {
    dropdownMenu2.classList.remove('dropdown-block2');
    dropdownBtnAnim2.classList.remove('nav__bar__item-btn-transform');
    navTxt2.classList.remove('nav__bar__item-link2-active')
})

nav.addEventListener('mouseover', () => {
    dropdownMenu2.classList.remove('dropdown-block2');
    dropdownBtnAnim.classList.remove('nav__bar__item-btn-transform');
    navTxt2.classList.remove('nav__bar__item-link2-active')
})

// section 2 action

const sec2switchImgBtn1 = document.querySelector('.section-2__h1-1')
const sec2switchImgBtn2 = document.querySelector('.section-2__h1-2img')
const sec2switchImg1 = document.querySelector('.section-2__imgBlackout')
const sec2switchImg2 = document.querySelector('.section-2__imgSceneride')

sec2switchImgBtn2.addEventListener('click', () => {
    sec2switchImg1.classList.add('imgBlackout-hide');
    sec2switchImg2.classList.add('imgSceneride-show');
    
})

sec2switchImgBtn1.addEventListener('click', () => {
    sec2switchImg1.classList.remove('imgBlackout-hide');
    sec2switchImg2.classList.remove('imgSceneride-show');
    
})

const infoBtntoOpen1 = document.querySelector('.section-2__df__infoBtn-1')
const infoBtntoOpen2 = document.querySelector('.section-2__df__infoBtn-2')
const infoBtntoOpen3 = document.querySelector('.section-2__df__infoBtn-3')
const infoBtntoOpen4 = document.querySelector('.section-2__df__infoBtn-4')
const infoBtntoOpen5 = document.querySelector('.section-2__df__infoBtn-5')
const infoBtntoOpen6 = document.querySelector('.section-2__df__infoBtn-6')



//video section code

const playBtn = document.querySelector('.bottomSide__videoBlock__playBtnImg')
const videoBlock = document.querySelector('.videoBlockToHide')
const video = document.querySelector('.section-3__video')

playBtn.addEventListener('click', () => {
    video.classList.add('section-3__video-block')
    videoBlock.classList.add('videoBlockToHide-hide')
})





