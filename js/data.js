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
  id: 'b2b-digital-content-delivery-overseas',
  title: 'B2B Digital Content Delivery - Overseas',
  category: 'Digital Content Delivery',
  thumbnail: '',
  technologies: ['AWS', 'JavaScript', 'Webhooks', 'FileZilla'],

  shortDescription: 'Coordinated the transition from manual to automated digital content delivery for B2B clients, enabling timely delivery across multiple time zones and eliminating manual intervention.',

  description: 'Coordinated a cross-functional initiative to streamline the delivery of digital magazine and newspaper editions to overseas B2B clients. The project focused on meeting strict delivery timelines across different time zones by replacing manual file delivery with an automated workflow from AWS to client platforms through webhooks. The initiative involved requirements analysis, stakeholder coordination, solution discussions with Engineering, testing, rollout, and delivery tracking.',

  problem: 'Digital editions needed to be delivered to B2B clients immediately after publication so they could be made available across airport lounges and airline fleets. The existing manual delivery process was affected by different time zones, working-hour constraints, file naming and format requirements, and the risk of delays or manual errors.',

  objectives: [
    'Enable timely delivery of digital magazine and newspaper editions to overseas B2B clients',
    'Eliminate manual intervention in the content delivery process',
    'Support delivery across different time zones and working schedules',
    'Standardize the required digital file format and delivery workflow',
    'Improve delivery reliability and maintain accurate delivery records'
  ],

  approach: 'Analysed the delivery requirements and time constraints associated with overseas B2B clients and identified the limitations of the manual process. Shared the problem statement with Engineering, collaborated on the solution approach, established PDF as the required delivery format, and supported the design of an automated delivery workflow using AWS and webhooks. Coordinated testing, issue resolution, rollout, and post-implementation tracking.',

  implementation: 'Coordinated with Operations, Engineering, QA, Product, external stakeholders, and management to implement an automated digital content delivery workflow. The solution enabled digital files to be automatically delivered from AWS to the client through webhooks after publication. Supported validation of file format and naming requirements, coordinated testing, addressed implementation issues, and maintained a dashboard to track delivery status and maintain operational records.',

  toolsUsed: ['AWS', 'JavaScript', 'Webhooks', 'FileZilla'],

  timeline: '6 months',

  results: [
    'Eliminated manual effort involved in routine digital content delivery',
    'Enabled more consistent and timely delivery across different time zones',
    'Reduced dependency on manual processing and associated errors',
    'Improved client experience through reliable digital content delivery',
    'Supported business growth and contributed to additional client deals'
  ],

  lessonsLearned: [
    'Time-sensitive projects require clear requirements and early identification of operational dependencies',
    'Understanding client delivery constraints is essential when designing an automated workflow',
    'Cross-functional collaboration between Operations, Engineering, QA, and external stakeholders is critical for successful implementation',
    'Maintaining delivery records and visibility after implementation helps monitor reliability and identify improvement opportunities'
  ],

  achievements: [
    'Successfully coordinated the transition from manual to automated digital content delivery',
    'Established a delivery tracking dashboard to maintain operational visibility and records',
    'Supported reliable content delivery for time-sensitive overseas B2B requirements'
  ],

  challenges: 'The project required delivery within strict time constraints while accounting for multiple time zones, varying working hours, client platform requirements, file naming conventions, and supported file formats. Coordinating these dependencies across internal and external stakeholders was a key implementation challenge.',

  businessImpact: 'The automated delivery workflow enabled timely digital content delivery to overseas B2B clients without routine manual intervention. It reduced operational dependency and errors, improved client experience, and supported the organization in delivering a more scalable solution for B2B partnerships.',

  skillsDemonstrated: [
    'Requirements Gathering & Analysis',
    'Project Coordination',
    'Stakeholder Management',
    'Cross-functional Collaboration',
    'Process Improvement',
    'Workflow Automation',
    'Time & Dependency Management',
    'Testing & Issue Management',
    'Implementation Support',
    'Operational Reporting'
  ],

  metrics: [
    { value: '6M', label: 'Project Timeline' },
    { value: '0', label: 'Routine Manual Delivery Effort' },
    { value: '24/7', label: 'Time-zone Independent Delivery' }
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
  thumbnail: '',
  technologies: ['JavaScript', 'AWS', 'FileZilla', 'Spreadsheets', 'MS Teams', 'Outlook'],

  shortDescription: 'Automated file transfer workflows from FTP servers to AWS, eliminating repetitive manual processing across 87 accounts and 900+ titles.',

  description: 'Coordinated a cross-functional file transfer automation initiative to eliminate repetitive manual file handling and streamline the delivery of publishing files from FTP servers to AWS. The project involved gathering business requirements, defining file-processing logic, mapping workflows, coordinating with Engineering and Product teams, supporting testing, resolving issues, and managing the rollout.',

  problem: 'File transfers and processing required significant manual intervention, including downloading files, applying processing logic, and uploading them to the target environment. The repetitive workflow was time-consuming, resource-intensive, and created a need for a more reliable and scalable solution.',

  objectives: [
    'Eliminate repetitive manual intervention in the file transfer workflow',
    'Automate the movement of files from FTP servers to AWS',
    'Define processing logic for combining, including, and excluding PDF files',
    'Improve delivery efficiency and ensure timely file availability',
    'Create a scalable workflow that could support multiple accounts and titles'
  ],

  approach: 'Identified repetitive and time-consuming manual activities, presented the problem statement to the Product team, gathered business requirements and file-processing logic, mapped the existing workflow, and collaborated with Engineering to define the automation approach. Coordinated testing, reported defects, supported issue resolution, and facilitated the rollout across accounts.',

  implementation: 'Worked closely with Operations, Product, and Engineering to translate operational requirements and file-processing rules into an automated workflow. Supported the definition and validation of logic for combining, including, and excluding PDF files, coordinated testing, tracked implementation progress, reported defects, and supported the production rollout.',

  toolsUsed: ['JavaScript', 'AWS', 'FileZilla', 'Spreadsheets', 'MS Teams', 'Outlook'],

  timeline: '1.5 years',

  results: [
    'Automated file transfer workflows across 87 accounts',
    'Supported automation for 900+ titles',
    'Saved approximately 70 manual hours per week',
    'Achieved approximately 92% operational efficiency'
  ],

  lessonsLearned: [
    'Detailed requirement gathering and workflow mapping are critical when automating complex operational processes',
    'Identifying process gaps early helps reduce implementation issues and improve automation reliability',
    'Repetitive manual activities should be continuously evaluated for automation opportunities to improve efficiency and resource utilization'
  ],

  achievements: [
    'Successfully supported automation across 87 accounts and 900+ titles',
    'Reduced approximately 70 hours of manual effort per week'
  ],

  challenges: 'The key challenges involved identifying and documenting detailed file-processing logic, mapping the existing workflow accurately, and accounting for potential errors and exceptions during automation.',

  businessImpact: 'The automation enabled timely file delivery without requiring manual intervention for the automated workflows, while significantly reducing repetitive operational effort and allowing resources to focus on higher-value business activities.',

  skillsDemonstrated: [
    'Project Coordination',
    'Requirements Gathering',
    'Stakeholder Management',
    'Workflow Mapping',
    'Process Improvement',
    'Cross-functional Collaboration',
    'Testing & Issue Management',
    'Automation',
    'Problem Solving',
    'Implementation Support'
  ],

  metrics: [
    { value: '87', label: 'Accounts Automated' },
    { value: '900+', label: 'Titles Supported' },
    { value: '70h', label: 'Manual Effort Saved/Week' },
    { value: '92%', label: 'Efficiency' }
  ],

  githubUrl: '#',
  liveUrl: '#',
  docsUrl: '#',
  galleryImages: [],
  dashboardEmbed: ''
  },
  // {
  //   id: 'agile-pm-framework',
  //   title: 'Agile Project Management Framework Implementation',
  //   category: 'Project Management',
  //   thumbnail: '',
  //   technologies: ['Jira', 'Confluence', 'Monday.com', 'Scrum'],
  //   shortDescription: 'Led the organizational transition from waterfall to agile methodologies, increasing delivery speed by 40%.',
  //   description: 'Spearheaded the Agile transformation for a 50-person operations and IT department. Replaced fragmented tracking tools with a unified Jira/Confluence ecosystem, established Scrum ceremonies, and coached teams on Agile best practices.',
  //   problem: 'Projects were consistently delivered late and over budget due to rigid waterfall methodologies, lack of cross-functional communication, and poor visibility into resource allocation.',
  //   objectives: [
  //     'Transition 5 teams from waterfall to Scrum/Kanban',
  //     'Implement a standardized Jira workflow across all teams',
  //     'Improve project delivery speed and predictability',
  //     'Enhance cross-departmental collaboration'
  //   ],
  //   approach: 'Adopted a phased approach, starting with a single pilot team. Conducted comprehensive Agile training. Configured Jira boards tailored to each team\'s specific needs while maintaining standardized reporting roll-ups for management.',
  //   implementation: 'Configured complex Jira workflows with automated transitions, integrated Confluence for documentation, and set up advanced roadmaps for portfolio management. Facilitated daily stand-ups, sprint planning, and retrospectives.',
  //   toolsUsed: ['Jira', 'Confluence', 'Monday.com', 'Miro'],
  //   timeline: '6 months',
  //   results: [
  //     'Increased project delivery speed by 40%',
  //     'Improved sprint predictability from 60% to 92%',
  //     'Reduced cross-team dependencies bottlenecks by 50%'
  //   ],
  //   lessonsLearned: [
  //     'Cultural change is harder than tool implementation',
  //     'Agile must be adapted to the organization, not followed blindly',
  //     'Continuous leadership support is vital for transformation success'
  //   ],
  //   achievements: ['Successfully certified 3 internal Scrum Masters', 'Created an internal Agile playbook'],
  //   challenges: 'Overcoming resistance to change from veteran team members required significant one-on-one coaching and demonstrating quick wins through the pilot program.',
  //   businessImpact: 'Faster time-to-market for internal tools and significantly higher team morale and engagement scores.',
  //   skillsDemonstrated: ['Agile Coaching', 'Jira Administration', 'Change Management', 'Scrum', 'Cross-functional Leadership'],
  //   metrics: [
  //     { value: '40%', label: 'Faster Delivery' },
  //     { value: '92%', label: 'Sprint Predictability' },
  //     { value: '5', label: 'Teams Transitioned' }
  //   ],
  //   githubUrl: '#',
  //   liveUrl: '#',
  //   docsUrl: '#',
  //   galleryImages: [],
  //   dashboardEmbed: ''
  // },
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
//   {
//     id: 'supply-chain-reengineering',
//     title: 'Supply Chain Process Reengineering',
//     category: 'Process Improvement',
//     thumbnail: '',
//     technologies: ['SAP', 'Power BI', 'Lean Six Sigma', 'Excel'],
//     shortDescription: 'Overhauled inventory management processes, reducing stockouts by 30% and decreasing holding costs.',
//     description: 'Led a cross-functional initiative to reengineer the end-to-end supply chain process, focusing on inventory optimization, vendor management, and demand forecasting.',
//     problem: 'The company faced frequent stockouts of critical items while simultaneously carrying excess inventory of slow-moving goods, resulting in high holding costs and lost sales.',
//     objectives: [
//       'Reduce stockout incidents by 25%',
//       'Decrease total inventory holding costs by 15%',
//       'Implement a data-driven demand forecasting model',
//       'Standardize vendor performance evaluation'
//     ],
//     approach: 'Applied DMAIC (Define, Measure, Analyze, Improve, Control) methodology. Analyzed historical sales data to classify inventory (ABC analysis). Collaborated with procurement and sales to redesign the forecasting process.',
//     implementation: 'Developed a dynamic forecasting model in Excel/Power BI based on historical trends and seasonality. Adjusted SAP reorder points and safety stock levels. Created a vendor scorecard dashboard to track lead times and quality.',
//     toolsUsed: ['SAP ERP', 'Power BI', 'Advanced Excel', 'Visio', 'Minitab'],
//     timeline: '7 months',
//     results: [
//       'Reduced stockouts by 32%',
//       'Decreased inventory holding costs by 18%',
//       'Improved supplier on-time delivery from 75% to 92%'
//     ],
//     lessonsLearned: [
//       'Data accuracy in the ERP is the foundation of any supply chain improvement',
//       'Sales forecasting requires qualitative input from reps, not just historical data',
//       'Regular vendor communication significantly improves performance'
//     ],
//     achievements: ['Implemented a Just-In-Time (JIT) system for top 20% of SKUs', 'Created a standardized weekly S&OP (Sales and Operations Planning) meeting'],
//     challenges: 'Reconciling discrepancies between physical inventory counts and system records required a massive initial auditing effort before new processes could be trusted.',
//     businessImpact: 'Improved cash flow by freeing up capital tied in excess inventory and increased revenue by ensuring product availability during peak seasons.',
//     skillsDemonstrated: ['Lean Six Sigma', 'Supply Chain Management', 'Data Analysis', 'Cross-functional Collaboration', 'ERP Optimization'],
//     metrics: [
//       { value: '32%', label: 'Fewer Stockouts' },
//       { value: '18%', label: 'Cost Reduction' },
//       { value: '92%', label: 'Vendor Reliability' }
//     ],
//     githubUrl: '#',
//     liveUrl: '#',
//     docsUrl: '#',
//     galleryImages: [],
//     dashboardEmbed: ''
//   }
];

const CERTIFICATIONS = [
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
