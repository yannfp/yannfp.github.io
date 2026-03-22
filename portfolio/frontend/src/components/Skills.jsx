import { useReveal } from '../hooks/useReveal'
import { skills } from '../data/projects'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="section-wrap" ref={ref}>
      <div className="section-header">
        <span className="section-tag reveal">Skills</span>
        <h2 className="section-title reveal reveal-d1">What I work with</h2>
      </div>

      <div className={styles.grid}>
        {skills.map((cat, i) => (
          <div
            key={cat.title}
            className={`${styles.cat} ${cat.highlight ? styles.catHighlight : ''} reveal reveal-d${(i % 3) + 1}`}
          >
            <h3 className={styles.catTitle}>{cat.title}</h3>
            <ul className={styles.list}>
              {cat.items.map((item) => (
                <li key={item} className={styles.badge}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
