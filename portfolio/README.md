# yannfp — Portfolio

Personal portfolio website for **Yann Fernandez Puig**.  
Built with React + Vite (frontend) and Node.js + Express (backend contact form).  
Deployed to GitHub Pages.

---

## Project structure

```
portfolio/
├── frontend/          # React + Vite SPA
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/   # Nav, Hero, About, Projects, Skills, Contact, Footer
│   │   ├── data/
│   │   │   └── projects.js   ← edit this to update projects & skills
│   │   ├── hooks/
│   │   │   └── useReveal.js  ← scroll-reveal IntersectionObserver
│   │   ├── styles/
│   │   │   └── global.css    ← design tokens & base styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend/           # Express contact form API
    ├── server.js
    ├── .env.example
    └── package.json
```

---

## Quick start

### Frontend

```bash
cd frontend
npm install
npm run dev          # → http://localhost:5173
```

### Backend (optional — contact form)

```bash
cd backend
npm install
cp .env.example .env
# Fill in your SMTP credentials in .env
npm run dev          # → http://localhost:3001
```

---

## Before deploying — update these

### 1. Your email & LinkedIn

In `frontend/src/components/Contact.jsx`, replace the two placeholder constants at the top:

```js
const LINKEDIN = 'https://linkedin.com/in/YOUR_LINKEDIN'
const EMAIL    = 'YOUR_EMAIL@example.com'
```

### 2. Project GitHub links

In `frontend/src/data/projects.js`, update the `github` field on each project
to point to the actual repo URL.

### 3. CV file

Drop your CV PDF at `frontend/public/cv.pdf`.
The "Download CV" button in the hero will link to it automatically.

### 4. Internship availability pill

In `frontend/src/components/Hero.jsx`, update the year in the availability badge:

```jsx
Open to internship — 2025   {/* ← change year when needed */}
```

---

## Deploy to GitHub Pages

### Option A — project page (e.g. `yannfp.github.io/portfolio`)

```bash
# In frontend/vite.config.js, set:
base: '/portfolio/'

cd frontend
npm run deploy
```

### Option B — user page (root `yannfp.github.io`)

```bash
# In frontend/vite.config.js, keep:
base: '/'

cd frontend
npm run deploy
```

`npm run deploy` runs `vite build && gh-pages -d dist` — it pushes the `dist/`
folder to the `gh-pages` branch automatically.

> Make sure the repo has GitHub Pages enabled and set to the `gh-pages` branch
> under **Settings → Pages**.

---

## Backend deployment (contact form)

The backend is a small Express server. Deploy it anywhere that runs Node.js:

| Platform  | Notes                                      |
|-----------|--------------------------------------------|
| **Railway** | `railway up` from the `backend/` folder  |
| **Render**  | New Web Service → connect repo → root dir `backend/` |
| **Fly.io**  | `fly launch` from `backend/`              |

Once deployed, update `FRONTEND_URL` in your backend env vars to your live
GitHub Pages URL, and update the fetch URL in `Contact.jsx`:

```js
const res = await fetch('https://YOUR_BACKEND_URL/api/contact', { ... })
```

---

## Updating content

All project and skill data lives in a single file:

```
frontend/src/data/projects.js
```

Edit the `projects` array to add, remove, or reorder projects.  
Edit the `skills` array to update skill categories.

No other files need changing for content updates.
