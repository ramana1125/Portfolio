# Developer Portfolio

Responsive portfolio built with **React** (HTML/CSS/JSX), **Express**, and **Node.js** — no database.

## Stack

| Layer    | Tech                          |
| -------- | ----------------------------- |
| Frontend | React, Vite, CSS, react-icons |
| Backend  | Express, Node.js              |

## Sections

1. Profile photo  
2. Name  
3. Designations (tags)  
4. Social links (GitHub, LinkedIn, Gmail)  
5. About  
6. Education  
7. Experience  
8. Projects  
9. Certifications  
10. Tech stack  
11. Let's Connect + Resume  
12. Copyright  

**Cat cursor:** On desktop, a cat follows your mouse and “pounces” on hover over links and cards.

## Customize your data

Edit **`client/src/data/portfolioData.js`** with your name, links, education, projects, certs, and stack.

Add assets:

- `client/public/profile.jpg` — profile photo  
- `client/public/resume.pdf` — resume download  

## Run locally

```bash
# Install dependencies (root, server, client)
npm run install:all

# Dev: Express API + Vite React (port 5173)
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) for the site. API health: [http://localhost:5000/api/health](http://localhost:5000/api/health).

## Production

```bash
npm run start
```

Builds the React app and serves it from Express on port `5000` (when `client/dist` exists).

## Project structure

```
Portfolio/
├── client/          # React + Vite frontend
│   ├── public/
│   └── src/
│       ├── components/
│       └── data/portfolioData.js
└── server/          # Express (static + /api/health)
    └── index.js
```
