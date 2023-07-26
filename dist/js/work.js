function goToHome() {
  const currentPageURL = window.location.pathname;

  if (currentPageURL.endsWith("index.html")) {
    window.scrollTo(0, 0);
  } else {
    window.location.href = "index.html";
  }
}

let counter = 1;
let intervalId;

function startSlideshow() {
  intervalId = setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 6) {
      counter = 1;
    }
  }, 3000);
}

startSlideshow();

const manualBtns = document.querySelectorAll(".manual-btn");
manualBtns.forEach((manualBtn) => {
  manualBtn.addEventListener("click", (event) => {
    clearInterval(intervalId);

    const clickedIndex = parseInt(event.target.id.slice(-1));

    counter = clickedIndex;
    startSlideshow();
  });
});
