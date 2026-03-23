import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '#about',      label: 'About' },
  { href: '#projects',   label: 'Projects' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#home" className={styles.logo} onClick={(e) => handleNav(e, '#home')}>
        yann<span>.</span>fp
      </a>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className={styles.link} onClick={(e) => handleNav(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a href="mailto:yann.ferpuig@gmail.com" className={styles.cta}>
          Get in touch
        </a>
      </div>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.burgerOpen : ''} />
        <span className={menuOpen ? styles.burgerOpen : ''} />
      </button>
    </nav>
  )
}
