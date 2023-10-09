const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    navbarMenu.classList.remove("is-active");
  });
});

// on scroll header bg will change
window.onscroll = function () {
  if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
    // document.getElementById('header').classList.add("on-scroll");
    document.getElementById('header').style.backgroundColor = '#656249';
  } else {
    document.getElementById('header').style.backgroundColor = 'transparent';
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}