import { useReveal } from '../hooks/useReveal'
import styles from './Experience.module.css'

const experience = [
  {
    role: 'Teaching Assistant — C Programming',
    org: 'EPITA',
    period: '2025 → present',
    desc: 'Supervising first-year students in lab sessions. Providing guidance on C and Unix fundamentals, answering questions, and supporting understanding in a hands-on environment.',
    tags: ['C', 'Unix', 'Teaching'],
  },
  {
    role: 'Student Ambassador',
    org: 'EPITA',
    period: '2024 → present',
    desc: 'Representing the school at trade fairs, forums, and open days. Managing and coordinating student teams during recruitment events.',
    tags: ['Leadership', 'Events'],
  },
  {
    role: 'Semester Abroad',
    org: 'Murdoch University — Perth, Australia',
    period: 'Feb 2025 → Aug 2025',
    desc: 'Full semester of study in an international environment. Developed professional English fluency and cross-cultural adaptability alongside coursework.',
    tags: ['International', 'English'],
  },
  {
    role: 'Food Truck Manager',
    org: 'RCN Le Moulin de la Pique',
    period: 'Jul 2024 → Aug 2024',
    desc: 'Daily operations management of a food truck on a campsite. Handled cooking, service, customer relations, and team coordination in a multicultural setting.',
    tags: ['Management', 'Team work'],
  },
  {
    role: 'Personal Tutor',
    org: 'Independent',
    period: '2022 → present',
    desc: 'Tailored tutoring for middle and high school students (grades 6–12). Identifying each student\'s blockers and rebuilding their understanding from the ground up.',
    tags: ['Teaching', 'Maths', 'Sciences'],
  },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="section-wrap" ref={ref}>
      <div className="section-header">
        <span className="section-tag reveal">Experience</span>
        <h2 className="section-title reveal reveal-d1">Where I've been</h2>
      </div>

      <div className={styles.list}>
        {experience.map((item, i) => (
          <div
            key={item.role}
            className={`${styles.item} reveal reveal-d${(i % 3) + 1}`}
          >
            <div className={styles.left}>
              <span className={styles.period}>{item.period}</span>
            </div>
            <div className={styles.line}>
              <div className={styles.dot} />
              <div className={styles.track} />
            </div>
            <div className={styles.right}>
              <h3 className={styles.role}>{item.role}</h3>
              <span className={styles.org}>{item.org}</span>
              <p className={styles.desc}>{item.desc}</p>
              <div className={styles.tags}>
                {item.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
