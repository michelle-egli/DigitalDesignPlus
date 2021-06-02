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
    //pin: true,
    //anticipatePin: 1,
});

const tl1_2 = gsap.timeline();

tl1_2.to(".sperm",{
     ease: "none",
     duration: 3,
     y: 500,
     scale:1,
    //  delay:1.2,
  });
  
  ScrollTrigger.create({
    animation:tl1_2,
    trigger: ".screen1",
    start: "top" ,
    end:"+=1700",
    scrub: 2,
    toggleClass: 'active',
    // markers: {
    //   startColor:"green",
    //   endColor: "orange",
    // },
    // pin: true,
    //  anticipatePin: 1
  
  });
  const tl1_3 = gsap.timeline();

tl1_3.to(".sperm2",{
     ease: "none",
     duration: 1,
     scale:2,
     y: 500,
    //  delay:1,
  });
  
  ScrollTrigger.create({
    animation:tl1_3,
    trigger: ".screen1",
    start: "top" ,
    end:"+=1800",
    scrub: 2,
    toggleClass: 'active',
    // markers: {
    //   startColor:"green",
    //   endColor: "orange",
    // },
      pin: true,
      anticipatePin: 1
  });

  const tl1_4 = gsap.timeline();

  tl1_4.to(".Flüssigkeit",{
       ease: "none",
       duration: 1,
       y: -1000,
    });
    
    ScrollTrigger.create({
      animation:tl1_4,
      trigger: ".screen1",
      start: "top" ,
      end:"+=2000",
      scrub: 2,
      toggleClass: 'active',
      // markers: {
      //   startColor:"green",
      //   endColor: "orange",
      // },
      pin: true,
       anticipatePin: 1
    
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
  //  markers: {
  //    startColor:"purple",
  //    endColor: "yellow",
  //  },
 });
   
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
    // markers: {
    //   startColor:"red",
    //   endColor: "blue",
    // },
    pin: true,
    anticipatePin: 1
  });


/*-----------------------------------------------animation screen 3: menstrutation-------------------------------------------------------------*/
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
    // markers: {
    //   startColor:"green",
    //   endColor: "orange",
    // },
    pin: true,
     anticipatePin: 1
  
  });
 
  const tl3_3 = gsap.timeline();

  tl3_3.to(".Mensblut",{
      ease: "none",
      duration: 1,
      y: -550,
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
      start: "top",
      end:"+=1200",
      scrub: 1,
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
      start: "top",
      end:"+=1200",
      scrub: 1,
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
   markers:true,
   pin: true,
   anticipatePin: 1
 });

/*-----------------------------------------------animation screen 6: mannequin-------------------------------------------------------------*/
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

});

const tl6_2= gsap.timeline();

tl6_2.to(".screen6_2",{
   ease: "none",
   duration: 1,
   y: -560,
});
ScrollTrigger.create({
   animation:tl6_2,
   trigger: ".screen6",
   start: "top" ,
   end:"+=5000",
   scrub: 2,
   toggleClass: 'active2',
   markers: {
   startColor:"pink",
   endColor: "light blue",
  },
   pin: true,
   anticipatePin: 1,
});

/*-----------------------------------------------animation screen 7: nippelsaft-------------------------------------------------------------*/
const tl7 = gsap.timeline();

tl7.to(".Milch",{
    scale: 2,
   ease: "none",
    duration: 1,
 });
 ScrollTrigger.create({
   animation:tl7,
   trigger: ".screen7",
   start: "top" ,
   end:"+=7000",
   scrub: 2,
   toggleClass: 'active',
  //  markers: {
  //   startColor:"pink",
  //   endColor: "violett",
  // },
   pin: true,
   anticipatePin: 1
 });

const tl7_2 = gsap.timeline();

tl7_2.to(".Milch2",{
    scale: 1.5,
    translateX:-300,
   ease: "none",
    duration: 1,
 });

 ScrollTrigger.create({
   animation:tl7_2,
   trigger: ".screen7",
   start: "top" ,
   end:"+=7000",
   scrub: 2,
   toggleClass: 'active',
  //  markers: {
  //   startColor:"pink",
  //   endColor: "violett",
  // },
   pin: true,
   anticipatePin: 1
 });

const tl7_3 = gsap.timeline({})

 tl7_3.to(".täuschungsbalken1", {x: -1000, duration: 1})
    .to(".täuschungsbalken2", {x: 1000, duration: 1});

    ScrollTrigger.create({
        animation:tl7_3,
        trigger: ".screen7",
        start: "top" ,
        end:"+=1200",
        scrub: 0.5,
        markers:true,
        pin: true,
        anticipatePin: 1,
      });

/*-----------------------------------------------animation screen 8: flachbrüstigkeit-------------------------------------------------------------*/
const tl8 = gsap.timeline({})

tl8.to(".balken1", {x: -2000, duration: 1})
    .to(".balken2", {x: 2000, duration: 1})
    .to(".balken3", {x: -2000, duration: 1})
    .to(".balken4", {x: 2000, duration: 1})
    .to(".balken5", {x: -2000, duration: 1})
    .to(".balken6", {x: 2000, duration: 1})
    .to(".balken7", {x: -2000, duration: 1});

ScrollTrigger.create({
    animation:tl8,
    trigger: ".screen8",
    start: "top" ,
    end:"+=1200",
    scrub: 0.5,
    markers:true,
    pin: true,
    anticipatePin: 1
  });

/*-----------------------------------------------animation screen 9: rosinengesicht-------------------------------------------------------------*/
const tl9 = gsap.timeline();

tl9.to(".rosine",{
    scale: 30,
    ease: "none",
    duration: 3,
});

ScrollTrigger.create({
    animation: tl9,
    trigger: ".screen9",
    start: "top" ,
    end:"+=1200",
    scrub: 2,
    markers:true,
    pin: true,
    anticipatePin: 1,
});

/*-----------------------------------------------animation screen 10: zeitverlust-------------------------------------------------------------*/
const tl10 = gsap.timeline();

tl10.to(".titelScreen10",{
    ease: "none",
    duration: 1,
    y: 0,
 });

 ScrollTrigger.create({
   animation:tl10,
   trigger: ".screen10",
   start: "top",
   end:"+=1200",
   scrub: 2,
   toggleClass: 'active',
   markers:true,
   pin: true,
   anticipatePin: 1,
 });

/*-----------------------------------------------animation screen 11: buch titel-------------------------------------------------------------*/
const tl11 = gsap.timeline({})

tl11.to(".papiertüte", {x: 2000, duration: 1});


ScrollTrigger.create({
    animation:tl11,
    trigger: ".screen11",
    start: "top" ,
    end:"+=1200",
    scrub: 0.5,
    markers:true,
    pin: true,
    anticipatePin: 1
  });

/*-----------------------------------------------animation screen 12: papiertüten-smile-------------------------------------------------------------*/
const tl12 = gsap.timeline({})

tl12.to(".smile",{
    ease: "none",
    duration: 3,
    rotate: 360,
 });

ScrollTrigger.create({
    animation:tl12,
    trigger: ".screen12",
    start: "top" ,
    end:"+=1200",
    scrub: 2,
    toggleClass: 'active',
    markers:true,
    pin: true,
    anticipatePin: 1
  });
