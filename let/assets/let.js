(function () {
  // Navigation toggle
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navPanel = document.querySelector('[data-nav-panel]');

  if (navToggle && navPanel) {
    navToggle.addEventListener('click', () => {
      const isOpen = navPanel.getAttribute('data-open') === 'true';
      const nextOpen = !isOpen;
      navPanel.setAttribute('data-open', String(nextOpen));
      navPanel.classList.toggle('hidden', !nextOpen);
      navToggle.setAttribute('aria-expanded', String(nextOpen));
    });
  }

  // Scroll reveal animation with Intersection Observer
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optionally unobserve after animation
          // revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // Parallax effect for floating elements
  const floatingElements = document.querySelectorAll('.float, .float-delayed');

  if (floatingElements.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          floatingElements.forEach((el, index) => {
            const speed = index % 2 === 0 ? 0.3 : -0.2;
            el.style.transform = `translateY(${scrollY * speed}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // Filter buttons and cards
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const cards = Array.from(document.querySelectorAll('[data-card-category]'));

  // Lightbox functionality
  const lightbox = document.querySelector('[data-lightbox]');
  const lightboxImg = document.querySelector('[data-lightbox-img]');
  const lightboxMedia = document.querySelector('[data-lightbox-media]');
  const lightboxClose = document.querySelector('[data-lightbox-close]');

  const isVideoSrc = (src) => {
    const s = String(src || '').toLowerCase();
    return s.endsWith('.mp4') || s.endsWith('.webm') || s.endsWith('.ogg');
  };

  const openLightbox = (src, alt) => {
    if (!lightbox || !lightboxMedia) return;

    lightboxMedia.innerHTML = '';

    if (isVideoSrc(src)) {
      const video = document.createElement('video');
      video.className = 'lightbox-video';
      video.setAttribute('controls', '');
      video.setAttribute('playsinline', '');
      video.src = src;
      lightboxMedia.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.className = 'lightbox-img';
      img.src = src;
      img.alt = alt || 'Preview';
      lightboxMedia.appendChild(img);
    }

    lightbox.setAttribute('data-open', 'true');
    document.documentElement.classList.add('overflow-hidden');
  };

  const closeLightbox = () => {
    if (!lightbox || !lightboxMedia) return;
    lightbox.setAttribute('data-open', 'false');
    lightboxMedia.innerHTML = '';
    document.documentElement.classList.remove('overflow-hidden');
  };

  if (lightbox) {
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const trigger = target.closest('[data-lightbox-src]');
      if (trigger) {
        e.preventDefault();
        const src = trigger.getAttribute('data-lightbox-src');
        const alt = trigger.getAttribute('data-lightbox-alt') || trigger.getAttribute('aria-label') || '';
        if (src) openLightbox(src, alt);
        return;
      }

      const isBackdrop = target.matches('[data-lightbox]');
      if (isBackdrop) {
        closeLightbox();
      }
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // Filter functionality
  if (filterButtons.length && cards.length) {
    const setActive = (btn) => {
      for (const b of filterButtons) {
        b.classList.remove('bg-slate-800', 'text-slate-50', 'border-slate-600');
        b.classList.add('bg-transparent', 'text-slate-200', 'border-white/10');
        b.setAttribute('aria-pressed', 'false');
      }
      btn.classList.add('bg-slate-800', 'text-slate-50', 'border-slate-600');
      btn.classList.remove('bg-transparent', 'text-slate-200', 'border-white/10');
      btn.setAttribute('aria-pressed', 'true');
    };

    const applyFilter = (value) => {
      for (const card of cards) {
        const cat = card.getAttribute('data-card-category');
        const show = value === 'all' ? true : cat === value;
        card.classList.toggle('hidden', !show);
      }
    };

    for (const btn of filterButtons) {
      btn.addEventListener('click', () => {
        const value = btn.getAttribute('data-filter') || 'all';
        setActive(btn);
        applyFilter(value);
      });
    }

    const defaultBtn = filterButtons.find((b) => (b.getAttribute('data-filter') || 'all') === 'all') || filterButtons[0];
    if (defaultBtn) {
      setActive(defaultBtn);
      applyFilter(defaultBtn.getAttribute('data-filter') || 'all');
    }

    // Keyboard shortcuts for filters
    document.addEventListener('keydown', (e) => {
      const mapping = {
        Digit1: 'all',
        Digit2: 'uiux',
        Digit3: 'motion',
        Digit4: 'graphic',
        Digit5: 'web',
      };

      const val = mapping[e.code];
      if (!val) return;

      const btn = filterButtons.find((b) => (b.getAttribute('data-filter') || 'all') === val);
      if (!btn) return;

      btn.click();
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add magnetic effect to cards on mouse move
  const magneticCards = document.querySelectorAll('.stat-card, .card-shadow');

  if (!window.matchMedia('(pointer: coarse)').matches) {
    magneticCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (y / rect.height) * -5;
        const rotateY = (x / rect.width) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }
})();
