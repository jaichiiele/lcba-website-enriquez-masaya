let idx = 1;
function render() {
  const slides = document.querySelectorAll('.mySlides');
  const dots = document.querySelectorAll('.dot');
  if (idx > slides.length) idx = 1;
  if (idx < 1) idx = slides.length;
  slides.forEach((s, i) => s.style.display = i === idx - 1 ? 'block' : 'none');
  dots.forEach((d, i) => d.classList.toggle('active', i === idx - 1));
}

function changeSlide(n) {
    idx += n; render();
}

function goSlide(n) {
    idx = n; render();
}

render();