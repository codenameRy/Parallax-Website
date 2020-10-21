const translate = document.querySelectorAll(".translate");

//Make title disappear as we scroll the page
const big_title = document.querySelector(".big_title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
//Get height of header
let header_height = header.offsetHeight;
let section_height = section.offsetHeight;


// console.log(section_height);

window.addEventListener('scroll', () => {
    //Get number of pixels we scroll upward and place in variable "scroll"
    let scroll = window.pageYOffset;
    // console.log(scroll);
    //As we scroll page, get the top position of the section relative to the viewport
    let sectionY = section.getBoundingClientRect();
    // console.log(sectionY.top);


    //For each element, get the value of attribute "data-speed"
    translate.forEach(element => {
        let speed = element.dataset.speed;
        // console.log(speed);
        //Move each elemnet based on the result of mutiplying scroll value by speed value
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    //For reach content and imgContainer section apply opacity
    opacity.forEach(element => {
        //Set the opacity value of each of them to the result of this mathematic formula
        element.style.opacity = scroll / (sectionY.top + section_height);
    })
    //Set the opacity value of the title to the result of the mathematic formula value between 0 and 1 based on the scroll value
    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    //Set th height of the shador to the result of the mathematic formula
    shadow.style.height = `${scroll * 0.5 + 300}px`;
    //Set the value of translateY to the result of the mathematic formula giving value between 0 and -50 based on scroll value
    content.style.transform = `translate(${scroll / (section_height + sectionY.top) * 50 - 50})`;
    //Set the value of translateY to the result of the mathematic formula change the sign of numbers
    image_container.style.transform = `translate(${scroll / (section_height + sectionY.top) * 50 + 50})`;

    border.style.width = `${scroll / (sectionY.top  + section_height) * 30}`;
})