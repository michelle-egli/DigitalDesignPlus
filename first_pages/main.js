gsap.registerPlugin(ScrollTrigger);


/*-----------------------------------------------animation screen 2: big fat fuck-------------------------------------------------------------*/
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".screen2",
        markers: true,
        start: "top 42%",
        end: "top 35%",
        scrub: 1,  
    }
})

tl.to(".fat_fuck", ".ha", ".big", ".opel", {x: -500, duration: 2});


