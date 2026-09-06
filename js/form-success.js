// Overrides the default "Thank you!" text @formspree/ajax injects into
// [data-fs-success] with a message tailored to Lulu ITS.
(function () {
  const successEl = document.querySelector('#contactForm [data-fs-success]');
  if (!successEl) return;

  function renderCustomMessage() {
    successEl.textContent = '';

    const line = document.createTextNode('Thanks for your enquiry — our team will get back to you soon. If you need quick support, please call ');
    const phone = document.createElement('a');
    phone.href = 'tel:+971502372484';
    phone.textContent = '+971 50 237 2484';
    const end = document.createTextNode('.');

    successEl.append(line, phone, end);
  }

  const observer = new MutationObserver(() => {
    if (successEl.textContent.trim() && !successEl.querySelector('a')) {
      observer.disconnect();
      renderCustomMessage();
      observer.observe(successEl, { childList: true, characterData: true, subtree: true });
    }
  });

  observer.observe(successEl, { childList: true, characterData: true, subtree: true });
})();
