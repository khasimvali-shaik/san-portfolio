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

// pop-up images data
const itemsData = [
  {
    itemName: "person1",
    header: "Western",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
    tableData: [
      {
        Category: "Fabrics",
        "Material/Item": "Silk",
        Description: "Luxurious, smooth, and breathable fabric",
        Usage: "Evening gowns, formal wear",
      },
      {
        Category: "Embellishments",
        "Material/Item": "Sequins",
        Description: "Small, shiny discs used for decoration",
        Usage: "Party dresses, evening gowns",
      },
    ],
  },
  {
    itemName: "person2",
    header: "Traditional",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur`,
    tableData: [
      {
        Category: "Fabrics",
        "Material/Item": "Silk",
        Description: "Luxurious, smooth, and breathable fabric",
        Usage: "Evening gowns, formal wear",
      },
      {
        Category: "Embellishments",
        "Material/Item": "Sequins",
        Description: "Small, shiny discs used for decoration",
        Usage: "Party dresses, evening gowns",
      },
    ],
  },
  {
    itemName: "person3",
    header: "Vintage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
    tableData: [
      {
        Category: "Fabrics",
        "Material/Item": "Silk",
        Description: "Luxurious, smooth, and breathable fabric",
        Usage: "Evening gowns, formal wear",
      },
      {
        Category: "Embellishments",
        "Material/Item": "Sequins",
        Description: "Small, shiny discs used for decoration",
        Usage: "Party dresses, evening gowns",
      },
    ],
  },
  {
    itemName: "person4",
    header: "item4",
    description: `item4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
    tableData: [
      {
        Category: "Fabrics",
        "Material/Item": "Silk",
        Description: "Luxurious, smooth, and breathable fabric",
        Usage: "Evening gowns, formal wear",
      },
      {
        Category: "Embellishments",
        "Material/Item": "Sequins",
        Description: "Small, shiny discs used for decoration",
        Usage: "Party dresses, evening gowns",
      },
    ],
  },
  {
    itemName: "person5",
    header: "Vintage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
    tableData: [
      {
        Category: "Fabrics",
        "Material/Item": "Silk",
        Description: "Luxurious, smooth, and breathable fabric",
        Usage: "Evening gowns, formal wear",
      },
      {
        Category: "Embellishments",
        "Material/Item": "Sequins",
        Description: "Small, shiny discs used for decoration",
        Usage: "Party dresses, evening gowns",
      },
    ],
  },
  {
    itemName: "person6",
    header: "Vintage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
    tableData: [
      {
        Category: "Fabrics",
        "Material/Item": "Silk",
        Description: "Luxurious, smooth, and breathable fabric",
        Usage: "Evening gowns, formal wear",
      },
      {
        Category: "Embellishments",
        "Material/Item": "Sequins",
        Description: "Small, shiny discs used for decoration",
        Usage: "Party dresses, evening gowns",
      },
    ],
  },
  {
    itemName: "person7",
    header: "Vintage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
    tableData: [
      {
        Category: "Fabrics",
        "Material/Item": "Silk",
        Description: "Luxurious, smooth, and breathable fabric",
        Usage: "Evening gowns, formal wear",
      },
      {
        Category: "Embellishments",
        "Material/Item": "Sequins",
        Description: "Small, shiny discs used for decoration",
        Usage: "Party dresses, evening gowns",
      },
    ],
  },
  {
    itemName: "person8",
    header: "Vintage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
    tableData: [
      {
        Category: "Fabrics",
        "Material/Item": "Silk",
        Description: "Luxurious, smooth, and breathable fabric",
        Usage: "Evening gowns, formal wear",
      },
      {
        Category: "Embellishments",
        "Material/Item": "Sequins",
        Description: "Small, shiny discs used for decoration",
        Usage: "Party dresses, evening gowns",
      },
    ],
  },
  {
    itemName: "person9",
    header: "Vintage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
    tableData: [
      {
        Category: "Fabrics",
        "Material/Item": "Silk",
        Description: "Luxurious, smooth, and breathable fabric",
        Usage: "Evening gowns, formal wear",
      },
      {
        Category: "Embellishments",
        "Material/Item": "Sequins",
        Description: "Small, shiny discs used for decoration",
        Usage: "Party dresses, evening gowns",
      },
    ],
  },
  {
    itemName: "person10",
    header: "Vintage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
    tableData: [
      {
        Category: "Fabrics",
        "Material/Item": "Silk",
        Description: "Luxurious, smooth, and breathable fabric",
        Usage: "Evening gowns, formal wear",
      },
      {
        Category: "Embellishments",
        "Material/Item": "Sequins",
        Description: "Small, shiny discs used for decoration",
        Usage: "Party dresses, evening gowns",
      },
    ],
  },
  {
    itemName: "person11",
    header: "Vintage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
    tableData: [
      {
        Category: "Fabrics",
        "Material/Item": "Silk",
        Description: "Luxurious, smooth, and breathable fabric",
        Usage: "Evening gowns, formal wear",
      },
      {
        Category: "Embellishments",
        "Material/Item": "Sequins",
        Description: "Small, shiny discs used for decoration",
        Usage: "Party dresses, evening gowns",
      },
    ],
  },
  {
    itemName: "person12",
    header: "Vintage",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
    tableData: [
      {
        Category: "Fabrics",
        "Material/Item": "Silk",
        Description: "Luxurious, smooth, and breathable fabric",
        Usage: "Evening gowns, formal wear",
      },
      {
        Category: "Embellishments",
        "Material/Item": "Sequins",
        Description: "Small, shiny discs used for decoration",
        Usage: "Party dresses, evening gowns",
      },
    ],
  },
];

function popUpData(event) {
  const active = "active";
  const closeModalButtons = document.querySelector("[data-close-button]");
  const overlay = document.getElementById("work-overlay");
  const modal = document.getElementById("work-modal");
  const h2 = document.getElementById("work-modal-header-data");
  const p = document.getElementById("work-modal-description");
  const tableContainer = document.getElementById("work-modal-table");

  const clickedElement = event.target;
  const itemId = clickedElement.getAttribute("personData");

  if (itemId != null) {
    const index = itemsData.findIndex((item) => item.itemName === itemId);
    const data = itemsData[index];
    modal.classList.add(active);
    overlay.classList.add(active);

    h2.textContent = data.header;
    p.textContent = data.description;

    const tableHTML = generateTableHTML(data.tableData);
    tableContainer.innerHTML = tableHTML;
  }

  closeModalButtons.addEventListener("click", () => {
    modal.classList.remove(active);
    overlay.classList.remove(active);
  });

  overlay.addEventListener("click", () => {
    modal.classList.remove(active);
    overlay.classList.remove(active);
  });
}

function generateTableHTML(tableData) {
  let tableHTML = "<table>";
  tableHTML +=
    "<tr><th>Category</th><th>Material/Item</th><th>Description</th><th>Usage</th></tr>";

  tableData.forEach((rowData) => {
    tableHTML += "<tr>";
    tableHTML += `<td>${rowData.Category}</td>`;
    tableHTML += `<td>${rowData["Material/Item"]}</td>`;
    tableHTML += `<td>${rowData.Description}</td>`;
    tableHTML += `<td>${rowData.Usage}</td>`;
    tableHTML += "</tr>";
  });

  tableHTML += "</table>";
  return tableHTML;
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
