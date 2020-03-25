const faders = document.querySelectorAll('.fade-in');

const fadeOptions = {
    threshold: 0.5
};

const fadeOnScroll = new IntersectionObserver( function(entries, fadeOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            fadeOnScroll.unobserve(entry.target);
        }
    })
}, fadeOptions);


faders.forEach(fader => {
    fadeOnScroll.observe(fader);
})