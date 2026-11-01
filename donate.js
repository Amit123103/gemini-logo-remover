const thanksButton = document.getElementById('donate-thanks-button');
const thanksMessage = document.getElementById('donate-thanks-message');
const confettiLayer = document.getElementById('donate-confetti-layer');

const confettiColors = ['#d7ff63', '#b6e96c', '#9ac8ef', '#e7b6f2', '#f4d47b'];

function celebrateSupport() {
  thanksMessage.hidden = false;
  thanksButton.disabled = true;
  thanksButton.innerHTML = '<iconify-icon icon="ph:heart-fill" width="18"></iconify-icon> Thank you!';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const fragment = document.createDocumentFragment();
  for (let index = 0; index < 64; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'donate-confetti';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty('--confetti-color', confettiColors[index % confettiColors.length]);
    piece.style.setProperty('--confetti-drift', `${Math.round(Math.random() * 220 - 110)}px`);
    piece.style.setProperty('--confetti-spin', `${Math.round(Math.random() * 1080 - 540)}deg`);
    piece.style.setProperty('--confetti-delay', `${Math.random() * 0.65}s`);
    piece.style.setProperty('--confetti-duration', `${2.1 + Math.random() * 1.4}s`);
    fragment.appendChild(piece);
  }

  confettiLayer.replaceChildren(fragment);
  window.setTimeout(() => confettiLayer.replaceChildren(), 4200);
}

thanksButton.addEventListener('click', celebrateSupport);
