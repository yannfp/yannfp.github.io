import { useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
	// Trigger reveal for above-the-fold items immediately
	useEffect(() => {
		const timer = setTimeout(() => {
			document.querySelectorAll(`.${styles.hero} .reveal`).forEach((el, i) => {
				setTimeout(() => el.classList.add('visible'), i * 100)
			})
		}, 100)
		return () => clearTimeout(timer)
	}, [])

	const scrollToProjects = () => {
		document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<section className={styles.hero} id="home">
			<div className={`${styles.avail} reveal`}>
				<span className={styles.dot} />
				Open to internship — 2025
			</div>

			<h1 className={`${styles.name} reveal reveal-d1`}>
				YANN<br />
				<span className={styles.outline}>FERNANDEZ</span><br />
				<span className={styles.accent}>PUIG</span>
			</h1>

			<p className={`${styles.role} reveal reveal-d2`}>
				Systems Engineer · EPITA
			</p>

			<p className={`${styles.desc} reveal reveal-d2`}>
				Building things close to the metal and across the full stack — POSIX
				shells, HTTP servers, memory allocators, REST APIs. Strong fundamentals,
				no shortcuts.
			</p>

			<div className={`${styles.btns} reveal reveal-d3`}>
				<button className="btn-primary" onClick={scrollToProjects}>
					View projects
				</button>
				<a
					className="btn-ghost"
					href="/cv.pdf"
					target="_blank"
					rel="noreferrer"
				>
					Download CV
				</a>
			</div>

			<div className={styles.scroll}>
				<span className={styles.scrollLine} />
				SCROLL
			</div>
		</section>
	)
}
