import {
  Metric,
  ValueProp,
  ServiceDetail,
  ApproachStage,
  IndustryDetail,
  CaseStudy,
  Testimonial,
  LeaderProfile
} from './types';

export const METRICS: Metric[] = [
  {
    id: 'cost_reduction',
    label: 'Avg. Operational Cost Reduction',
    value: '15-30%',
    description: 'Sustainably lower cost-to-serve overheads across operational processes.',
    icon: 'TrendingDown'
  },
  {
    id: 'efficiency_gain',
    label: 'Operational Efficiency Gain',
    value: 'up to 40%',
    description: 'Accelerate cycle times, streamline workflows, and eliminate waste.',
    icon: 'Zap'
  },
  {
    id: 'cycle_reduction',
    label: 'Overall Cycle Time Reduction',
    value: '50%',
    description: 'Decongest process bottlenecks and eliminate non-value-adding delays.',
    icon: 'Clock'
  },
  {
    id: 'productivity_increase',
    label: 'Workforce Productivity Boost',
    value: '25%',
    description: 'Maximize throughput through better alignment and structured skill development.',
    icon: 'Users'
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 'data_driven',
    title: 'Data-Driven Insights',
    description: 'Every operational shift we advise is rooted in deep empirical baseline analysis. We eliminate guesswork in favor of measurable analytical certainty.',
    iconName: 'BarChart3'
  },
  {
    id: 'proven_methodology',
    title: 'Proven Methodologies',
    description: 'Our frameworks run on tested Lean, Six Sigma, and Agile architectures, adapted thoughtfully to match your unique organizational environment.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'hands_on',
    title: 'Practical Execution',
    description: 'We do not generate lengthy strategy slide decks and walk away. Our teams work on the floor alongside yours to build and trial core solutions.',
    iconName: 'Shuffle'
  },
  {
    id: 'sustainable_results',
    title: 'Sustainable Systems',
    description: 'We design custom management loops and build internal capabilities to ensure your growth continues long after our engagements wrap up.',
    iconName: 'Repeat'
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'business_excellence',
    title: 'Business Excellence',
    iconName: 'Award',
    shortDescription: 'Deploy structured capability systems to align strategic business goals with flawless daily execution.',
    longDescription: 'Establish high-performance operations using frameworks that connect every level of your workforce with organizational goals. Our Business Excellence service focuses on stabilizing and scaling operational models to secure sustainable competitive advantages.',
    components: [
      {
        title: 'Strategy Deployment (Hoshin Kanri)',
        description: 'Cascade vision into executable, measurable KPIs across all tiers of performance.'
      },
      {
        title: 'Daily Management Systems (DMS)',
        description: 'Build structured tier-meetings, cascade metrics, and activate root-cause problem solving at the frontline.'
      },
      {
        title: 'Continuous Improvement (KAIZEN) Culture',
        description: 'Train and engage teams to drive continuous improvement initiatives autonomously.'
      }
    ],
    problemsSolved: [
      'Strategic goals failing to translate into daily active tasks.',
      'Siloed operational departments running without shared execution metrics.',
      'Disengaged frontline workforces waiting on top-down instructions.'
    ],
    outcomes: [
      { metric: '95%+', label: 'KPI Alignment across nested departments' },
      { metric: '3.5x', label: 'Frontline problem-solving ideas generated annually' }
    ],
    relatedServices: ['systems_excellence', 'project_management']
  },
  {
    id: 'cost_optimization',
    title: 'Cost Optimization',
    iconName: 'DollarSign',
    shortDescription: 'Eliminate waste and structural overheads to drive immediate bottom-line cashflow benefits.',
    longDescription: 'Identify unneeded operational expenditures and process waste to reclaim capital. We take a precise, surgical approach to cost reduction, ensuring that optimizations do not destabilize the core quality, output, or speed of your business deliveries.',
    components: [
      {
        title: 'Zero-Based Operational Budgeting',
        description: 'Analyze operational costs from raw baseline, stripping away legacy expenses.'
      },
      {
        title: 'Lean Waste Identification (Muda, Mura, Muri)',
        description: 'Expose and systematically strip out non-value-adding practices, transit overheads, and processing delays.'
      },
      {
        title: 'Resource Allocation Analysis',
        description: 'Model resource utilization structures to align personnel and equipment capacity with true market demand.'
      }
    ],
    problemsSolved: [
      'Bloated operational footprints undermining target profit margins.',
      'Uncontrolled operational spend growing faster than baseline revenues.',
      'Suboptimal machine, vendor, or labor asset utilization.'
    ],
    outcomes: [
      { metric: '15-30%', label: 'Sustainable reduction in total operational costs' },
      { metric: '100%', label: 'ROI recouped within the first 6 months of delivery' }
    ],
    relatedServices: ['throughput_reduction', 'systems_excellence']
  },
  {
    id: 'systems_excellence',
    title: 'Systems & Process Excellence',
    iconName: 'Workflow',
    shortDescription: 'Re-engineer cluttered core processes to establish lean, reproducible standard practices.',
    longDescription: 'Assess, re-map, and modernize foundational operational processes. We replace fragmented workflows and tribal knowledge structures with clear, standard work procedures designed for scalable and predictable outcomes.',
    components: [
      {
        title: 'Value Stream Mapping (VSM)',
        description: 'Map and model end-to-end information and material flow to expose process friction points.'
      },
      {
        title: 'Standard Work Architecture',
        description: 'Document and institute optimal process benchmarks to eliminate variance between operators.'
      },
      {
        title: 'Single-Minute Exchange of Die (SMED)',
        description: 'Re-engineer changeover activities in setup-heavy environments to maximize available machine time.'
      }
    ],
    problemsSolved: [
      'Extreme outcome variation and high error rates based on individual operator approach.',
      'Excessive operational bottlenecks stemming from nested sign-offs and hand-offs.',
      'Outdated processes slowing down digital systems tool adoption.'
    ],
    outcomes: [
      { metric: '40%', label: 'Improvement in process efficiency and predictability' },
      { metric: '75%', label: 'Reduction in process re-work and service errors' }
    ],
    relatedServices: ['business_excellence', 'throughput_reduction']
  },
  {
    id: 'hr_relations',
    title: 'HR & Industrial Relations',
    iconName: 'Users',
    shortDescription: 'Align organizational culture and personnel policies to eliminate operational interruptions.',
    longDescription: 'Convert complex HR metrics and critical employee workflows into drivers of stable operational execution. We stabilize workforce dynamics, build constructive labor environments, and establish structured organizational designs built to survive growth.',
    components: [
      {
        title: 'Organizational Design & Structuring',
        description: 'Audit and re-align management hierarchies to maximize accountability and operational delegation.'
      },
      {
        title: 'Industrial Relations Stabilization',
        description: 'Formulate responsive, clear, and compliant framework agreements to prevent production downtime.'
      },
      {
        title: 'Strategic Talent & Skill Competency Matrix',
        description: 'Establish objective talent metrics, succession roadmaps, and rapid multi-skilling systems.'
      }
    ],
    problemsSolved: [
      'Frequent labor disputes or friction interrupting daily operational output.',
      'Excessive management clutter leading to slow, bureaucratic decision cycles.',
      'High key-man dependencies and technical skills shortages.'
    ],
    outcomes: [
      { metric: '0', label: 'Unscheduled operational work stoppage hours over contract lifecycle' },
      { metric: '30%', label: 'Reduction in overall voluntary frontline employee turnover' }
    ],
    relatedServices: ['business_excellence', 'project_management']
  },
  {
    id: 'project_management',
    title: 'Project Management',
    iconName: 'Briefcase',
    shortDescription: 'Establish rigorous execution rules to deliver complex business transformation programs on time.',
    longDescription: 'Ensure high-capital and business-critical change programs succeed without scope creep or missed launch dates. Our PMO experts deploy rigorous governance structures and agile methodologies to keep delivery teams tightly aligned with core project business cases.',
    components: [
      {
        title: 'Transformation PMO Setup',
        description: 'Deploy central governance, milestone tracking models, and transparent escalation pathways.'
      },
      {
        title: 'Operational Risk Mitigation Planning',
        description: 'Audit project dependencies, pre-empt delays, and structure active backup plans.'
      },
      {
        title: 'Agile & Waterfall Hybrid Delivery',
        description: 'Integrate dynamic sprint cycles with strict milestone deadlines to maintain delivery speed.'
      }
    ],
    problemsSolved: [
      'Critical business projects repeatedly exceeding estimated deadlines and budget marks.',
      'Poor transparency into project progress, leading to late-stage crisis management.',
      'Post-deployment friction stemming from incomplete user training and onboarding.'
    ],
    outcomes: [
      { metric: '98%', label: 'Milestone delivery adherence rating on key initiatives' },
      { metric: '20%+', label: 'Shorter deployment timelines through optimized resource scheduling' }
    ],
    relatedServices: ['business_excellence', 'innovation_transformation']
  },
  {
    id: 'throughput_reduction',
    title: 'Throughput Time Reduction',
    iconName: 'Zap',
    shortDescription: 'Drastically shrink turnaround times to build superior responsiveness and unlock market capacity.',
    longDescription: 'Accelerate the timeline from customer inquiry to operational fulfillment. By removing queues, optimizing material flow, and implementing pull scheduling, we dramatically shrink cycle times to boost cash conversion and customer satisfaction indicators.',
    components: [
      {
        title: 'Cycle Time Breakdown & Analysis',
        description: 'Expose time traps, structural queue delays, and work-in-progress (WIP) build-up.'
      },
      {
        title: 'Pull Scheduling & Kanban Systems',
        description: 'Apply responsive trigger flows to control input queues and prevent upstream overload.'
      },
      {
        title: 'Synchronous Flow Engineering',
        description: 'Balance processing tempos across diverse machines and teams to establish a continuous processing rhythm.'
      }
    ],
    problemsSolved: [
      'Frustratingly long delivery lead times leading to lost customer contracts.',
      'Excessive work-in-progress inventory tying up crucial operational cashflow.',
      'Unsystematic and chaotic production expediting to meet constant customer urgencies.'
    ],
    outcomes: [
      { metric: '50%', label: 'Reduction in typical cycle and delivery throughput times' },
      { metric: '45%', label: 'Reduction in static, high-cost Work-In-Progress inventory levels' }
    ],
    relatedServices: ['systems_excellence', 'cost_optimization']
  },
  {
    id: 'innovation_transformation',
    title: 'Innovation & Transformation',
    iconName: 'Lightbulb',
    shortDescription: 'Infuse intelligent workflows and emerging automation solutions into proven operating models.',
    longDescription: 'Modernize traditional operating models by deploying appropriate digital tools, automated pathways, and high-performance ways of working. We ensure technology serves the process, rather than deploying complex tools onto broken, waste-prone processes.',
    components: [
      {
        title: 'Operational Digital Blueprinting',
        description: 'Identify highest-impact manual hotspots ripe for intelligent digitization.'
      },
      {
        title: 'Process Automation Integration',
        description: 'Implement RPA, digital workflow triggers, or modern cloud integrations to eliminate manual typing.'
      },
      {
        title: 'Digital-First Change Management',
        description: 'Drive high digital tooling adoption rates through intuitive pilot schemes and focused training.'
      }
    ],
    problemsSolved: [
      'Expensive software tools suffering from low employee adoption and poor functional ROI.',
      'Manual human data entry linking disconnected legacy internal systems.',
      'Inability to scale core operations because of heavily dependency on paper and emails.'
    ],
    outcomes: [
      { metric: '85%+', label: 'Frontline adoption rates of newly established digital utilities' },
      { metric: '60%', label: 'Reduction in manual paper-shuffling and administrative double-entry' }
    ],
    relatedServices: ['project_management', 'systems_excellence']
  }
];

export const APPROACH_STAGES: ApproachStage[] = [
  {
    id: 'diagnose',
    number: 1,
    title: 'Diagnose',
    iconName: 'Search',
    oneLiner: 'Deep process mapping and empirical performance baselining.',
    description: 'We deploy to your operational floor to analyze processes in real time. We audit actual data logs, trace material steps, interview frontline practitioners, and build a mathematically objective operational baseline.',
    details: [
      'Conduct value stream mapping workshops to visualize current blockages.',
      'Measure end-to-end processing speeds and quantify waste volumes.',
      'Analyze historical cost frameworks, scrap ratios, and workforce deployment structures.',
      'Conduct comparative industrial performance benchmarking analyses.'
    ],
    output: 'A comprehensive Operational Diagnostic Report presenting fully quantified waste pockets, process bottleneck analysis, and priority mitigation areas.',
    metric: '100% data transparency established'
  },
  {
    id: 'design',
    number: 2,
    title: 'Design',
    iconName: 'DraftingCompass',
    oneLiner: 'Architecting customized, waste-free target operating models.',
    description: 'We design customized solution architectures. Instead of forcing ready-made templates, we co-design workflows alongside your division heads to ensure compliance, fit, and peak organizational feasibility.',
    details: [
      'Scribble out step-by-step future-state process pathways.',
      'Draft dynamic daily dashboard layouts and custom key performance indicator (KPI) models.',
      'Design comprehensive technical training content and role responsibilities.',
      'Generate a phase-by-phase implementation roadmap marked by clear ROI milestones.'
    ],
    output: 'A customized Future-State Blueprint complete with target processes, training curriculums, resource allocations, and detailed risk action plans.',
    metric: 'Custom-designed operational blueprint'
  },
  {
    id: 'implement',
    number: 3,
    title: 'Implement',
    iconName: 'PlayCircle',
    oneLiner: 'Hands-on project execution accompanied by extensive team coaching.',
    description: 'We do not step away once strategy finishes. Our consultants roll up their sleeves to run pilot processes directly with your teams, helping troubleshoot errors, build confidence, and solidify execution standards.',
    details: [
      'Run tight, low-risk process pilots to pressure-test designed updates.',
      'Execute structured classroom sessions and direct floor coaching activities.',
      'Deploy agile visual progress boards and active Daily Management systems.',
      'Rapidly iterate and adjust pathways based on pilot performance feedback.'
    ],
    output: 'Tested, streamlined operating processes running safely in daily use, supported by fully compliant, up-skilled teams.',
    metric: 'Active frontline floor coaching'
  },
  {
    id: 'sustain',
    number: 4,
    title: 'Sustain',
    iconName: 'ToggleRight',
    oneLiner: 'Setting standard audits and transferring full platform ownership.',
    description: 'We lock in the gains. We create standard control loops, train internally designated change champions, and hand over robust ownership toolkits to make sure operational performance never drops backward.',
    details: [
      'Document flawless, highly visual Standard Work Sheets (SWS) for permanent reference.',
      'Set up scheduled operational audit cycles for management teams.',
      'Train internal Process Excellence leads to spearhead future kaizens independently.',
      'Lock in continuous metric loops to track ongoing business bottom-line savings.'
    ],
    output: 'Permanent management control loops, visual reference binders, and fully certified internal process improvement stewards.',
    metric: 'Permanent improvement systems'
  }
];

export const INDUSTRIES_DATA: IndustryDetail[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing & Heavy Industry',
    iconName: 'Factory',
    overview: 'From high-mix low-volume parts to high-volume assembly lines, we optimize production sequences to boost yield, shrink setups, and dramatically lower manufacturing lead times.',
    challenges: [
      'Struggling with sluggish line changeovers and machine idle periods.',
      'Experiencing critical quality variations and expensive scrap metrics.',
      'High volumes of locked-up capital held in finished product inventory.'
    ],
    solutions: [
      'Single-Minute Exchange of Die (SMED) programs to shorten machine setup periods.',
      'Layout and line balancing optimizations based on true Takt Time metrics.',
      'Total Productive Maintenance (TPM) systems to eliminate sudden equipment outages.'
    ],
    metrics: [
      { value: '35%', description: 'Reduction in line setup times' },
      { value: '28%', description: 'Yield throughput improvement' }
    ]
  },
  {
    id: 'it_services',
    name: 'IT, Technology & Services',
    iconName: 'Laptop',
    overview: 'Make intellectual or administrative processing workflows visible. We eliminate task re-work and remove human queues to create lightning-fast service fulfillment operations.',
    challenges: [
      'Sloppy service handoffs leading to extreme variance in ticket completion times.',
      'Lack of clear queue visibility generating massive administrative backlogs.',
      'Complex, manual spreadsheet shuffling keeping talent from customer support.'
    ],
    solutions: [
      'Digital value stream layouts and visual job cards.',
      'Elimination of process loops and unnecessary middle-management approval chains.',
      'Appropriate robotic process automation (RPA) of highly manual entry tasks.'
    ],
    metrics: [
      { value: '45%', description: 'Fulfillment lead time speedup' },
      { value: '92%', description: 'First-time-right delivery improvement' }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinical Systems',
    iconName: 'HeartPulse',
    overview: 'Improve patient care experiences and optimize material availability to enable clinical personnel to spend more hours delivering core healthcare support.',
    challenges: [
      'Inefficient patient intake and discharge loops increasing length-of-stay averages.',
      'Clinical personnel spending hours searching for diagnostic materials and files.',
      'High scheduling waste across high-value surgical rooms.'
    ],
    solutions: [
      '5S layout transformations across key supply stores.',
      'Co-designed visual management and digital patient status trackers.',
      'Lean optimization of patient discharge procedures and clean transition loops.'
    ],
    metrics: [
      { value: '22min', description: 'Reduction in patient intake wait times' },
      { value: '30%', description: 'Surgical room utilization improvement' }
    ]
  },
  {
    id: 'supply_chain',
    name: 'Supply Chain & Logistics',
    iconName: 'Truck',
    overview: 'Re-engineer warehouse footprints, pick pathways, and transport scheduling patterns to drive high delivery accuracy and fast stock-turns.',
    challenges: [
      'Bottlenecked warehouse loading bays causing expensive driver standby costs.',
      'Slow and error-filled pallet picking and stock sorting patterns.',
      'Poor replenishment tracking generating stockouts of critical goods.'
    ],
    solutions: [
      'Cross-docking layouts to optimize immediate material transits.',
      'Ergonomic zone picking design and visual warehouse indexing systems.',
      'Kanban replenishment signals paired with vendor performance scorecards.'
    ],
    metrics: [
      { value: '40%', description: 'Improvement in warehouse storage density' },
      { value: '99.4%', description: 'Perfect shipping order accuracy achieved' }
    ]
  },
  {
    id: 'retail',
    name: 'Retail & Multi-Unit Store Operations',
    iconName: 'Store',
    overview: 'Improve customer flow, standardize key floor workflows, and maximize stock room operational speeds across large multi-site store footprints.',
    challenges: [
      'Massive inventory mismatches causing store out-of-stocks.',
      'Vast differences in operational compliance and metrics between store outlets.',
      'Excessive check-out processing times degrading direct customer feedback ratings.'
    ],
    solutions: [
      'Standard cash-wrap and checkout routines to quicken customer processing.',
      'Store inventory standard audits and daily stockroom recovery checklists.',
      'Multi-site standardized manager routines to lock in operational execution.'
    ],
    metrics: [
      { value: '18%', description: 'Increase in stock-turn frequencies' },
      { value: '94/100', description: 'Average customer service index score' }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Manufacturing Cost & Lead-Time Transformation',
    clientType: 'Precision Automotive Component Provider',
    industry: 'Manufacturing',
    serviceId: 'cost_optimization',
    challenge: 'Rising raw input material costs and a 14-day production setup timeline were eroding margins and risking important multi-year buyer contracts.',
    solution: 'Designed and deployed a rigorous 3-month lead-time reduction strategy. Introduced a visual Kanban pull-system to control factory floor inventory, and ran a comprehensive SMED program that re-engineered component setup routines.',
    results: [
      'Cut end-to-end manufacturing lead times down from 14 days to just 6 days (57% reduction).',
      'Lowered raw material and WIP work inventories by 42%, releasing $1.2M in cashflow.',
      'Lowered plant-wide carbon footprint through optimized machine warmup cycles.'
    ],
    quote: {
      text: "They did not just point at our machines and tell us to work faster. Their consultants worked directly beside our setting operators to trial line updates and prove the changes survived night shifts.",
      author: "Vidhya Raman",
      role: "Operations VP"
    }
  },
  {
    id: 'cs2',
    title: 'Digital Systems Bottleneck Elimination',
    clientType: 'Commercial Insurance Claim Administrator',
    industry: 'IT & Services',
    serviceId: 'systems_excellence',
    challenge: 'A massive backlog of unprocessed corporate claims had reached a 22-day turnaround time, driving high client dissatisfaction and contract cancellations.',
    solution: 'Mapped end-to-end claim handling flows using digital VSM. Eliminated redundant data validation loops, digitized manual handoffs, and deployed active daily tracking dashboards to resolve resource imbalance issues.',
    results: [
      'Compressed average claim lifecycle from 22 days down to a predictable 9 days.',
      'Improved processing accuracy from 78% right-first-time to 96% right-first-time.',
      'Created a digital queue structure that eliminated the need for manual status sync meetings.'
    ],
    quote: {
      text: "The operational visibility they created was beautiful. Our teams now manage files with absolute clarity, and our ticket turnaround has never been so fast and predictable.",
      author: "Michael Sterling",
      role: "Operations Lead"
    }
  },
  {
    id: 'cs3',
    title: 'Large Hospital Core Inventory Stabilization',
    clientType: 'Regional Clinical Service Center',
    industry: 'Healthcare',
    serviceId: 'business_excellence',
    challenge: 'Nursing staff were spending up to 75 minutes per shift searching for critical patient care materials, leading to care delays and operational chaos.',
    solution: 'Audited patient material supply lines. Deployed a physical 5S visual reorganization design across medical closets and designed a color-coded checkout standard. Put standard floor inventory replenishment controls in place.',
    results: [
      'Lowered search times spent by floor nurse teams from 75 minutes down to under 8 minutes per shift.',
      'Reduced excess clinical stock hoarding, resulting in an immediate $180k one-time saving.',
      'Stabilized care deliveries, leading to higher direct clinician satisfaction indices.'
    ],
    quote: {
      text: "By organizing our clinical spaces and putting color indicators in place, they restored peaceful productivity. Our floor nurses are now focused entirely on patient recovery.",
      author: "Sarah Jenkins, RN",
      role: "Chief Nursing Officer"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Robert Vance',
    role: 'Chief Operating Officer',
    company: 'Stellar Logistics Group',
    rating: 5,
    quote: 'Their process consultants lived on-site to build practical pick paths and visual warehouse controls with our teams. The outcomes are solid: picking accuracy is flawless, and cargo dwell times have dropped across every single terminal.',
    serviceReceived: 'Throughput Time Reduction & Systems Excellence',
    resultsAchieved: 'Dwell times down by 44%, and picking accuracies improved to 99.4%.'
  },
  {
    id: 't2',
    name: 'Elena Kostic',
    role: 'Managing Director & Founder',
    company: 'Kostic Engineering Software',
    rating: 5,
    quote: 'Traditional consultants handed us a 200-page slide design and disappeared. These guys stayed, and co-built standard workflow steps alongside our project managers. They helped streamline the ways we deploy systems, keeping customer onboarding fast.',
    serviceReceived: 'Project Management & Innovation',
    resultsAchieved: 'Service onboarding lead times compressed from 30 days to 14 days.'
  },
  {
    id: 't3',
    name: 'David Thorne',
    role: 'Human Resources Director',
    company: 'West Coast Automotive Group',
    rating: 5,
    quote: 'We were suffering from persistent operational disputes and high key-talent turnover. They reorganized our accountability structures, certified our middle management, and stabilized employee loops. They built a foundation that will scale.',
    serviceReceived: 'HR & Industrial Relations',
    resultsAchieved: 'Voluntary turnover plummeted by 32%, and work stoppages fell to zero.'
  }
];

export const LEADERSHIP_DATA: LeaderProfile[] = [
  {
    id: 'rajnish_kaila',
    name: 'Rajnish Kaila',
    title: 'Co-Founder & Digital Transformation Lead',
    experienceYears: 25,
    location: 'Ludhiana, Punjab',
    photoUrl: 'https://picsum.photos/seed/rajnish/400/400',
    tagline: '25+ years digital transformation expert with 50+ ServiceNow implementations. TOC certified with 50% OTIF improvement and 50% PLT reduction across manufacturing operations.',
    bioParagraphs: [
      '25+ years senior professional specializing in Program Management and IT-enabled Digital Transformation. Lead delivery for 50+ ServiceNow implementations globally. Formerly served as President IT & Chief IT Architect at Trident Group, leading 100+ Crore tech programs.',
      'Rajnish excels in deploying cutting-edge enterprise system architecture, combining TOC principles with streamlined service workflows. He has a proven history of automating operational bottlenecks and unlocking significant organizational capacity.'
    ],
    coreExpertise: [
      'ServiceNow Implementation (50+ projects)',
      'SAP & Enterprise Architecture',
      'TOC (Theory of Constraints) Certified',
      'Program Management (100+ Cr programs)',
      'Digital Transformation & Cloud Strategy'
    ],
    credentials: [
      'ITIL Certified Expert',
      'ServiceNow Certified System Administrator',
      'CIS - Security Incident Response',
      '25+ years IT & digital transformation experience'
    ],
    industriesServed: [
      { name: 'Manufacturing', years: 25 },
      { name: 'IT Services', years: 20 },
      { name: 'Textiles', years: 15 },
      { name: 'Consulting', years: 10 }
    ],
    notableAchievements: [
      'Orchestrated 50+ complex ServiceNow and cloud platform implementations across various industrial matrices.',
      'Managed 100+ Crore program management portfolios with high-velocity deliveries and modern service practices.',
      'Achieved 50% increase in On-Time-In-Full (OTIF) metrics and 50% Production Lead Time (PLT) compression via combined TOC structures.',
      'Unlocked 20+ Full-Time Employee (FTE) savings through cloud process automation workflows.'
    ],
    education: [
      'Bachelor of Engineering (Computer Science) - Mumbai University, 1998'
    ],
    beyondWork: 'Rajnish researches digital operations scalability and actively supports youth tech bootcamps in Punjab.',
    email: 'rajnishkaila76@gmail.com',
    phone: '+91 9872422589',
    linkedin: 'https://www.linkedin.com/in/rajnish-kaila-259a36113/'
  },
  {
    id: 'vineet_kulshreshtha',
    name: 'Vineet Kulshreshtha',
    title: 'Co-Founder & Operations Excellence Lead',
    experienceYears: 23,
    location: 'Ludhiana, Punjab',
    photoUrl: 'https://picsum.photos/seed/vineet/400/400',
    tagline: '23+ years operations expert delivering 40%+ efficiency improvements through TOC implementation and supply chain optimization. Proven track record: on-time performance from 41% to 99.4%.',
    bioParagraphs: [
      'Senior Management Professional with 23+ years expertise in Operations, P&L, Textiles Manufacturing, Systems & Supply Chain. Expert in TOC implementation with proven results: on-time performance from 41% to 99.4%. Recently served as VP - Operations & Supply Chain, Trident Limited.',
      'Vineet is an operations management authority specializing in process re-engineering and planning matrices. He focuses on on-time delivery (OTIF), supply chain scaling, inventory compression, and full-scale factory layouts, delivering systemic cost optimizations and productivity lifts.'
    ],
    coreExpertise: [
      'TOC (Theory of Constraints) Certified',
      'Supply Chain Management & Optimization',
      'SAP S/4HANA Implementation Expert',
      'P&L Management & Operations Leadership',
      'Manufacturing Process Excellence'
    ],
    credentials: [
      'TOC Certification - Vector Consulting (2020)',
      'SAP Functional Training PP - SAP India (2017)',
      'NOW Functional Training (2011)',
      '23+ Years manufacturing operations experience'
    ],
    industriesServed: [
      { name: 'Textiles', years: 20 },
      { name: 'Manufacturing', years: 23 },
      { name: 'Supply Chain', years: 15 },
      { name: 'Operations', years: 23 }
    ],
    notableAchievements: [
      'Engineered on-time delivery metric shift from 41% to 99.4% via strict synchronization workflows.',
      'Slashed conversion and manufacturing overhead wastes by 50%+ through strategic shopfloor reorganization.',
      'Managed multiple high-complexity enterprise SAP S/4HANA core deployments (Trident, Welspun, Bombay Rayon).'
    ],
    education: [
      'PGDBM - Marketing & Operation Management (1999)',
      'B.Sc. PCM (1996)'
    ],
    beyondWork: 'Vineet centers his efforts on mentoring young manufacturing technical engineers and applying Theory of Constraints in supply networks.',
    email: 'vineetkul76@gmail.com',
    phone: '+91 7069010057',
    linkedin: 'https://www.linkedin.com/in/vineet-kulshreshtha-46a7674b/'
  }
];

