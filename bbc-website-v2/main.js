const buttons = document.querySelectorAll(".magnatic-container");
const time = 150;
const wrapper = document.querySelector(".cards");
const cards = document.querySelectorAll(".card");
const faqs = document.querySelectorAll(".faq");

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

function getChilds($event_button) {
  return {
    background: $event_button.target.querySelector(".magnatic-background"),
    element: $event_button.target.querySelector(".magnatic-element"),
  };
}

function move($event_button) {
  const x = $event_button.layerX - $event_button.target.clientWidth / 2;
  const y = $event_button.layerY - $event_button.target.clientHeight / 2;
  const { background, element } = getChilds($event_button);

  background.style.transform = `translate(${x / 6}px, ${y / 6}px)`; // wenn 6 auf 4 geändert wird, dann bewegt sich der Hintergrund schneller
  element.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
}

function startAnimation($event_button) {
  const { background, element } = getChilds($event_button);
  const transition = `all ${time}ms ease`;
  background.style.transition = transition;
  element.style.transition = transition;
}

function endAnimation($event_button) {
  const { background, element } = getChilds($event_button);
  setTimeout(() => {
    background.style.transition = "";
    element.style.transition = "";
  }, time);
}

function start($event_button) {
  startAnimation($event_button);
  endAnimation($event_button);
}

function end($event_button) {
  const { background, element } = getChilds($event_button);

  startAnimation($event_button);
  background.style.transform = `translate(0, 0)`;
  element.style.transform = `translate(0, 0)`;

  endAnimation($event_button);
}

// Event Karten animiert
wrapper.addEventListener("mousemove", function ($event_events) {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect(); // Position des Karten-Elements im Viewport
    const x = $event_events.clientX - rect.left; // Berechnet x-Position der Maus relativ zur Karte
    const y = $event_events.clientY - rect.top; // Berechnet y-Position der Maus relativ zur Karte

    card.style.setProperty("--xPos", `${x}px`);
    card.style.setProperty("--yPos", `${y}px`);
  });
});

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
