import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Award, BadgeCheck, BarChart3,
  BriefcaseBusiness, Check, ChevronDown, Code2, Copy, Database, Download,
  ExternalLink, FileText, Github, GraduationCap, Linkedin, Mail, Menu,
  Moon, Phone, Send, ShieldCheck, Sparkles, Terminal, X
} from 'lucide-react'

const profile = {
  name: 'Nikith Sai Reddy Banda',
  shortName: 'Nikith',
  role: 'Aspiring Data Analyst · Reporting Analyst',
  location: 'Hyderabad, India',
  email: 'nikith20072002@gmail.com', // Replace with your professional email
  github: 'https://github.com/Nikith20072002', // Replace with your GitHub profile
  linkedin: 'https://linkedin.com/', // Replace with your LinkedIn profile
  resume: '/Nikith-Sai-Reddy-Banda-Resume.pdf', // Put your resume PDF in public/
}

const badges = [
  { label: 'Data Analytics', kind: 'blue', icon: BarChart3, href: '#skills' },
  { label: 'Python', kind: 'yellow', icon: Code2, href: '#skills' },
  { label: 'GitHub Actions', kind: 'purple', icon: Terminal, href: '#certifications' },
  { label: 'Open to Work', kind: 'green', icon: BadgeCheck, href: '#contact' },
]

const socialTags = [
  { label: 'GitHub', handle: '@your-github', href: profile.github, icon: Github, kind: 'github' },
  { label: 'LinkedIn', handle: 'Connect professionally', href: profile.linkedin, icon: Linkedin, kind: 'linkedin' },
  { label: 'Email', handle: profile.email, href: `mailto:${profile.email}`, icon: Mail, kind: 'email' },
  { label: 'Resume', handle: 'PDF · Download', href: profile.resume, icon: FileText, kind: 'resume', download: true },
]

const projects = [
  {
    name: 'Diwali Sales Analysis', repo: 'diwali-sales-analysis', visibility: 'FEATURED PROJECT',
    description: 'Exploratory data analysis to identify customer purchasing patterns, sales trends, and high-performing product categories.',
    tech: ['Python', 'Pandas', 'Seaborn'], color: 'blue', icon: BarChart3,
    href: 'https://github.com/', status: 'Analytics'
  },
  {
    name: 'Data Analytics Job Simulation', repo: 'deloitte-data-analytics-forage', visibility: 'JOB SIMULATION',
    description: 'Completed Deloitte Australia data analytics simulation tasks involving employee equality data classification and Tableau visualization.',
    tech: ['Excel', 'Tableau', 'Data Analysis'], color: 'cyan', icon: BarChart3,
    href: 'https://www.theforage.com/', status: 'Forage'
  },
  {
    name: 'Portfolio Website', repo: 'nikith-portfolio', visibility: 'THIS WEBSITE',
    description: 'A responsive personal portfolio built with React and Vite, designed for deployment through a Git-based workflow.',
    tech: ['React', 'Vite', 'CSS', 'CI/CD'], color: 'blue', icon: Code2,
    href: 'https://github.com/', status: 'Web development'
  },
]

const skills = [
  { name: 'Python', group: 'Programming' }, { name: 'SQL / MySQL', group: 'Data' },
  { name: 'Excel', group: 'Reporting' }, { name: 'Power BI', group: 'Visualization' },
  { name: 'Tableau', group: 'Visualization' }, { name: 'Pandas', group: 'Analytics' },
  { name: 'Seaborn', group: 'Analytics' }, { name: 'scikit-learn', group: 'Machine Learning' },
  { name: 'HTML / CSS / JavaScript', group: 'Web' }, { name: 'React', group: 'Web · beginner' },
  { name: 'Node.js', group: 'Backend · beginner' }, { name: 'MongoDB', group: 'Database' },
  { name: 'Git / GitHub', group: 'Developer tools' }, { name: 'Snowflake', group: 'Data platform learning' },
  { name: 'C++ / Java / C#', group: 'Programming foundations' }, { name: 'Flask', group: 'API · project use' },
]

const experience = [
  { date: 'JUN 2025 — PRESENT', title: 'Site Manager', org: 'PBR Constructions', detail: 'Coordinate clients and contract workers; monitor on-site progress and support execution of painting, putty, and apartment work.' },
]

const education = [
  { title: 'B.Tech — Computer Science & Engineering', org: 'K. G. Reddy College of Engineering and Technology · JNTUH', date: '2019 — 2023', score: 'CGPA 6.57' },
  { title: 'Intermediate', org: 'Telangana', date: 'Completed', score: '83.7%' },
  { title: 'SSC / 10th', org: 'Telangana', date: 'Completed', score: '67.2%' },
]

const certifications = [
  { title: 'Deloitte Australia — Data Analytics Job Simulation', issuer: 'Forage', date: 'FEB 2025', icon: BarChart3 },
  { title: 'Learning Excel: Data Analysis', issuer: 'Online course', date: '2024', icon: FileText },
  { title: 'Snowflake Learn — Guided learning', issuer: 'Snowflake', date: 'IN PROGRESS', icon: Database },
]

function Badge({ item }) {
  const Icon = item.icon
  return <a className={`badge ${item.kind}`} href={item.href}><Icon size={13}/>{item.label}<ArrowUpRight size={10} className="badge-arrow"/></a>
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
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState(false)
  const nav = [
    ['Home', '#home'], ['About', '#about'], ['Projects', '#projects'],
    ['Experience', '#experience'], ['Skills', '#skills'], ['Certifications', '#certifications'], ['Contact', '#contact']
  ]
  const filteredProjects = projects.filter(p => {
    const matchQuery = `${p.name} ${p.description} ${p.tech.join(' ')}`.toLowerCase().includes(query.toLowerCase())
    const matchFilter = filter === 'All' || p.status.toLowerCase().includes(filter.toLowerCase()) || p.tech.some(t => t.toLowerCase().includes(filter.toLowerCase()))
    return matchQuery && matchFilter
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
      <div className="top-right"><a href="#projects" className="search-link"><span>⌕</span> Find a project <kbd>/</kbd></a><span className="availability"><i/> Available</span></div>
    </header>

    <div className="page-grid">
      <aside className="profile-column">
        <div className="avatar-wrap"><div className="avatar-placeholder"><span>N<span>.</span></span><small>ADD PHOTO</small></div><span className="avatar-status" title="Open to opportunities"/></div>
        <h1>{profile.name}</h1><p className="profile-role">{profile.role}</p>
        <p className="profile-bio">Turning data into meaningful insights and ideas into impact.</p>
        <a className="resume-button" href={profile.resume} download><Download size={16}/> Download Resume <ArrowDownRight size={15}/></a>
        <div className="profile-socials">{socialTags.map(s=>{const Icon=s.icon;return <a key={s.label} href={s.href} target={s.label==='Email'||s.label==='Resume'?undefined:'_blank'} rel="noreferrer" className={`social-tag ${s.kind}`} download={s.download||undefined}><Icon size={16}/><span>{s.label}</span><ArrowUpRight size={11}/></a>})}</div>
        <div className="side-block"><div className="side-heading">PROFILE BADGES <span>04</span></div><div className="badge-list">{badges.map(b=><Badge key={b.label} item={b}/>)}</div><p className="micro-note">Badge links are customizable. Add verified credentials where available.</p></div>
        <div className="side-block personal-details"><div className="side-heading">DETAILS</div><p><span>⌖</span>{profile.location}</p><p><span>⌘</span>Computer Science</p><p><span>◷</span>Learning & building</p><p><span>↗</span>Open to entry-level roles</p></div>
        <div className="side-quote">“Make the complex clear. Make the data useful.”</div>
      </aside>

      <main className="main-column">
        <section className="intro-card" id="home">
          <div className="intro-meta"><span><span className="file-dot"/> README.md</span><span>LAST UPDATED · OCT 2026</span></div>
          <div className="intro-body"><div className="intro-copy"><div className="kicker">HELLO, WORLD <span>✳</span></div><h2>Hi there, I’m <span>Nikith.</span></h2><p className="intro-lead">A Computer Science graduate with a passion for <em>data, analytics, and building solutions</em> that create real impact.</p><p className="intro-desc">I enjoy working with data, creating visualizations, learning modern data tools, and developing web applications. This portfolio brings together my projects, skills, experience, and ongoing learning journey.</p><div className="intro-actions"><a href="#projects" className="button primary"><Code2 size={16}/> View my work <ArrowRight size={15}/></a><a href={profile.resume} className="button outline" download><Download size={15}/> Resume PDF</a><a href="#contact" className="button text-button">Contact <ArrowUpRight size={14}/></a></div><div className="badge-strip">{badges.map(b=><Badge key={b.label} item={b}/>)}</div></div>
          <div className="code-window"><div className="code-top"><div><i/><i/><i/></div><span>nikith.profile.json</span><button onClick={copyEmail} title="Copy email"><Copy size={13}/></button></div><div className="code-body"><div className="line-numbers">01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07<br/>08<br/>09<br/>10</div><pre><span className="code-pink">const</span> nikith = {'{'}<br/>  name: <span className="code-green">"Nikith Sai Reddy Banda"</span>,<br/>  role: <span className="code-green">"Aspiring Data Analyst"</span>,<br/>  degree: <span className="code-green">"B.Tech CSE"</span>,<br/>  location: <span className="code-green">"India"</span>,<br/>  interests: [<br/>    <span className="code-yellow">"Data Analytics"</span>,<br/>    <span className="code-yellow">"Python & BI"</span>,<br/>    <span className="code-yellow">"Web Development"</span><br/>  ]<br/>{'}'}</pre></div><div className="code-bottom"><span><i/> PROFILE.JSON</span><span>UTF-8 · JS</span></div></div></div>
        </section>

        <section className="projects-section" id="projects"><SectionTitle eyebrow="SELECTED WORK / 01" title="Pinned projects"/><div className="project-controls"><p>Things I’ve explored, analyzed, and built.</p><div className="filters">{['All','Analytics','Machine Learning','Web development'].map(f=><button key={f} className={filter===f?'selected':''} onClick={()=>setFilter(f)}>{f}</button>)}</div></div><div className="repo-grid">{filteredProjects.map(p=><RepoCard key={p.repo} project={p}/>)}</div><div className="all-projects"><span>More experiments will find their way here.</span><a href={profile.github} target="_blank" rel="noreferrer">Browse GitHub <ArrowUpRight size={14}/></a></div></section>

        <section className="contribution-section"><SectionTitle eyebrow="CONSISTENCY OVER PERFECTION / 02" title="Learning activity"/><div className="contrib-card"><div className="contrib-top"><div><b>Building, one step at a time</b><p>A visual placeholder for your GitHub contribution activity.</p></div><span>ACTIVITY OVERVIEW</span></div><div className="months">{['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'].map(m=><span key={m}>{m}</span>)}</div><div className="heatmap">{Array.from({length:156},(_,i)=>{const n=(i*17+i%7*3)%11;return <i key={i} className={n<4?'':n<7?'level-1':n<9?'level-2':n===9?'level-3':'level-4'}/>})}</div><div className="heatmap-legend"><span>Less</span>{['','level-1','level-2','level-3','level-4'].map(c=><i key={c} className={c}/>)}<span>More</span><small>Decorative sample — connect your GitHub profile for real activity.</small></div></div></section>

        <section className="experience-section" id="experience"><SectionTitle eyebrow="WHERE I’VE LEARNED / 03" title="Experience"/><div className="experience-list">{experience.map((e,i)=><article className="experience-item" key={e.title}><div className="timeline-index">0{i+1}</div><div className="experience-content"><div className="experience-meta">{e.date}</div><h3>{e.title}</h3><div className="experience-org">{e.org}</div><p>{e.detail}</p></div><ArrowUpRight className="experience-arrow" size={17}/></article>)}</div></section>

        <section className="education-section"><SectionTitle eyebrow="FOUNDATIONS / 04" title="Education"/><div className="education-list">{education.map((e,i)=><div className="education-item" key={e.title}><span className="education-icon"><GraduationCap size={18}/></span><div><h3>{e.title}</h3><p>{e.org}</p></div><div className="education-end"><span>{e.date}</span><b>{e.score}</b></div></div>)}</div></section>

        <section className="skills-section" id="skills"><SectionTitle eyebrow="TOOLS OF THE TRADE / 05" title="Skills & technologies"/><p className="section-description">A practical and growing toolkit across data analysis, reporting, programming, and web development.</p><div className="skills-tags">{skills.map(s=><span key={s.name} title={s.group}>{s.name}<small>{s.group}</small></span>)}</div></section>

        <section className="cert-section" id="certifications"><SectionTitle eyebrow="KEEP LEARNING / 06" title="Certifications & learning"/><div className="cert-list">{certifications.map(c=>{const Icon=c.icon;return <article className="cert-item" key={c.title}><span className="cert-icon"><Icon size={18}/></span><div><h3>{c.title}</h3><p>{c.issuer}</p></div><span className="cert-date">{c.date}</span><ArrowUpRight size={15}/></article>})}</div><p className="verify-note">Verify credential names and add credential URLs before publishing.</p></section>

        <section className="contact-section" id="contact"><div className="contact-copy"><span className="section-eyebrow">THE NEXT CHAPTER / 07</span><h2>Let’s make something<br/><span>meaningful.</span></h2><p>Have an opportunity, collaboration, or interesting data problem? I’d be glad to connect.</p><div className="contact-buttons"><a href={`mailto:${profile.email}`} className="button primary"><Send size={15}/> Say hello <ArrowRight size={15}/></a><button className="button outline" onClick={copyEmail}>{copied?<Check size={15}/>:<Copy size={15}/>} {copied?'Copied email':'Copy email'}</button></div></div><div className="contact-card"><span>CONTACT CARD</span><div className="contact-initials">N.</div><b>{profile.name}</b><small>{profile.role}</small><a href={`mailto:${profile.email}`}><Mail size={14}/>{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14}/>LinkedIn profile <ArrowUpRight size={12}/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={14}/>GitHub profile <ArrowUpRight size={12}/></a></div></section>

        <footer className="footer"><a className="footer-logo" href="#home">N<span>.</span></a><span>Designed with intention. Built with React + Vite.</span><span className="footer-right">© 2026 NIKITH SAI REDDY BANDA</span></footer>
      </main>

      <aside className="right-column">
        <section className="right-card about-right" id="about"><div className="right-title"><span className="right-icon"><BadgeCheck size={16}/></span><h3>About me</h3></div><p>I’m a Computer Science graduate with a passion for data analytics, visualization, and building solutions. I enjoy learning new technologies and working on real-world projects that create impact.</p><div className="detail-line"><span>⌖</span>{profile.location}</div><div className="detail-line"><GraduationCap size={14}/><span className="detail-text">B.Tech CSE · KG Reddy College</span></div><div className="detail-line"><BriefcaseBusiness size={14}/><span className="detail-text">Aspiring Data Analyst</span></div><div className="detail-line"><Mail size={14}/><a href={`mailto:${profile.email}`}>{profile.email}</a></div></section>
        <section className="right-card"><div className="right-title"><span className="right-icon blue"><BarChart3 size={16}/></span><h3>Quick stats</h3></div><div className="stats-grid"><div><b>6+</b><span>Projects & exercises</span></div><div><b>10+</b><span>Tools explored</span></div><div><b>3</b><span>Learning tracks</span></div></div><small className="right-muted">Portfolio highlights, not verified live counters.</small></section>
        <section className="right-card"><div className="right-title"><span className="right-icon purple"><Code2 size={16}/></span><h3>Top skills</h3></div><div className="right-tags">{skills.slice(0,13).map(s=><a href="#skills" key={s.name}>{s.name}</a>)}</div></section>
        <section className="right-card"><div className="right-title"><span className="right-icon yellow"><GraduationCap size={17}/></span><h3>Education</h3></div><div className="right-education"><span className="education-bullet"/><b>B.Tech in Computer Science & Engineering</b><p>K. G. Reddy College of Engineering and Technology</p><div><span>2019 — 2023</span><strong>CGPA: 6.57</strong></div></div><div className="right-education extra-education"><span className="education-bullet"/><b>Intermediate</b><p>Telangana</p><div><span>Completed</span><strong>83.7%</strong></div></div><div className="right-education extra-education"><span className="education-bullet"/><b>SSC / 10th</b><p>Telangana</p><div><span>Completed</span><strong>67.2%</strong></div></div></section>
        <section className="right-card"><div className="right-title"><span className="right-icon green"><Award size={16}/></span><h3>Badges & credentials</h3></div>{certifications.map(c=><div className="right-cert" key={c.title}><ShieldCheck size={15}/><div><b>{c.title}</b><span>{c.issuer} · {c.date}</span></div></div>)}</section>
        <section className="right-card social-right"><div className="right-title"><span className="right-icon"><ExternalLink size={15}/></span><h3>Find me online</h3></div>{socialTags.map(s=>{const Icon=s.icon;return <a className="social-row" key={s.label} href={s.href} target={s.label==='Email'||s.label==='Resume'?undefined:'_blank'} rel="noreferrer" download={s.download||undefined}><span className={`social-row-icon ${s.kind}`}><Icon size={15}/></span><span><b>{s.label}</b><small>{s.handle}</small></span><ArrowUpRight size={13}/></a>})}</section>
      </aside>
    </div>
  </div>
}

export default App
