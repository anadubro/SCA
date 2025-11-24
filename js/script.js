const track = document.querySelector('.carousel-track');
let offset = 0;
const speed = 1;

const singleWidth = track.scrollWidth / 2;

function animate() {
  offset -= speed;

  if (Math.abs(offset) >= singleWidth) {
    offset = 0;
  }

  track.style.transform = `translateX(${offset}px)`;
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
