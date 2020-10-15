const translate = document.querySelectorAll(".translate");

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
})