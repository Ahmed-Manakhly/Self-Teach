//change nav bar

window.addEventListener('scroll', () => {
    document.querySelector("nav").classList.toggle('window-scroll', window.scrollY > 8);
    document.querySelector(".logo").classList.toggle('logo-scroll', window.scrollY > 8);
});



//to open the answers

let ferq = document.querySelectorAll(".f__icon");
ferq.forEach(e => {
    e.onclick = () => {
        e.parentElement.classList.toggle("open");
        if (e.firstChild.className === "uil uil-plus") {
            e.firstChild.className = "uil uil-minus";
        } else {
            e.firstChild.className = "uil uil-plus"
        };
    }
});

//appearabce of the menu
let mymenu = document.querySelector(".nav__menu");
let myclose = document.querySelector("#close__menu__btn");
let myopen = document.querySelector("#open__menu__btn");

myopen.addEventListener('click', function() {
    mymenu.style.display = "flex";
    myopen.style.display = "none";
    myclose.style.display = "inline-block";
});

myclose.addEventListener('click', function() {
    mymenu.style.display = "none";
    myclose.style.display = "none";
    myopen.style.display = "inline-block";
});

//up button
let up = document.createElement("button");
let up_text = document.createTextNode("To Top");
up.appendChild(up_text);
document.body.appendChild(up);
up.style.cssText = " border-radius: 4px ; position : fixed ; bottom : 20px ; right : 20px ; display : none; cursor : pointer;";
up.className = "btn btn-primary"
window.onscroll = function() {
    if (window.scrollY >= 250) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
};
up.onclick = function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};