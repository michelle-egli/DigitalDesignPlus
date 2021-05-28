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
/*const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".screen2",
        markers: true,
        start: "top 42%",
        end: "top 35%",
        scrub: 1,  
    }
})

tl2.to(".titel", {x: 2000, duration: 2});


/*
tl2.to(".titel", {
    transform: translateX(-2000),
    ease: "none",
    duration: 1,
});*/

/*
ScrollTrigger.create({
    animation:tl2,
    trigger: ".screen2",
    start: "top top",
    end:"+=1200",
    scrub: 2,
    toggleClass: 'active',
    pin: true,
    anticipatePin: 1,
});*/

const tl2 = gsap.timeline();

tl5.to(".titel",{
    ease: "none",
    duration: 1,
 });
 ScrollTrigger.create({
   animation:tl2,
   trigger: ".screen2",
   start: "top" ,
   end:"+=1200",
   scrub: 2,
   toggleClass: 'active',
   markers:true,
   pin: true,
   anticipatePin: 1
 });

/*-----------------------------------------------animation screen 3: menstrutation-------------------------------------------------------------*/


/*-----------------------------------------------animation screen 4: veganer-------------------------------------------------------------*/
const tl4 = gsap.timeline();
tl4.to(".KastenRot2",{
  y: -500,
    scaleY: 2.5,
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
    scale: 1,
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
    markers:true,
    pin: true,
    anticipatePin: 1
});

/*-----------------------------------------------animation screen 7: nippelsaft-------------------------------------------------------------*/


/*-----------------------------------------------animation screen 8: flachbrüstigkeit-------------------------------------------------------------*/


/*-----------------------------------------------animation screen 9: rosinengesicht-------------------------------------------------------------*/


/*-----------------------------------------------animation screen 10: zeitverlust-------------------------------------------------------------*/


/*-----------------------------------------------animation screen 11: end screen (buch empfehlung)-------------------------------------------------------------*/


