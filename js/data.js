// js/data.js

const PROFILE = {
  name: 'Thulasiram',
  title: 'Operations Team Lead',
  tagline: 'Passionate about Project Management, Operations, Process Improvement, AI-powered Automation, and Data Analytics.',
  greeting: "Hi, I'm",
  bio: [
    'With over 11 years of experience in Operations and Customer Success, I bring a unique blend of business acumen and technical proficiency to every project.',
    'I specialize in transforming complex business challenges into streamlined, automated workflows that deliver measurable results. My approach combines strategic thinking with hands-on implementation, leveraging modern tools and AI-driven solutions.',
    'From leading cross-functional teams to designing data analytics dashboards, I am committed to driving operational excellence and continuous improvement in every organization I work with.'
  ],
  stats: [
    { number: '11', label: 'Years Experience', suffix: '+' },
    { number: '50', label: 'Projects Delivered', suffix: '+' },
    { number: '15', label: 'Certifications', suffix: '+' },
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
    id: 'enterprise-workflow-automation',
    title: 'Enterprise Workflow Automation Platform',
    category: 'Automation',
    thumbnail: '', 
    technologies: ['Python', 'Selenium', 'UiPath', 'Power Automate'],
    shortDescription: 'End-to-end automation of manual data entry and reporting processes across multiple departments, saving 200+ hours monthly.',
    description: 'Designed and implemented a comprehensive enterprise workflow automation platform to eliminate repetitive manual tasks across the finance and operations departments. The system integrates disparate legacy systems with modern cloud APIs, utilizing robotic process automation (RPA) for UI-driven tasks and API integrations for data syncing.',
    problem: 'The finance and operations teams were spending over 200 hours per month manually downloading reports from legacy systems, formatting them in Excel, and uploading the data to a central ERP. This process was error-prone, slow, and prevented staff from focusing on high-value analytical work.',
    objectives: [
      'Eliminate manual data entry between legacy systems and the ERP',
      'Reduce report generation time from days to hours',
      'Achieve 99.9% data accuracy',
      'Provide real-time visibility into operational metrics'
    ],
    approach: 'Conducted a comprehensive process mapping exercise to identify bottlenecks. Developed a phased automation strategy starting with the most time-consuming tasks. Built modular automation scripts that could be reused across different workflows.',
    implementation: 'Utilized Power Automate for cloud-based triggers and email parsing, UiPath for interacting with legacy desktop applications, and Python (Selenium/Pandas) for complex web scraping and data transformation. Set up robust error handling and alerting mechanisms.',
    toolsUsed: ['Python', 'Selenium', 'UiPath', 'Power Automate', 'Pandas', 'Excel Macros'],
    timeline: '4 months',
    results: [
      'Saved 240 hours of manual work per month',
      'Reduced data entry errors by 98%',
      'Improved report turnaround time by 85%',
      'Enabled real-time financial reporting capabilities'
    ],
    lessonsLearned: [
      'Thorough exception handling is critical for RPA resilience',
      'Stakeholder communication during the transition phase is key to adoption',
      'Modular code design significantly speeds up future automation projects'
    ],
    achievements: ['Awarded "Innovation of the Year" by the executive team', 'Successfully trained 5 team members to maintain the automations'],
    challenges: 'Integrating with a 15-year-old legacy system with no API and dynamic UI elements required creative computer vision and OCR solutions within the RPA framework.',
    businessImpact: 'The project resulted in an estimated annual cost savings of $120,000 and allowed the finance team to shift focus to strategic forecasting rather than data entry.',
    skillsDemonstrated: ['Process Mapping', 'RPA Development', 'Stakeholder Management', 'Python Scripting', 'System Integration'],
    metrics: [
      { value: '240h', label: 'Time Saved/Month' },
      { value: '98%', label: 'Error Reduction' },
      { value: '$120k', label: 'Annual Savings' }
    ],
    githubUrl: '#',
    liveUrl: '#',
    docsUrl: '#',
    galleryImages: [],
    dashboardEmbed: ''
  },
  {
    id: 'operations-analytics-dashboard',
    title: 'Operations Analytics Dashboard',
    category: 'Data Analytics',
    thumbnail: '',
    technologies: ['Power BI', 'SQL', 'Python', 'Looker Studio'],
    shortDescription: 'Interactive BI dashboards consolidating data from 5 different sources to provide real-time operational insights.',
    description: 'Developed a suite of interactive Power BI dashboards that consolidate fragmented operational data into a single source of truth. The project involved designing a robust ETL pipeline and creating intuitive visualizations for executive decision-making.',
    problem: 'Leadership lacked visibility into daily operations due to data being siloed across Salesforce, Zendesk, a custom ERP, and various Excel spreadsheets. Reports took a week to compile, meaning decisions were always based on outdated information.',
    objectives: [
      'Create a unified data model integrating 5 distinct sources',
      'Build automated ETL pipelines updated daily',
      'Design interactive dashboards for different stakeholder levels (Executive, Manager, Agent)',
      'Establish data governance and quality standards'
    ],
    approach: 'Started with stakeholder interviews to define critical KPIs. Designed a star-schema data warehouse model. Developed Python scripts to extract and transform data, loading it into a centralized SQL database, which then fed the Power BI dashboards.',
    implementation: 'Built ETL pipelines using Python and Airflow, hosted on AWS. Designed the SQL database for optimal read performance. Created highly interactive Power BI reports with row-level security to ensure users only saw relevant data.',
    toolsUsed: ['Power BI', 'SQL Server', 'Python', 'Apache Airflow', 'AWS', 'DAX'],
    timeline: '3 months',
    results: [
      'Reduced reporting time from 1 week to automated daily updates',
      'Identified a $50k/month operational inefficiency within the first week of launch',
      'Adopted by 100% of the management team for weekly reviews'
    ],
    lessonsLearned: [
      'Data quality is the hardest part; garbage in, garbage out',
      'User adoption requires intuitive UI/UX design in dashboards',
      'Performance optimization in DAX is crucial for large datasets'
    ],
    achievements: ['Consolidated 15 static reports into 3 dynamic dashboards', 'Established the first company-wide data dictionary'],
    challenges: 'Handling inconsistent data formats across the different sources required complex data cleansing logic and establishing new data entry protocols for the frontline teams.',
    businessImpact: 'Enabled proactive decision-making, leading to a 15% increase in operational efficiency and uncovering cost-saving opportunities previously hidden in siloed data.',
    skillsDemonstrated: ['Data Modeling', 'ETL Development', 'Data Visualization', 'SQL', 'Requirement Gathering'],
    metrics: [
      { value: '100%', label: 'Automation of Reports' },
      { value: '15%', label: 'Efficiency Gain' },
      { value: '5', label: 'Data Sources Integrated' }
    ],
    githubUrl: '#',
    liveUrl: '#',
    docsUrl: '#',
    galleryImages: [],
    dashboardEmbed: ''
  },
  {
    id: 'agile-pm-framework',
    title: 'Agile Project Management Framework Implementation',
    category: 'Project Management',
    thumbnail: '',
    technologies: ['Jira', 'Confluence', 'Monday.com', 'Scrum'],
    shortDescription: 'Led the organizational transition from waterfall to agile methodologies, increasing delivery speed by 40%.',
    description: 'Spearheaded the Agile transformation for a 50-person operations and IT department. Replaced fragmented tracking tools with a unified Jira/Confluence ecosystem, established Scrum ceremonies, and coached teams on Agile best practices.',
    problem: 'Projects were consistently delivered late and over budget due to rigid waterfall methodologies, lack of cross-functional communication, and poor visibility into resource allocation.',
    objectives: [
      'Transition 5 teams from waterfall to Scrum/Kanban',
      'Implement a standardized Jira workflow across all teams',
      'Improve project delivery speed and predictability',
      'Enhance cross-departmental collaboration'
    ],
    approach: 'Adopted a phased approach, starting with a single pilot team. Conducted comprehensive Agile training. Configured Jira boards tailored to each team\'s specific needs while maintaining standardized reporting roll-ups for management.',
    implementation: 'Configured complex Jira workflows with automated transitions, integrated Confluence for documentation, and set up advanced roadmaps for portfolio management. Facilitated daily stand-ups, sprint planning, and retrospectives.',
    toolsUsed: ['Jira', 'Confluence', 'Monday.com', 'Miro'],
    timeline: '6 months',
    results: [
      'Increased project delivery speed by 40%',
      'Improved sprint predictability from 60% to 92%',
      'Reduced cross-team dependencies bottlenecks by 50%'
    ],
    lessonsLearned: [
      'Cultural change is harder than tool implementation',
      'Agile must be adapted to the organization, not followed blindly',
      'Continuous leadership support is vital for transformation success'
    ],
    achievements: ['Successfully certified 3 internal Scrum Masters', 'Created an internal Agile playbook'],
    challenges: 'Overcoming resistance to change from veteran team members required significant one-on-one coaching and demonstrating quick wins through the pilot program.',
    businessImpact: 'Faster time-to-market for internal tools and significantly higher team morale and engagement scores.',
    skillsDemonstrated: ['Agile Coaching', 'Jira Administration', 'Change Management', 'Scrum', 'Cross-functional Leadership'],
    metrics: [
      { value: '40%', label: 'Faster Delivery' },
      { value: '92%', label: 'Sprint Predictability' },
      { value: '5', label: 'Teams Transitioned' }
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
    thumbnail: '',
    technologies: ['Salesforce', 'HubSpot', 'Zendesk', 'Miro'],
    shortDescription: 'Redesigned the customer onboarding journey, reducing churn by 25% and increasing CSAT scores.',
    description: 'Comprehensively mapped and redesigned the customer onboarding and support journey. Implemented automated touchpoints, standardized playbooks, and integrated CRM tools to provide a seamless customer experience.',
    problem: 'High customer churn rate during the first 90 days due to a disjointed onboarding process, inconsistent communication, and a lack of proactive support.',
    objectives: [
      'Reduce 90-day customer churn by 20%',
      'Increase Customer Satisfaction (CSAT) score to >90%',
      'Automate routine onboarding communications',
      'Standardize the handover process from Sales to Success'
    ],
    approach: 'Utilized Lean Six Sigma principles to map the current state, identify waste, and design a streamlined future state. Conducted workshops with Sales, Support, and Success teams to align on responsibilities.',
    implementation: 'Configured automated email sequences in HubSpot triggered by Salesforce events. Created standardized Zendesk macros for common issues. Developed a health-scoring model to identify at-risk customers proactively.',
    toolsUsed: ['Salesforce', 'HubSpot', 'Zendesk', 'Lucidchart', 'Lean Six Sigma'],
    timeline: '5 months',
    results: [
      'Reduced 90-day churn by 25%',
      'Increased CSAT from 78% to 94%',
      'Decreased average onboarding time from 30 days to 18 days'
    ],
    lessonsLearned: [
      'Cross-departmental alignment is essential for a seamless customer journey',
      'Automation should enhance, not replace, human touchpoints',
      'Clear definition of "done" for onboarding is required'
    ],
    achievements: ['Established a Customer Advisory Board', 'Created a scalable playbook used for all new hires'],
    challenges: 'Aligning the Sales team (focused on closing) with the Success team (focused on long-term adoption) required redefining KPIs and incentive structures.',
    businessImpact: 'Retained an additional $500k in Annual Recurring Revenue (ARR) through reduced churn and increased expansion opportunities.',
    skillsDemonstrated: ['Process Mapping', 'CRM Configuration', 'Customer Journey Mapping', 'Change Management', 'KPI Design'],
    metrics: [
      { value: '25%', label: 'Churn Reduction' },
      { value: '94%', label: 'CSAT Score' },
      { value: '40%', label: 'Faster Onboarding' }
    ],
    githubUrl: '#',
    liveUrl: '#',
    docsUrl: '#',
    galleryImages: [],
    dashboardEmbed: ''
  },
  {
    id: 'ai-document-processing',
    title: 'AI-Powered Document Processing Pipeline',
    category: 'AI',
    thumbnail: '',
    technologies: ['Python', 'OpenAI API', 'Azure AI', 'OCR'],
    shortDescription: 'Implemented an AI solution to extract and categorize data from unstructured PDFs, replacing a 5-person manual entry team.',
    description: 'Designed and deployed an intelligent document processing system that utilizes OCR and Large Language Models (LLMs) to automatically extract key information from unstructured invoices, contracts, and forms.',
    problem: 'A team of 5 data entry clerks spent their entire week manually reading PDFs and typing information into a database, leading to high operational costs and frequent human errors.',
    objectives: [
      'Automate the extraction of data from unstructured PDFs',
      'Achieve >95% accuracy in data extraction',
      'Reduce processing time per document from 5 minutes to <10 seconds',
      'Integrate the extracted data directly into the ERP'
    ],
    approach: 'Evaluated multiple OCR and AI solutions. Developed a prototype using Python and the OpenAI API. Created a validation pipeline where low-confidence extractions are flagged for human review.',
    implementation: 'Used Azure Computer Vision for robust OCR to extract text from images/PDFs. Passed the raw text to a fine-tuned LLM (via API) with strict JSON schema prompts to extract specific entities (names, amounts, dates). Built a Python backend to orchestrate the flow and push to the ERP via REST API.',
    toolsUsed: ['Python', 'Azure Form Recognizer', 'OpenAI API', 'FastAPI', 'Docker'],
    timeline: '4 months',
    results: [
      'Automated processing of 10,000+ documents per month',
      'Achieved 97% extraction accuracy',
      'Reduced processing time by 98%',
      'Reallocated 5 staff members to higher-value analytical roles'
    ],
    lessonsLearned: [
      'Prompt engineering and JSON schema enforcement are critical for reliable LLM outputs',
      'A human-in-the-loop fallback mechanism is mandatory for edge cases',
      'OCR quality heavily dictates the downstream AI performance'
    ],
    achievements: ['Processed first 50,000 documents with zero critical errors', 'Presented solution at company-wide innovation summit'],
    challenges: 'Handling highly varied document layouts (e.g., hundreds of different vendor invoice formats) required moving away from template-based OCR to semantic AI extraction.',
    businessImpact: 'Saved approximately $250k annually in operational costs and accelerated invoice processing times, improving vendor relationships.',
    skillsDemonstrated: ['AI Integration', 'Python Backend Development', 'Prompt Engineering', 'API Design', 'Process Automation'],
    metrics: [
      { value: '97%', label: 'Extraction Accuracy' },
      { value: '98%', label: 'Time Saved' },
      { value: '$250k', label: 'Annual Savings' }
    ],
    githubUrl: '#',
    liveUrl: '#',
    docsUrl: '#',
    galleryImages: [],
    dashboardEmbed: ''
  },
  {
    id: 'supply-chain-reengineering',
    title: 'Supply Chain Process Reengineering',
    category: 'Process Improvement',
    thumbnail: '',
    technologies: ['SAP', 'Power BI', 'Lean Six Sigma', 'Excel'],
    shortDescription: 'Overhauled inventory management processes, reducing stockouts by 30% and decreasing holding costs.',
    description: 'Led a cross-functional initiative to reengineer the end-to-end supply chain process, focusing on inventory optimization, vendor management, and demand forecasting.',
    problem: 'The company faced frequent stockouts of critical items while simultaneously carrying excess inventory of slow-moving goods, resulting in high holding costs and lost sales.',
    objectives: [
      'Reduce stockout incidents by 25%',
      'Decrease total inventory holding costs by 15%',
      'Implement a data-driven demand forecasting model',
      'Standardize vendor performance evaluation'
    ],
    approach: 'Applied DMAIC (Define, Measure, Analyze, Improve, Control) methodology. Analyzed historical sales data to classify inventory (ABC analysis). Collaborated with procurement and sales to redesign the forecasting process.',
    implementation: 'Developed a dynamic forecasting model in Excel/Power BI based on historical trends and seasonality. Adjusted SAP reorder points and safety stock levels. Created a vendor scorecard dashboard to track lead times and quality.',
    toolsUsed: ['SAP ERP', 'Power BI', 'Advanced Excel', 'Visio', 'Minitab'],
    timeline: '7 months',
    results: [
      'Reduced stockouts by 32%',
      'Decreased inventory holding costs by 18%',
      'Improved supplier on-time delivery from 75% to 92%'
    ],
    lessonsLearned: [
      'Data accuracy in the ERP is the foundation of any supply chain improvement',
      'Sales forecasting requires qualitative input from reps, not just historical data',
      'Regular vendor communication significantly improves performance'
    ],
    achievements: ['Implemented a Just-In-Time (JIT) system for top 20% of SKUs', 'Created a standardized weekly S&OP (Sales and Operations Planning) meeting'],
    challenges: 'Reconciling discrepancies between physical inventory counts and system records required a massive initial auditing effort before new processes could be trusted.',
    businessImpact: 'Improved cash flow by freeing up capital tied in excess inventory and increased revenue by ensuring product availability during peak seasons.',
    skillsDemonstrated: ['Lean Six Sigma', 'Supply Chain Management', 'Data Analysis', 'Cross-functional Collaboration', 'ERP Optimization'],
    metrics: [
      { value: '32%', label: 'Fewer Stockouts' },
      { value: '18%', label: 'Cost Reduction' },
      { value: '92%', label: 'Vendor Reliability' }
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
    id: 'pmp1',
    title: 'Project Initiation: Starting a Successful Project',
    organization: 'Google',
    date: 'Jul 2026',
    credentialId: 'K6XKZ8N2GMQY',
    category: 'Project Management',
    skills: ['Asana', 'Cost-Benefit Analysis', 'Gantt', 'Project Management', 'Stakeholder Management', 'RACI chart', 'Scope Management', 'Work Management'],
    icon: 'users',
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
