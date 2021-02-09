export function stickyNavbar() {
  window.onscroll = function () {
    stickyNavbar();
  };
  var navbar = document.querySelector(".nav");
  var sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    setTimeout(() => {
      navbar.classList.add("sticky");
    }, 500);
  } else {
    navbar.classList.remove("sticky");
  }
}
