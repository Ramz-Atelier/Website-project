// js/app.js

const routes = {
  '#home': renderHome,
  '#about': renderHome,
  '#projects': renderProjects,
  '#certifications': renderCertifications,
  '#article': renderArticles,
  '#contact': renderContact
};

function navigateTo(hash) {
  const targetHash = hash || '#home';
  const renderFunc = routes[targetHash] || routes['#home'];
  
  const contentDiv = document.getElementById('page-content');
  
  if (contentDiv.innerHTML.trim() !== '') {
    contentDiv.classList.remove('page-enter');
    contentDiv.classList.add('page-exit');
    
    setTimeout(() => {
      renderAndInit(renderFunc, targetHash);
    }, 250);
  } else {
    renderAndInit(renderFunc, targetHash);
  }
}

function renderAndInit(renderFunc, hash) {
  const contentDiv = document.getElementById('page-content');
  
  contentDiv.innerHTML = renderFunc();
  contentDiv.classList.remove('page-exit');
  
  requestAnimationFrame(() => {
    contentDiv.classList.add('page-enter');
  });
  
  updateActiveNav(hash);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  if (window.lucide) {
    lucide.createIcons();
  }
  
  if (window.refreshAnimations) {
    window.refreshAnimations();
  }
  
  bindPageEvents(hash);
}

function updateActiveNav(hash) {
  let cleanHash = hash || '#home';
  if (cleanHash === '#about') cleanHash = '#home';
  
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === cleanHash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  const mobileMenu = document.querySelector('.nav-mobile');
  const hamburger = document.querySelector('.hamburger');
  if (mobileMenu) mobileMenu.classList.remove('open');
  if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
}

function bindPageEvents(hash) {
  if (hash === '#projects') {
    bindFilterEvents('#projects-grid', '.project-card');
    bindModalEvents();
  } else if (hash === '#certifications') {
    bindFilterEvents('#certs-grid', '.cert-card');
  }
}

function bindFilterEvents(gridSelector, itemClass) {
  const chips = document.querySelectorAll('.chip-group .chip');
  const items = document.querySelectorAll(itemClass);
  
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      chips.forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      
      const filter = e.target.getAttribute('data-filter');
      
      items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.96)';
      });
      
      setTimeout(() => {
        items.forEach(item => {
          if (filter === 'All' || item.getAttribute('data-category') === filter) {
            item.style.display = 'flex';
            setTimeout(() => {
              item.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.display = 'none';
          }
        });
      }, 250);
    });
  });
}

function bindModalEvents() {
  const buttons = document.querySelectorAll('.open-project');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      openModal(id);
    });
  });
}

function openModal(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;
  
  const container = document.getElementById('modal-container');
  container.innerHTML = `<div class="modal" id="projectModal">${createProjectModal(project)}</div>`;
  
  if (window.lucide) {
    lucide.createIcons();
  }
  
  const modal = document.getElementById('projectModal');
  
  requestAnimationFrame(() => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  document.addEventListener('keydown', handleEscapeKey);
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    setTimeout(() => {
      document.getElementById('modal-container').innerHTML = '';
    }, 250);
    
    document.removeEventListener('keydown', handleEscapeKey);
  }
}

function handleEscapeKey(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

window.handleFormSubmit = function(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  
  btn.innerHTML = 'Sending...';
  btn.disabled = true;
  
  const formData = new FormData(form);
  
  fetch('https://formsubmit.co/ajax/writeto.ram02@gmail.com', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    form.querySelectorAll('.form-group').forEach(fg => {
      fg.style.display = 'none';
    });
    btn.style.display = 'none';
    
    const success = document.getElementById('formSuccess');
    if (success) success.classList.add('active');
  })
  .catch(error => {
    console.error('Error:', error);
    btn.innerHTML = originalText;
    btn.disabled = false;
    alert('Thank you! Your message has been sent successfully.');
    form.reset();
  });
};

window.resetForm = function() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.reset();
  
  const success = document.getElementById('formSuccess');
  if (success) success.classList.remove('active');
  
  form.querySelectorAll('.form-group').forEach(fg => {
    fg.style.display = 'block';
  });
  
  const btn = form.querySelector('button[type="submit"]');
  if (btn) {
    btn.style.display = 'inline-flex';
    btn.innerHTML = 'Send Message <i data-lucide="send" style="width: 16px; height: 16px;"></i>';
    btn.disabled = false;
  }
  
  if (window.lucide) {
    lucide.createIcons();
  }
};

window.closeModal = closeModal;

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', !isOpen);
    });
  }
  
  window.addEventListener('hashchange', () => {
    navigateTo(window.location.hash);
  });
  
  const backToTopBtn = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      if (backToTopBtn) backToTopBtn.classList.add('visible');
    } else {
      if (backToTopBtn) backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });
  
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  if (window.initTheme) {
    initTheme();
  }
  
  navigateTo(window.location.hash || '#home');
  
  if (window.initScrollReveal) {
    initScrollReveal();
  }
});
