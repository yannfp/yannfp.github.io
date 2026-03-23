export const projects = [
	{
		id: '01',
		slug: 'shell-42sh',
		label: 'featured',
		title: '42sh',
		description:
		'A fully POSIX-compliant shell written in C from scratch. Lexer, LL(1) parser, AST execution, pipelines, redirections, functions, aliases, IFS word splitting. Team of 4, ~1 month.',
		tags: ['C99', 'POSIX', 'Parser', 'AST', 'Autotools', 'Team of 4'],
		size: 'big',
		github: 'https://github.com/yannfp',
	},
	{
		id: '02',
		slug: 'httpd',
		title: 'httpd',
		description:
		'HTTP/1.1 server with epoll, 10k simultaneous connections, daemon mode.',
		tags: ['C', 'epoll', '10k conns'],
		size: 'med',
		github: 'https://github.com/yannfp',
	},
	{
		id: '03',
		slug: 'malloc',
		title: 'malloc',
		description:
		'Custom allocator from scratch. Bucket system, mmap, free list, LD_PRELOAD drop-in.',
		tags: ['C', 'mmap', 'LD_PRELOAD'],
		size: 'med',
		github: 'https://github.com/yannfp',
	},
	{
		id: '04',
		slug: 'yakamon',
		title: 'yakamon',
		description:
		'Pokémon-inspired REST API — Quarkus, PostgreSQL, full game logic. Solo in 3 days.',
		tags: ['Java 21', 'Quarkus', '3 days'],
		size: 'med2',
		github: 'https://github.com/yannfp',
	},
	{
		id: '05',
		slug: 'minimake',
		title: 'minimake',
		description:
		'GNU make reimplementation — Makefile parser, dependency graph, up-to-date detection.',
		tags: ['C', 'Parser', '1 week'],
		size: 'med2',
		github: 'https://github.com/yannfp',
	},
	{
		id: '06',
		slug: 'ocr-solver',
		label: 'featured',
		title: 'OCR solver',
		description:
		'Group leader of a 4-person team at EPITA. Built an optical character recognition engine from scratch — image preprocessing, character segmentation, neural network classification, and word-search grid solving. No external OCR libraries.',
		tags: ['C', 'Computer Vision', 'Neural Network', 'Group Leader'],
		size: 'big',
		github: 'https://github.com/yannfp',
	},
	{
		id: '07',
		slug: 'tinyprintf',
		title: 'tinyprintf',
		description: 'printf(3) reimplementation. Only putchar allowed — no libc.',
		tags: ['C', 'stdarg'],
		size: 'med',
		github: 'https://github.com/yannfp',
	},
	{
		id: '08',
		slug: 'coin-dispenser',
		title: 'Coin dispenser',
		description:
		'Optimal change algorithm in C, built during a semester abroad at Murdoch University, Australia.',
		tags: ['C', 'Algorithms', 'Australia'],
		size: 'med',
		github: 'https://github.com/yannfp',
	},
	{
		id: '09',
		slug: 'argonimaux',
		label: 'award',
		award: '🏆 NSI TROPHY — REGIONAL WINNER',
		title: 'Argonimaux',
		description:
		'Marine animal behavior visualization tool built on CNES satellite data. Won the Regional Prize for Creativity at the NSI Trophy. Built in Python and SQL.',
		tags: ['Python', 'SQL', 'Data Visualization', 'CNES', 'Award'],
		size: 'full',
		github: 'https://github.com/yannfp/Argonimaux',
	},
]

export const skills = [
	{
		title: 'Systems & Low-level',
		items: ['C99', 'C++ / C#', 'Unix/Linux', 'POSIX', 'Memory management', 'epoll', 'fork/exec'],
	},
	{
		title: 'Fullstack & Web',
		items: ['JavaScript', 'HTML / CSS', 'React', 'Node.js', 'Java 21', 'Quarkus', 'REST APIs'],
	},
	{
		title: 'Data & Backend',
		items: ['Python', 'SQL', 'PostgreSQL', 'Hibernate ORM', 'OpenAPI', 'OCaml'],
	},
	{
		title: 'Tools & Workflow',
		items: ['Git', 'Autotools', 'Make', 'GDB', 'Valgrind', 'Docker', 'Maven'],
	},
	{
		title: 'CS Fundamentals',
		items: ['Lexer / Parser', 'AST', 'Hash maps', 'Linked lists', 'Neural Networks', 'Machine Learning'],
	},
	{
		title: 'Languages',
		items: ['French (Native)', 'Spanish (Native)', 'Catalan (Native)', 'English (Bilingual)', 'German (Academic)'],
		highlight: true,
	},
]
