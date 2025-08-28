// Slideshow
let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 3000);

// Counter Animation
let countEl = document.getElementById('count');
let count = 0;
let target = 500; // Target count
let speed = 20;

let counter = setInterval(() => {
  if (count < target) {
    count += 5;
    countEl.textContent = count;
  } else {
    clearInterval(counter);
  }
}, speed);
