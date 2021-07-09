const checkbox = document.querySelector('#check');
const mainContent = document.querySelector('.mainContent');

checkbox.addEventListener('click', () => {
    if(checkbox.checked) {
        mainContent.style.display = "none";
    } else {
        mainContent.style.display = "block";
    }
})


const btnFlexbox = document.querySelector('#btn-flexbox');
const btnGrid = document.querySelector('#btn-grid');
const iframe = document.querySelector('#iframe');

btnFlexbox.addEventListener('click', ()=>{
    iframe.setAttribute("src", "https://codepen.io/LianLianC/embed/VwbaGNm?defaultTab=result");
})

btnGrid.addEventListener('click', () => {
    iframe.setAttribute("src", "https://codepen.io/LianLianC/embed/KKmzwWB?defaultTab=result");
})

const cssBtn = document.querySelector('.css_btn');
const list = document.querySelector('.css_list');

cssBtn.addEventListener('click', () => {
    list.classList.toggle('newlist');
})