const faders = document.querySelectorAll('.fade-in');

const options = {
    threshold: 0.25,
    rootMargin: "-30px"
};

const fadeOnScroll = new IntersectionObserver( function(entries, fadeOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove("appear");
        } else {
            entry.target.classList.add("appear");
            //fadeOnScroll.unobserve(entry.target);
        }
    })
}, options);


faders.forEach(fader => {
    fadeOnScroll.observe(fader);
})