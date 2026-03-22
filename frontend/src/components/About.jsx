import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

const info = [
  { label: 'School',            value: 'EPITA — École Pour l\'Informatique et les Techniques Avancées' },
  { label: 'Curriculum',        value: 'C/Unix Systems Engineering (ING1)' },
  { label: 'Primary languages', value: 'C (C99) · Java 21 · Shell' },
  { label: 'Location',          value: 'Paris, France' },
  { label: 'Status',            value: 'Open to internship offers', highlight: true },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section-wrap" ref={ref}>
      <div className="section-header">
        <span className={`section-tag reveal`}>About</span>
        <h2 className={`section-title reveal reveal-d1`}>Who I am</h2>
      </div>

      <div className={styles.grid}>
        <div className={`reveal reveal-d1`}>
          <h3 className={styles.big}>
            A systems programmer who{' '}
            <span className={styles.bigAccent}>goes deep</span>, not just wide.
          </h3>
          <p className={styles.text}>
            I'm a second-year engineering student at EPITA, specialising in
            C/Unix systems programming and Java back-end development. I build
            everything from scratch — no shortcuts, no wrappers around wrappers.
          </p>
          <p className={styles.text}>
            My projects range from a full POSIX-compliant shell to a custom
            malloc implementation, an HTTP/1.1 server handling 10,000
            simultaneous connections, and a solo Pokémon-inspired REST API
            built in 3 days.
          </p>
          <p className={styles.text}>
            I care about code that is correct, readable, and genuinely
            understood — not just code that passes tests.
          </p>
        </div>

        <div className={`reveal reveal-d2`}>
          {info.map((item) => (
            <div key={item.label} className={styles.item}>
              <span className={styles.itemLabel}>{item.label}</span>
              <span
                className={styles.itemVal}
                style={item.highlight ? { color: 'var(--accent)' } : undefined}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
