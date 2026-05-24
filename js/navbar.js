window.addEventListener("scroll", function(){

    const navbar =
    document.querySelector(".navbar");

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});

const sections =
document.querySelectorAll(
"section"
);

const navLinks =
document.querySelectorAll(
".nav-menu a"
);

window.addEventListener(
"scroll",
()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop;

        const sectionHeight =
        section.clientHeight;

        if(scrollY >=
            sectionTop - 200){

            current =
            section.getAttribute(
                "id"
            );
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove(
            "active"
        );

        if(link.getAttribute(
            "href"
        ) === `#${current}`){

            link.classList.add(
                "active"
            );
        }

    });

});

const hamburger =
document.querySelector(".hamburger");

const navMenu =
document.querySelector(".nav-menu");

hamburger.addEventListener(
"click",
()=>{

    navMenu.classList.toggle(
        "active"
    );

});

document.addEventListener(
"click",
(event)=>{

    const isClickInsideMenu =
    navMenu.contains(event.target);

    const isClickHamburger =
    hamburger.contains(event.target);

    if(
        !isClickInsideMenu &&
        !isClickHamburger
    ){
        navMenu.classList.remove(
            "active"
        );
    }

});