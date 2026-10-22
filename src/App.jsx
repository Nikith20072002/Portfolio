import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Award, BadgeCheck, BarChart3,
  BriefcaseBusiness, Check, ChevronDown, Code2, Copy, Database, Download,
  ExternalLink, FileText, Github, GraduationCap, Linkedin, Mail, Menu,
  Moon, Phone, Send, Sparkles, X
} from 'lucide-react'

const profile = {
  name: 'Nikith Sai Reddy Banda',
  shortName: 'Nikith',
  role: 'Aspiring Data Analyst · Reporting Analyst',
  location: 'Hyderabad, India',
  email: 'nikith20072002@gmail.com', // Replace with your professional email
  github: 'https://github.com/Nikith20072002', // Replace with your GitHub profile
  linkedin: 'https://linkedin.com/in/banda-nikith-sai-reddy-680250209',
  resume: '/Nikith-Sai-Reddy-Banda-Resume.pdf', // Put your resume PDF in public/
}

const socialTags = [
  { label: 'GitHub', handle: '@nikith20072002', href: profile.github, icon: Github, kind: 'github' },
  { label: 'LinkedIn', handle: 'Connect professionally', href: profile.linkedin, icon: Linkedin, kind: 'linkedin' },
  { label: 'Email', handle: profile.email, href: `mailto:${profile.email}`, icon: Mail, kind: 'email' },
  { label: 'Resume', handle: 'PDF · Download', href: profile.resume, icon: FileText, kind: 'resume', download: true },
]

const projects = [
    {
    name: 'Weather Data Pipeline', repo: 'Airflow-Docker', visibility: 'COMPLETED · OCT 2026',
    description: 'An automated end-to-end data pipeline orchestrated with Apache Airflow (Docker) that extracts daily weather forecasts from the Open-Meteo REST API, transforms the payload, and performs uploads into PostgreSQL.',
    tech: ['Airflow', 'Docker', 'PostgreSQL'], color: 'cyan', icon: BarChart3,
    href: 'https://github.com/Nikith20072002/airflow-docker', status: 'Analytics'
  },

  {
    name: 'AI Brand Search Popularity Analysis', repo: 'ai-leaders-by-country.ipynb', visibility: 'COMPLETED · OCT 2026',
    description: 'Developed a Python/Pandas Jupyter Notebook analyzing AI brand search-demand data across countries. Compared the top brands by country, validated source rankings using average monthly searches, and created visualizations to communicate the findings.',
    tech: ['Data Analysis', 'Python', 'Git', 'Pandas', 'Data Visualization'], color: 'cyan', icon: BarChart3,
    href: 'https://vscode.dev/github/Nikith20072002/search-index/blob/solution/notebooks/ai-leaders-by-country.ipynb', status: 'Analytics'
  },
  {
    name: 'Diwali Sales Analysis', repo: 'diwali-sales-analysis', visibility: 'FEATURED PROJECT',
    description: 'Exploratory data analysis to identify customer purchasing patterns, sales trends, and high-performing product categories.',
    tech: ['Python', 'Pandas', 'Seaborn'], color: 'blue', icon: BarChart3,
    href: 'https://github.com/Nikith20072002/Data-Analysis-Project-1', status: 'Analytics'
  },
  {
    name: 'Data Analytics Job Simulation', repo: 'deloitte-data-analytics-forage', visibility: 'JOB SIMULATION',
    description: 'Completed Deloitte Australia data analytics simulation tasks involving employee equality data classification and Tableau visualization.',
    tech: ['Excel', 'Tableau', 'Data Analysis'], color: 'cyan', icon: BarChart3,
    href: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_n2jtbxcFWxyM9wxML_1740235843126_completion_certificate.pdf', status: 'Forage'
  },
  {
    name: 'Portfolio Website', repo: 'nikith-portfolio', visibility: 'THIS WEBSITE',
    description: 'A responsive personal portfolio built with React and Vite, designed for deployment through a Git-based workflow.',
    tech: ['React', 'Vite', 'CSS', 'CI/CD'], color: 'blue', icon: Code2,
    href: 'https://github.com/Nikith20072002/Portfolio', status: 'Web development'
  },
]

const skills = [
  { name: 'Docker', group: 'Virtualization' },{ name: 'Airflow', group: 'Data Engineering' }, { name: 'Python', group: 'Programming' }, { name: 'SQL / MySQL/Postgres', group: 'Data' },
  { name: 'Excel', group: 'Reporting' }, { name: 'Power BI', group: 'Visualization' },
  { name: 'Tableau', group: 'Visualization' }, { name: 'Pandas', group: 'Analytics' },
  { name: 'Seaborn', group: 'Analytics' }, { name: 'scikit-learn', group: 'Machine Learning' },
  { name: 'HTML / CSS / JavaScript', group: 'Web' }, { name: 'React', group: 'Web · beginner' },
  { name: 'Node.js', group: 'Backend · beginner' }, { name: 'MongoDB', group: 'Database' },
  { name: 'Git / GitHub', group: 'Developer tools' }, { name: 'Snowflake', group: 'Data platform learning' },
  { name: 'C / C++', group: 'Programming foundations' },
  { name: 'Snowflake External Stages', group: 'Data engineering' },
  { name: 'Snowflake Database', group: 'Data platform' },
  { name: 'Snowflake SQL Worksheets', group: 'Data platform' },
  { name: 'Snowflake Cloud', group: 'Cloud data platform' },
  { name: 'Agile Methodologies', group: 'Software development' },
  { name: 'Internet of Things (IoT)', group: 'Computer science' },
  { name: 'Computer Science', group: 'Foundations' },
  { name: 'Machine Learning', group: 'Artificial intelligence' },
  { name: 'Analytics', group: 'Data analysis' },
  { name: 'Dashboards', group: 'Data visualization' },
  { name: 'Data Annotation', group: 'Data preparation' },
  { name: 'Spreadsheets', group: 'Data analysis' },
  { name: 'NumPy', group: 'Python analytics' },
  { name: 'Matplotlib', group: 'Data visualization' },
  { name: 'Web Scraping', group: 'Data collection' },
  { name: 'Microsoft Office', group: 'Productivity tools' },
  { name: 'Python in Excel', group: 'Data analysis' },
  { name: 'Microsoft PowerPoint', group: 'Productivity tools' },
  { name: 'ETL', group: 'Data engineering' },
  { name: 'Data Modeling', group: 'Data engineering' },
  { name: 'Technical Requirements', group: 'Software engineering' },
  { name: 'Problem Solving', group: 'Computer science' },
  { name: 'Analytical Skills', group: 'Data analysis' },
  { name: 'Microsoft SQL Server', group: 'Database' },
  { name: 'Artificial Intelligence', group: 'Computer science' },
  { name: 'Generative AI', group: 'Artificial intelligence' },

  { name: 'Data Science', group: 'Analytics' },
  { name: 'Data-driven Decision Making', group: 'Data analysis' },
  { name: 'Business Analysis', group: 'Data analysis' },
]

const experience = [
  { date: 'JUN 2025 — PRESENT', title: 'Site Manager', org: 'PBR Constructions', detail: 'Coordinate clients and contract workers; monitor on-site progress and support execution of painting, putty, and apartment work.' },
]

const education = [
  { title: 'B.Tech — Computer Science & Engineering', org: 'K. G. Reddy College of Engineering and Technology · JNTUH', date: '2020 — 2025' },
  { title: 'Intermediate', org: 'Telangana', date: '2020', },
  { title: 'SSC / 10th', org: 'Telangana', date: '2018'},
]

const certifications = [
  { title: 'Hands-On Essentials: Data Warehousing Workshop', issuer: 'Snowflake', date: 'OCT 2026', icon: Database },
  { title: 'Exploring SAP Datasphere — Course Completion', issuer: 'SAP', date: 'MAY 2025', icon: Database },
  { title: 'Data Analyst Certification', issuer: 'OneRoadmap', date: 'APR 2025', icon: BarChart3 },
  { title: 'Deloitte Australia — Data Analytics Job Simulation', issuer: 'Forage', date: 'FEB 2025', icon: BarChart3, href: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_n2jtbxcFWxyM9wxML_1740235843126_completion_certificate.pdf' },
  { title: 'SQL (Basic)', issuer: 'HackerRank', date: 'JAN 2025', icon: Code2 },
  { title: 'Python (Basics)', issuer: 'HackerRank', date: 'JAN 2025', icon: Code2 },
  { title: 'Big Data Foundations — Level 1', issuer: 'IBM', date: 'NOV 2024', icon: Database },
  { title: 'Big Data 101', issuer: 'IBM SkillsBuild', date: 'NOV 2024', icon: Database },
  { title: 'Data Fundamentals', issuer: 'IBM', date: 'NOV 2024', icon: BarChart3, href: 'https://www.credly.com/badges/eb256e43-8705-4c58-813a-07d03f749eff/linked_in_profile' },
  { title: 'Career Essentials in Data Analysis', issuer: 'Microsoft and LinkedIn', date: 'NOV 2024', icon: BarChart3 },
  { title: 'How to Use Data Visualization to Make Better Decisions—Faster', issuer: 'LinkedIn Learning', date: 'JAN 2024', icon: BarChart3 },
  { title: 'Introduction to Prompt Engineering for Generative AI', issuer: 'LinkedIn Learning', date: 'JAN 2024', icon: Code2 },
  { title: 'Programming Foundations: Data Structures', issuer: 'LinkedIn Learning', date: 'JAN 2024', icon: Code2 },
  { title: 'Become a Data Analyst', issuer: 'LinkedIn Learning', date: 'JAN 2024', icon: BarChart3, href: 'https://www.linkedin.com/learning/certificates/057f5bfa9b042288fe24d378ce0a214ca0ac26e98ea58fc713025435e4e3e5df/' },
  { title: 'SQL: Data Reporting and Analysis', issuer: 'LinkedIn Learning', date: 'JAN 2024', icon: Code2 },
  { title: 'Tableau Essential Training', issuer: 'LinkedIn Learning', date: 'JAN 2024', icon: BarChart3 },
  { title: 'Learning Data Visualization', issuer: 'LinkedIn Learning', date: 'JAN 2024', icon: BarChart3 },
  { title: 'Software Testing Tutorial', issuer: 'Great Learning', date: 'FEB 2023', icon: Code2 },
  { title: 'What is IoT?', issuer: 'Great Learning', date: 'MAR 2023', icon: Code2, href: 'https://www.mygreatlearning.com/certificate/JGMVORTA' },
  { title: 'Machine Learning A-Z: AI, Python & R', issuer: 'Udemy', date: 'MAR 2023', icon: BarChart3 },
  { title: 'Power BI Essential Training', issuer: 'LinkedIn Learning', date: 'DEC 2023', icon: BarChart3 },
  { title: 'Introduction to Career Skills in Data Analytics', issuer: 'LinkedIn Learning', date: 'DEC 2023', icon: BarChart3 },
  { title: 'Predictive Analytics Essential Training: Data Mining', issuer: 'LinkedIn Learning', date: 'DEC 2023', icon: BarChart3 },
  { title: 'Excel Statistics Essential Training: 1', issuer: 'LinkedIn Learning', date: 'NOV 2023', icon: BarChart3 },
  { title: 'Learning Data Analytics Part 2: Extending and Applying Core Knowledge', issuer: 'LinkedIn Learning', date: 'NOV 2023', icon: BarChart3 },
  { title: 'Succeeding in Software Testing', issuer: 'LinkedIn Learning', date: 'NOV 2023', icon: Code2 },
  { title: 'Agile Testing', issuer: 'LinkedIn Learning', date: 'NOV 2023', icon: Code2, href: 'https://www.linkedin.com/learning/certificates/166f2587c5960458cd4673c819ee885d8d271afe08b6fc6deb14b81ab8f98dc5/' },
  { title: 'Software Testing Tips Weekly', issuer: 'LinkedIn Learning', date: 'NOV 2023', icon: Code2 },
  { title: 'Data Cleaning in Python Essential Training', issuer: 'LinkedIn Learning', date: 'NOV 2023', icon: Code2 },
  { title: 'How to Learn Faster', issuer: 'LinkedIn Learning', date: 'NOV 2023', icon: BarChart3, href: 'https://www.linkedin.com/learning/certificates/c6d12e6c35fc947ad97d13ba655264fe5de26b6f00d100ddc2fa48873119f6b9/' },
  { title: 'Learning Data Analytics: 1 Foundations', issuer: 'LinkedIn Learning', date: 'NOV 2023', icon: BarChart3 },
  { title: 'Statistics Foundations 1: The Basics', issuer: 'LinkedIn Learning', date: 'NOV 2023', icon: BarChart3 },
  { title: 'Data Fluency: Exploring and Describing Data', issuer: 'LinkedIn Learning', date: 'NOV 2023', icon: BarChart3 },
  { title: 'What Is Generative AI?', issuer: 'LinkedIn Learning', date: 'SEP 2023', icon: Code2, href: 'https://www.linkedin.com/learning/certificates/1c05ad14038fa5c2664a50131683b2f070cf735da3396cb7a773d1b1c5f5797d/' },
  { title: 'Getting Started with Bard, Google’s Experimental AI', issuer: 'LinkedIn Learning', date: 'SEP 2023', icon: Code2 },
  { title: 'Learning Excel: Data Analysis', issuer: 'LinkedIn Learning', date: 'SEP 2023', icon: FileText },
  { title: 'Python in Excel', issuer: 'LinkedIn Learning', date: 'SEP 2023', icon: Code2, href: 'https://www.linkedin.com/learning/certificates/fd2be3d00e2071a56c2d54d32c73a58f276745e22ddc49c95f2653bfb9c72f1e/' },
  { title: 'Power BI: Dashboards for Beginners', issuer: 'LinkedIn Learning', date: 'SEP 2023', icon: BarChart3 },
]

function Badges() {
  useEffect(() => {
    const scriptUrl = 'https://cdn.credly.com/assets/utilities/embed.js'
    if (document.querySelector(`script[src="${scriptUrl}"]`)) return

    const script = document.createElement('script')
    script.src = scriptUrl
    script.async = true
    document.body.appendChild(script)
  }, [])

  return <div className="credly-badges">
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id="eb256e43-8705-4c58-813a-07d03f749eff"
      data-share-badge-host="https://www.credly.com"
    />
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id="45da2f4d-c0b6-4309-a4e1-dc7f9b0be9d1"
      data-share-badge-host="https://www.credly.com"
    />
    <img
      src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/196774037"
      width="150"
      height="270"
      alt="Accredible credential badge"
    />
    <a
      className="google-badge-link"
      href="https://www.skills.google/public_profiles/6fd1dfbe-3eab-47bf-a98d-7219c107f1a3/badges/28834238"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="/google-cloud-data-analytics-essentials.png"
        width="150"
        alt="Google Cloud Data Analytics Essentials completion badge"
      />
    </a>
  </div>
}

function SectionTitle({ eyebrow, title, id }) {
  return <div className="section-title" id={id}><div><span className="section-eyebrow">{eyebrow}</span><h2>{title}</h2></div><span className="section-rule"/></div>
}

function RepoCard({ project }) {
  const Icon = project.icon
  return <article className="repo-card">
    <div className="repo-top"><span className={`repo-icon ${project.color}`}><Icon size={17}/></span><div className="repo-name"><a href={project.href} target="_blank" rel="noreferrer">{project.repo}</a><small>{project.visibility}</small></div><a className="repo-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ExternalLink size={15}/></a></div>
    <h3>{project.name}</h3><p>{project.description}</p>
    <div className="repo-tags">{project.tech.map(t=><span key={t}>{t}</span>)}</div>
    <div className="repo-foot"><span><i className={`language-dot ${project.color}`}/>{project.status}</span><a href={project.href} target="_blank" rel="noreferrer">Explore <ArrowRight size={13}/></a></div>
  </article>
}

function App() {
  const [active, setActive] = useState('Home')
  const [filter, setFilter] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const nav = [
    ['Home', '#home'], ['About', '#about'], ['Projects', '#projects'],
    ['Experience', '#experience'], ['Skills', '#skills'], ['Certifications', '#certifications'], ['Contact', '#contact']
  ]
  const filteredProjects = projects.filter(p => {
    const matchFilter = filter === 'All' || p.status.toLowerCase().includes(filter.toLowerCase()) || p.tech.some(t => t.toLowerCase().includes(filter.toLowerCase()))
    return matchFilter
  })
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 2000) }
    catch { window.location.href = `mailto:${profile.email}` }
  }
  const selectNav = label => { setActive(label); setMenuOpen(false) }

  return <div className="site">
    <header className="topbar">
      <a className="wordmark" href="#home" onClick={() => selectNav('Home')}><span className="wordmark-symbol">N</span><span>Nikith<span className="wordmark-dot">.</span></span></a>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>{nav.map(([label, href])=><a key={label} className={active===label?'active':''} href={href} onClick={()=>selectNav(label)}>{label}</a>)}</nav>
      <div className="top-right"><span className="availability"><i/> Available</span></div>
    </header>

    <div className="page-grid">
      <aside className="profile-column">
        <div className="avatar-wrap"><img className="profile-photo" src="/profile-photo.jpg" alt={`${profile.name} profile photo`} /><span className="avatar-status" title="Open to opportunities"/></div>
        <h1>{profile.name}</h1><p className="profile-role">{profile.role}</p>
        <p className="profile-bio">Turning data into meaningful insights and ideas into impact.</p>
        <a className="resume-button" href={profile.resume} download><Download size={16}/> Download Resume <ArrowDownRight size={15}/></a>
        <div className="profile-socials">{socialTags.map(s=>{const Icon=s.icon;return <a key={s.label} href={s.href} target={s.label==='Email'||s.label==='Resume'?undefined:'_blank'} rel="noreferrer" className={`social-tag ${s.kind}`} download={s.download||undefined}><Icon size={16}/><span>{s.label}</span><ArrowUpRight size={11}/></a>})}</div>
        <div className="side-block personal-details"><div className="side-heading">DETAILS</div><p><span>⌖</span>{profile.location}</p><p><span>⌘</span>Computer Science</p><p><span>◷</span>Learning & building</p><p><span>↗</span>Open to entry-level roles</p></div>
        <div className="side-quote">“Make the complex clear. Make the data useful.”</div>
      </aside>

      <main className="main-column">
        <section className="intro-card" id="home">
          <div className="intro-meta"><span><span className="file-dot"/> README.md</span><span>LAST UPDATED · OCT 2026</span></div>
          <div className="intro-body"><div className="intro-copy"><div className="kicker">HELLO, WORLD <span>✳</span></div><h2>Hi there, I’m <span>Nikith.</span></h2><p className="intro-lead">A Computer Science graduate with a passion for <em>data, analytics, and building solutions</em> that create real impact.</p><p className="intro-desc">I enjoy working with data, creating visualizations, learning modern data tools, and developing web applications. This portfolio brings together my projects, skills, experience, and ongoing learning journey.</p><div className="intro-actions"><a href="#projects" className="button primary"><Code2 size={16}/> View my work <ArrowRight size={15}/></a><a href={profile.resume} className="button outline" download><Download size={15}/> Resume PDF</a><a href="#contact" className="button text-button">Contact <ArrowUpRight size={14}/></a></div></div>
          <div className="code-window"><div className="code-top"><div><i/><i/><i/></div><span>nikith.profile.json</span><button onClick={copyEmail} title="Copy email"><Copy size={13}/></button></div><div className="code-body"><div className="line-numbers">01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07<br/>08<br/>09<br/>10</div><pre><span className="code-pink">const</span> nikith = {'{'}<br/>  name: <span className="code-green">"Nikith Sai Reddy Banda"</span>,<br/>  role: <span className="code-green">"Aspiring Data Analyst"</span>,<br/>  degree: <span className="code-green">"B.Tech CSE"</span>,<br/>  location: <span className="code-green">"India"</span>,<br/>  interests: [<br/>    <span className="code-yellow">"Data Analytics"</span>,<br/>    <span className="code-yellow">"Python & BI"</span>,<br/>    <span className="code-yellow">"Web Development"</span><br/>  ]<br/>{'}'}</pre></div><div className="code-bottom"><span><i/> PROFILE.JSON</span><span>UTF-8 · JS</span></div></div></div>
        </section>

        <section className="projects-section" id="projects"><SectionTitle eyebrow="SELECTED WORK / 01" title="Pinned projects"/><div className="project-controls"><p>Things I’ve explored, analyzed, and built.</p><div className="filters">{['All','Analytics','Machine Learning','Web development'].map(f=><button key={f} className={filter===f?'selected':''} onClick={()=>setFilter(f)}>{f}</button>)}</div></div><div className="repo-grid">{filteredProjects.map(p=><RepoCard key={p.repo} project={p}/>)}</div><div className="all-projects"><span>More experiments will find their way here.</span><a href={profile.github} target="_blank" rel="noreferrer">Browse GitHub <ArrowUpRight size={14}/></a></div></section>

        <section className="experience-section" id="experience"><SectionTitle eyebrow="WHERE I’VE LEARNED / 03" title="Experience"/><div className="experience-list">{experience.map((e,i)=><article className="experience-item" key={e.title}><div className="timeline-index">0{i+1}</div><div className="experience-content"><div className="experience-meta">{e.date}</div><h3>{e.title}</h3><div className="experience-org">{e.org}</div><p>{e.detail}</p></div><ArrowUpRight className="experience-arrow" size={17}/></article>)}</div></section>

        <section className="education-section"><SectionTitle eyebrow="FOUNDATIONS / 04" title="Education"/><div className="education-list">{education.map((e,i)=><div className="education-item" key={e.title}><span className="education-icon"><GraduationCap size={18}/></span><div><h3>{e.title}</h3><p>{e.org}</p></div><div className="education-end"><span>{e.date}</span></div></div>)}</div></section>

        <section className="skills-section" id="skills"><SectionTitle eyebrow="TOOLS OF THE TRADE / 05" title="Skills & technologies"/><p className="section-description">A practical and growing toolkit across data analysis, reporting, programming, and web development.</p><div className="skills-tags">{skills.map(s=><span key={s.name} title={s.group}>{s.name}<small>{s.group}</small></span>)}</div></section>

        <section className="cert-section" id="certifications"><SectionTitle eyebrow="KEEP LEARNING / 06" title="Certifications & learning"/><div className="cert-list">{certifications.map(c=>{const Icon=c.icon;return <article className="cert-item" key={c.title}><span className="cert-icon"><Icon size={18}/></span><div><h3>{c.href ? <a href={c.href} target="_blank" rel="noreferrer">{c.title}</a> : c.title}</h3><p>{c.issuer}</p></div><span className="cert-date">{c.date}</span><ArrowUpRight size={15}/></article>})}</div></section>

        <section className="contact-section" id="contact"><div className="contact-copy"><span className="section-eyebrow">THE NEXT CHAPTER / 07</span><h2>Let’s make something<br/><span>meaningful.</span></h2><p>Have an opportunity, collaboration, or interesting data problem? I’d be glad to connect.</p><div className="contact-buttons"><a href={`mailto:${profile.email}`} className="button primary"><Send size={15}/> Say hello <ArrowRight size={15}/></a><button className="button outline" onClick={copyEmail}>{copied?<Check size={15}/>:<Copy size={15}/>} {copied?'Copied email':'Copy email'}</button></div></div><div className="contact-card"><span>CONTACT CARD</span><div className="contact-initials">N.</div><b>{profile.name}</b><small>{profile.role}</small><a href={`mailto:${profile.email}`}><Mail size={14}/>{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14}/>LinkedIn profile <ArrowUpRight size={12}/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={14}/>GitHub profile <ArrowUpRight size={12}/></a></div></section>

      </main>

      <aside className="right-column">
        <section className="right-card about-right" id="about"><div className="right-title"><span className="right-icon"><BadgeCheck size={16}/></span><h3>About me</h3></div><p>I’m a Computer Science graduate with a passion for data analytics, visualization, and building solutions. I enjoy learning new technologies and working on real-world projects that create impact.</p><div className="detail-line"><span>⌖</span>{profile.location}</div><div className="detail-line"><GraduationCap size={14}/><span className="detail-text">B.Tech CSE · KG Reddy College</span></div><div className="detail-line"><BriefcaseBusiness size={14}/><span className="detail-text">Aspiring Data Analyst</span></div><div className="detail-line"><Mail size={14}/><a href={`mailto:${profile.email}`}>{profile.email}</a></div></section>
        <section className="right-card"><div className="right-title"><span className="right-icon green"><Award size={16}/></span><h3>Badges</h3></div><Badges/></section>
      </aside>
    </div>
    <section className="right-card signature-card"><a className="footer-logo" href="#home">N<span>.</span></a><div className="signature-copy"><span>Designed with intention.</span><small>© 2026 {profile.name.toUpperCase()}</small></div></section>
  </div>
}

export default App
