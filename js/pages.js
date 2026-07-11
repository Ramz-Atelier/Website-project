// js/pages.js

function renderHome() {
  const shapesHTML = `
    <div class="floating-shape shape-circle" style="top: 15%; left: 10%; --delay: 0s; --duration: 8s;"></div>
    <div class="floating-shape shape-hexagon shape-outline" style="top: 20%; right: 15%; --delay: -2s; --duration: 7s;"></div>
    <div class="floating-shape shape-square" style="bottom: 25%; left: 15%; --delay: -4s; --duration: 9s;"></div>
    <div class="floating-shape shape-circle shape-outline" style="bottom: 20%; right: 10%; --delay: -1s; --duration: 6s; transform: scale(0.6);"></div>
    <div class="floating-shape shape-hexagon" style="top: 50%; left: 5%; --delay: -5s; --duration: 10s; transform: scale(0.5); opacity: 0.2;"></div>
  `;

  return `
    <section class="hero page-enter">
      ${shapesHTML}
      <div class="container hero-container">
        <div class="hero-content">
          <span class="hero-greeting reveal">${PROFILE.greeting}</span>
          <h1 class="hero-name reveal" style="animation-delay: 100ms;">${PROFILE.name}</h1>
          <h2 class="hero-title reveal" style="animation-delay: 200ms;">${PROFILE.title}</h2>
          <p class="hero-description reveal" style="animation-delay: 300ms;">${PROFILE.tagline}</p>
          <div class="hero-buttons reveal" style="animation-delay: 400ms;">
            <a href="#projects" class="btn btn-primary">View Projects</a>
            <a href="assets/resume/resume.pdf" class="btn btn-secondary" target="_blank" download>Download Resume</a>
            <a href="#contact" class="btn btn-ghost">Contact Me</a>
          </div>
        </div>
        <div class="hero-visual reveal-scale" style="animation-delay: 200ms;">
          <img src="assets/images/hero_illustration.png" alt="Abstract Workspace" class="hero-image" loading="eager" fetchpriority="high" width="600" height="400">
        </div>
      </div>
    </section>
  `;
}

function renderAbout() {
  const bioParagraphs = PROFILE.bio.map(p => `<p>${p}</p>`).join('');
  const statsHTML = PROFILE.stats.map((stat, i) => `
    <div class="stat-item">
      <span class="stat-number" data-target="${stat.number}" data-suffix="${stat.suffix}">0${stat.suffix}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');
  const interestsHTML = INTERESTS.map((interest, i) => createInterestCard(interest, i)).join('');

  return `
    <div class="page-enter">
      <section class="section about-bio container">
        <div class="section-header reveal">
          <h2 class="section-title">About Me</h2>
          <div style="width: 60px; height: 4px; background-color: var(--accent-sage); margin: 0 auto; border-radius: 2px;"></div>
        </div>
        
        <div class="bio-card card reveal">
          <div class="bio-image">
            <i data-lucide="user" style="width: 80px; height: 80px; opacity: 0.5;"></i>
          </div>
          <div class="bio-text">
            ${bioParagraphs}
          </div>
        </div>
      </section>
      
      <section class="container" style="margin-bottom: 80px;">
        <div class="stats-bar reveal">
          ${statsHTML}
        </div>
      </section>
      
      <section class="section container" style="padding-top: 0;">
        <div class="section-header reveal">
          <h2 class="section-title">Areas of Interest</h2>
          <p class="section-subtitle">Core competencies and passions that drive my professional growth.</p>
        </div>
        <div class="grid-5 interests-grid">
          ${interestsHTML}
        </div>
      </section>
    </div>
  `;
}

function renderProjects() {
  const categories = ['All', 'Automation', 'Data Analytics', 'Project Management', 'Process Improvement', 'AI'];
  const filtersHTML = createFilterChips(categories, 'All');
  const projectsHTML = PROJECTS.map((proj, i) => createProjectCard(proj, i)).join('');

  return `
    <div class="page-enter">
      <section class="section container">
        <div class="section-header reveal">
          <h2 class="section-title">Projects & Portfolio</h2>
          <p class="section-subtitle">A selection of my recent work driving operational excellence and digital transformation.</p>
        </div>
        
        <div class="reveal" style="display: flex; justify-content: center;">
          ${filtersHTML}
        </div>
        
        <div class="grid flex-column" style="gap: 48px;" id="projects-grid">
          ${projectsHTML}
        </div>
      </section>
    </div>
  `;
}

function renderCertifications() {
  const categories = ['All', 'Project Management', 'Data Analytics', 'Process Improvement', 'Automation', 'AI'];
  const filtersHTML = createFilterChips(categories, 'All');
  const certsHTML = CERTIFICATIONS.map((cert, i) => createCertCard(cert, i)).join('');

  return `
    <div class="page-enter">
      <section class="section container">
        <div class="section-header reveal">
          <h2 class="section-title">Certifications & Credentials</h2>
          <p class="section-subtitle">Continuous learning and professional development.</p>
        </div>
        
        <div class="reveal" style="display: flex; justify-content: center;">
          ${filtersHTML}
        </div>
        
        <div class="certs-flex-grid" id="certs-grid">
          ${certsHTML}
        </div>
      </section>
    </div>
  `;
}

function renderContact() {
  const c = PROFILE.contact;
  
  return `
    <div class="page-enter">
      <section class="section container">
        <div class="section-header reveal">
          <h2 class="section-title">Get in Touch</h2>
          <p class="section-subtitle">Have a project in mind or want to discuss operations excellence? I'd love to hear from you.</p>
        </div>
        
        <div class="contact-container">
          <div class="contact-info">
            ${createContactItem('mail', 'Email', c.email, `mailto:${c.email}`)}
            ${createContactItem('map-pin', 'Location', c.location)}
            ${createContactItem('linkedin', 'LinkedIn', 'linkedin.com/in/thulasiram-r', c.linkedin)}
            ${createContactItem('github', 'GitHub', 'github.com/ProjectManager-IND', c.github)}
            
            </div>
          
          <div class="card contact-form-container reveal">
            <h3 class="section-title" style="font-size: 1.5rem;">Send a Message</h3>
            ${createContactForm()}
          </div>
        </div>
      </section>
    </div>
  `;
}
function renderArticles() {
  const articlesHTML = INSIGHTS.map((insight, i) => createInsightCard(insight, i)).join('');

  return `
    <div class="page-enter">
      <section class="section container">
        <div class="section-header reveal">
          <h2 class="section-title">Articles & Insights</h2>
          <p class="section-subtitle">Thoughts on operations excellence, project management, automation, and data-driven decision making — originally published on LinkedIn.</p>
        </div>
        
        <div id="articles-grid">
          ${articlesHTML}
        </div>
        
        <div class="reveal" style="text-align: center; margin-top: 64px;">
          <a href="https://www.linkedin.com/in/thulasiram-r/" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 14px 32px;">
            <i data-lucide="linkedin" style="width: 18px; height: 18px;"></i> Follow me on LinkedIn for more
          </a>
        </div>
      </section>
    </div>
  `;
}

window.renderHome = renderHome;
window.renderAbout = renderAbout;
window.renderProjects = renderProjects;
window.renderCertifications = renderCertifications;
window.renderArticles = renderArticles;
window.renderContact = renderContact;
