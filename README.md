# Raghav Nandwani — Portfolio Website

Premium personal portfolio for **Raghav Nandwani**, Core AI Technology Lead — positioning as a builder of complete intelligent systems across LLMs, agents, perception, and robotics.

## Stack

- HTML5 · CSS3 · Vanilla JavaScript
- No build step, backend, or dependencies
- Compatible with [GitHub Pages](https://pages.github.com/)

## Structure

```
├── index.html
├── style.css
├── script.js
├── favicon.png
├── images/
│   ├── profile/
│   │   ├── profile.png
│   │   └── about_photo.png
│   ├── projects/
│   ├── testimonials/
│   └── logos/
│       └── icon.png
├── resume/
│   └── Raghav_Nandwani_ResumeAI.pdf
├── assets/          # original source assets
├── agent.md
└── README.md
```

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Content

All resume-derived content (experience, education, skills, certifications, testimonials, contact) is defined as data objects in `script.js` and rendered at runtime. Update those objects to change site copy without editing HTML structure.

## Sections

1. Hero  
2. About (+ Beyond Technology)  
3. Skills (filterable categories)  
4. Professional Experience (modal details)  
5. Education (modal details)  
6. Certifications  
7. Testimonials  
8. Resume download  
9. Contact  

## Deploy to GitHub Pages

1. Push this repository to GitHub.  
2. Settings → Pages → Deploy from branch `main` (root).  
3. Site will be available at `https://<username>.github.io/<repo>/`.
