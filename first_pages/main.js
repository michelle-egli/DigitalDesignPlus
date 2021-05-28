gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none",duration:1});


/*-----------------------------------------------animation screen 1: penis-------------------------------------------------------------*/


/*-----------------------------------------------animation screen 2: big fat fuck-------------------------------------------------------------*/
/*funktioniert noch nicht!
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".screen2",
        markers: true,
        start: "top 42%",
        end: "top 35%",
        scrub: 1,  
    }
})

tl.to(".fat_fuck", ".ha", ".big", ".opel", {x: -500, duration: 2});*/


/*-----------------------------------------------animation screen 3: menstrutation-------------------------------------------------------------*/


/*-----------------------------------------------animation screen 4: veganer-------------------------------------------------------------*/
const tl = gsap.timeline();
tl.to(".KastenRot2",{
  y: -500,
    scaleY: 2.5,
    ease: "none",
    duration: 1,
});
  ScrollTrigger.create({
      animation:tl,
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
const tl2 = gsap.timeline();

tl2.to(".Nation",{
    scale: 1,
   ease: "none",
    duration: 1,
 });
 ScrollTrigger.create({
   animation:tl2,
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
const tl3 = gsap.timeline();

tl3.to(".screen6_2",{
    scale: 1,
    ease: "none",
    duration: 1,
});
ScrollTrigger.create({
    animation:tl3,
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


