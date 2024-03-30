const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

let tl = gsap.timeline();
tl.from(".line h1", {
  y: "100%",
  stagger: 0.25,
  opacity: 0,
  delay: 0.5,
})
  .from("#line1-part1,.line h2", {
    opacity: 0,
    duration: 1,
    delay: -0.3,
    ease: "power.in",
  })
  .to(".line", {
    opacity: 0.1,
    duration: 2,
    delay: 2,
  })
  .from("#page1", {
    opacity: 0,
    delay: -1,
    y: 1200,
    duration: 2,
    ease: Power4,
  })
  .to("#loader", {
    display: "none",
    delay: -2,
  });
let grow = 0;
let h5Timer = document.querySelector("#line1-part1 h5");
setInterval(() => {
  if (grow < 100) {
    grow++;
    h5Timer.innerHTML = grow;
  }
}, 34);
