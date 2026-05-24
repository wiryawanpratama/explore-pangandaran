const backToTop =
document.getElementById(
"backToTop"
);

window.addEventListener(
"scroll",
()=>{

    if(window.scrollY > 400){
        backToTop.style.display =
        "block";
    }

    else{
        backToTop.style.display =
        "none";
    }

});

backToTop.addEventListener(
"click",
()=>{

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const reveals =
document.querySelectorAll(
".reveal"
);

function revealSection(){

    reveals.forEach(section=>{

        const windowHeight =
        window.innerHeight;

        const revealTop =
        section.getBoundingClientRect().top;

        const revealPoint = 150;

        if(revealTop <
            windowHeight - revealPoint){

            section.classList.add(
                "active"
            );
        }

    });

}

window.addEventListener(
"scroll",
revealSection
);

revealSection();

function sendEmail() {
  const subject =
    document.getElementById("emailSubject").value;

  const message =
    document.getElementById("emailMessage").value;

  const email =
    "wiryawanpratama360@gmail.com";

  window.location.href =
    `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}