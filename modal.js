const button = document.querySelector("button");
const poupup = document.querySelector(".poupup-wraper");

const openClick = function() {
    poupup.classList.add("d-block");
};

const eventModal = function(event) {
    const clickOfElement = event.target.classList[0];
    const classListNameArray = ["poupup-close", "poupup-link", "poupup-wraper"];

    const isClassList = classListNameArray.includes(clickOfElement);

    if (isClassList) {
        poupup.classList.remove("d-block");
    }
};

button.addEventListener("click", openClick);
poupup.addEventListener("click", eventModal)