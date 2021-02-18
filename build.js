const elements = [...document.querySelectorAll('div')];
const btn = document.querySelector('span');

btn.addEventListener('click', () => {
    if (elements[0].haveClass = ('one')) {
        elements[0].classList.toggle('buildone')
    }
    if (elements[1].haveClass = ('two')) {
        elements[1].classList.toggle('buildtwo')
    }
    if (elements[2].haveClass = ('three')) {
        elements[2].classList.toggle('buildthree')
    }
    if (elements[3].haveClass = ('four')) {
        elements[3].classList.toggle('buildfour')
    }
    if (elements[4].haveClass = ('five')) {
        elements[4].classList.toggle('buildfive')
    }
    if (elements[5].haveClass = ('six')) {
        elements[5].classList.toggle('buildsix')
    }
})