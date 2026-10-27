// js/data.js

const PROFILE = {
  name: 'Thulasiram',
  title: 'Operations Team Lead',
  tagline: 'Passionate about Project Management, Operations, Process Improvement, AI-powered Automation, and Data Analytics.',
  greeting: "Hi, I'm",
  bio: [
   'With over 11 years of experience in Operations, Customer Success, and Technical Project Coordination, I help businesses simplify complex processes, improve customer experiences, and drive operational excellence.',
   'My expertise lies in streamlining workflows, leading cross-functional teams, and transforming business challenges into scalable solutions through process improvement, automation, and data-driven decision-making. I enjoy bridging the gap between business needs and technical execution to deliver meaningful results.',
    'Currently, I am expanding my expertise in Project Management while preparing for the PMP® certification, intending to lead impactful projects that create lasting business value'
  ],
  stats: [
    { number: '11', label: 'Years Experience', suffix: '+' },
    { number: '5', label: 'Projects Delivered', suffix: '+' },
    { number: '5', label: 'Certifications', suffix: '+' },
    { number: '30', label: 'Avg Efficiency Gain', suffix: '%' }
  ],
  contact: {
    email: 'writeto.ram02@gmail.com',
    location: 'Chennai, Tamil Nadu, IND',
    linkedin: 'https://www.linkedin.com/in/thulasiram-r/',
    github: 'https://github.com/Ramz-Atelier'
  }
};

const PROJECTS = [
  {
    id: 'pdf-pre-processing-dashboard',
    title: 'PDF Pre-processing & Enhancement Dashboard',
    category: 'Process Optimization',
    thumbnail: 'assets/images/Project1.png',
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Adobe Acrobat Pro',
      'Apago PDF Tools',
      'Google Workspace'
    ],
    shortDescription: 'Led the development and deployment of a centralized preprocessing dashboard that automated rule-based PDF enhancements across 1,562 publishing titles, saving 2 hours of manual effort daily.',
    description: 'Spearheaded a cross-functional process optimization and automation project to eliminate repetitive manual interventions required for PDF digital publishing readiness. Collaborated with Frontend, Backend, and Operations teams to architect and launch a centralized, configurable dashboard that applies title-specific preprocessing algorithms based on distinct file specifications and operational rules.',
    timeline: '3 months',
    problem: 'Operations teams were burdened with manual inspection and repetitive troubleshooting of incoming PDF files with varying formatting defects, font discrepancies, and color profile issues. Relying on manual Adobe Acrobat touchpoints created operational bottlenecks, increased cycle times, and introduced risks of missed digital publication deadlines.',
    approach: 'Conducted root-cause analysis on recurring PDF failure modes across publishing streams and cataloged corresponding corrective actions. Collaborated with Engineering stakeholders to translate operational needs into technical specifications for an automated, rules-based preprocessing engine with configurable parameters.',
    implementation: 'Coordinated agile sprint reviews, validated user stories, conducted end-to-end User Acceptance Testing (UAT), and established standard operating procedures (SOPs). Rolled out the dashboard to operational teams, enabling self-service title configuration, automated error detection, and continuous enhancement without developer intervention.',
    results: [
      'Configured automated, title-specific preprocessing workflows across 1,562 publication titles',
      'Eliminated approximately 2 hours of manual processing overhead per day',
      'Reduced operational dependency on Adobe Acrobat desktop licenses and manual intervention by ~35%',
      'Delivered the production-ready solution within a strict 3-month project timeline'
    ],
    metrics: [
      { value: '1,562', label: 'Titles Enabled' },
      { value: '2h', label: 'Manual Effort Saved/Day' },
      { value: '35%', label: 'Acrobat Dependency Reduction' },
      { value: '3M', label: 'Delivery Timeline' }
    ],
    businessImpact: 'Significantly streamlined prepress digital publishing throughput, standardized file readiness across the entire publication catalog, and lowered software licensing costs while ensuring 100% on-time digital release compliance.',
    toolsUsed: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Adobe Acrobat Pro',
      'Apago PDF Tools',
      'PDF Enhancer',
      'Google Sheets',
      'Google Drive',
      'Google Workspace'
    ],
    skillsDemonstrated: [
      'Requirements Gathering',
      'Process Optimization',
      'Project Coordination',
      'Workflow Automation',
      'Stakeholder Management',
      'Cross-Functional Collaboration',
      'User Acceptance Testing (UAT)',
      'Root Cause Analysis',
      'Continuous Improvement'
    ],
    githubUrl: '#',
    liveUrl: '#',
    docsUrl: '#',
    galleryImages: [],
    dashboardEmbed: ''
  },
  {
    id: 'new-client-onboarding-canada-french',
    title: 'New Client Onboarding - Canada (French) 🇨🇦',
    category: 'Client Onboarding & Implementation',
    thumbnail: 'assets/images/Project2.png',
    technologies: [
      'FileZilla (SFTP)',
      'Adobe Acrobat Pro',
      'Google Workspace',
      'Google Meet',
      'Spreadsheets'
    ],
    shortDescription: 'Directed the end-to-end client onboarding and digital catalog launch for a premier Canadian publishing partner, successfully publishing 66+ magazine titles with a 99% CAST rating.',
    description: 'Orchestrated the technical project coordination and operational implementation for onboarding a premier Canadian publishing partner and launching 70+ magazine titles across Quebec and global distribution channels. Managed bilingual stakeholder communications, technical asset validation, milestone roadmaps, risk mitigation, and cross-functional execution between client leadership, distributors, and internal Operations and Engineering teams.',
    timeline: '6 months',
    problem: 'The partner required rapid onboarding of a vast, high-visibility digital magazine portfolio while navigating strict localized publishing schedules, French-language communication barriers, and inconsistent legacy asset naming conventions across FTP repositories without an established integration playbook.',
    approach: 'Established a collaborative governance model with regional distributor liaisons to bridge linguistic gaps. Formulated a comprehensive client onboarding framework detailing delivery cadences, SFTP directory hierarchies, asset validation criteria, and a structured RACI matrix to drive accountability across all workstreams.',
    implementation: 'Led product orientation and technical dashboard walkthroughs for client teams. Coordinated asset ingest, preflight checks, and production workflows across Operations. Maintained active milestone tracking, managed cross-functional dependencies, resolved ingestion anomalies, and executed structured QA verification prior to publication.',
    results: [
      'Successfully onboarded the partner and launched 66+ magazine titles into live digital distribution',
      'Achieved an exceptional 99% Customer Assessment / Service Delivery (CAST) score',
      'Generated a 10% uplift in reader engagement across the localized digital catalog',
      'Contributed to a 5% increase in net new digital subscriber signups within the initial release quarter',
      'Delivered all milestones on schedule across the 6-month onboarding lifecycle'
    ],
    metrics: [
      { value: '66+', label: 'Titles Published' },
      { value: '99%', label: 'CAST Delivery Score' },
      { value: '10%', label: 'User Engagement Lift' },
      { value: '5%', label: 'Subscription Growth' },
      { value: '6M', label: 'Onboarding Timeline' }
    ],
    businessImpact: 'Solidified a high-value strategic international publishing partnership, established scalable onboarding standards for bilingual and overseas clients, and created expanded revenue opportunities for custom digital microsite collaborations.',
    toolsUsed: [
      'FileZilla (SFTP)',
      'Adobe Acrobat Pro',
      'Google Sheets',
      'Google Docs',
      'Google Meet',
      'Gmail',
      'Workflow Tracking Tools'
    ],
    skillsDemonstrated: [
      'Client Onboarding',
      'Technical Project Coordination',
      'Requirements Gathering',
      'Milestone Planning & Tracking',
      'Stakeholder Management',
      'Cross-Functional Leadership',
      'Risk Management',
      'Quality Assurance',
      'Bilingual Communication Facilitation'
    ],
    githubUrl: '#',
    liveUrl: '#',
    docsUrl: '#',
    galleryImages: [],
    dashboardEmbed: ''
  },
  {
    id: 'file-management-schedule-dashboard',
    title: 'File Management & Delivery Schedule Dashboard',
    category: 'Process Optimization',
    thumbnail: 'assets/images/Project3.png',
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Google Sheets',
      'Google Workspace'
    ],
    shortDescription: 'Centralized fragmented delivery schedules into an automated dashboard across 58 accounts and 5,771 records, reclaiming 4 hours of daily manual effort with 95% efficiency gains.',
    description: 'Led the requirement analysis, workflow architecture, and implementation coordination of a centralized delivery schedule dashboard that consolidated disparate operational schedules across FTP channels, spreadsheets, email threads, and shared calendars into a single, automated source of truth.',
    timeline: '2 months',
    problem: 'Delivery schedules and validation parameters for dozens of publisher accounts were decentralized across disconnected tools. Operations spent excessive hours manually cross-checking release dates, file naming regex formats, and directory paths, creating significant operational vulnerability, delay risks, and scalability ceilings.',
    approach: 'Conducted detailed Value Stream Mapping (VSM) to identify process bottlenecks and repetitive manual schedule tracking tasks. Defined technical user stories and workflow wireframes for Engineering, specifying automated event triggers based on publication release dates, filename validation patterns, and FTP directory logic.',
    implementation: 'Coordinated agile development and sprint testing with Frontend and Backend developers. Standardized validation protocols for magazine release cycles, configured automated alerts for schedule variances, conducted rigorous regression and acceptance testing, and migrated 5,771 schedule records onto the platform in 2 months.',
    results: [
      'Consolidated delivery operations across 58 enterprise accounts into a unified platform',
      'Migrated and configured 5,771 scheduling and asset-processing records with automated rules',
      'Saved approximately 4 hours of manual operational tracking effort every day',
      'Boosted operational schedule management efficiency by 95%',
      'Achieved zero delivery schedule tracking omissions post-deployment'
    ],
    metrics: [
      { value: '58', label: 'Accounts Centralized' },
      { value: '5,771', label: 'Records Configured' },
      { value: '4h', label: 'Manual Effort Saved/Day' },
      { value: '95%', label: 'Operational Efficiency' }
    ],
    businessImpact: 'Transformed operational transparency with an enterprise single source of truth, mitigated compliance risks, and empowered Operations to handle a 3x increase in account volume without additional headcount.',
    toolsUsed: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Google Workspace',
      'Google Sheets',
      'Google Drive',
      'Process Wireframing'
    ],
    skillsDemonstrated: [
      'Process Mapping (VSM)',
      'Business Requirements Analysis',
      'Project Coordination',
      'Stakeholder Alignment',
      'Workflow Automation Logic',
      'User Acceptance Testing (UAT)',
      'Change Management',
      'Operational Efficiency'
    ],
    githubUrl: '#',
    liveUrl: '#',
    docsUrl: '#',
    galleryImages: [],
    dashboardEmbed: ''
  },
  {
    id: 'client-side-data-transmission-module',
    title: 'Client-Side Data Transmission Module Upgrade',
    category: 'Technical Improvement',
    thumbnail: 'assets/images/Project4.png',
    technologies: [
      'Node.js',
      'REST APIs',
      'Azure Cloud',
      'ClickHouse',
      'SQL',
      'MD5 Checksums',
      'Adobe Acrobat'
    ],
    shortDescription: 'Coordinated the modernization of a legacy PHP data transmission module to Node.js, cutting upload times by 50% and achieving 0 file corruption errors.',
    description: 'Spearheaded the technical project coordination and quality investigation to resolve intermittent, client-side file corruption during high-volume data transmission. Partnered with Technical Architects, Software Engineering, and Operations to diagnose systemic packet failures in a legacy PHP upload module, architect a robust Node.js and API-driven alternative, and execute an enterprise-wide rollout.',
    timeline: '9 months',
    problem: 'Enterprise clients reported recurring, intermittent file corruption upon transmitting large asset packages, resulting in publishing delays, emergency engineering escalations, and potential Service Level Agreement (SLA) breach penalties. Traditional isolated bug fixes failed to identify the systemic cause.',
    approach: 'Initiated an empirical root-cause analysis (RCA) framework: collected telemetry across multiple clients, replicated client transfer environments, and implemented input-to-output MD5 cryptographic checksum comparisons to isolate where byte corruption occurred during transfer.',
    implementation: 'Partnered with Technical Architects and Engineering to validate a replacement architecture leveraging Node.js streams and resilient RESTful endpoints. Orchestrated multi-stage regression testing under fluctuating network latency, authored technical migration documentation, and managed a phased production deployment across all client endpoints.',
    results: [
      'Completely eradicated recurring file corruption, recording 0 post-rollout transmission incidents',
      'Accelerated file transfer speeds by 50% through streamlined streaming protocols',
      'Sustained a 98% on-time Service Level Agreement (SLA) compliance rate across enterprise accounts',
      'Eliminated emergency escalations and manual file re-transmission overhead'
    ],
    metrics: [
      { value: '0', label: 'Errors Post-Rollout' },
      { value: '50%', label: 'Upload Speed Increase' },
      { value: '98%', label: 'SLA Achievement' },
      { value: '9M', label: 'Project Lifecycle' }
    ],
    businessImpact: 'Restored enterprise client confidence, safeguarded mission-critical publishing delivery timelines against SLA penalties, and replaced fragile legacy architecture with modern, scalable cloud transmission infrastructure.',
    toolsUsed: [
      'Node.js',
      'REST APIs',
      'Azure Cloud',
      'ClickHouse',
      'SQL',
      'MD5 Checksum Verification',
      '7-Zip',
      'Advanced Excel',
      'Adobe Acrobat Pro'
    ],
    skillsDemonstrated: [
      'Root Cause Analysis (RCA)',
      'Technical Project Coordination',
      'Data Integrity & Verification',
      'Cross-Functional Leadership',
      'SLA Governance',
      'Regression Testing & QA',
      'Risk Management',
      'Legacy System Migration'
    ],
    githubUrl: '#',
    liveUrl: '#',
    docsUrl: '#',
    galleryImages: [],
    dashboardEmbed: ''
  },
  {
    id: 'b2b-digital-content-delivery-overseas',
    title: 'B2B Digital Content Delivery - Overseas',
    category: 'Digital Content Delivery',
    thumbnail: 'assets/images/Project5.png',
    technologies: [
      'AWS (S3, CloudWatch)',
      'Webhooks',
      'JavaScript',
      'SFTP / FileZilla',
      'Monitoring Dashboards'
    ],
    shortDescription: 'Architected and deployed an automated cloud-to-client webhook delivery pipeline for overseas B2B partners, enabling 24/7 time-zone independent distribution with zero manual effort.',
    description: 'Led the operational requirements analysis, cross-functional project coordination, and rollout of an automated digital content delivery architecture connecting AWS cloud storage to international B2B client endpoints via event-driven Webhooks, eliminating manual dispatch constraints across global time zones.',
    timeline: '6 months',
    problem: 'Overseas B2B clients—including airport lounge networks and international airline passenger fleets—required instantaneous release of digital newspaper and magazine editions upon publication. Manual dispatch by domestic staff constrained by local operating hours caused distribution delays and compromised time-sensitive morning edition releases abroad.',
    approach: 'Analyzed international delivery SLAs, time-zone differentials, and diverse partner endpoint specifications. Formulated operational business requirements for an event-driven AWS delivery framework that would trigger automated asset pushes the instant publication files were finalized.',
    implementation: 'Collaborated with Cloud Engineering, QA, and external client technical leads to establish secure Webhook endpoints, configure file validation and metadata packaging, and build a real-time operational delivery monitoring dashboard. Conducted integration stress testing and failover verification before full production handover.',
    results: [
      'Transitioned from 100% manual dispatch to zero manual operational effort for daily content delivery',
      'Guaranteed 24/7 time-zone-independent asset delivery immediately upon publication',
      'Attained 100% on-time delivery compliance for time-critical morning news and magazine editions',
      'Established real-time automated delivery audit logs and failure alerting'
    ],
    metrics: [
      { value: '0', label: 'Manual Delivery Effort' },
      { value: '24/7', label: 'Time-Zone Autonomy' },
      { value: '100%', label: 'On-Time SLA Delivery' },
      { value: '6M', label: 'Project Lifecycle' }
    ],
    businessImpact: 'Enhanced international client satisfaction, ensured strict adherence to global distribution SLAs, and provided the scalable digital distribution infrastructure required to close high-value B2B enterprise contracts worldwide.',
    toolsUsed: [
      'AWS S3',
      'CloudWatch',
      'Webhooks',
      'JavaScript',
      'FileZilla (SFTP)',
      'Operational Monitoring Dashboards',
      'Google Workspace'
    ],
    skillsDemonstrated: [
      'Workflow Automation',
      'Cloud Ingestion & Webhooks',
      'Cross-Functional Coordination',
      'Time-Zone & Dependency Management',
      'SLA Management',
      'Quality Assurance & Testing',
      'Client Stakeholder Engagement'
    ],
    githubUrl: '#',
    liveUrl: '#',
    docsUrl: '#',
    galleryImages: [],
    dashboardEmbed: ''
  },
  {
    id: 'file-transfer-automation',
    title: 'File Transfer Workflow Automation',
    category: 'Automation',
    thumbnail: 'assets/images/Project6.png',
    technologies: [
      'JavaScript',
      'AWS S3',
      'FileZilla (SFTP)',
      'Spreadsheet Automation',
      'MS Teams',
      'Outlook'
    ],
    shortDescription: 'Automated file transfer and processing workflows from FTP servers to AWS across 87 accounts and 900+ titles, saving 70 hours of manual labor per week.',
    description: 'Coordinated a comprehensive workflow automation initiative to eliminate repetitive manual file handling and establish automated ingestion pipelines transferring publishing assets from remote FTP servers to AWS cloud environments. Gathered operational rules, mapped file processing logic, and collaborated with Product and Engineering to deliver a resilient automated pipeline.',
    timeline: '1.5 years',
    problem: 'Operations teams manually downloaded, inspected, applied custom file manipulation rules (combining multi-part covers, filtering interior pages), and uploaded thousands of publishing files weekly from disparate publisher FTP servers. This repetitive routine consumed ~70 hours of manual labor per week and exposed operations to human error, throughput bottlenecks, and delayed releases.',
    approach: 'Mapped the end-to-end asset lifecycle across 87 publisher accounts to catalog unique file structures, naming conventions, and processing dependencies. Synthesized findings into comprehensive Functional Requirement Documents (FRD) and algorithmic logic trees for Engineering development.',
    implementation: 'Partnered with Engineering and QA in an agile framework to build and test automated FTP polling scripts, AWS S3 staging buckets, and automated file-combination logic. Designed comprehensive test scripts, logged defect triages, managed edge-case handling, and guided a phased operational migration of 900+ titles.',
    results: [
      'Automated end-to-end file transfer and processing pipelines across 87 publisher accounts',
      'Scaled automated ingestion support to over 900+ active magazine and newspaper titles',
      'Saved approximately 70 hours of manual operational effort every week (~1.75 FTE capacity)',
      'Elevated operational processing efficiency to 92% with negligible error rates'
    ],
    metrics: [
      { value: '87', label: 'Accounts Automated' },
      { value: '900+', label: 'Titles Supported' },
      { value: '70h', label: 'Manual Effort Saved/Wk' },
      { value: '92%', label: 'Operational Efficiency' }
    ],
    businessImpact: 'Unlocked massive operational capacity without headcount expansion, accelerated time-to-market for digital publications, and allowed senior operations analysts to redirect focus toward high-impact quality and customer success initiatives.',
    toolsUsed: [
      'JavaScript',
      'AWS S3',
      'FileZilla (SFTP)',
      'Advanced Spreadsheets',
      'MS Teams',
      'Outlook',
      'Process Flowcharts'
    ],
    skillsDemonstrated: [
      'End-to-End Workflow Automation',
      'Requirements Gathering & Documentation',
      'Cross-Functional Collaboration',
      'Process Mapping',
      'Defect Triage & Testing',
      'Capacity Planning & Resource Optimization',
      'Agile Coordination'
    ],
    githubUrl: '#',
    liveUrl: '#',
    docsUrl: '#',
    galleryImages: [],
    dashboardEmbed: ''
  },
  {
    id: 'customer-success-optimization',
    title: 'Customer Success Process Optimization',
    category: 'Process Improvement',
    thumbnail: 'assets/images/Project7.png',
    technologies: [
      'HubSpot CRM',
      'Salesforce',
      'Zendesk',
      'Freshdesk',
      'Google Sheets',
      'Lucidchart'
    ],
    shortDescription: 'Redesigned the customer onboarding journey using Lean principles, slashing 90-day churn by 25%, boosting CSAT to 94%, and accelerating onboarding by 40%.',
    description: 'Led a cross-departmental customer experience and operational transformation to redesign the customer onboarding and support journey. Applied Lean Six Sigma methodologies, established automated lifecycle touchpoints, standardized customer success playbooks, and integrated CRM platforms to build a frictionless, proactive customer onboarding experience.',
    timeline: '5 months',
    problem: 'The organization experienced elevated customer churn during the critical first 90 days following contract signing. Root-cause analysis highlighted disjointed handoffs between Sales and Customer Success, lack of standardized onboarding milestones, manual email follow-ups, and absence of an early warning health-scoring mechanism.',
    approach: 'Employed Lean Six Sigma DMAIC (Define, Measure, Analyze, Improve, Control) principles to map the current-state customer journey. Conducted cross-departmental workshops with Sales, Support, and Customer Success stakeholders to establish unified KPIs, eliminate process friction, and define strict handoff protocols.',
    implementation: 'Configured automated milestone-triggered email sequences and task reminders in HubSpot CRM. Implemented standardized ticket macros and SLA escalation workflows in Zendesk/Freshdesk. Created a proactive customer health-scoring matrix based on product adoption metrics to identify and rescue at-risk accounts early.',
    results: [
      'Reduced 90-day customer churn rate by 25% within the first two quarters of rollout',
      'Elevated Customer Satisfaction (CSAT) scores from 78% to 94%',
      'Shortened average customer onboarding completion time by 40% (from 30 days down to 18 days)',
      'Established a standardized Customer Success Playbook adopted across the enterprise'
    ],
    metrics: [
      { value: '25%', label: 'Churn Reduction' },
      { value: '94%', label: 'CSAT Score' },
      { value: '40%', label: 'Faster Onboarding' },
      { value: '5M', label: 'Project Lifecycle' }
    ],
    businessImpact: 'Protected an estimated $500K in Annual Recurring Revenue (ARR) through churn mitigation and expansion opportunities, elevated customer advocacy, and established a scalable customer success operational model.',
    toolsUsed: [
      'HubSpot CRM',
      'Salesforce',
      'Zendesk',
      'Freshdesk',
      'Google Sheets',
      'Lucidchart',
      'Lean Six Sigma Framework'
    ],
    skillsDemonstrated: [
      'Process Improvement (DMAIC)',
      'Customer Journey Mapping',
      'CRM & Workflow Automation',
      'Cross-Functional Alignment',
      'KPI & Health-Score Design',
      'Change Management',
      'Customer Retention Strategy'
    ],
    githubUrl: '#',
    liveUrl: '#',
    docsUrl: '#',
    galleryImages: [],
    dashboardEmbed: ''
  }
];

const CERTIFICATIONS = [
   {
    id: 'pmp',
    title: 'Project Initiation: Starting a Successful Project',
    organization: 'Google',
    date: 'Jun 2026',
    credentialId: 'K6XKZ8N2GMQY',
    category: 'Project Management',
    skills: ['Project Management', 'Cost-Benefit Analysis', 'RACI', 'Stakeholder Management', 'Scope Management', 'Asana'],
    icon:'pie-chart',
    verifyUrl: '#'
  },
  {
    id: 'pmp',
    title: 'Foundations of Project Management',
    organization: 'Google',
    date: 'Jun 2026',
    credentialId: 'UGAZSMFLOVVP',
    category: 'Project Management',
    skills: ['Project Management', 'Agile', 'Waterfall', 'Risk Management', 'Scrum', 'Organizational skills'],
    icon: 'award',
    verifyUrl: '#'
  },
  {
    id: 'prince2',
    title: 'Oversee a Project with ClickUp',
    organization: 'Coursera',
    date: 'May 2026',
    credentialId: '87Z07FUNUCXV',
    category: 'Project Management',
    skills: ['Project Tracking', 'Task Management', 'Workload Prioritization', 'Goal Setting'],
    icon: 'bar-chart-3',
    verifyUrl: '#'
  },
  {
    id: 'csm',
    title: 'Kickoff - Agile Badge',
    organization: 'Project Management Institute (PMI)',
    date: 'May 2026',
    category: 'Project Management',
    skills: ['Agile Project Management', 'Agile Methodologies', 'Scrum', 'Sprint Planning'],
    icon: 'users',
    verifyUrl: '#'
  },
  {
    id: 'google-ai',
    title: 'Gen AI: Beyond the Chatbot',
    organization: 'Google',
    date: 'Apr 2026',
    credentialId: '23412353',
    category: 'AI',
    skills: ['Generative AI', 'Artificial Intelligence (AI)', 'Prompt Engineering', 'Data Literacy', 'AI Agents', 'AI-Driven Content'],
    icon: 'brain',
    verifyUrl: '#'
  },
  {
    id: 'business-analyst',
    title: 'Business Analysis & Process Management',
    organization: 'Coursera',
    date: 'Mar 2025',
    credentialId: 'JM55NZ30NB30',
    category: 'Data Analytics',
    skills: ['Business Analysis', 'Business Process Management', 'Business Insights', 'Task Management', 'Business Process Mapping'],
    icon: 'pie-chart',
    verifyUrl: '#'
  },
];

const INTERESTS = [
  { title: 'Project Management', icon: 'clipboard-check', description: 'Leading teams and delivering results on time and budget' },
  { title: 'Business Analysis', icon: 'line-chart', description: 'Translating business needs into actionable solutions' },
  { title: 'Automation', icon: 'bot', description: 'Streamlining workflows with intelligent automation' },
  { title: 'Artificial Intelligence', icon: 'brain', description: 'Leveraging AI to transform business operations' },
  { title: 'Data Analytics', icon: 'bar-chart-3', description: 'Turning raw data into strategic business insights' },
  { title: 'Process Optimization', icon: 'settings', description: 'Redesigning processes for maximum efficiency' },
  { title: 'Customer Experience', icon: 'heart-handshake', description: 'Building lasting relationships through excellence' },
  { title: 'Continuous Learning', icon: 'book-open', description: 'Always growing through courses, books, and certifications' },
  { title: 'Agile & Scrum', icon: 'users', description: 'Fostering iterative development and team collaboration' },
  { title: 'Risk Management', icon: 'shield-alert', description: 'Identifying and mitigating potential project hurdles' }
];

const INSIGHTS = [
   {
    id: 'insight-11',
    title: "Great operations are almost invisible",
    date: 'Aug 12, 2026',
    category: 'Operations',
    excerpt: "Ever noticed... Nobody talks about operations when everything is running smoothly.",
    readTime: '1 min read',
    linkedinUrl: 'https://www.linkedin.com/posts/thulasiram-r_operations-operationalexcellence-leadership-share-7490316585467789312-Qzsq/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABQuwJoBWoJyUO66R5lvpVTqXShvnMdl0b4',
    icon: 'clipboard-check',
    thumbnail: 'assets/images/greatoperation.png'
  },
  {
    id: 'insight-1',
    title: "It'll only take 5 minute",
    date: 'July 21, 2026',
    category: 'Operations',
    excerpt: "Every workplace has that one sentence... I'll just do it quickly.",
    readTime: '1 min read',
    linkedinUrl: 'https://www.linkedin.com/posts/thulasiram-r_workplacelearning-productivity-operations-share-7485245854585589760-20G1/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABQuwJoBWoJyUO66R5lvpVTqXShvnMdl0b4',
    icon: 'clipboard-check',
    thumbnail: 'assets/images/only5mins.png'
  },
  {
    id: 'insight-2',
    title: "A Meeting Without Action Is Just a Conversation",
    date: 'July 17, 2026',
    category: 'Documentation',
    excerpt: "Ever walked out of a meeting... and immediately asked, So... who's actually doing what?",
    readTime: '1 min read',
    linkedinUrl: 'https://www.linkedin.com/posts/thulasiram-r_leadership-meetings-teamwork-share-7482840497296785408-17lF/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABQuwJoBWoJyUO66R5lvpVTqXShvnMdl0b4',
    icon: 'clipboard-check',
    thumbnail: 'assets/images/meetingwaaction.png'
  },
{
    id: 'insight-3',
    title: "27 Emails. 1 Useful Update",
    date: 'July 16, 2026',
    category: 'Operations',
    excerpt: 'Every workplace has that one email... The one where everyone gets copied.',
    readTime: '1 min read',
    linkedinUrl: 'https://www.linkedin.com/posts/thulasiram-r_communication-workplacehumor-operations-share-7482824088135303168-RO58/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABQuwJoBWoJyUO66R5lvpVTqXShvnMdl0b4',
    icon: 'clipboard-check',
    thumbnail: 'assets/images/27emails.png'
  },
{
    id: 'insight-4',
    title: "What's one 'urgent' task you've successfully deprioritized lately?",
    date: 'July 15, 2026',
    category: 'Task Management',
    excerpt: "Nobody talks about this enough... Being productive isn't about finishing everything...",
    readTime: '1 min read',
    linkedinUrl: 'https://www.linkedin.com/posts/thulasiram-r_productivity-operations-leadership-share-7482822318138957824-MLzc/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABQuwJoBWoJyUO66R5lvpVTqXShvnMdl0b4',
    icon: 'clipboard-check',
    thumbnail: 'assets/images/urgenttask.png'
  },
  {
    id: 'insight-6',
    title: "The deadline is visible. The work isn't",
    date: 'July 07, 2026',
    category: 'Operations',
    excerpt: 'Deadlines look simple... until you start doing the work. I have had moments where a timeline was decided before the team had a chance to explain what actually goes into the task...',
    readTime: '1 min read',
    linkedinUrl: 'https://www.linkedin.com/posts/thulasiram-r_operations-leadership-projectmanagement-activity-7479904493464207361-Emxm?utm_source=share&utm_medium=member_desktop&rcm=ACoAABQuwJoBWoJyUO66R5lvpVTqXShvnMdl0b4',
    icon: 'clipboard-check',
    thumbnail: 'assets/images/Img_jul7.png'
  },
  {
    id: 'insight-7',
    title: 'A good SOP creates consistency, not complexity',
    date: 'July 03, 2026',
    category: 'Documentation',
    excerpt: "What I've learned while creating SOPs is this... An SOP isn't meant to make work complicated. It's meant to make...",
    readTime: '2 min read',
    linkedinUrl: 'https://www.linkedin.com/posts/thulasiram-r_operations-sop-processimprovement-activity-7478454944652505088-Aj2Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAABQuwJoBWoJyUO66R5lvpVTqXShvnMdl0b4',
    icon: 'bot',
    thumbnail: 'assets/images/Firefly_Gemini Flash_2.png'
  }
];

const NAV_ITEMS = [
  { label: 'Home', hash: '#home', icon: 'home' },
  { label: 'About', hash: '#about', icon: 'user' },
  { label: 'Projects', hash: '#projects', icon: 'folder-open' },
  { label: 'Certifications', hash: '#certifications', icon: 'award' },
  { label: 'Article', hash: '#article', icon: 'book-open' },
  { label: 'Contact', hash: '#contact', icon: 'mail' }
];
