gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none",duration:1});


/*-----------------------------------------------animation screen 1: penis-------------------------------------------------------------*/
const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".rect",
        //markers: true,
        start: "top 70%",
        end: "top 35%",
        scrub: 1,  
    }
})
tl1.to(".rect", {x: -600, duration: 2});

ScrollTrigger.create({
    animation:tl1,
    trigger: ".screen1",
    start: "top top",
    end:"+=1200",
    scrub: 2,
    pin: true,
    anticipatePin: 1,
});

/*-----------------------------------------------animation screen 2: big fat fuck-------------------------------------------------------------*/
const tl2 = gsap.timeline();

tl2.to(".titel",{
    ease: "none",
    duration: 1,
    x: 0,
 });
 
 ScrollTrigger.create({
   animation:tl2,
   trigger: ".screen2",
   start: "top" ,
   end:"+=2000",
   scrub: 2,
   toggleClass: 'active',
   markers: {
     startColor:"purple",
     endColor: "yellow",
   },
 });
   
//  const tl2_2 = gsap.timeline();

// tl2_2.to(".titel",{
//     ease: "none",
//     duration: 1,
//     x: 2000,
//  });
 
//  ScrollTrigger.create({
//    animation:tl2_2,
//    trigger: ".screen2",
//    start: "top" ,
//    end:"+=6000",
//    scrub: 2,
//    toggleClass: 'active',
//    markers:true,
//  });
  

// ____29.05_________
  //  pin: true,
  //  anticipatePin: 1
   

//  ___neu29.05.2021___
 const tl2_1 = gsap.timeline();

 tl2_1.to(".blacksquare",{
     ease: "none",
     duration: 1,
     x: 0,
  });
  
  ScrollTrigger.create({
    animation:tl2_1,
    trigger: ".screen2",
    start: "top" ,
    end:"+=6000",
    scrub: 2,
    toggleClass: 'active',
    markers: {
      startColor:"red",
      endColor: "blue",
    },
    pin: true,
    anticipatePin: 1
  });

  // _____________
/*-----------------------------------------------animation screen 3: menstrutation-------------------------------------------------------------*/
// const tl3 = gsap.timeline();
//     ScrollTrigger.create ({
//         trigger: ".screen3",
//         markers: true,
//         start: "top 42%",
//         end: "top 35%",
//         scrub: 1,  
// });
// //tl3.to(".titel", {x: 1000, duration: 2});
// ScrollTrigger.create({
//     animation:tl3,
//     trigger: ".screen3",
//     start: "top" ,
//     end:"+=1200",
//     scrub: 2,
//     markers:true,
//     pin: true,
//     anticipatePin: 1
//   });


// _____neu_29.05.2021________
const tl3_2 = gsap.timeline();

tl3_2.to(".tear",{
     ease: "none",
     duration: 3,
     y: 2000,
     scale: 5,
  });
  
  ScrollTrigger.create({
    animation:tl3_2,
    trigger: ".screen3",
    start: "top" ,
    end:"+=1000",
    scrub: 2,
    toggleClass: 'active',
    markers: {
      startColor:"green",
      endColor: "orange",
    },
    pin: true,
     anticipatePin: 1
  
  });
 
  const tl3_3 = gsap.timeline();

  tl3_3.to(".Mensblut",{
      ease: "none",
      duration: 1,
      y: -1100,
   });
   
   ScrollTrigger.create({
     animation:tl3_3,
     trigger: ".screen3",
     start: "top" ,
     end:"+=1000",
     scrub: 2,
     toggleClass: 'active',
     //  pin: true,
     //  anticipatePin: 1
   });
     
/*-----------------------------------------------animation screen 4: veganer-------------------------------------------------------------*/
const tl4_2 = gsap.timeline();
tl4_2.to(".KastenRot1",{
  y: -1000,
    scaleY: 2.5,
    ease: "none",
    duration: 1,
});
  ScrollTrigger.create({
      animation:tl4_2,
      trigger: ".screen4",
      start: "top top",
      end:"+=1200",
      scrub: 2,
      // pin: true,
      // anticipatePin: 1,
  });


const tl4 = gsap.timeline();
tl4.to(".KastenRot2",{
  y: 500,
    // scaleY: 2.5,
    ease: "none",
    duration: 1,
});
  ScrollTrigger.create({
      animation:tl4,
      trigger: ".screen4",
      start: "top top",
      end:"+=1200",
      scrub: 2,
      pin: true,
      anticipatePin: 1,
  });

// click Animation_________________________________________
function activate(i){
  let kids= document.getElementById(i).children
  for (let j= 0 ; j< kids.length; j++){
    console.log(kids[j])  
    if(kids[j].style.opacity=='1'){
      kids[j].style.opacity='0';}
    else{
        kids[j].style.opacity='1';
  }  
}
  // if(document.getElementById(i).style.opacity=='1'){
  //     document.getElementById(i).style.opacity='0';}
  //     else{
  //     document.getElementById(i).style.opacity='1';
  // }  
}

/*-----------------------------------------------animation screen 5: hoden-------------------------------------------------------------*/
const tl5 = gsap.timeline();

tl5.to(".Nation",{
    scale: 2,
   ease: "none",
    duration: 1,
 });
 ScrollTrigger.create({
   animation:tl5,
   trigger: ".screen5",
   start: "top" ,
   end:"+=1200",
   scrub: 2,
   toggleClass: 'active',
  //  markers: {
  //   startColor:"pink",
  //   endColor: "violett",
  // },
   pin: true,
   anticipatePin: 1
 });

 

/*-----------------------------------------------animation screen 6: mannequin-------------------------------------------------------------*/
// const tl6 = gsap.timeline();

// tl6.to(".screen6_2",{
//     scale: 1,
//     ease: "none",
//     duration: 1,
// });
// ScrollTrigger.create({
//     animation:tl6,
//     trigger: ".screen6",
//     start: "top" ,
//     end:"+=1200",
//     scrub: 2,
//     toggleClass: 'active',
//     // markers:true,
//     pin: true,
//     anticipatePin: 1,
// });

// ____30.05.2021_______

const tl6 = gsap.timeline();

tl6.to(".screen6_2",{
    scale: 1,
    ease: "none",
    duration: 1,
});
ScrollTrigger.create({
    animation:tl6,
    trigger: ".screen6",
    start: "top" ,
    end:"+=1200",
    scrub: 2,
    toggleClass: 'active',
    // markers:true,
    pin: true,
    anticipatePin: 1,
});

/*-----------------------------------------------animation screen 7: nippelsaft-------------------------------------------------------------*/
const tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".screen7",
        // markers: true,
        start: "top 42%",
        end: "top 35%",
        scrub: 1,  
    }
})

//tl3.to(".titel", {x: 1000, duration: 2});

ScrollTrigger.create({
    animation:tl7,
    trigger: ".screen7",
    start: "top" ,
    end:"+=1200",
    scrub: 2,
    // markers:true,
    pin: true,
    anticipatePin: 1
  });

/*-----------------------------------------------animation screen 8: flachbrüstigkeit-------------------------------------------------------------*/
const tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: ".screen8",
        // markers: true,
        start: "top 42%",
        end: "top 35%",
        scrub: 1,  
    }
})

//tl3.to(".titel", {x: 1000, duration: 2});

ScrollTrigger.create({
    animation:tl8,
    trigger: ".screen8",
    start: "top" ,
    end:"+=1200",
    scrub: 2,
    // markers:true,
    pin: true,
    anticipatePin: 1
  });

/*-----------------------------------------------animation screen 9: rosinengesicht-------------------------------------------------------------*/
const tl9 = gsap.timeline();

// let rosinen = document.querySelector(".rosinen");
// rosinen.forEach(function(rosine) {
//     ScrollTrigger.create({
//         animation: {
//             scale: 5,
//             ease: "none",
//             duration: 1},
//         trigger: ".screen:",
//         target: rosine,
//         start: "top" ,
//         end:"+=1200",
//         scrub: 2,
//         markers:true,
//         pin: true,
//         anticipatePin: 1,
//     });
// })
tl9.to(".rosine",{
    scale: 5,
    ease: "none",
    duration: 1,
});
ScrollTrigger.create({
    animation: tl9,
    trigger: ".screen9",
    start: "top" ,
    end:"+=1200",
    scrub: 2,
    // markers:true,
    pin: true,
    anticipatePin: 1,
});

/*-----------------------------------------------animation screen 10: zeitverlust-------------------------------------------------------------*/
const tl10 = gsap.timeline({
    scrollTrigger: {
        trigger: ".screen10",
        // markers: true,
        start: "top 42%",
        end: "top 35%",
        scrub: 1,  
    }
})

//tl3.to(".titel", {x: 1000, duration: 2});

ScrollTrigger.create({
    animation:tl10,
    trigger: ".screen10",
    start: "top" ,
    end:"+=1200",
    scrub: 2,
    // markers:true,
    pin: true,
    anticipatePin: 1
  });

/*-----------------------------------------------animation screen 11: end screen (buch empfehlung)-------------------------------------------------------------*/
const tl11 = gsap.timeline({
    scrollTrigger: {
        trigger: ".screen11",
        // markers: true,
        start: "top 42%",
        end: "top 35%",
        scrub: 1,  
    }
})

//tl3.to(".titel", {x: 1000, duration: 2});

ScrollTrigger.create({
    animation:tl11,
    trigger: ".screen11",
    start: "top" ,
    end:"+=1200",
    scrub: 2,
    // markers:true,
    pin: true,
    anticipatePin: 1
  });

