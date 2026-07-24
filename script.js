
// ===============================
// MOBILE NAVBAR AUTO CLOSE
// ===============================

const navLinks = document.querySelectorAll(".nav-link");

const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if(navbarCollapse.classList.contains("show")){

            new bootstrap.Collapse(navbarCollapse).hide();

        }

    });

});


// ===============================
// CARD SCROLL ANIMATION
// ===============================

const cards = document.querySelectorAll(".card");


function showCards(){

    cards.forEach(card => {

        let cardPosition = card.getBoundingClientRect().top;

        let screenPosition = window.innerHeight - 100;


        if(cardPosition < screenPosition){

            card.classList.add("show");

        }

    });

}


window.addEventListener("scroll", showCards);

showCards();


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topButton = document.getElementById("topBtn");


window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});


topButton.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===============================
// ACTIVE NAVIGATION HIGHLIGHT
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


let sectionTop = section.offsetTop - 100;


if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}


});


navLinks.forEach(link=>{


link.classList.remove("active");


if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}


});


});


// ===============================
// CONTACT FORM VALIDATION
// ===============================

const form = document.querySelector("form");


form.addEventListener("submit", function(e){


e.preventDefault();


let name = document.querySelector(
"input[type='text']").value;


let email = document.querySelector(
"input[type='email']").value;


let message = document.querySelector(
"textarea").value;



if(name==="" || email==="" || message===""){


alert("Please fill all fields");


}

else{


alert(
"Thank you " + name +
"! Your message has been sent."
);


form.reset();


}


});


// ===============================
// GALLERY IMAGE PREVIEW
// ===============================


const galleryImages =
document.querySelectorAll(".gallery-img");


galleryImages.forEach(image=>{


image.addEventListener("click",()=>{


let overlay =
document.createElement("div");


overlay.style.position="fixed";

overlay.style.top="0";

overlay.style.left="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background=
"rgba(0,0,0,0.8)";

overlay.style.display=
"flex";

overlay.style.alignItems=
"center";

overlay.style.justifyContent=
"center";

overlay.style.zIndex="2000";


let bigImage =
document.createElement("img");


bigImage.src=image.src;


bigImage.style.maxWidth="90%";

bigImage.style.maxHeight="90%";

bigImage.style.borderRadius="15px";


overlay.appendChild(bigImage);


document.body.appendChild(overlay);



overlay.onclick=()=>{

overlay.remove();

};


});


});


// ===============================
// CURRENT YEAR IN FOOTER
// ===============================

let year = new Date().getFullYear();


document.querySelector("footer p:last-child")
.innerHTML =
"© " + year +
" Shivamogga Tourism | Designed with Bootstrap 5";