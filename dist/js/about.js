const navbar = document.getElementById("main-nav");
const social = document.querySelector(".social-nav-items.about");
window.onscroll = () => {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    social.classList.remove("about");
    social.classList.add("hide");
  } else {
    navbar.classList.add("top");
    social.classList.add("about");
    social.classList.remove("hide");
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

function toggleParagraphs(event) {
  event.preventDefault();

  // Get all the paragraphs in the container
  const allParagraphs = document.querySelectorAll(".column-2 p");
  const readIcon = document.getElementById("read-more");

  // Toggle the "hidden" class for each paragraph except the first three
  for (let i = 3; i < allParagraphs.length; i++) {
    allParagraphs[i].classList.toggle("hidden");
  }

  // Update the text of the "Read More" button
  const readMoreButton = event.target;
  const isExpanded = readMoreButton.classList.toggle("expanded");
  readMoreButton.innerHTML = `<i class="fas fa-chevron-${
    isExpanded ? "up" : "down"
  }"></i> ${isExpanded ? "Read Less" : "Read More"}`;
}

const navButton = () => {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".main-nav-items");
  const overlay = document.getElementById("burger-overlay");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("toggle");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("toggle");
    overlay.classList.toggle("active");
  });
};

navButton();
