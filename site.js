(() => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  const openLightbox = (src, title, medium) => {
    if (!lightbox || !lightboxImg || !lightboxCaption) return;
    lightboxImg.src = src;
    lightboxImg.alt = title || 'Gallery image';
    lightboxCaption.textContent = [title, medium].filter(Boolean).join(' / ');
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  };

  if (galleryItems.length) {
    galleryItems.forEach((item) => {
      item.addEventListener('click', () => {
        const src = item.getAttribute('data-full');
        const title = item.getAttribute('data-title');
        const medium = item.getAttribute('data-medium');
        if (src) openLightbox(src, title, medium);
      });
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });

  const bubble = document.getElementById('dream-bubble');
  if (bubble) {
    const bubbleText = bubble.querySelector('.bubble-text');
    const messages = [
      'Just keep swimming... or floating.',
      'Make a wish.',
      'Tell me a secret?'
    ];
    let index = 0;

    bubble.addEventListener('click', () => {
      index = (index + 1) % messages.length;
      if (bubbleText) bubbleText.textContent = messages[index];
      bubble.classList.add('bubble-pop');
      window.setTimeout(() => bubble.classList.remove('bubble-pop'), 220);
    });
  }
})();
