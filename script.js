let counter = 0;

const VALUE = document.querySelector(".value");
const BTNS = document.querySelectorAll(".btn");

BTNS.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const STYLES = e.currentTarget.classList;
        const action = STYLES.contains("decrease") ? "decrease" :
                       STYLES.contains("increase") ? "increase" :
                       STYLES.contains("reset") ? "reset" : "";

        switch (action) {
            case "decrease":
                counter--;
                break;
            case "increase":
                counter++;
                break;
            case "reset":
                counter = 0;
                break;
}

        VALUE.textContent = counter;
    })
})