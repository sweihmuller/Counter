let counter = 0;

const VALUE = document.querySelector(".value");
const BTNS = document.querySelectorAll(".btn");

BTNS.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const STYLES = e.currentTarget.classList;
        if(STYLES.contains("decrease")) {
            counter--; 
        } else if (STYLES.contains("increase")) {
            counter++;
        } else if (STYLES.contains("reset")) {
            counter = 0;
        }

        VALUE.textContent = counter;
    })
})