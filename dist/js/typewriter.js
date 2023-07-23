class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

const navbar = document.getElementById('main-nav');
window.onscroll = () => {
  if (window.pageYOffset > 200) {
    navbar.classList.remove('top');
  } else {
    navbar.classList.add('top');
  }
};

function goToHome() {
  const currentPageURL = window.location.pathname;

  if (currentPageURL.endsWith('index.html')) {
    window.scrollTo(0, 0);
  } else {
    window.location.href = 'index.html';
  }
}

// pop-up images data
const itemsData = [
  {
    itemName: 'item1',
    header: 'Western',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
  },
  {
    itemName: 'item2',
    header: 'Traditional',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur`,
  },
  {
    itemName: 'item3',
    header: 'Vintage',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
  },
  {
    itemName: 'item4',
    header: 'Vintage',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
  },
  {
    itemName: 'item5',
    header: 'Vintage',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
  },
  {
    itemName: 'item6',
    header: 'Vintage',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
  },
  {
    itemName: 'item7',
    header: 'Vintage',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
  },
  {
    itemName: 'item8',
    header: 'Vintage',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
  },
  {
    itemName: 'item9',
    header: 'Vintage',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
  },
  {
    itemName: 'item10',
    header: 'Vintage',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
  },
  {
    itemName: 'item11',
    header: 'Vintage',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
  },
  {
    itemName: 'item12',
    header: 'Vintage',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore facilis, magni quidem explicabo nobis nulla delectus nam 
      tempora dolor rerum vero quisquam alias dolorem praesentium rem ad 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi? 
      quos hic doloremque voluptas. Beatae, omnis veritatis, cumque consequuntur 
      laboriosam illo quibusdam earum dicta in, quasi ad saepe? Rem repellendus 
      reprehenderit similique! Odit corporis doloribus natus itaque commodi?`,
  },
];

// pop-up image
function popUpData(event) {
  const active = 'active';
  const closeModalButtons = document.querySelector('[data-close-button]');
  const overlay = document.getElementById('overlay');
  const modal = document.getElementById('modal');
  const h2 = document.getElementById('modal-header-data');
  const p = document.getElementById('modal-description');
  const modalHeader = document.getElementById('modal-header');

  const clickedElement = event.target;
  const itemId = clickedElement.getAttribute('id');

  if (itemId != null) {
    const index = itemsData.findIndex((item) => item.itemName === itemId);
    const data = itemsData[index];
    modal.classList.add(active);
    overlay.classList.add(active);

    const imgElement = document.createElement('img');
    imgElement.classList.add('item-img');
    imgElement.src = `img/items/${data.itemName}.png`;
    console.log(`img/items/${data.itemName}.png`);
    imgElement.alt = 'Modal Image';
    modalHeader.appendChild(imgElement);

    h2.textContent = data.header;
    p.textContent = data.description;
  }

  closeModalButtons.addEventListener('click', () => {
    modal.classList.remove(active);
    overlay.classList.remove(active);
    modalHeader.innerHTML = '';
  });

  overlay.addEventListener('click', () => {
    modal.classList.remove(active);
    overlay.classList.remove(active);
    modalHeader.innerHTML = '';
  });
}
