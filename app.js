const translate = document.querySelectorAll(".translate");

//Make title disappear as we scroll the page
const big_title = document.querySelector(".big_title");
const header = document.querySelector("header");

//Get height of header
let header_height = header.offsetHeight;

console.log(header_height);

window.addEventListener('scroll', () => {
    //Get number of pixels we scroll upward and place in variable "scroll"
    let scroll = window.pageYOffset;
    // console.log(scroll);

    //For each element, get the value of attribute "data-speed"
    translate.forEach(element => {
        let speed = element.dataset.speed;
        // console.log(speed);
        //Move each elemnet based on the result of mutiplying scroll value by speed value
        element.style.transform = `translateY(${scroll * speed}px)`;
    })
    //Set the opacity value of the title to the result of the mathematic formula value between 0 and 1 based on the scroll value
    big_title.style.opacity = - scroll / (header_height / 2) + 1
})