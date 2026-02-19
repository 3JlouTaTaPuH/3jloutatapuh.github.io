// Отслеживаем, когда элемент появляется на экране
const faders = document.querySelectorAll('.fade-text');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.5 });

faders.forEach(fader => {
  observer.observe(fader);
});
