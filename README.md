# 🚀 Vinay Kumar Duvva — Cloud Engineer Portfolio

> A modern, responsive, and accessible personal portfolio website built to showcase cloud engineering skills, projects, certifications, and professional experience.

---

## 🌐 Live Preview

> Open `index.html` in any modern browser or serve it locally with:
> ```bash
> npx -y serve .
> ```
> Then visit **http://localhost:3000**

---

## 📁 Project Structure

```
New Portfolio/
├── 📄 index.html          # Main HTML document (all sections)
├── 🎨 tailwind.css        # Custom CSS — animations, hover effects, print styles
├── ⚙️  script.js           # JavaScript — theme toggle, modal, form, clipboard
├── 📂 Assets/
│   ├── 🖼️  My_Photo.jpg          # Profile photo
│   ├── ☁️  AWS Project.jpeg       # AWS architecture diagram
│   ├── 🔷  AzureProject.png       # Azure architecture diagram
│   ├── 🟢  GCPProject.png         # GCP architecture diagram
│   └── 📄  Vinay_Kumar_Duvva_Cloud_Support.pdf   # Downloadable resume
└── 📖 README.md           # This file
```

---

## 🎯 Purpose

This portfolio was built to:

- 🏅 **Showcase certifications** — AWS Solutions Architect, Google ACE, Azure AZ-700 & AZ-900
- 🛠️ **Demonstrate cloud projects** — real architecture diagrams for AWS, Azure, and GCP deployments
- 💼 **Present professional experience** — Cognizant, Google gTech CF Snippets
- 📬 **Enable direct contact** — via an integrated Formspree contact form with a thank-you response
- 📥 **Provide a downloadable resume** — single-click PDF download from the navigation bar

---

## 🧰 Technology Stack

### 🏗️ Core

| Technology | Purpose |
|---|---|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Semantic page structure and all content sections |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Custom animations, hover effects, print styles (`tailwind.css`) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Interactive behaviour — theme, modal, form, clipboard (`script.js`) |

### 🎨 Styling

| Technology | Purpose |
|---|---|
| ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Utility-first classes loaded via CDN for rapid layout & responsive design |
| ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat&logo=google&logoColor=white) | **Inter** typeface (weights 300–800) for modern, clean typography |

### 🔌 Integrations

| Service | Purpose |
|---|---|
| ![Formspree](https://img.shields.io/badge/Formspree-E74C3C?style=flat&logo=mail.ru&logoColor=white) | Serverless form backend — receives messages and forwards them to email |
| ![Credly](https://img.shields.io/badge/Credly-FF6B00?style=flat&logo=acclaim&logoColor=white) | Linked certification badges (AWS, GCP, Azure) |
| ![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white) | Project demo links and professional profile |
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white) | Source code repositories for cloud projects |

---

## ✨ Features

### 🎨 Design
- 🌙 **Dark / Light mode** — persisted in `localStorage`, toggled via header button
- 💎 **Glassmorphism navigation** — frosted-glass fixed header with blur effect
- 📱 **Fully responsive** — mobile-first layout with Tailwind breakpoints
- 🖨️ **Print-friendly** — dedicated `@media print` styles hide interactive elements and expand links

### 🎞️ Animations
- `fadeInUp` — staggered entrance animation for hero section elements (delays 0.1s – 0.6s)
- `float` — continuous floating animation on the profile photo
- `imageFadeIn` — scale + fade entrance for project architecture images in the modal
- `hover-card-effect` — subtle lift + blue glow on project and certification cards

### 🗂️ Sections

| # | Section | Description |
|---|---|---|
| 1 | 🏠 **Hero** | Name, title, badge, bio, CTAs, floating profile photo |
| 2 | 👤 **About** | Skills summary, value proposition |
| 3 | 🛠️ **Skills** | Four skill-cards: Cloud & IaC, Containers & CI/CD, Networking & Monitor, OS & Dev |
| 4 | 💼 **Experience** | Cognizant Senior Process Executive — key achievements with metrics |
| 5 | 🎓 **Education** | B.Tech ECE — Sri Indu Institute of Engineering and Technology |
| 6 | 📂 **Projects** | AWS, Azure VNet, GCP/GKE with architecture modal viewer |
| 7 | 🏅 **Certifications** | AWS SAA, GCP ACE, Azure AZ-700, Azure AZ-900 |
| 8 | 📬 **Contact** | Formspree-powered form + email copy + thank-you card |

### 🪟 Project Modal
- Opens a native `<dialog>` element with backdrop blur
- Dynamically populates title, description, architecture image, tech badges, and action links
- Each project shows its own architecture diagram (AWS / Azure / GCP images)
- Close via ✕ button or clicking outside the dialog

### 📬 Contact Form
- Integrated with **Formspree** (`https://formspree.io/f/xlgyrrvd`)
- Fields: Name, Email, Subject, Message, resume-request checkbox
- Submit button shows **"Sending…"** state while request is in flight
- ✅ On success: form fields hidden, animated thank-you card appears, auto-scrolls into view
- ❌ On error: error banner with direct email fallback link

---

## ⚙️ JavaScript Modules (`script.js`)

| Module | What it does |
|---|---|
| 🌙 **Theme Toggle** | Reads/writes `localStorage`, updates sun/moon SVG icon, syncs desktop + mobile buttons |
| 📱 **Mobile Menu** | Toggles `hidden` class on the mobile nav drawer; closes on link click |
| 🪟 **Project Modal** | Populates `<dialog>` content dynamically from `projectData` object; handles backdrop-click close |
| 📬 **Contact Form** | Async `fetch` POST to Formspree; shows loading state, success card, or error banner |
| 📋 **Copy Email** | `navigator.clipboard.writeText` + 2-second "Copied!" toast notification |

---

## 🎨 CSS Architecture (`tailwind.css`)

| Class / Rule | Purpose |
|---|---|
| `@import` Inter | Loads Google Fonts Inter with weights 300–800 |
| `html { scroll-behavior: smooth }` | Smooth anchor scroll navigation |
| `.hover-card-effect` | `translateY(-4px)` lift + blue glow box-shadow on hover |
| `@keyframes fadeInUp` | Used by `.animate-fade-in-up` for entrance animations |
| `.anim-delay-1` … `.anim-delay-6` | Stagger helpers (0.1s – 0.6s) replacing inline `style` attributes |
| `@keyframes float` | Continuous up-down float for the profile photo |
| `.animate-image-fade-in` | Scale + fade entrance for modal architecture images |
| `dialog::backdrop` | Navy-tinted frosted-glass overlay behind the modal |
| `@media print` | Hides header/dialog/buttons; appends full URLs after links |

---

## 🌩️ Cloud Certifications Showcased

| Badge | Certification | Issued |
|---|---|---|
| 🟠 AWS | Solutions Architect – Associate | Feb 2026 |
| 🟢 GCP | Associate Cloud Engineer | Jan 2026 |
| 🔷 Azure | Network Engineer Associate (AZ-700) | Apr 2025 |
| 🔷 Azure | Fundamentals (AZ-900) | Mar 2025 |

---

## 📦 Assets

| File | Used For |
|---|---|
| `My_Photo.jpg` | Circular hero profile photo with float animation |
| `AWS Project.jpeg` | Architecture diagram shown in the AWS project modal |
| `AzureProject.png` | Architecture diagram shown in the Azure project modal |
| `GCPProject.png` | Architecture diagram shown in the GCP project modal |
| `Vinay_Kumar_Duvva_Cloud_Support.pdf` | Downloadable resume via header "Download Resume" button |

---

## 🚀 Getting Started

### Prerequisites
- Any modern browser (Chrome, Firefox, Edge, Safari)
- No build tool or npm install required — the project uses the **Tailwind CDN**

### Run locally

```bash
# Clone or download the project
git clone https://github.com/vinay1515/<repo-name>.git
cd "New Portfoilo"

# Option 1 — Open directly
start index.html

# Option 2 — Serve with a static server (recommended)
npx -y serve .
# → http://localhost:3000
```

---

## 🤝 Contact

| Platform | Link |
|---|---|
| 📧 Email | [duvvavinaykumar@gmail.com](mailto:duvvavinaykumar@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/vinay-kumar-duvva](https://www.linkedin.com/in/vinay-kumar-duvva/) |
| 🐙 GitHub | [github.com/vinay1515](https://github.com/vinay1515) |

---

## 🛠️ Recent Changes

- **404 page redesign**: added animated server rack background, anime disconnect wires, glitch `404` number, status badge, diagnostic card, terminal log, scrolling ticker, and improved accessibility.
- **ARIA fixes**: removed invalid `aria-label` on `<div>`, added appropriate roles (`group`, `region`), replaced decorative `<div>` with `<section>` for system logs.
- **CSS cleanup**: removed empty rule set, refined class names, added utility classes for new components.
- **HTML structure**: replaced `<div role="region">` with native `<section>` element for better semantics.
- **Git history**: committed all changes with descriptive messages.

---

## 📜 License

This project is personal and not licensed for redistribution. Feel free to use it as inspiration for your own portfolio.

---

<p align="center">Built with ❤️ by <strong>Vinay Kumar Duvva</strong> · Cloud &amp; Technical Support Engineer</p>
