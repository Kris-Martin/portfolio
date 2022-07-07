// Temporary JavaScript function for slide show
// TODO: Refactor or replace with CSS
const slides = document.querySelectorAll("projects");

const slideOne = document.getElementsByClassName("projects__card--one");
const slideTwo = document.getElementsByClassName("projects__card--two");
const slideThree = document.getElementsByClassName("projects__card--three");
const slideFour = document.getElementsByClassName("projects__card--four");
const slideFive = document.getElementsByClassName("projects__card--five");
const slideSix = document.getElementsByClassName("projects__card--six");

const radioOne = document.getElementById("one");
const radioTwo = document.getElementById("two");
const radioThree = document.getElementById("three");
const radioFour = document.getElementById("four");
const radioFive = document.getElementById("five");
const radioSix = document.getElementById("six");

radioOne.addEventListener("click", () => {
    slideOne[0].style.zIndex = 6;
    slideTwo[0].style.zIndex = 5;
    slideThree[0].style.zIndex = 4;
    slideFour[0].style.zIndex = 3;
    slideFive[0].style.zIndex = 2;
    slideSix[0].style.zIndex = 1;
});

radioTwo.addEventListener("click", () => {
    slideOne[0].style.zIndex = 1;
    slideTwo[0].style.zIndex = 6;
    slideThree[0].style.zIndex = 5;
    slideFour[0].style.zIndex = 4;
    slideFive[0].style.zIndex = 3;
    slideSix[0].style.zIndex = 2;
});

radioThree.addEventListener("click", () => {
    slideOne[0].style.zIndex = 2;
    slideTwo[0].style.zIndex = 1;
    slideThree[0].style.zIndex = 6;
    slideFour[0].style.zIndex = 5;
    slideFive[0].style.zIndex = 4;
    slideSix[0].style.zIndex = 3;
});

radioFour.addEventListener("click", () => {
    slideOne[0].style.zIndex = 3;
    slideTwo[0].style.zIndex = 2;
    slideThree[0].style.zIndex = 1;
    slideFour[0].style.zIndex = 6;
    slideFive[0].style.zIndex = 5;
    slideSix[0].style.zIndex = 4;
});

radioFive.addEventListener("click", () => {
    slideOne[0].style.zIndex = 4;
    slideTwo[0].style.zIndex = 3;
    slideThree[0].style.zIndex = 2;
    slideFour[0].style.zIndex = 1;
    slideFive[0].style.zIndex = 6;
    slideSix[0].style.zIndex = 5;
});

radioSix.addEventListener("click", () => {
    slideOne[0].style.zIndex = 5;
    slideTwo[0].style.zIndex = 4;
    slideThree[0].style.zIndex = 3;
    slideFour[0].style.zIndex = 2;
    slideFive[0].style.zIndex = 1;
    slideSix[0].style.zIndex = 6;
});
