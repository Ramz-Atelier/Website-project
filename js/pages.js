// js/pages.js

function renderHome() {
  const bioParagraphs = PROFILE.bio.map(p => `<p style="margin-bottom: 16px;">${p}</p>`).join('');
  
  const statsHTML = PROFILE.stats.map((stat, i) => `
    <div class="dashboard-stat-card reveal stagger-item" style="--i: ${i}">
      <div class="stat-content">
        <span class="stat-number" data-target="${stat.number}" data-suffix="${stat.suffix}">0${stat.suffix}</span>
        <span class="stat-label">${stat.label}</span>
      </div>
      <div class="stat-icon-bg"><i data-lucide="activity"></i></div>
    </div>
  `).join('');
  
  const interestsHTML = INTERESTS.map((interest, i) => createInterestCard(interest, i)).join('');

  return `
    <section class="dashboard-hero page-enter" id="hero-section">
      <div class="dashboard-background">
        <div class="bg-shape shape-1"></div>
        <div class="bg-shape shape-2"></div>
      </div>
      
      <div class="container hero-showcase-container relative-z">
        
        <!-- Floating Profile Card Overlay -->
        <div class="floating-profile-card reveal-left active">
          <div class="profile-card-left">
            <div class="profile-card-header">
              <div class="avatar-large">T</div>
              <div class="name-info">
                <span class="pronouns">HE / HIS</span>
                <h2>Thulasiram</h2>
              </div>
            </div>
            
            <div class="role-badge-container">
              <span class="role-badge">Operations Team Lead</span>
            </div>
            
            <p class="bio-text">
              Passionate about <strong>Project Management, Process Improvement</strong>, AI-powered Automation, and Data Analytics.
            </p>
          </div>
          
          <div class="profile-card-right">
            <div class="profile-actions">
              <a href="#projects" class="btn-primary-full">View Projects &rarr;</a>
              <div class="btn-group-row">
                <a href="assets/resume/resume.pdf" target="_blank" class="btn-outline">Resume &darr;</a>
                <a href="#contact" class="btn-outline">Contact</a>
              </div>
            </div>
            
            <div class="tags-group">
              <span class="skill-tag">PM</span>
              <span class="skill-tag">Automation</span>
              <span class="skill-tag">Analytics</span>
              <span class="skill-tag">OpsLead</span>
            </div>
          </div>
        </div>

        <!-- Curved Screen Display (Background) -->
        <div class="curved-screen-bg reveal-up">
          <div class="app-window scroll-float-app">
            
            <!-- Main Content -->
            <div class="app-main">
              <!-- Header -->
              <div class="app-header">
                <div class="header-top">
                  <div class="project-title-area">
                    <h2>Thulasiram's Product Design <i data-lucide="chevron-down" style="width: 16px; height: 16px;"></i></h2>
                    <span class="status-badge on-track"><div class="dot"></div> On Track <i data-lucide="chevron-down" style="width: 12px; height: 12px; margin-left:2px;"></i></span>
                    <span class="last-updated">Last updated on: 01st March, 2026</span>
                  </div>
                  <div class="header-actions">
                    <div class="assigned-users">
                      <span><i data-lucide="users" style="width: 14px; height: 14px; margin-right: 4px;"></i> Assigned to project</span>
                      <div class="avatar-group">
                        <div class="avatar"><img src="https://ui-avatars.com/api/?name=Thulasi&background=F59E0B&color=fff" style="width:100%; border-radius:50%;"></div>
                        <div class="avatar"><img src="https://ui-avatars.com/api/?name=Ram&background=3B82F6&color=fff" style="width:100%; border-radius:50%;"></div>
                        <div class="avatar"><img src="https://ui-avatars.com/api/?name=User&background=10B981&color=fff" style="width:100%; border-radius:50%;"></div>
                        <div class="avatar more-avatar">+2</div>
                      </div>
                    </div>
                    <button class="btn-assign"><i data-lucide="user-plus" style="width: 14px; height: 14px;"></i> Assign Member</button>
                  </div>
                </div>
                <div class="header-tabs">
                  <span class="tab active">Overview <div class="tab-dot"></div></span>
                  <span class="tab">List</span>
                  <span class="tab">Board <div class="tab-dot"></div></span>
                  <span class="tab">Timeline</span>
                  <span class="tab">Calendar</span>
                  <span class="tab">Dashboard</span>
                  <span class="tab">Messages <div class="tab-dot"></div></span>
                  <span class="tab">Files <div class="tab-dot"></div></span>
                </div>
              </div>
              
              <!-- Dashboard Grid -->
              <div class="app-dashboard-grid">
                
                <!-- Task Status -->
                <div class="grid-card task-status-card">
                  <div class="card-header">
                    <h3>Task Status</h3>
                    <div class="card-tabs"><span class="active">All Task</span><span>My tasks</span></div>
                  </div>
                  <div class="task-list">
                    <div class="task-item">
                      <div class="task-main">
                        <i data-lucide="circle" class="check-circle"></i>
                        <span class="task-name">Brand Strategy</span>
                        <span class="tag tag-warning"><i data-lucide="message-square" style="width:10px; height:10px;"></i> feedback requested</span>
                      </div>
                      <span class="task-time">00:25:15</span>
                      <div class="avatar"><img src="https://ui-avatars.com/api/?name=Thulasi&background=F59E0B&color=fff" style="width:100%; border-radius:50%;"></div>
                    </div>
                    <div class="task-item">
                      <div class="task-main">
                        <i data-lucide="circle" class="check-circle"></i>
                        <span class="task-name">Logo Design</span>
                        <span class="tag tag-warning"><i data-lucide="message-square" style="width:10px; height:10px;"></i> feedback requested</span>
                      </div>
                      <span class="task-time">00:08:15</span>
                      <div class="avatar"><img src="https://ui-avatars.com/api/?name=Ram&background=3B82F6&color=fff" style="width:100%; border-radius:50%;"></div>
                    </div>
                    <div class="task-item">
                      <div class="task-main">
                        <i data-lucide="circle" class="check-circle"></i>
                        <span class="task-name">Thulasiram Design System</span>
                        <span class="tag tag-blue"><i data-lucide="pause-circle" style="width:10px; height:10px;"></i> paused</span>
                      </div>
                      <span class="task-time">02:23:45</span>
                      <div class="avatar"><img src="https://ui-avatars.com/api/?name=User&background=10B981&color=fff" style="width:100%; border-radius:50%;"></div>
                    </div>
                  </div>
                </div>

                <!-- Right Column (Time Tracking & Activity) -->
                <div class="right-col-grid">
                  <!-- Time Tracking -->
                  <div class="grid-card time-tracking-card">
                    <h3>Time tracking</h3>
                    <span class="project-name">Thulasiram Design System</span>
                    <div class="time-display">
                      <div class="time-block"><strong>02</strong>h</div>
                      <div class="time-block"><strong>23</strong>m</div>
                    </div>
                    <div class="time-controls">
                      <button class="btn-icon"><i data-lucide="rotate-ccw"></i></button>
                      <button class="btn-icon play"><i data-lucide="play" style="fill: white;"></i></button>
                    </div>
                  </div>

                  <!-- Recent Activity -->
                  <div class="grid-card recent-activity-card">
                    <h3>Recent activity <span class="count">(7)</span></h3>
                    <div class="activity-list">
                      <div class="activity-item">
                        <div class="avatar"><img src="https://ui-avatars.com/api/?name=Thulasi&background=F59E0B&color=fff" style="width:100%; border-radius:50%;"></div>
                        <div class="act-text">
                          <strong>Thulasiram</strong>
                          <span>Paused "Design System" task</span>
                        </div>
                      </div>
                      <div class="activity-item">
                        <div class="avatar"><img src="https://ui-avatars.com/api/?name=Ram&background=3B82F6&color=fff" style="width:100%; border-radius:50%;"></div>
                        <div class="act-text">
                          <strong>Ram</strong>
                          <span>Added comments on "Logo"</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Upcoming Tasks -->
                <div class="grid-card upcoming-tasks-card">
                  <div class="card-header">
                    <h3>Upcoming Tasks</h3>
                    <button class="btn-add">Add New Task <i data-lucide="plus" style="width: 14px; height:14px;"></i></button>
                  </div>
                  <div class="calendar-strip">
                    <i data-lucide="chevron-left" class="cal-nav"></i>
                    <div class="cal-day"><span>TUE</span><span>01</span></div>
                    <div class="cal-day active"><span>WED</span><span>02</span></div>
                    <div class="cal-day"><span>THU</span><span>03</span></div>
                    <div class="cal-day"><span>FRI</span><span>04</span></div>
                    <div class="cal-day"><span>SAT</span><span>05</span></div>
                    <div class="cal-day"><span>SUN</span><span>06</span></div>
                    <div class="cal-day"><span>MON</span><span>07</span></div>
                    <i data-lucide="chevron-right" class="cal-nav"></i>
                  </div>
                  <div class="timeline-view">
                    <div class="time-row">
                      <span class="time">10AM <div class="time-dot"></div></span>
                      <div class="timeline-line">
                        <div class="timeline-event event-green" style="width: 25%;">
                          <div class="avatar-group"><div class="avatar"><img src="https://ui-avatars.com/api/?name=Thulasi&background=F59E0B&color=fff" style="width:100%; border-radius:50%;"></div></div>
                          Discovery call
                        </div>
                        <div class="timeline-event event-blue" style="width: 35%; left: 45%;">
                          <div class="avatar-group"><div class="avatar"><img src="https://ui-avatars.com/api/?name=Ram&background=3B82F6&color=fff" style="width:100%; border-radius:50%;"></div></div>
                          Company onboarding
                        </div>
                      </div>
                    </div>
                    <div class="time-row">
                      <span class="time">11AM <div class="time-dot"></div></span>
                      <div class="timeline-line">
                        <div class="timeline-event event-purple" style="width: 35%;">
                          <div class="avatar-group"><div class="avatar"><img src="https://ui-avatars.com/api/?name=User&background=10B981&color=fff" style="width:100%; border-radius:50%;"></div></div>
                          Company onboarding
                        </div>
                        <div class="timeline-event event-gray" style="width: 25%; left: 45%;">
                          <div class="avatar-group"><div class="avatar"><img src="https://ui-avatars.com/api/?name=Thulasi&background=F59E0B&color=fff" style="width:100%; border-radius:50%;"></div></div>
                          Discovery call
                        </div>
                      </div>
                    </div>
                    <div class="time-row">
                      <span class="time active">12:00 <div class="time-dot active"></div></span>
                      <div class="timeline-line active-line"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="macbook-base">
            <div class="macbook-notch"></div>
          </div>
        </div>
      </div>
    </section>
    
    <div id="about-section" class="relative-z">
      <section class="section about-bio container">
        <div class="section-header reveal">
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle">Bridging strategic leadership, process optimization, and technology.</p>
        </div>
        
        <div class="bio-card reveal-scale">
          <div class="bio-avatar-wrapper">
            <div class="bio-avatar-badge">R</div>
          </div>
          <div class="bio-text">
            ${bioParagraphs}
          </div>
        </div>
      </section>
      
      <section class="container" style="margin-bottom: 60px;">
        <div class="stats-bar-grid">
          ${statsHTML}
        </div>
      </section>
      
      <section class="section container" style="padding-top: 0;">
        <div class="section-header reveal">
          <h2 class="section-title">Areas of Expertise</h2>
          <p class="section-subtitle">Core competencies and passions that drive continuous operational growth.</p>
        </div>
        <div class="interests-grid">
          ${interestsHTML}
        </div>
      </section>
    </div>
  `;
}

function renderAbout() {
  // Deprecated: About section is integrated into renderHome
  return renderHome();
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
        
        <div class="grid flex-column" style="gap: 40px;" id="projects-grid">
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
          <p class="section-subtitle">Continuous learning and professional development across management and technical frameworks.</p>
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
            <h3 class="card-title" style="font-size: 1.5rem; margin-bottom: 20px;">Send a Message</h3>
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
        
        <div class="reveal" style="text-align: center; margin-top: 56px;">
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
