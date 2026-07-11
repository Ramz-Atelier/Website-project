// js/components.js

function createProjectCard(project, index) {
  const badgeHTML = `<span class="card-badge">${project.category}</span>`;
  
  const thumbnail = project.thumbnail 
    ? `<div class="project-thumbnail-wrapper">
         ${badgeHTML}
         <img src="${project.thumbnail}" alt="${project.title}" class="card-image" loading="lazy">
       </div>` 
    : `<div class="project-thumbnail-wrapper">
         ${badgeHTML}
         <img src="assets/images/project_placeholder.png" alt="${project.title}" class="card-image" loading="lazy">
       </div>`;
  
  const techTags = project.technologies.slice(0, 3).map(tech => `<span class="tag">${tech}</span>`).join('');
  const extraTech = project.technologies.length > 3 ? `<span class="tag">+${project.technologies.length - 3}</span>` : '';
  
  const metrics = project.metrics.slice(0, 2).map(m => `
    <div class="project-metric">
      <span class="project-stat-number">${m.value}</span>
      <span class="stat-label">${m.label}</span>
    </div>
  `).join('');

  const alignClass = index % 2 !== 0 ? 'project-card-reversed' : '';

  return `
    <article class="project-card card reveal stagger-item ${alignClass}" data-category="${project.category}" style="--i: ${index}">
      ${thumbnail}
      <div class="card-content">
        <h3 class="card-title" style="font-size: 1.2rem; margin-bottom: 8px;">${project.title}</h3>
        <p class="card-description" style="font-size: 0.875rem; margin-bottom: 16px; flex-grow: 0;">${project.shortDescription}</p>
        <div class="card-tags" style="margin-bottom: 16px;">
          ${techTags}
          ${extraTech}
        </div>
        <div class="project-metrics" style="margin-bottom: 16px; padding-top: 16px;">
          ${metrics}
        </div>
        <div class="card-actions">
          <button class="btn btn-ghost open-project" data-id="${project.id}" style="padding: 6px 12px; font-size: 0.9rem;">
            View Details <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

function createCertCard(cert, index) {
  const skillsTags = cert.skills.map(skill => `<span class="tag">${skill}</span>`).join('');
  
  return `
    <article class="cert-card card reveal stagger-item" data-category="${cert.category}" style="--i: ${index}">
      <div class="cert-badge">
        <i data-lucide="${cert.icon}"></i>
      </div>
      <h3 class="card-title" style="font-size: 1.05rem; margin-bottom: 6px; line-height: 1.3;">${cert.title}</h3>
      <p class="cert-org" style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 10px;">${cert.organization}</p>
      <div class="cert-skills" style="margin-top: auto; margin-bottom: 12px;">
        ${skillsTags}
      </div>
      <p class="cert-date" style="font-size: 0.8rem; margin-bottom: 0;">Issued: ${cert.date} <br> ID: ${cert.credentialId}</p>
    </article>
  `;
}

function createInterestCard(interest, index) {
  return `
    <div class="interest-card card reveal stagger-item" style="--i: ${index}">
      <div class="interest-icon">
        <i data-lucide="${interest.icon}"></i>
      </div>
      <h3 class="card-title" style="font-size: 1rem; margin-bottom: 6px; line-height: 1.3;">${interest.title}</h3>
      <p class="card-description" style="font-size: 0.8125rem; margin-bottom: 0;">${interest.description}</p>
    </div>
  `;
}

function createProjectModal(project) {
  const techTags = project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('');
  const toolsTags = project.toolsUsed.map(tool => `<span class="tag">${tool}</span>`).join('');
  const skillsTags = project.skillsDemonstrated.map(skill => `<span class="tag">${skill}</span>`).join('');
  
  const objectivesList = project.objectives.map(obj => `<li>${obj}</li>`).join('');
  const resultsList = project.results.map(res => `<li><i data-lucide="check-circle-2" style="width: 16px; height: 16px; color: var(--accent-sage); margin-right: 8px; vertical-align: text-bottom;"></i>${res}</li>`).join('');
  const lessonsList = project.lessonsLearned.map(lesson => `<li>${lesson}</li>`).join('');
  
  const metrics = project.metrics.map(m => `
    <div class="stat-item">
      <span class="stat-number">${m.value}</span>
      <span class="stat-label">${m.label}</span>
    </div>
  `).join('');

  return `
    <div class="modal-overlay" onclick="closeModal()"></div>
    <div class="modal-content">
      <button class="btn-icon modal-close" onclick="closeModal()" aria-label="Close modal">
        <i data-lucide="x"></i>
      </button>
      
      <div class="modal-header">
        <span class="card-badge">${project.category}</span>
        <h2 class="card-title">${project.title}</h2>
        <div class="card-tags">
          ${techTags}
        </div>
      </div>
      
      <div class="modal-body">
        <div class="modal-section">
          <h3>Overview</h3>
          <p>${project.description}</p>
          <p><strong>Timeline:</strong> ${project.timeline}</p>
        </div>
        
        <div class="grid-2" style="margin-bottom: 40px; gap: 40px;">
          <div class="modal-section" style="margin-bottom: 0;">
            <h3>Problem Statement</h3>
            <p>${project.problem}</p>
          </div>
          <div class="modal-section" style="margin-bottom: 0;">
            <h3>Objectives</h3>
            <ul style="list-style-type: none; padding-left: 0;">
              ${objectivesList}
            </ul>
          </div>
        </div>
        
        <div class="modal-section">
          <h3>Approach & Implementation</h3>
          <p>${project.approach}</p>
          <p>${project.implementation}</p>
        </div>
        
        <div class="modal-section">
          <h3>Key Results</h3>
          <div class="stats-bar" style="margin-bottom: 32px; padding: 32px;">
            ${metrics}
          </div>
          <ul style="list-style-type: none; padding-left: 0;">
            ${resultsList}
          </ul>
        </div>
        
        <div class="grid-2" style="gap: 40px;">
          <div class="modal-section">
            <h3>Challenges Overcome</h3>
            <p>${project.challenges}</p>
          </div>
          <div class="modal-section">
            <h3>Lessons Learned</h3>
            <ul>
              ${lessonsList}
            </ul>
          </div>
        </div>
        
        <div class="modal-section">
          <h3>Business Impact</h3>
          <p><strong>${project.businessImpact}</strong></p>
        </div>
        
        <div class="modal-section">
          <h3>Tools & Skills</h3>
          <div class="card-tags" style="margin-bottom: 16px;">
            <strong>Tools:</strong> ${toolsTags}
          </div>
          <div class="card-tags">
            <strong>Skills:</strong> ${skillsTags}
          </div>
        </div>
      </div>
    </div>
  `;
}

function createFilterChips(categories, activeCategory = 'All') {
  const chips = categories.map(cat => `
    <button class="chip ${cat === activeCategory ? 'active' : ''}" data-filter="${cat}">
      ${cat}
    </button>
  `).join('');
  
  return `<div class="chip-group">${chips}</div>`;
}

function createContactItem(icon, label, value, href = '#') {
  const content = href !== '#' ? `<a href="${href}" class="contact-value" target="_blank" rel="noopener noreferrer">${value}</a>` : `<span class="contact-value">${value}</span>`;
  
  return `
    <div class="contact-item reveal stagger-item">
      <div class="contact-icon">
        <i data-lucide="${icon}"></i>
      </div>
      <div class="contact-text">
        <span class="contact-label">${label}</span>
        ${content}
      </div>
    </div>
  `;
}

function createContactForm() {
  return `
    <form id="contactForm" class="contact-form" onsubmit="handleFormSubmit(event)">
      <div class="form-group reveal stagger-item" style="--i: 0;">
        <input type="text" id="name" name="name" class="form-input" placeholder=" " required>
        <label for="name" class="form-label">Name</label>
      </div>
      <div class="form-group reveal stagger-item" style="--i: 1;">
        <input type="email" id="email" name="email" class="form-input" placeholder=" " required>
        <label for="email" class="form-label">Email</label>
      </div>
      <div class="form-group reveal stagger-item" style="--i: 2;">
        <input type="text" id="subject" name="subject" class="form-input" placeholder=" " required>
        <label for="subject" class="form-label">Subject</label>
      </div>
      <div class="form-group reveal stagger-item" style="--i: 3;">
        <textarea id="message" name="message" class="form-textarea" placeholder=" " required></textarea>
        <label for="message" class="form-label">Message</label>
      </div>
      <!-- Honeypot -->
      <input type="text" name="_gotcha" style="display:none">
      
      <div class="form-group reveal stagger-item" style="--i: 4;">
        <button type="submit" class="btn btn-primary" style="width: 100%;">
          Send Message <i data-lucide="send" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      
      <div class="form-success" id="formSuccess">
        <i data-lucide="check-circle" style="width: 64px; height: 64px; color: var(--accent-sage); margin-bottom: 16px;"></i>
        <h3 style="font-family: var(--font-heading); margin-bottom: 8px;">Message Sent!</h3>
        <p style="color: var(--text-secondary);">Thank you for reaching out. I'll get back to you shortly.</p>
        <button type="button" class="btn btn-ghost" onclick="resetForm()" style="margin-top: 24px;">Send another message</button>
      </div>
    </form>
  `;
}
function createInsightCard(insight, index) {
  const thumbnailHTML = insight.thumbnail
    ? `<img src="${insight.thumbnail}" alt="${insight.title}" class="insight-thumbnail-img" loading="lazy">`
    : `<div class="insight-icon-wrapper">
        <i data-lucide="${insight.icon}"></i>
      </div>`;

  return `
    <article class="insight-card card reveal stagger-item" data-category="${insight.category}" style="--i: ${index}">
      <div class="insight-thumbnail-wrapper">
        ${thumbnailHTML}
      </div>
      <div class="insight-content">
        <div class="insight-meta">
          <span class="tag">${insight.category}</span>
          <span class="insight-date">${insight.date}</span>
        </div>
        <h3 class="card-title insight-title">${insight.title}</h3>
        <p class="card-description insight-desc">${insight.excerpt}</p>
        <div class="insight-card-footer">
          <span class="insight-read-time">
            <i data-lucide="clock" style="width: 14px; height: 14px; vertical-align: middle;"></i> 
            ${insight.readTime}
          </span>
          <a href="${insight.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost insight-read-link" style="padding: 4px 10px; font-size: 0.8rem; height: auto;">
            Read <i data-lucide="external-link" style="width: 12px; height: 12px; margin-left: 2px;"></i>
          </a>
        </div>
      </div>
    </article>
  `;
}

window.createProjectCard = createProjectCard;
window.createCertCard = createCertCard;
window.createInterestCard = createInterestCard;
window.createInsightCard = createInsightCard;
window.createProjectModal = createProjectModal;
window.createFilterChips = createFilterChips;
window.createContactItem = createContactItem;
window.createContactForm = createContactForm;
