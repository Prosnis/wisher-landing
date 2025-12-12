const demoModal = document.getElementById('demo-modal');
const playDemoBtn = document.getElementById('play-demo');
const betaForm = document.getElementById('beta-form');

if (playDemoBtn && demoModal) {
  const closeElements = demoModal.querySelectorAll('[data-close]');

  function openModal() {
    demoModal.setAttribute('data-open', 'true');
    demoModal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    demoModal.setAttribute('data-open', 'false');
    demoModal.setAttribute('aria-hidden', 'true');
  }

  playDemoBtn.addEventListener('click', openModal);

  closeElements.forEach((el) => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

if (betaForm) {
  betaForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = betaForm.querySelector('input[type="email"]');

    if (emailInput && emailInput.value) {
      betaForm.reset();
      alert('Спасибо! Мы сообщим, когда Wisher будет доступен.');
    }
  });
}
