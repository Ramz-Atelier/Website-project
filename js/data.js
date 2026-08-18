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
  thumbnail: '',
  technologies: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Adobe Acrobat',
    'PDF Enhancer',
    'Apago',
    'Google Sheets',
    'Google Drive',
    'Gmail',
    'Google Chat',
    'Google Meet'
  ],

  shortDescription: 'Coordinated the development of a configurable PDF pre-processing dashboard that standardized file enhancements across 1,562 titles while reducing manual processing effort.',

  description: 'Coordinated a process optimization initiative to reduce repetitive manual intervention required to correct and enhance PDF files before publishing. The project involved identifying recurring PDF quality issues, gathering patterns and corresponding fixes, and collaborating with Engineering, Frontend, Backend, and technical stakeholders to create a centralized dashboard for configuring title-specific preprocessing methods. The solution enabled different PDF enhancement rules to be applied based on identified file characteristics and allowed Operations to manage future updates through the dashboard.',

  problem: 'Different PDF files required different preprocessing and enhancement methods depending on their format and potential quality issues. Operations teams were manually identifying problems, reprocessing files, and repeatedly using tools such as Adobe Acrobat to achieve the required output. This increased processing time and created repetitive manual effort.',

  objectives: [
    'Reduce manual intervention required for PDF preprocessing and enhancement',
    'Identify and standardize recurring PDF problems and their corresponding fixes',
    'Create a centralized dashboard for managing title-specific preprocessing methods',
    'Enable configurable processing rules for different file requirements',
    'Improve the consistency and speed of producing enhanced PDF outputs'
  ],

  approach: 'Collaborated with clients and Operations teams to identify recurring PDF quality issues and gather patterns across different file types. Documented the problems and corresponding enhancement methods, identified the need for a configurable dashboard, and worked with Engineering, Frontend, Backend, and technical stakeholders to translate the requirements into a scalable workflow. Coordinated testing, identified gaps, provided feedback, and supported the rollout.',

  implementation: 'The Engineering and Frontend teams developed a dashboard that enabled titles with specific PDF problems to be onboarded with customized preprocessing methods. Different enhancement rules could be configured for individual title requirements, allowing the appropriate preprocessing workflow to be applied automatically. Supported multiple rounds of testing, validated output quality, tracked processing failures and results, provided improvement feedback, and ensured the dashboard could be updated for future requirements.',

  toolsUsed: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Adobe Acrobat',
    'PDF Enhancer',
    'Apago',
    'Google Sheets',
    'Google Drive',
    'Gmail',
    'Google Chat',
    'Google Meet'
  ],

  timeline: '3 months',

  results: [
    'Enabled customized preprocessing methods across 1,562 titles',
    'Reduced approximately 2 hours of manual processing effort per day',
    'Reduced dependency on Adobe Acrobat usage by approximately 35%',
    'Reduced manual intervention required for recurring PDF processing issues',
    'Improved consistency and speed of producing enhanced PDF outputs'
  ],

  lessonsLearned: [
    'Understanding recurring problem patterns is essential before designing scalable automation',
    'Configurable workflows provide greater flexibility when different titles require different processing rules',
    'Providing clear examples and output expectations helps technical teams implement complex processing logic more effectively',
    'Post-implementation visibility into processing failures and results is important for continuous improvement'
  ],

  achievements: [
    'Successfully coordinated the implementation of a configurable PDF preprocessing workflow',
    'Enabled 1,562 titles with customized preprocessing methods',
    'Reduced approximately 2 hours of daily manual processing effort',
    'Created a solution that allowed future preprocessing rules to be updated without redesigning the entire workflow'
  ],

  challenges: 'The project involved identifying a wide variety of PDF problems and determining the appropriate enhancement method for each scenario. Additional challenges included coordinating multiple stakeholders, translating varied processing requirements into configurable logic, validating different output scenarios, and tracking preprocessing failures and their causes.',

  businessImpact: 'The solution reduced repetitive manual effort involved in PDF reprocessing and improved the speed and consistency of producing enhanced files. By centralizing preprocessing methods in a configurable dashboard, the workflow became more adaptable to new title-specific requirements while reducing dependency on manual PDF correction tools.',

  skillsDemonstrated: [
    'Requirements Gathering',
    'Process Analysis',
    'Project Coordination',
    'Stakeholder Management',
    'Cross-functional Collaboration',
    'Workflow Design',
    'Process Optimization',
    'Automation Planning',
    'Testing & Validation',
    'Issue Management',
    'Product Collaboration',
    'Implementation Support',
    'Continuous Improvement'
  ],

  metrics: [
    { value: '1,562', label: 'Titles Enabled' },
    { value: '2h', label: 'Manual Effort Saved/Day' },
    { value: '35%', label: 'Adobe Acrobat Usage Reduction' },
    { value: '3M', label: 'Project Timeline' }
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
  thumbnail: '',
  technologies: [
    'Google Meet',
    'Google Sheets',
    'FileZilla',
    'Adobe Acrobat',
    'Gmail',
    'Google Docs'
  ],

  shortDescription: 'Coordinated the end-to-end onboarding of a new Canadian publishing partner, supporting the digital launch of 66+ magazine titles through structured requirements, milestone planning, cross-functional coordination, and delivery management.',

  description: 'Led project coordination activities for onboarding a new publishing partner and enabling the digital publication of 70+ magazine titles across Quebec and global markets. Managed client communication, requirements gathering, milestone planning, task allocation, progress tracking, testing, issue resolution, and coordination between the client, distributor, Operations, and Engineering teams. Successfully supported the publication of 66+ titles to date.',

  problem: 'A new publishing partner required onboarding and digital publication of a large portfolio of magazine titles while operating across language, file-format, scheduling, and delivery requirements. The onboarding also involved coordination between the client, distributor, and internal teams to establish reliable workflows and ensure titles were processed and published successfully.',

  objectives: [
    'Successfully onboard the new publishing partner onto the digital platform',
    'Enable the digital publication of 70+ magazine titles',
    'Establish clear file transfer, delivery schedule, and processing requirements',
    'Coordinate internal teams and milestones to support timely title onboarding',
    'Ensure successful testing, issue resolution, and publication of titles'
  ],

  approach: 'Initiated the client onboarding process by explaining the product and providing dashboard walkthroughs. Addressed the language barrier through coordination with the distributor, gathered client requirements, recommended suitable file transfer methods, collected delivery schedules, and evaluated PDF files and processing requirements. Translated the requirements into an internal project scope, allocated tasks to the Operations team, established milestones, tracked progress, documented completed milestones, coordinated testing, and maintained communication with client and internal stakeholders throughout the onboarding.',

  implementation: 'Coordinated the onboarding workflow from initial client engagement through title publication. Established file transfer and delivery requirements, evaluated incoming PDF files and required processing methods, communicated project scope to internal stakeholders, and allocated processing activities to the Operations team. Monitored milestone completion, coordinated testing and issue resolution, followed up on dependencies and approvals, and supported the successful publication of 66+ titles.',

  toolsUsed: [
    'Google Meet',
    'Google Sheets',
    'FileZilla',
    'Adobe Acrobat',
    'Gmail',
    'Google Docs'
  ],

  timeline: '6 months',

  results: [
    'Successfully onboarded a new Canadian publishing partner',
    'Supported the digital publication of 66+ magazine titles to date',
    'Established structured requirements, milestones, and processing workflows',
    'Achieved 99% CAST based on the provided project metric',
    'Contributed to a 10% increase in user engagement',
    'Supported a 5% increase in new user sign-ups and subscription purchases'
  ],

  lessonsLearned: [
    'Clear requirements and milestone planning are essential when coordinating large-scale client onboarding',
    'Language and communication barriers can be managed effectively through the right stakeholder or distributor support',
    'Defining file and naming standards early helps prevent downstream processing and delivery issues',
    'Regular follow-ups and clear ownership of action items are critical for maintaining onboarding momentum'
  ],

  achievements: [
    'Successfully onboarded a new strategic publishing partner',
    'Coordinated the onboarding and publication workflow for 66+ magazine titles',
    'Established structured milestones and task ownership across internal teams',
    'Maintained cross-functional and client coordination throughout the six-month onboarding'
  ],

  challenges: 'The project involved a language barrier between the client and internal stakeholders, inconsistent filename and folder-name formats during the early stages, and challenges in scheduling meetings and obtaining timely approvals for action items. These were managed through distributor support, clearer requirements, structured follow-ups, and ongoing stakeholder coordination.',

  businessImpact: 'The successful onboarding established the client as an important publishing partner and expanded the availability of its digital magazine portfolio across Quebec and global markets. The positive engagement and subscription outcomes also created opportunities for further collaboration, including discussions around a more interactive and feature-rich microsite.',

  skillsDemonstrated: [
    'Client Onboarding',
    'Project Coordination',
    'Requirements Gathering',
    'Milestone Planning',
    'Task Allocation',
    'Stakeholder Management',
    'Client Communication',
    'Cross-functional Collaboration',
    'Progress Tracking',
    'Issue Management',
    'Testing & Validation',
    'Implementation Support',
    'Documentation'
  ],

  metrics: [
    { value: '66+', label: 'Titles Published' },
    { value: '6M', label: 'Onboarding Timeline' },
    { value: '10%', label: 'User Engagement Growth' },
    { value: '5%', label: 'Signup & Subscription Growth' },
    { value: '99%', label: 'CAST' }
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
  thumbnail: '',
  technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Google Sheets', 'Google Drive', 'Gmail', 'Google Chat', 'Google Meet'],

  shortDescription: 'Coordinated the development of a centralized file management and delivery schedule dashboard, consolidating fragmented schedules and enabling automated workflow triggers across 58 accounts.',

  description: 'Coordinated a process optimization initiative to centralize file management and delivery schedules received from multiple clients across FTP, email, Google Sheets, and calendars. The project introduced a centralized dashboard with predefined delivery schedules, file naming and folder rules, validation logic, and automation triggers. Worked with Operations, Engineering, Frontend, and technical stakeholders to gather requirements, define workflow logic, provide solution inputs, coordinate testing, and support rollout.',

  problem: 'File delivery schedules and processing requirements were distributed across multiple tools and formats, requiring significant manual effort to monitor schedules and initiate file-processing activities. Different clients used different FTP structures, file formats, naming conventions, and release schedules, making it difficult to maintain a single source of truth and increasing the dependency on manual intervention.',

  objectives: [
    'Create a centralized view of client file delivery schedules and processing requirements',
    'Reduce manual effort involved in monitoring schedules and initiating file workflows',
    'Standardize file naming, folder, and validation requirements',
    'Enable automation triggers based on predefined schedule and file-processing rules',
    'Improve operational visibility and reduce dependency on multiple tools'
  ],

  approach: 'Mapped the existing workflow across FTP, email, Google Sheets, and calendars to identify gaps and repetitive manual activities. Defined the requirement for a centralized dashboard and collaborated with Engineering and Frontend teams to translate operational requirements into dashboard functionality. Provided workflow ideas, sample scenarios, and requirements for automation triggers, file validation, naming conventions, and delivery schedules. Coordinated testing, provided feedback, supported feature improvements, and assisted with rollout.',

  implementation: 'The Engineering and Frontend teams developed a centralized dashboard containing delivery schedule information and predefined workflow rules. Each magazine entry could include trigger dates, release dates, filename formats, folder formats, and file validation checks, allowing automation triggers to be linked to individual records. Supported testing of the workflow and validation logic, identified gaps, provided feedback and feature improvement suggestions, and supported successful onboarding of new schedules.',

  toolsUsed: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Google Sheets', 'Google Drive', 'Gmail', 'Google Chat', 'Google Meet'],

  timeline: '2 months',

  results: [
    'Enabled workflow logic and automation triggers across 58 accounts',
    'Configured 5,771 schedule records with predefined processing logic',
    'Reduced approximately 4 hours of manual effort per day',
    'Achieved approximately 95% improvement in operational efficiency',
    'Successfully onboarded new delivery schedules into the centralized workflow'
  ],

  lessonsLearned: [
    'Providing clear samples and wireframes can significantly improve communication between business and Frontend teams',
    'Detailed workflow rules and validation scenarios are important when designing automation around variable client requirements',
    'Centralizing fragmented operational information improves visibility and reduces dependency on multiple tools'
  ],

  achievements: [
    'Successfully coordinated the development and rollout of a centralized file management and delivery schedule dashboard',
    'Enabled automation logic and triggers across 58 accounts and 5,771 records',
    'Reduced approximately 4 hours of daily manual effort'
  ],

  challenges: 'The project required coordination with multiple stakeholders based on their availability while also defining complex file validation rules, filename filters, and automation scenarios. Additional challenges included tracking automation outcomes and identifying reasons for automation failures across varying client requirements.',

  businessImpact: 'The centralized dashboard created a single source of operational information for file delivery schedules, processing rules, and automation triggers. It reduced manual intervention and dependency on multiple tools, improved workflow visibility, and enabled the Operations team to manage a larger volume of delivery schedules more efficiently.',

  skillsDemonstrated: [
    'Requirements Gathering',
    'Process Mapping',
    'Project Coordination',
    'Stakeholder Management',
    'Cross-functional Collaboration',
    'Workflow Design',
    'Process Optimization',
    'Automation Planning',
    'Testing & Validation',
    'Issue Management',
    'Product Collaboration',
    'Implementation Support'
  ],

  metrics: [
    { value: '58', label: 'Accounts Enabled' },
    { value: '5,771', label: 'Records Configured' },
    { value: '4h', label: 'Manual Effort Saved/Day' },
    { value: '95%', label: 'Efficiency Improvement' }
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
  thumbnail: '',
  technologies: ['Node.js', 'APIs', 'Azure', 'ClickHouse', 'SQL', 'MD5', 'Checksum', '7-Zip', 'Excel', 'Adobe Acrobat'],

  shortDescription: 'Coordinated a technical improvement initiative to address recurring file corruption during client-side data transmission by replacing a legacy PHP module with a Node.js-based solution.',

  description: 'Coordinated a cross-functional technical improvement initiative after identifying recurring file corruption during client-side file transmission. After investigating client queries and collecting error data, the issue was traced to the existing legacy PHP-based upload module. Worked with Engineering, Product, and the Technical Architect to evaluate the underlying issue, validate an alternative Node.js-based implementation, coordinate extensive testing, document the changes, and support the production rollout.',

  problem: 'Multiple clients experienced file corruption during transmission, resulting in delivery issues, additional follow-ups, and potential SLA impact. Initial investigation showed that the issue was not isolated to a single file or client, leading to a deeper investigation of the client-side upload module.',

  objectives: [
    'Identify the root cause of recurring file corruption during transmission',
    'Establish a reliable method to validate file integrity before and after transmission',
    'Identify and implement a suitable alternative to the legacy PHP-based module',
    'Validate the new transmission workflow through structured testing',
    'Improve file delivery reliability and prevent recurring transmission issues'
  ],

  approach: 'Investigated an initial file corruption incident by validating the issue with the client and analysing the affected file. When similar incidents were reported by multiple clients, expanded the investigation to identify a common underlying cause. Collected error data, documented findings, compared file checksums at input and output stages, replicated reported issues, and collaborated with Engineering and the Technical Architect to identify the legacy PHP module as the underlying cause. Node.js and new APIs were then evaluated as the replacement approach.',

  implementation: 'Coordinated with Operations, Engineering, Product, and the Technical Architect to implement and validate the updated transmission module. Supported checksum-based validation at input and output levels, replicated reported errors, coordinated multiple rounds of testing, identified implementation gaps, validated the Node.js-based solution, documented the changes, and supported the production rollout.',

  toolsUsed: ['Node.js', 'APIs', 'Azure', 'ClickHouse', 'SQL', 'MD5', 'Checksum', '7-Zip', 'Excel', 'Adobe Acrobat'],

  timeline: '9 months',

  results: [
    'Eliminated recurring file corruption issues following implementation',
    'Achieved reliable file delivery with no further reported transmission errors',
    'Improved file upload performance, reducing upload duration by approximately 50%',
    'Improved delivery reliability and supported consistent SLA achievement'
  ],

  lessonsLearned: [
    'Recurring customer issues should be investigated for systemic causes rather than treated as isolated incidents',
    'File integrity validation at multiple stages can help identify where data transmission issues occur',
    'Structured testing and evidence-based root-cause analysis are critical when replacing legacy components',
    'Early collaboration between Operations, Engineering, Product, and technical leadership helps accelerate complex issue resolution'
  ],

  achievements: [
    'Identified a recurring systemic issue affecting multiple clients',
    'Helped establish checksum-based validation to isolate the source of file corruption',
    'Supported the transition from a legacy PHP module to a Node.js-based solution',
    'Successfully supported rollout with no further reported file corruption issues'
  ],

  challenges: 'The investigation required reproducing client-reported errors, obtaining and comparing source files, and tracking checksums at both input and output stages to isolate where file corruption occurred. Establishing consistent test conditions and identifying the underlying cause required multiple rounds of investigation and testing.',

  businessImpact: 'The module upgrade significantly improved file transmission reliability, reducing client-facing delivery issues and follow-up communication. It helped ensure more consistent and timely file delivery while supporting SLA performance and improving the overall client experience.',

  skillsDemonstrated: [
    'Problem Identification',
    'Root Cause Analysis',
    'Requirements Gathering',
    'Stakeholder Management',
    'Cross-functional Collaboration',
    'Technical Project Coordination',
    'Issue Management',
    'Testing & Validation',
    'Process Improvement',
    'Change Management',
    'Implementation Support',
    'Documentation'
  ],

  metrics: [
    { value: '9M', label: 'Project Timeline' },
    { value: '50%', label: 'Faster File Upload' },
    { value: '0', label: 'Reported Errors After Rollout' },
    { value: '98%', label: 'SLA Achievement' }
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
    technologies: ['Outlook', 'HubSpot', 'Freshdesk', 'Google Sheets'],
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
  // {
  //   id: 'ai-document-processing',
  //   title: 'AI-Powered Document Processing Pipeline',
  //   category: 'AI',
  //   thumbnail: '',
  //   technologies: ['Python', 'OpenAI API', 'Azure AI', 'OCR'],
  //   shortDescription: 'Implemented an AI solution to extract and categorize data from unstructured PDFs, replacing a 5-person manual entry team.',
  //   description: 'Designed and deployed an intelligent document processing system that utilizes OCR and Large Language Models (LLMs) to automatically extract key information from unstructured invoices, contracts, and forms.',
  //   problem: 'A team of 5 data entry clerks spent their entire week manually reading PDFs and typing information into a database, leading to high operational costs and frequent human errors.',
  //   objectives: [
  //     'Automate the extraction of data from unstructured PDFs',
  //     'Achieve >95% accuracy in data extraction',
  //     'Reduce processing time per document from 5 minutes to <10 seconds',
  //     'Integrate the extracted data directly into the ERP'
  //   ],
  //   approach: 'Evaluated multiple OCR and AI solutions. Developed a prototype using Python and the OpenAI API. Created a validation pipeline where low-confidence extractions are flagged for human review.',
  //   implementation: 'Used Azure Computer Vision for robust OCR to extract text from images/PDFs. Passed the raw text to a fine-tuned LLM (via API) with strict JSON schema prompts to extract specific entities (names, amounts, dates). Built a Python backend to orchestrate the flow and push to the ERP via REST API.',
  //   toolsUsed: ['Python', 'Azure Form Recognizer', 'OpenAI API', 'FastAPI', 'Docker'],
  //   timeline: '4 months',
  //   results: [
  //     'Automated processing of 10,000+ documents per month',
  //     'Achieved 97% extraction accuracy',
  //     'Reduced processing time by 98%',
  //     'Reallocated 5 staff members to higher-value analytical roles'
  //   ],
  //   lessonsLearned: [
  //     'Prompt engineering and JSON schema enforcement are critical for reliable LLM outputs',
  //     'A human-in-the-loop fallback mechanism is mandatory for edge cases',
  //     'OCR quality heavily dictates the downstream AI performance'
  //   ],
  //   achievements: ['Processed first 50,000 documents with zero critical errors', 'Presented solution at company-wide innovation summit'],
  //   challenges: 'Handling highly varied document layouts (e.g., hundreds of different vendor invoice formats) required moving away from template-based OCR to semantic AI extraction.',
  //   businessImpact: 'Saved approximately $250k annually in operational costs and accelerated invoice processing times, improving vendor relationships.',
  //   skillsDemonstrated: ['AI Integration', 'Python Backend Development', 'Prompt Engineering', 'API Design', 'Process Automation'],
  //   metrics: [
  //     { value: '97%', label: 'Extraction Accuracy' },
  //     { value: '98%', label: 'Time Saved' },
  //     { value: '$250k', label: 'Annual Savings' }
  //   ],
  //   githubUrl: '#',
  //   liveUrl: '#',
  //   docsUrl: '#',
  //   galleryImages: [],
  //   dashboardEmbed: ''
  // },
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
