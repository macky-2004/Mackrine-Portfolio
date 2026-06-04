# Product Requirements Document (PRD) — Mackrine Ruth Portfolio

## 1. Executive Summary

**Project Name:** Mackrine Ruth — Personal Portfolio Website  
**Developer:** Mackrine Ruth Y  
**Status:** Draft / Planning  
**Document Purpose:** Define scope, structure, design, and content requirements for a professional multi-page portfolio website.

This portfolio serves as a digital presence for Mackrine Ruth, a Computer Science graduate and AI Native Web Development Intern. The site is designed to attract recruiters, hiring managers, freelance clients, and academic peers by showcasing skills, projects, experience, and professional growth.

---

## 2. Project Goals

| Goal | Description |
|------|-------------|
| Showcase Skills & Projects | Present technical abilities and real-world project work clearly |
| Attract Opportunities | Get shortlisted for internships, entry-level jobs, and freelance projects |
| Build Personal Brand | Establish Mackrine Ruth as a reliable, skilled, and fast-learning developer |
| Resume Distribution | Provide downloadable, ATS-friendly resume |
| Future-Proof | Allow easy addition of blog, services, and analytics |

---

## 3. Personal Brand & Identity

- **Full Name:** Mackrine Ruth Y  
- **Display Name:** Mackrine Ruth  
- **Tagline:** "Code. Create. Innovate."  
- **One-liner:** Motivated and purpose-driven Computer Science student with a passion for technology, continuous learning, and innovation.  
- **Professional Bio:** [Detailed bio as provided]  
- **Current Role:** AI Native Web Development Intern at TYM  
- **Career Path:** AI-powered Web Development & Software Engineering  
- **Aspiration:** Professional Web Developer in the IT industry  
- **Unique Value:** Combines creativity with continuous learning + hands-on AI-native web development experience  
- **Core Values:** Honesty, consistency, dedication, continuous learning  
- **Qualities to Highlight:** Technical skills, adaptability, passion, project experience

---

## 4. Target Audience

| Audience | Needs |
|----------|-------|
| **Recruiters / Hiring Managers** (Primary) | See projects, skills, resume; assess readiness for entry-level roles |
| **Freelance Clients** (Secondary) | Evaluate capability to deliver web solutions |
| **Academic Peers / Collaborators** (Secondary) | Network, collaborate on projects |
| **10-Second Impression** | Passionate CS student & intern actively building real-world projects |
| **Desired First Impression** | Skilled, hands-on developer with real project experience |

---

## 5. Design & Visual Identity

### Design Direction
- **Style:** Modern, minimalistic, premium
- **Inspiration:** Clean developer portfolios with smooth animations
- **Color Mode:** Dark mode by default with light mode toggle
- **Brand Colors:** Black, white, blue accents
- **Avoid:** Neon, overly flashy colors
- **Typography:** Clean sans-serif (e.g., Inter, Poppins, or system fonts)
- **Design Tone:** Premium, tech-focused, professional
- **Animations:** Smooth, premium transitions (scroll-triggered, fade-in, slide)

### Layout Inspiration (Figma References)
1. [Web Developer Portfolio Template](https://www.figma.com/design/armQ3nvhXR1leA9micMw1S/Web-Developer-Portfolio-Website-Template--Community-)
2. [Portfolio for Developers Concept V2.1](https://www.figma.com/design/DcsWttshvIMTQIOwTUYciS/Portfolio-for-Developers-Concept-V.2.1--Community-)
3. [Developer Portfolio Design](https://www.figma.com/design/wsEvPrD8YikN7NpDvldYxt/Developer-Portfolio-Design--Community-)
4. [Portfolio for Developers (Community)](https://www.figma.com/community/file/1311309815091555685/portfolio-for-developers)
5. [Developer Portfolio Landing Page Template](https://www.figma.com/community/file/1358480804111249444/developer-portfolio-landing-page-template)

---

## 6. Site Structure (Multi-Page)

### Page 1: Home (`/` or `index.html`)
| Element | Description |
|---------|-------------|
| **Hero Section** | Name, role ("AI Native Web Developer & Aspiring Software Engineer"), tagline, short intro, CTA buttons |
| **CTA Buttons** | "View My Projects" (primary), "Contact Me" (secondary) |
| **Resume Download** | Prominent download button |
| **Photo** | Professional photo featured prominently |
| **Featured Projects** | 3–4 best projects with preview cards |
| **Skills Snapshot** | Quick overview of key technical skills |
| **Footer** | Social links, email, copyright |

### Page 2: About (`/about`)
| Section | Content |
|---------|---------|
| **Personal Story** | Short professional journey — started CS, developed interest in web dev |
| **Career Motivation** | Building useful apps and solving real-world problems |
| **Core Strengths** | Fast learning, consistency, problem-solving |
| **Personal Qualities** | Dedicated, disciplined, curious |
| **Hobbies** | Learning new tech, building projects, exploring web design |
| **Languages** | English, Tamil |

### Page 3: Education & Experience (`/experience`)
- **Timeline format** for both Education and Experience
- **Education:**
  - B.Sc Computer Science — Bishop Heber College (2025) — 84%, A+ grade
  - School: St. Gabriels Girls Higher Secondary School, Pasupathikoil
  - Relevant coursework: Programming, Web Development, Database Systems
- **Experience:**
  - AI Native Web Development Intern — TYM (Current)
  - Project Coordinator — TYM
  - Responsibilities, accomplishments, skills gained

### Page 4: Projects (`/projects`)
- **Filtering** by project type
- **Featured Projects (3–6):**
  1. **TYM Jewellery** — Modern jewellery showcase & management website
  2. **TYM Events** — Event management & booking platform
  3. **TYM Electricals & Hardware** — Business showcase & product catalog
- Each project includes:
  - Problem solved, technologies used, role, challenges, solutions, outcomes
  - Screenshots, live links, GitHub repos
  - Optional case study toggle

### Page 5: Skills (`/skills`)
- Categorized: Frontend, Backend, Tools
- Proficiency levels shown (bars or percentages)
- **Technical:** HTML, CSS, JavaScript, Web Development
- **Languages:** Java, JavaScript
- **Frameworks:** React.js
- **Databases:** MySQL
- **Tools:** Antigravity, Opencode, GitHub
- **Soft Skills:** Communication, teamwork, problem-solving

### Page 6: Certifications & Achievements (`/achievements`)
- **Certifications:** Java, Web Development, Data Visualization
  - Verification links, certificate images where available
  - Categorized by relevance
- **Achievements:**
  - Internship at TYM
  - Bharathya Scout Guide (Leadership)
  - Technical workshops attended
  - Real-world project development

### Page 7: Contact (`/contact`)
- Contact form (business vs general inquiry separation)
- Email: yovanmackrineruth@gmail.com
- Phone: 6381649243
- WhatsApp contact
- Location: Thanjavur, Tamil Nadu, India
- Response time: 24–48 hours
- LinkedIn & GitHub links

### Page 8: Resume (dedicated page or modal)
- Resume preview on site
- Downloadable PDF (ATS-friendly)
- Direct download button

### Page 9: Blog (`/blog`) — *Future*
- For future articles and updates

---

## 7. Functional Requirements

### Core Features
| Feature | Priority | Notes |
|---------|----------|-------|
| Responsive Design (all devices) | P0 | Mobile-first approach |
| Dark/Light Mode Toggle | P0 | Default dark mode |
| Smooth Animations | P0 | Scroll-triggered, fade/slide |
| Project Filtering | P0 | By type/category |
| Resume Download | P0 | PDF format |
| Contact Form | P0 | With inquiry type separation |
| Navigation (sticky/header) | P0 | Multi-page nav |
| Social Links (LinkedIn, GitHub) | P0 | Icons in header/footer |

### Advanced Features
| Feature | Priority | Notes |
|---------|----------|-------|
| Analytics/Tracking | P1 | Visitor insights |
| Blog Section | P2 | Future implementation |
| Services/Offering Page | P2 | Future possibility |
| AI-powered features | P2 | Long-term vision |

---

## 8. Technical Requirements

- **Tech Stack:** HTML, CSS, JavaScript (vanilla or with React.js)
- **Hosting:** GitHub Pages / Vercel / Netlify
- **Performance:** Lighthouse score 90+ on all metrics
- **SEO:** Meta tags, semantic HTML, sitemap
- **Accessibility:** WCAG AA compliance
- **Cross-browser:** Chrome, Firefox, Safari, Edge

---

## 9. Success Metrics

| Metric | Target |
|--------|--------|
| Page load time | < 3s |
| Mobile responsiveness | 100% pages |
| Resume downloads | Trackable |
| Contact form submissions | Trackable |
| Visitor retention | > 60s avg session |

---

## 10. Future Roadmap

| Phase | Description | Timeline |
|-------|-------------|----------|
| Phase 1 (MVP) | Multi-page portfolio with all core sections | Immediate |
| Phase 2 | Blog section + services page | 1–2 months |
| Phase 3 | AI-powered features, analytics, premium interactions | 3–6 months |

---

## 11. Appendix: Figma Reference Links

1. [Web Developer Portfolio Website Template](https://www.figma.com/design/armQ3nvhXR1leA9micMw1S/Web-Developer-Portfolio-Website-Template--Community-)
2. [Portfolio for Developers Concept V.2.1](https://www.figma.com/design/DcsWttshvIMTQIOwTUYciS/Portfolio-for-Developers-Concept-V.2.1--Community-)
3. [Developer Portfolio Design](https://www.figma.com/design/wsEvPrD8YikN7NpDvldYxt/Developer-Portfolio-Design--Community-)
4. [Portfolio for Developers (Community File)](https://www.figma.com/community/file/1311309815091555685/portfolio-for-developers)
5. [Developer Portfolio Landing Page Template](https://www.figma.com/community/file/1358480804111249444/developer-portfolio-landing-page-template)
