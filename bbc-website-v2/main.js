const buttons = document.querySelectorAll(".magnatic-container");
const time = 150;

// Navbar beim Scrollen fixieren
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// Button der sich zur maus bewegt
buttons.forEach((elm) => {
  elm.addEventListener("mousemove", move);
  elm.addEventListener("mouseenter", start);
  elm.addEventListener("mouseleave", end);
});

function getChilds($event) {
  return {
    background: $event.target.querySelector(".magnatic-background"),
    element: $event.target.querySelector(".magnatic-element"),
  };
}

function move($event) {
  const x = $event.layerX - $event.target.clientWidth / 2;
  const y = $event.layerY - $event.target.clientHeight / 2;
  const { background, element } = getChilds($event);

  background.style.transform = `translate(${x / 6}px, ${y / 6}px)`; // wenn 6 auf 4 geändert wird, dann bewegt sich der Hintergrund schneller
  element.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
}

function startAnimation($event) {
  const { background, element } = getChilds($event);
  const transition = `all ${time}ms ease`;
  background.style.transition = transition;
  element.style.transition = transition;
}

function endAnimation($event) {
  const { background, element } = getChilds($event);
  setTimeout(() => {
    background.style.transition = "";
    element.style.transition = "";
  }, time);
}

function start($event) {
  startAnimation($event);
  endAnimation($event);
}

function end($event) {
  const { background, element } = getChilds($event);

  startAnimation($event);
  background.style.transform = `translate(0, 0)`;
  element.style.transform = `translate(0, 0)`;

  endAnimation($event);
}
