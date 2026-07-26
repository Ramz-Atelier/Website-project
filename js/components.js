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
        <h3 class="card-title" style="font-size: 1.25rem; margin-bottom: 10px;">${project.title}</h3>
        <p class="card-description" style="font-size: 0.9375rem; margin-bottom: 16px; flex-grow: 1;">${project.shortDescription}</p>
        <div class="card-tags" style="margin-bottom: 16px;">
          ${techTags}
          ${extraTech}
        </div>
        <div class="project-metrics" style="margin-bottom: 20px;">
          ${metrics}
        </div>
        <div class="card-actions" style="margin-top: auto;">
          <button class="btn btn-secondary open-project" data-id="${project.id}" style="padding: 8px 18px; font-size: 0.875rem;">
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
      <h3 class="card-title" style="font-size: 1.1rem; margin-bottom: 6px; line-height: 1.3;">${cert.title}</h3>
      <p class="cert-org" style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 12px; font-weight: 500;">${cert.organization}</p>
      <div class="card-tags" style="margin-top: auto; margin-bottom: 16px;">
        ${skillsTags}
      </div>
      <p class="cert-date" style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0; border-top: 1px solid var(--border-color); padding-top: 8px;">Issued: ${cert.date} ${cert.credentialId ? `<br>ID: ${cert.credentialId}` : ''}</p>
    </article>
  `;
}

function createInterestCard(interest, index) {
  return `
    <div class="interest-card card reveal stagger-item" style="--i: ${index}">
      <div class="interest-icon">
        <i data-lucide="${interest.icon}"></i>
      </div>
      <h3 class="card-title" style="font-size: 1.05rem; margin-bottom: 6px; line-height: 1.3;">${interest.title}</h3>
      <p class="card-description" style="font-size: 0.84rem; margin-bottom: 0;">${interest.description}</p>
    </div>
  `;
}

function createProjectModal(project) {
  const techTags = project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('');
  const toolsTags = project.toolsUsed.map(tool => `<span class="tag">${tool}</span>`).join('');
  const skillsTags = project.skillsDemonstrated.map(skill => `<span class="tag">${skill}</span>`).join('');
  
  const objectivesList = project.objectives.map(obj => `<li style="margin-bottom: 8px;"><i data-lucide="chevron-right" style="width:16px;height:16px;color:var(--accent-blue);vertical-align:middle;margin-right:6px;"></i>${obj}</li>`).join('');
  const resultsList = project.results.map(res => `<li style="margin-bottom: 8px;"><i data-lucide="check-circle-2" style="width: 16px; height: 16px; color: var(--accent-emerald); margin-right: 8px; vertical-align: middle;"></i>${res}</li>`).join('');
  const lessonsList = project.lessonsLearned.map(lesson => `<li style="margin-bottom: 8px;"><i data-lucide="lightbulb" style="width: 16px; height: 16px; color: var(--accent-amber); margin-right: 8px; vertical-align: middle;"></i>${lesson}</li>`).join('');
  
  const metrics = project.metrics.map(m => `
    <div class="stat-item" style="text-align: center;">
      <span class="stat-number" style="font-family: var(--font-heading); font-size: 2rem; font-weight: 800; color: var(--accent-blue); display: block;">${m.value}</span>
      <span class="stat-label" style="font-size: 0.8rem; color: var(--text-secondary);">${m.label}</span>
    </div>
  `).join('');

  return `
    <div class="modal-overlay" onclick="closeModal()"></div>
    <div class="modal-content">
      <button class="btn-icon modal-close" onclick="closeModal()" aria-label="Close modal">
        <i data-lucide="x"></i>
      </button>
      
      <div class="modal-header" style="margin-bottom: 24px;">
        <span class="tag" style="background: rgba(37,99,235,0.1); color: var(--accent-blue); font-weight: 600; margin-bottom: 12px; display: inline-block;">${project.category}</span>
        <h2 class="card-title" style="font-size: 1.8rem; margin-bottom: 12px;">${project.title}</h2>
        <div class="card-tags">
          ${techTags}
        </div>
      </div>
      
      <div class="modal-body" style="display: flex; flex-direction: column; gap: 24px;">
        <div class="modal-section" style="background: var(--bg-secondary); padding: 20px; border-radius: var(--radius-lg);">
          <h3 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--text-primary);">Project Overview</h3>
          <p style="font-size: 0.95rem; line-height: 1.6;">${project.description}</p>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px;"><strong>Timeline:</strong> ${project.timeline}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          <div class="modal-section">
            <h3 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--text-primary);">Problem Statement</h3>
            <p style="font-size: 0.92rem; line-height: 1.6;">${project.problem}</p>
          </div>
          <div class="modal-section">
            <h3 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--text-primary);">Objectives</h3>
            <ul style="list-style: none; padding-left: 0; font-size: 0.92rem;">
              ${objectivesList}
            </ul>
          </div>
        </div>

        <div class="modal-section" style="background: rgba(37,99,235,0.04); padding: 20px; border-radius: var(--radius-lg); border: 1px solid rgba(37,99,235,0.12);">
          <h3 style="font-size: 1.1rem; margin-bottom: 16px; color: var(--text-primary);">Measured Results</h3>
          <div style="display: flex; justify-content: space-around; gap: 16px; margin-bottom: 20px; flex-wrap: wrap;">
            ${metrics}
          </div>
          <ul style="list-style: none; padding-left: 0; font-size: 0.92rem;">
            ${resultsList}
          </ul>
        </div>
        
        <div class="modal-section">
          <h3 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--text-primary);">Approach & Implementation</h3>
          <p style="font-size: 0.92rem; line-height: 1.6; margin-bottom: 12px;">${project.approach}</p>
          <p style="font-size: 0.92rem; line-height: 1.6;">${project.implementation}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          <div class="modal-section">
            <h3 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--text-primary);">Challenges Overcome</h3>
            <p style="font-size: 0.92rem; line-height: 1.6;">${project.challenges}</p>
          </div>
          <div class="modal-section">
            <h3 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--text-primary);">Lessons Learned</h3>
            <ul style="list-style: none; padding-left: 0; font-size: 0.92rem;">
              ${lessonsList}
            </ul>
          </div>
        </div>
        
        <div class="modal-section" style="border-top: 1px solid var(--border-color); padding-top: 16px;">
          <h3 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--text-primary);">Business Impact</h3>
          <p style="font-size: 0.95rem; font-weight: 600; color: var(--accent-blue);">${project.businessImpact}</p>
        </div>
        
        <div class="modal-section" style="display: flex; flex-direction: column; gap: 10px;">
          <div class="card-tags">
            <strong style="font-size: 0.85rem; color: var(--text-primary); margin-right: 6px;">Tools Used:</strong> ${toolsTags}
          </div>
          <div class="card-tags">
            <strong style="font-size: 0.85rem; color: var(--text-primary); margin-right: 6px;">Skills Demonstrated:</strong> ${skillsTags}
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
  const content = href !== '#' ? `<a href="${href}" class="contact-value" style="font-weight: 600; color: var(--text-primary); text-decoration: none;" target="_blank" rel="noopener noreferrer">${value}</a>` : `<span class="contact-value" style="font-weight: 600; color: var(--text-primary);">${value}</span>`;
  
  return `
    <div class="contact-item reveal stagger-item">
      <div class="contact-icon-box">
        <i data-lucide="${icon}"></i>
      </div>
      <div class="contact-text">
        <span class="contact-label" style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 2px;">${label}</span>
        ${content}
      </div>
    </div>
  `;
}

function createContactForm() {
  return `
    <form id="contactForm" class="contact-form" onsubmit="handleFormSubmit(event)">
      <div class="form-group reveal stagger-item">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" class="form-control" placeholder="Your Full Name" required>
      </div>
      <div class="form-group reveal stagger-item">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" class="form-control" placeholder="your.email@example.com" required>
      </div>
      <div class="form-group reveal stagger-item">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" class="form-control" placeholder="Project Inquiry / Operations Excellence" required>
      </div>
      <div class="form-group reveal stagger-item">
        <label for="message">Message</label>
        <textarea id="message" name="message" class="form-control" placeholder="How can I help you achieve operational success?" required></textarea>
      </div>
      <!-- Honeypot -->
      <input type="text" name="_gotcha" style="display:none">
      
      <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 8px;">
        Send Message <i data-lucide="send" style="width: 16px; height: 16px;"></i>
      </button>
      
      <div class="form-success" id="formSuccess">
        <i data-lucide="check-circle-2" style="width: 48px; height: 48px; color: var(--accent-emerald); margin-bottom: 12px;"></i>
        <h3 style="font-family: var(--font-heading); margin-bottom: 8px; font-size: 1.25rem;">Message Sent!</h3>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Thank you for reaching out. I will respond to your message promptly.</p>
        <button type="button" class="btn btn-secondary" onclick="resetForm()" style="margin-top: 16px;">Send another message</button>
      </div>
    </form>
  `;
}

function createInsightCard(insight, index) {
  const thumbnailHTML = insight.thumbnail
    ? `<img src="${insight.thumbnail}" alt="${insight.title}" class="card-image" loading="lazy">`
    : `<div style="height: 180px; background: var(--bg-secondary); display: flex; align-items: center; justify-content: center; color: var(--accent-blue);">
        <i data-lucide="${insight.icon}" style="width: 48px; height: 48px;"></i>
      </div>`;

  return `
    <article class="insight-card card reveal stagger-item" data-category="${insight.category}" style="--i: ${index}">
      <div style="position: relative;">
        <span class="card-badge">${insight.category}</span>
        ${thumbnailHTML}
      </div>
      <div class="card-content">
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
          <span>${insight.date}</span>
          <span><i data-lucide="clock" style="width: 12px; height: 12px; vertical-align: middle;"></i> ${insight.readTime}</span>
        </div>
        <h3 class="card-title" style="font-size: 1.15rem; margin-bottom: 10px; line-height: 1.3;">${insight.title}</h3>
        <p class="card-description" style="font-size: 0.875rem; margin-bottom: 20px; flex-grow: 1;">${insight.excerpt}</p>
        <div style="margin-top: auto;">
          <a href="${insight.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="width: 100%; padding: 8px 16px; font-size: 0.85rem;">
            Read Article on LinkedIn <i data-lucide="external-link" style="width: 13px; height: 13px;"></i>
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
