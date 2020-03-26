const faders = document.querySelectorAll('.fade-in');

const fadeOptions = {
    threshold: 0.25,
    rootMargin: "-25px"
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
}, fadeOptions);


faders.forEach(fader => {
    fadeOnScroll.observe(fader);
})