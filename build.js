const elements = [...document.querySelectorAll('div')];
const btn = document.querySelector('span');

btn.addEventListener('click', () => {
    elements[0].classList.toggle('buildone');
    elements[1].classList.toggle('buildtwo');
    elements[2].classList.toggle('buildthree');
    elements[3].classList.toggle('buildfour');
    elements[4].classList.toggle('buildfive');
    elements[5].classList.toggle('buildsix');
})