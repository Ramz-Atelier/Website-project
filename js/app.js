// js/app.js

const routes = {
  '#home': renderHome,
  '#about': renderAbout,
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
    }, 300);
  } else {
    renderAndInit(renderFunc, targetHash);
  }
}

function renderAndInit(renderFunc, hash) {
  const contentDiv = document.getElementById('page-content');
  
  contentDiv.innerHTML = renderFunc();
  contentDiv.classList.remove('page-exit');
  
  // Need slight delay for browser to register new DOM before animation class
  requestAnimationFrame(() => {
    contentDiv.classList.add('page-enter');
  });
  
  updateActiveNav(hash);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Initialize newly rendered elements
  if (window.lucide) {
    lucide.createIcons();
  }
  
  if (window.refreshAnimations) {
    window.refreshAnimations();
  }
  
  bindPageEvents(hash);
}

function updateActiveNav(hash) {
  const cleanHash = hash || '#home';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === cleanHash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Close mobile menu if open
  document.querySelector('.nav-mobile').classList.remove('open');
  document.querySelector('.hamburger').setAttribute('aria-expanded', 'false');
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
  const grid = document.querySelector(gridSelector);
  
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      // Update active chip
      chips.forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      
      const filter = e.target.getAttribute('data-filter');
      
      // Animate out
      items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.95)';
      });
      
      setTimeout(() => {
        let visibleCount = 0;
        items.forEach(item => {
          if (filter === 'All' || item.getAttribute('data-category') === filter) {
            item.style.display = 'flex';
            
            // Need a slight delay to allow display block to register before animating in
            setTimeout(() => {
              item.style.transition = 'all 0.4s ease';
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
            
            visibleCount++;
          } else {
            item.style.display = 'none';
          }
        });
      }, 300);
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
  
  // Small delay to allow DOM to render before adding active class for transition
  requestAnimationFrame(() => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  });
  
  // Close on Escape key
  document.addEventListener('keydown', handleEscapeKey);
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Remove after animation completes
    setTimeout(() => {
      document.getElementById('modal-container').innerHTML = '';
    }, 300);
    
    document.removeEventListener('keydown', handleEscapeKey);
  }
}

function handleEscapeKey(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

// Global functions for form handling
window.handleFormSubmit = function(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  
  // Basic simulation of sending
  btn.innerHTML = 'Sending...';
  btn.disabled = true;
  
  setTimeout(() => {
    // Hide form fields (all .form-group except the button, or just all inputs)
    form.querySelectorAll('.form-group').forEach(fg => {
      fg.style.display = 'none';
    });
    
    const success = document.getElementById('formSuccess');
    success.classList.add('active');
  }, 1000);
};

window.resetForm = function() {
  const form = document.getElementById('contactForm');
  form.reset();
  
  document.getElementById('formSuccess').classList.remove('active');
  
  form.querySelectorAll('.form-group').forEach(fg => {
    fg.style.display = 'block';
  });
  
  const btn = form.querySelector('button[type="submit"]');
  btn.innerHTML = 'Send Message <i data-lucide="send" style="width: 16px; height: 16px;"></i>';
  btn.disabled = false;
  
  if (window.lucide) {
    lucide.createIcons();
  }
};

window.closeModal = closeModal;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');
  
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', !isOpen);
  });
  
  // Handle Hash Changes
  window.addEventListener('hashchange', () => {
    navigateTo(window.location.hash);
  });
  
  // Back to Top Button
  const backToTopBtn = document.querySelector('.back-to-top');
  const nav = document.querySelector('.nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
    
    if (window.scrollY > 50) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Initialize Theme
  if (window.initTheme) {
    initTheme();
  }
  
  // Initial Route
  navigateTo(window.location.hash || '#home');
  
  // Initialize scroll reveal
  if (window.initScrollReveal) {
    initScrollReveal();
  }
});
