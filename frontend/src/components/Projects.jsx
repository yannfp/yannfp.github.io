import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

const sizeClass = {
  big:  styles.cardBig,
  med:  styles.cardMed,
  med2: styles.cardMed2,
  sm:   styles.cardSm,
  full: styles.cardFull,
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Card({ project, delay }) {
  const isArgonimeaux = project.size === 'full'

  return (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className={`${styles.card} ${sizeClass[project.size] ?? ''} reveal ${delay ? `reveal-d${delay}` : ''}`}
    >
      {project.award && (
        <span className={styles.awardBadge}>{project.award}</span>
      )}

      <div className={styles.accentBar} />

      <div className={styles.arrow}>
        <ArrowIcon />
      </div>

      <div className={isArgonimeaux ? styles.fullInner : undefined}>
        <div className={styles.meta}>
          <span className={styles.num}>{project.id}</span>
          {project.label && (
            <span className={styles.label}>{project.label}</span>
          )}
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>
      </div>

      <div className={styles.tags}>
        {project.tags.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </a>
  )
}

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="section-wrap" ref={ref}>
      <div className="section-header">
        <span className="section-tag reveal">Work</span>
        <h2 className="section-title reveal reveal-d1">Selected projects</h2>
      </div>

      <div className={styles.bento}>
        {/* Row 1-2: 42sh (big) + httpd + malloc */}
        <Card project={projects[0]} />
        <Card project={projects[1]} delay={1} />
        <Card project={projects[2]} delay={2} />

        {/* Row 3: yakamon + minimake */}
        <Card project={projects[3]} />
        <Card project={projects[4]} delay={1} />

        {/* Row 4: tinyprintf */}
        <Card project={projects[5]} delay={1} />

        {/* Row 5: Argonimeaux (full) */}
        <Card project={projects[6]} />
      </div>
    </section>
  )
}
