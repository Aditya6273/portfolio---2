function navbar() {
    let bars = document.querySelector(".bars")
    bars.addEventListener('click', function () {

        let bar = document.querySelector(".fa-bars")
        bar.classList.toggle("fa-xmark")


        let navlist = document.querySelector(".nav-list")
        navlist.classList.toggle("active")
    })

}
navbar();
function profile() {


    let identity = document.querySelector(".user")
    identity.addEventListener('click', function () {
        let profile = document.querySelector(".identity")
        profile.classList.toggle("show")
    })
}
profile();



gsap.from(".logo-img , .bars ,.user", {
    y: -100,
    opacity: 0,
    delay: .5,
    duration: .1,
    stagger: .3,

})
gsap.from(".navbar .nav-list", {
    y: -100,


    duration: 1,
    stagger: .01


})
gsap.from(".main-text h1", {
    y: 100,
    opacity: 0,
    duration: .5,
    delay: 2,

})
gsap.from("main h1 ,main h1 span", {

    y: 100,
    opacity: 0,
    duration: .5,
    delay: 2,
    stagger: .5,

})
gsap.to(".navbar", {
    backgroundColor: "#000",
    height: "100px",
    duration: .5,
    scrollTrigger: {
        trigger: ".navbar",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 3
    }
})
gsap.from("#About .heading", {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#About .heading",
        scroller: "body",
        scrub: 1,

    }
})
gsap.from(".content .img", {
    x: -100,
    scale: 0,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#About .heading",
        scroller: "body",
        scrub: 1,

    }
})
gsap.from(".content .content-text", {
    x: 100,
    scale: 0,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#About .heading",
        scroller: "body",
        scrub: 1,

    }
})
gsap.from("#skills", {
    backgroundColor: "rgb(6, 58, 46)",
    height: "100vh",
    duration: .5,
    scrollTrigger: {
        trigger: "#skills",
        scroller: "body",

        marker: true,

    }
})