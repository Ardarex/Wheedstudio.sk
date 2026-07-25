// ===============================
// WHEEDSTUDIO SCRIPT
// ===============================



// ===============================
// CUSTOM CURSOR
// ===============================

const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove", (e)=>{

    if(cursor){

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    }

});



const hoverElements = document.querySelectorAll(
"a, .service-card, .logos div, .artist-grid div"
);


hoverElements.forEach(item=>{


    item.addEventListener("mouseenter",()=>{

        if(cursor){

            cursor.style.transform="scale(2)";

        }

    });



    item.addEventListener("mouseleave",()=>{

        if(cursor){

            cursor.style.transform="scale(1)";

        }

    });


});






// ===============================
// SCROLL REVEAL ANIMÁCIE
// ===============================


const revealElements = document.querySelectorAll(
"section, .service-card, .artist-grid div, .about-box"
);



revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(60px)";

    el.style.transition=
    "all 0.9s cubic-bezier(.17,.67,.32,1.3)";

});



const revealObserver = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.style.opacity="1";

        entry.target.style.transform="translateY(0)";


    }


});


},{
    threshold:0.15
});



revealElements.forEach(el=>{

    revealObserver.observe(el);

});









// ===============================
// ANIMOVANÉ ČÍSLA
// ===============================


const counters = document.querySelectorAll(".counter");


let counterStarted = false;



function formatNumber(number){

    return new Intl.NumberFormat("sk-SK")
    .format(Math.floor(number));

}



const counterObserver = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting && !counterStarted){


counterStarted=true;



counters.forEach(counter=>{


    const target =
    Number(counter.dataset.number);



    let current = 0;



    const duration = 2200;

    const increment =
    target / (duration / 16);




    function updateCounter(){


        current += increment;



        if(current < target){


            counter.innerHTML =
            formatNumber(current) + "+";


            requestAnimationFrame(updateCounter);


        }else{


            counter.innerHTML =
            formatNumber(target) + "+";


        }


    }



    updateCounter();



});



}



});


},{
threshold:0.5
});



if(counters.length){

counterObserver.observe(counters[0]);

}









// ===============================
// HERO PARALLAX
// ===============================


const heroCircle =
document.querySelector(".hero-circle");



window.addEventListener("mousemove",(e)=>{


if(heroCircle){


const x =
(e.clientX / window.innerWidth - 0.5) * 50;


const y =
(e.clientY / window.innerHeight - 0.5) * 50;



heroCircle.style.transform =
`
translate(${x}px,${y}px)
rotate(360deg)
`;

}


});









// ===============================
// MOBILNÉ MENU
// ===============================


const menu =
document.querySelector(".menu");


const nav =
document.querySelector("nav");



if(menu){


menu.addEventListener("click",()=>{


nav.classList.toggle("active");


});


}






// zatvorenie menu po kliknutí


document.querySelectorAll("nav a")
.forEach(link=>{


link.addEventListener("click",()=>{


if(nav){

nav.classList.remove("active");

}


});


});









// ===============================
// BUTTON RIPPLE EFEKT
// ===============================


const buttons =
document.querySelectorAll(".button");



buttons.forEach(button=>{


button.addEventListener("click",(e)=>{


const ripple =
document.createElement("span");


ripple.className="ripple";


const rect =
button.getBoundingClientRect();



ripple.style.left =
(e.clientX - rect.left) + "px";


ripple.style.top =
(e.clientY - rect.top) + "px";



button.appendChild(ripple);



setTimeout(()=>{

ripple.remove();

},600);



});


});









// ===============================
// SMOOTH SCROLL
// ===============================


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener("click",function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});









// ===============================
// HEADER EFEKT PRI SCROLLOVANÍ
// ===============================


const header =
document.querySelector("header");



window.addEventListener("scroll",()=>{


if(window.scrollY > 50){


header.style.background =
"rgba(5,5,5,.85)";


}else{


header.style.background =
"rgba(5,5,5,.4)";


}



});









// ===============================
// LOADING ANIMÁCIA
// ===============================


window.addEventListener("load",()=>{


document.body.classList.add("loaded");


});