# Manasa H - Developer Portfolio

Personal portfolio for Manasa H, a full-stack developer and final-year Computer Science and Engineering student at Bapuji Institute of Engineering and Technology, Davanagere.

The site presents resume-backed projects, technical skills, education, achievements, certification, GitHub work, and contact links in a responsive single-page experience.

## Live Links

- Portfolio: https://portfolio-3aynst6h7-manasac399-6675s-projects.vercel.app
- GitHub: https://github.com/ManasaPrakash18
- LinkedIn: https://www.linkedin.com/in/manasah-180405apr/
- Resume: https://portfolio-3aynst6h7-manasac399-6675s-projects.vercel.app/Manasa_H.pdf

## Featured Work

- **HireIQ** - AI-powered resume-to-job matching with Sentence-BERT, cosine similarity, skill-gap detection, recommendations, and match history.
- **Wanderlust** - Property listing platform with authentication, authorization, Cloudinary media uploads, Mapbox location views, reviews, and deployment on Render.
- Additional public GitHub projects are listed in the portfolio's repository section.

## Tech Stack

- Frontend: React.js, Redux, HTML5, CSS3, Tailwind CSS
- Backend: Node.js, Express.js, FastAPI, REST APIs, JWT
- Databases and AI: MongoDB, MySQL, Firebase, Sentence-BERT, Claude API, Gemini API
- Tools: Git, GitHub, Hoppscotch, Render, Vercel, Cloudinary, Mapbox

## Project Structure

```text
src/
  app/
    globals.css       # Global styles and responsive layout
    layout.tsx        # Metadata and root layout
    page.tsx          # Portfolio page and interactions
  data/
    portfolio.ts      # Centralized profile, skills, projects, and achievements
public/
  Manasa_H.pdf        # Resume download asset
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000.

Run the checks:

```bash
npm run lint
npm run build
```

## Deployment

The project is deployed on Vercel and connected to the GitHub repository. Pushing to `main` can trigger a new deployment through the connected Vercel project.

```bash
git push origin main
```

## Content Updates

Most portfolio content is kept in `src/data/portfolio.ts`. Update profile details, skills, projects, achievements, or the resume path there rather than duplicating content inside the page component.
