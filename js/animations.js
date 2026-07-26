// js/animations.js

let observer = null;

function initScrollReveal() {
  if (observer) {
    observer.disconnect();
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
        
        // Trigger counter animation if it's a stat number
        if (entry.target.classList.contains('stat-number') || entry.target.querySelector('.stat-number')) {
          const counters = entry.target.querySelectorAll('.stat-number');
          const elementsToAnimate = counters.length > 0 ? counters : (entry.target.classList.contains('stat-number') ? [entry.target] : []);
          
          elementsToAnimate.forEach(counter => {
            if (!counter.hasAttribute('data-animated')) {
              animateCounter(counter);
            }
          });
        }
      }
    });
  }, options);

  observeElements();
  initScrollProgressBar();
}

function observeElements() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  reveals.forEach(el => observer.observe(el));
}

function refreshAnimations() {
  setTimeout(() => {
    observeElements();
    initFloatingShapes();
    updateScrollProgress();
  }, 100);
}

function initFloatingShapes() {
  const shapes = document.querySelectorAll('.floating-shape');
  shapes.forEach(shape => {
    const randomDelay = Math.random() * -5;
    const randomDuration = 5 + Math.random() * 5;
    shape.style.setProperty('--delay', `${randomDelay}s`);
    shape.style.setProperty('--duration', `${randomDuration}s`);
  });
}

function animateCounter(element) {
  element.setAttribute('data-animated', 'true');
  const target = parseInt(element.getAttribute('data-target'), 10);
  const suffix = element.getAttribute('data-suffix') || '';
  if (isNaN(target)) return;
  
  const duration = 1800;
  const stepTime = Math.max(15, Math.floor(duration / target));
  
  let current = 0;
  const timer = setInterval(() => {
    current += 1;
    element.textContent = current + suffix;
    if (current >= target) {
      clearInterval(timer);
      element.textContent = target + suffix;
    }
  }, stepTime);
}

function initScrollProgressBar() {
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();
}

function updateScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  if (!progressBar) return;
  
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = height > 0 ? (winScroll / height) : 0;
  
  // Set scaleX via inline transform for universal browser compatibility fallback
  progressBar.style.transform = `scaleX(${scrolled})`;
}

// Global scope
window.initScrollReveal = initScrollReveal;
window.refreshAnimations = refreshAnimations;
window.initFloatingShapes = initFloatingShapes;
