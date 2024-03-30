const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function crsrAnimation() {
  let crsr = document.querySelector("#crsr");
  document.addEventListener("mousemove", (e) => {
    gsap.to(crsr, {
      left: e.x,
      top: e.y,
    });
  });

  Shery.makeMagnet("nav span" /* Element to target.*/, {
    //Parameters are optional.
    ease: "power1",
    duration: 1,
  });
}

function loadingAnimation() {
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
      opacity: 0,
      duration: 1.7,
      stagger: 0.1,
      delay: 2,
    })
    .from("#page1", {
      opacity: 0,
      y: 1200,
      delay: -0.3,
      duration: 1,
      ease: Power4,
    })
    .to("#loader", {
      display: "none",
      delay: -2,
    })
    .from("nav", {
      opacity: 0,
      duration: 1,
    })
    .from(".hero h1", {
      y: "100%",
      stagger: 0.25,
      opacity: 0,
    });

  let grow = 0;
  let h5Timer = document.querySelector("#line1-part1 h5");
  setInterval(() => {
    if (grow < 100) {
      grow++;
      h5Timer.innerHTML = grow;
    }
  }, 34);
}

crsrAnimation();
loadingAnimation();
