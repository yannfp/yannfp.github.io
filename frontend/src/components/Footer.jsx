import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <span className={styles.text}>
        © {year} <span className={styles.accent}>Yann Fernandez Puig</span>
      </span>
      <span className={styles.text}>
        Built with React · Hosted on GitHub Pages
      </span>
    </footer>
  )
}
