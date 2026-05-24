const testimonials =
document.querySelectorAll(
".testimonial-card"
);

let current = 0;

function showTestimonial(){

    testimonials.forEach(card=>{
        card.classList.remove(
            "active"
        );
    });

    testimonials[current]
    .classList.add(
        "active"
    );

    current++;

    if(current >= testimonials.length){
        current = 0;
    }
}

setInterval(
    showTestimonial,
    4000
);