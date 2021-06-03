gsap.registerPlugin(ScrollTrigger);

let tween = gsap.to("body", {
    toggleClass: "overflow",
    scrollTrigger: {
        trigger: ".screen2",
        start: "top",
        // end: "top",
        // scrub: true,
        // toggleClass: "overflow",  // das setzt den overflow auf das screen2 element
        toggleClass: {
            targets: "body",
            className: "overflow"
        },
        markers: true,
        pin: true // prevents overscrolling !!!!
    }
});

document.querySelector(".mybutton").addEventListener("click", function () {
    document.body.classList.remove("overflow");
    tween.scrollTrigger.disable(); // damit der trigger nur einziges mal ausgelöst wird kille ich die tween animation hier!
})