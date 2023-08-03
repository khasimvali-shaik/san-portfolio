const navbar = document.getElementById("main-nav");
window.onscroll = () => {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
  } else {
    navbar.classList.add("top");
  }
};

function goToHome() {
  const currentPageURL = window.location.pathname;

  if (currentPageURL.endsWith("index.html")) {
    window.scrollTo(0, 0);
  } else {
    window.location.href = "index.html";
  }
}
