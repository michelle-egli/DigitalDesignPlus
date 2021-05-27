 gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none",duration:1});

//_____________div1________________________________________
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
//_________________________________________________________

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
//__________________________________________________________

//_____________div2_________________________________________
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
//___________________________________________________________

//__________div3_____________________________________________
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
//____________________________________________________________
