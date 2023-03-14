const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");

  //Animate links
  navLinks.querySelectorAll("li").forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });

  //Menu icon animation
  menuIcon.classList.toggle("toggle");
});
