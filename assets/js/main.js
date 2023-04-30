const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".navigation__close");

const animation = gsap.timeline({ paused: true });

menuBtn.addEventListener("click", function () {
    animation.play();
});

closeBtn.addEventListener("click", function () {
    animation.reverse();
});

animation.to(".navigation", { opacity: 1, duration: 0.5, top: 0 });
//animation.to();