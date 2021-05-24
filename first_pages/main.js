gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".rect",
        //markers: true,
        start: "top 80%",
        end: "none",
        scrub: 2, 
    }
});

tl.to(".rect", {x: -300, duration: 3});


const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".typo2",
        //markers: true,
        start: "top 25%",
        end: "none",
        scrub: 2, 
    }
});

tl1.to(".typo2", {x: -2000, duration: 2});


const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".circle,.circle2",
        //markers: true,
        start: "top     0%",
        end: "none",
        scrub: 2, 
    }
});

tl2.to(".circle,.circle2", {y: 600, duration: 5});





const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "svg",
        /*markers: {
            startColor: "orange",
            endColor: "yellow",
            fontSize: "2rem", 
         },*/
        start: "top 40%",
        end: "center",
        scrub: 1, 
    }
});

tl3.to("svg", {y: -1000, duration: 1});


const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".div6",
        /*markers: {
            startColor: "orange",
            endColor: "yellow",
            fontSize: "2rem", 
         },*/
        start: "top 82%",
        end: "center 20%",
        scrub: 1, 
    }
});

tl4.to(".div6", {y: -1800, duration: 1});

/*
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".typo",
        //markers: true,
        start: "top 40%",
        end: "none",
        scrub: 0, 
    }
});

tl.to(".typo", {y: 200, duration: 3})
    .to(".typo", {y: 200, duration: 8})
*/



/*
gsap.to(".rect", {
    x: -800,
    y: -150,
    scrollTrigger: {
        trigger: ".rect",
        start: "top 40%", 
        end: "top 50%",
        scrub: 2, 
        markers: true,
        }
    })*/
/*
gsap.to(".typo2", {
    x: 800,
    duration: 4,
    scrollTrigger: {
        trigger: ".typo2",
        start: "center 80%", 
        end: "center 30%",
        scrub: true, 
        //toggleActions: "restart     none      none          none",
        //markers: true,
        }
    }) */ 
    /*

    /*
ScrollTrigger.create({
    trigger: ".typo",
    start: "top 40%", 
    end: "top 10%",
    scrub: 4, 
    toggleClass: "typo-Big",
    markers: true,
});

/*
gsap.to(".typo", {
    x: 800,
    duration: 4,
    scrollTrigger: {
        trigger: ".typo",
        start: "top 80%", 
        end: "top 30%",
        scrub: 4, 
        toggleClass: "typoBig",
        pin: ".div3",
        pinSpacing: true,
        markers: {
            startColor: "white",
            endColor: "yellow",
            fontSize: "2rem", 
         }
})

/*
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".typo",
        markers: true,
        start: "top 40%",
        end: "top 80%",
        scrub: 2, 
        toggleClass: "typoBig",
    }
})

tl.to(".typo", {x: 300, duration: 5})
    .to(".typo", {y: 530, duration: 5});

    
/*
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

