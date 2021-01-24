const btn = document.querySelector('span');
const elementOne = document.querySelector('.one');
const elementTwo = document.querySelector('.two');
const elementThree = document.querySelector('.three');
const elementFour = document.querySelector('.four');
const elementFive = document.querySelector('.five');
const elementSix = document.querySelector('.six');

function build() {
    elementOne.classList.toggle('buildone');
    elementTwo.classList.toggle('buildtwo');
    elementThree.classList.toggle('buildthree');
    elementFour.classList.toggle('buildfour');
    elementFive.classList.toggle('buildfive');
    elementSix.classList.toggle('buildsix');
}

btn.addEventListener('click', build);