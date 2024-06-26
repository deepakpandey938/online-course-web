const mobile_nav = document.querySelector(".navbar-mobile-btn");
const nav_header = document.querySelector(".header-first");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());