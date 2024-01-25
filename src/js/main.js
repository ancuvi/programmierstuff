import "./../scss/style.scss";

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const navbarPlaceholder = document.querySelector(".navbar-placeholder");
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-fixed");
    navbarPlaceholder.style.display = "block";
    navbarPlaceholder.style.height = navbar.offsetHeight + "px";
    // Hinzufügen der navbar-visible Klasse ohne Verzögerung
    navbar.classList.add("navbar-visible");
  } else {
    // Entfernen der navbar-visible Klasse und warten auf das Ende der Opacity-Animation
    navbar.classList.remove("navbar-visible");
    setTimeout(() => {
      navbar.classList.remove("navbar-fixed");
      navbarPlaceholder.style.display = "none";
      navbarPlaceholder.style.height = "0";
    }, 300); // Diese Verzögerung muss der Übergangszeit entsprechen
  }
});
