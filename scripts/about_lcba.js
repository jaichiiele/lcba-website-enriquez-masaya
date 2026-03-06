const sliders = {};
function initSlider(id, count) {
  sliders[id] = 1;
  renderSlide(id, count);
}

function renderSlide(id, count) {
  const container = document.getElementById(id + 'Slider') || document.querySelector('.slideshow-container');
  const slides = container.querySelectorAll('.mySlides');
  const thumbs = document.getElementById(id + '-thumbs');
  const caption = document.getElementById(id + '-caption');
  let idx = sliders[id];
  if (idx > slides.length) sliders[id] = idx = 1;
  if (idx < 1) sliders[id] = idx = slides.length;
  slides.forEach((s, i) => s.style.display = i === idx - 1 ? 'block' : 'none');
  if (thumbs) {
    Array.from(thumbs.children).forEach((t, i) => t.classList.toggle('active', i === idx - 1));
    if (caption) caption.textContent = thumbs.children[idx - 1]?.alt || '';
  }
}

function changeSlide(id, n) {
    sliders[id] = (sliders[id] || 1) + n; renderSlide(id);
}

function goSlide(id, n) {
    sliders[id] = n; renderSlide(id);

}

initSlider('lcba', 6);