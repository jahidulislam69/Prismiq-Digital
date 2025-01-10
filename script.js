const cursor = document.querySelector(".cursor");

document.querySelector("main").addEventListener("mousemove", (dets)=>{
    gsap.to(cursor, {
        left: dets.clientX,
        top: dets.clientY

    })
})



var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 #hero-text",
        scroller: "body",
        // markers: true,
        start: "top 10%",
        end: "top 0%",
        scrub: 3
    }
});

tl.to(".first",{
    x: -300,
    opacity: 0
},"ek")
tl.to("#hero-middle",{
    x: 300,
    opacity: 0
},"ek")
tl.to(".last",{
    x: -300,
    opacity: 0
},"ek")
tl.to("#page1 video",{
    width: "90%"
},"ek")


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 0%",
        scrub: 3
    }
});

tl2.to("body",{
    backgroundColor: "#e8e6ff",
    color: "#000000",
})

gsap.from(".elem h1", {
    opacity: 0,
    x: -130,
    duration: .5,
    stagger: .15,
    scrollTrigger: {
        trigger: "#second",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "bottom 90%",


    }
})

gsap.from(".elem h5", {
    opacity: 0,
    x: 50,
    duration: .4,
    stagger: .15,
    scrollTrigger: {
        trigger: "#second",
        scroller: "body",
        // markers: true,
        start: "top 30%",
        end: "bottom 90%",
    }
})

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;
    
    elem.addEventListener("mouseleave", function(dets){
        
         gsap.to(elem.querySelector("img"),{
             opacity: 0,
             ease: Power3,
 
         });
     });


    elem.addEventListener("mousemove", function(dets){
       var reff = elem.clientY - elem.getBoundingClientRect().top;
       diffrot = dets.clientX - rotate;
       rotate = dets.clientX;
       
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power1,
            top: reff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20, diffrot * .8)

        });
    });
});


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 50%",
        end: "top 0",
        scrub: 1,
        // markers: true
    }
})
tl2.from("#aboutme img",{
    x:-100,
    opacity: 0
})
tl2.from(".textabout, .textabout h5, .textabout p,.textabout a",{
    x: 60,
    opacity:0,
})
tl2.from(".aboutfoot",{
    y: 50,
    opacity: 0
})

tl2.from("#footer",{
    y: 50,
    opacity:0,
    duration: .5,
    stagger: .15
})
