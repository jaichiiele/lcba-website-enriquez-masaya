const sliders = {};
function initSlider(id) {
  sliders[id] = 1;
  renderSlide(id);
}

function renderSlide(id) {
  const container = document.getElementById(id + 'Slider');
  const slides = container.querySelectorAll('.mySlides');
  const dotsEl = document.getElementById(id + '-dots');
  let idx = sliders[id];
  if (idx > slides.length) sliders[id] = idx = 1;
  if (idx < 1) sliders[id] = idx = slides.length;
  slides.forEach((s, i) => s.style.display = i === idx - 1 ? 'block' : 'none');
  if (dotsEl) {
    Array.from(dotsEl.querySelectorAll('.dot')).forEach((d, i) => d.classList.toggle('active', i === idx - 1));
  }
}

function changeSlide(id, n) {
    sliders[id] = (sliders[id] || 1) + n; renderSlide(id);
}

function goSlide(id, n) {
    sliders[id] = n; renderSlide(id);
}

initSlider('abm');