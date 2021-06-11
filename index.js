const checkbox = document.querySelector('#check');
const mainContent = document.querySelector('.mainContent');

function checkMe() {
    if(checkbox.checked == true) {
        mainContent.style.display = "none";
    } else {
        mainContent.style.display = "block";
    }
}