const checkbox = document.querySelector('#check');
const mainContent = document.querySelector('.mainContent');
const css = document.querySelector('.css');

checkbox.addEventListener('click', () => {
    if(checkbox.checked) {
        mainContent.style.display = "none";
        css.style.display = "none";
    } else {
        mainContent.style.display = "block";
        css.style.display = "block";
    }
})

const links = document.getElementsByTagName('a');

for(const link of links) {
    link.addEventListener('click', () =>{
        checkbox.checked = false;
        mainContent.style.display = "block";
        css.style.display = "block";
    })
}


const btnFlexbox = document.querySelector('#btn-flexbox');
const btnGrid = document.querySelector('#btn-grid');
const btnAnimation = document.querySelector('#btn-animation');
const btnCountdown = document.querySelector('#btn-countdown');
const btnQuiz = document.querySelector('#btn-quiz');
const iframe = document.querySelector('#iframe');

btnFlexbox.addEventListener('click', ()=>{
    iframe.setAttribute("src", "https://codepen.io/LianLianC/embed/VwbaGNm?defaultTab=result");
})

btnGrid.addEventListener('click', () => {
    iframe.setAttribute("src", "https://codepen.io/LianLianC/embed/KKmzwWB?defaultTab=result");
})

btnAnimation.addEventListener('click', () => {
    iframe.setAttribute("src", "https://codepen.io/LianLianC/embed/VwbPmEa?default-tab=result");
})

btnCountdown.addEventListener('click', () => {
    iframe.setAttribute("src", "https://codepen.io/LianLianC/embed/BaRvWrp?default-tab=result");
})

btnQuiz.addEventListener('click', () => {
    iframe.setAttribute("src", "https://codepen.io/LianLianC/embed/bGWzbYv?default-tab=result");
})
