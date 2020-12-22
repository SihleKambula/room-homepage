const mainDisplay = document.querySelector(".main-section-display");
const btnOne = document.querySelector(".btn-one");
const btnTwo = document.querySelector(".btn-two");

//div content
const contentOne = document.querySelector(".content-one");
const contentTwo = document.querySelector(".content-two");
const contentThree = document.querySelector(".content-three");

// main background images
let backgroundImages = [
  { image: "../images/desktop-image-hero-1.jpg", divClassName: contentOne },
  { image: "../images/desktop-image-hero-2.jpg", divClassName: contentTwo },
  { image: "../images/desktop-image-hero-3.jpg", divClassName: contentThree },
];

function run() {
  //change background and div content
  let index = 0;
  btnTwo.addEventListener("click", () => {
    backgroundImages[index].divClassName.classList.toggle("hide");
    index = index < backgroundImages.length - 1 ? ++index : 0;
    mainDisplay.style.background = `url(${backgroundImages[index].image}) no-repeat center/cover`;
    backgroundImages[index].divClassName.classList.toggle("hide");
    backgroundImages[index].divClassName.classList.toggle("show");
  });

  btnOne.addEventListener("click", () => {
    backgroundImages[index].divClassName.classList.toggle("hide");
    index = index == 0 ? 2 : --index;
    mainDisplay.style.background = `url(${backgroundImages[index].image}) no-repeat center/cover`;
    backgroundImages[index].divClassName.classList.toggle("hide");
    backgroundImages[index].divClassName.classList.toggle("show");
  });
}

run();
