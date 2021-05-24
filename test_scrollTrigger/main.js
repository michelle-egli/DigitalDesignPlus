gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.create({
    trigger: ".box",
    start: "top 80%",
    end: "top 50%",
    markers: true,
    toggleClass: "box-red"
})

/*
start: 6%,
trigger: ".panel",
toggleClass: {targets: "nav", className: "nav-active"},
*/ 

/*
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 1, 
    }
});

tl.to(".box", {x: 500, duration: 5})
    .to(".box", {y: 400, duration: 3})
    .to(".box", {x: 0, duration: 6});

/*
gsap.to(".box", {x: 500, duration: 2});
gsap.to(".box", {y: 200, duration: 3, delay: 2});
gsap.to(".box", {x: 0, duration: 2, delay: 5});
*/

/*
gsap.to(".rect", {
    x: 800,
    duration: 4,
    scrollTrigger: {
        trigger: ".rect2",
        start: "top 80%", //top center bottom, pixel nr, %, ...//
        end: "top 30%",
        scrub: true, //or a nr for smoother animation! -> i.e. 4
        toggleActions: "restart     none      none          none",
        //what it does: onEnter     onLeave   onEnterBack   onLeaveBack
        //toggleActions: restart, pause, reverse, none, resume, reset, complete, play
        pin: ".rect",
        pinSpacing: true,
            markers: {
            startColor: "white",
            endColor: "yellow",
            fontSize: "2rem", 
         }
         //toggleClass: "red"
    }
})
*/

