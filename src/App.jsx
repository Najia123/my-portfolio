import { useState, useEffect } from "react";


const data = {
  name: "Najia Sultana",
  initials: "NS", 
  role: "Frontend Developer & Student",

  // Photo: (1) khali "" rakhle initials circle dekhabe.
  // (2) internet link boshate paro, jemon: "https://.../me.jpg"
  // (3) nijer chobi 'public' folder e rakho (jemon me.jpg), ekhane likho: "me.jpg"
  photo: "me.png",

  intro:
    "A passionate student developer building clean, responsive websites with React. I love turning ideas into working web pages and learning something new every day.",

  badges: ["Student Developer", "React Enthusiast", "Open to Work"],
  location: "Chattogram, Bangladesh",
  email: "najiasultana583@gmail.com",
  github: "https://github.com/Najia123",
  linkedin: "https://linkedin.com/in/najia123",

  about: [
    "Hi! I'm a student who loves web development. My journey started with HTML and CSS, and now I'm building interactive apps with React.",
    "I enjoy clean layouts, readable code, and figuring out how things work. Outside of coding, I'm always exploring new tools and technologies.",
  ],

  education: [
    { title: "BSc in Computer Science", place: "International Islamic University,Chittagong", year: "2022 – 2026" },
    { title: "Higher Secondary Certificate", place: "Nizampur Govt. College", year: "2018 – 2020" },
     { title: "Secondary School Certificate", place: "Highthkandi High School", year: "2015– 2018" },
  ],

  experience: [
    { title: "Frontend Learner", place: "Self-taught & Coursework", year: "2022 – Present" },
  ],

  skills: ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "Responsive Design","Flutter", "Node.js","ML","DP","IP"],

    projects: [
    {
      title: "ML-based Anemia Diagnosis System",
      description: "A machine learning system that predicts anemia from patient data to support faster, data-driven diagnosis.",
      tags: ["Machine Learning", "Python", "Healthcare"],
      
    },
    {
      title: "Network Anomaly Detection",
      description: "Detects unusual or malicious activity in local network traffic using supervised learning models.",
      tags: ["Supervised Learning", "Cybersecurity", "Python","Omnet++"],
      
    },
    {
      title: "Automated Multi-Animal Disease Detection",
      description: "A deep learning and image processing system that identifies diseases across multiple animals from images.",
      tags: ["Deep Learning", "Image Processing", "CNN"],
      
    },
    {
      title: "Online Voting System",
      description: "A secure web-based platform for casting and counting votes online, built as a tools project.",
      tags: ["Web", "Database", "Security"],
      
    },
    {
      title: "IIUC Community System",
      description: "A community platform for IIUC students and staff, developed as a Software Engineering project.",
      tags: ["Software Engineering", "Full Stack"],
      
    },
    {
      title: "IIUC Bus Management System",
      description: "A system to manage university bus schedules, routes and seat availability for students.",
      tags: ["App", "Management System"],
     
    },
  ],
};


const NAV = ["About", "Resume", "Projects", "Skills", "Contact"];


const styles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500;600&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }
:root {
  --bg: #ffffff;
  --panel: #f8fafc;
  --text: #111827;
  --muted: #6b7280;
  --accent: #2563eb;
  --accent-soft: #eff6ff;
  --line: #e5e7eb;
}
body { background: var(--bg); }

.app {
  min-height: 100vh;
  background: linear-gradient(180deg, #ffffff 0%, #f3f4f6 100%);
  color: var(--text);
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.65;
}
.wrap { max-width: 720px; margin: 0 auto; padding: 0 24px; }

/* NAV */
.nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}
.nav-inner {
  max-width: 900px; margin: 0 auto; padding: 0 24px;
  height: 62px; display: flex; align-items: center; justify-content: space-between;
}
.logo {
  font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 20px;
  background: none; border: none; cursor: pointer; color: var(--text); letter-spacing: -0.02em;
}
.nav-links { display: flex; gap: 6px; flex-wrap: wrap; }
.nav-links button {
  background: none; border: none; cursor: pointer; font-family: inherit;
  font-size: 15px; font-weight: 500; color: var(--muted);
  padding: 7px 13px; border-radius: 8px; transition: all 0.18s;
}
.nav-links button:hover { color: var(--text); background: var(--panel); }
.nav-links button.active { color: var(--accent); background: var(--accent-soft); }

/* PAGE */
.page { padding: 70px 0 100px; animation: fade 0.4s ease; }
@keyframes fade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }

/* HERO (home) */
.hero { text-align: center; }
.avatar-glow { position: relative; width: 140px; margin: 0 auto 30px; }
.avatar-glow::before {
  content: ""; position: absolute; inset: -30px; border-radius: 50%;
  background: radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%);
}
.avatar {
  position: relative; width: 140px; height: 140px; border-radius: 50%;
  object-fit: cover; border: 4px solid #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  display: flex; align-items: center; justify-content: center;
  background: var(--accent); color: #fff;
  font-family: 'Space Grotesk', sans-serif; font-size: 46px; font-weight: 700;
}
.hero h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(38px, 8vw, 60px); font-weight: 700; letter-spacing: -0.03em;
  margin-bottom: 18px;
}
.hero .intro { font-size: 18px; color: var(--muted); max-width: 560px; margin: 0 auto 26px; }
.badges { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 34px; }
.badge {
  background: #fff; border: 1px solid var(--line); border-radius: 999px;
  padding: 7px 16px; font-size: 14px; font-weight: 600; color: var(--text);
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
}
.cta { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.btn {
  font-family: inherit; font-size: 15px; font-weight: 600; cursor: pointer;
  padding: 12px 26px; border-radius: 10px; border: 1px solid transparent;
  text-decoration: none; transition: all 0.18s;
}
.btn-primary { background: var(--accent); color: #fff; }
.btn-primary:hover { background: #1d4ed8; }
.btn-ghost { background: #fff; border-color: var(--line); color: var(--text); }
.btn-ghost:hover { border-color: var(--muted); }

/* INNER PAGES */
.page h2 {
  font-family: 'Space Grotesk', sans-serif; font-size: 34px; font-weight: 700;
  letter-spacing: -0.02em; margin-bottom: 24px; text-align: center;
}
.page p.lead { font-size: 17px; color: var(--muted); margin-bottom: 16px; }
.block { margin-bottom: 40px; }
.block h3 {
  font-size: 14px; font-weight: 600; color: var(--accent); margin-bottom: 14px;
}
.row {
  display: flex; justify-content: space-between; gap: 16px;
  padding: 16px 0; border-bottom: 1px solid var(--line);
}
.row:last-child { border-bottom: none; }
.row .r-title { font-weight: 600; }
.row .r-place { color: var(--muted); font-size: 15px; }
.row .r-year { color: var(--muted); font-size: 14px; white-space: nowrap; }
.chips { display: flex; flex-wrap: wrap; gap: 10px; }
.chip {
  background: #fff; border: 1px solid var(--line); border-radius: 999px;
  padding: 8px 16px; font-size: 14px; font-weight: 500;
}
.cards { display: grid; gap: 16px; }
.card {
  display: block; text-decoration: none; color: inherit;
  background: #fff; border: 1px solid var(--line); border-radius: 14px;
  padding: 22px; transition: box-shadow 0.2s, transform 0.15s;
}
.card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-2px); }
.card h4 { font-family: 'Space Grotesk', sans-serif; font-size: 19px; margin-bottom: 8px; }
.card p { color: var(--muted); font-size: 15px; margin-bottom: 14px; }
.tags { display: flex; gap: 8px; flex-wrap: wrap; }
.tag { background: var(--accent-soft); color: var(--accent); font-size: 13px; font-weight: 600; padding: 4px 11px; border-radius: 6px; }
.contact-links { display: flex; flex-direction: column; gap: 12px; max-width: 400px; margin: 0 auto; }
.contact-links a {
  display: flex; justify-content: space-between; align-items: center;
  padding: 16px 20px; background: #fff; border: 1px solid var(--line);
  border-radius: 12px; text-decoration: none; color: var(--text); font-weight: 500;
  transition: border-color 0.18s;
}
.contact-links a:hover { border-color: var(--accent); }
.contact-links a span:last-child { color: var(--accent); font-weight: 600; }
.footer { text-align: center; color: var(--muted); font-size: 14px; padding: 30px 0; border-top: 1px solid var(--line); }
`;

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const photoSrc = data.photo
    ? (data.photo.startsWith("http") ? data.photo : import.meta.env.BASE_URL + data.photo)
    : null;

  return (
    <div className="app">
      <style>{styles}</style>

      <nav className="nav">
        <div className="nav-inner">
          <button className="logo" onClick={() => setPage("home")}>{data.initials}</button>
          <div className="nav-links">
            {NAV.map((item) => (
              <button
                key={item}
                className={page === item.toLowerCase() ? "active" : ""}
                onClick={() => setPage(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {page === "home" && (
        <div className="page">
          <div className="wrap hero">
            <div className="avatar-glow">
              {photoSrc
                ? <img className="avatar" src={photoSrc} alt={data.name} />
                : <div className="avatar">{data.initials}</div>}
            </div>
            <h1>{data.name}</h1>
            <p className="intro">{data.intro}</p>
            <div className="badges">
              {data.badges.map((b) => <span className="badge" key={b}>{b}</span>)}
            </div>
            <div className="cta">
              <button className="btn btn-primary" onClick={() => setPage("about")}>About Me</button>
              <button className="btn btn-ghost" onClick={() => setPage("resume")}>View Resume</button>
            </div>
          </div>
        </div>
      )}

      {page === "about" && (
        <div className="page">
          <div className="wrap">
            <h2>About Me</h2>
            {data.about.map((p, i) => <p className="lead" key={i}>{p}</p>)}
          </div>
        </div>
      )}

      {page === "resume" && (
        <div className="page">
          <div className="wrap">
            <h2>Resume</h2>
            <div className="block">
              <h3>Education</h3>
              {data.education.map((e, i) => (
                <div className="row" key={i}>
                  <div><div className="r-title">{e.title}</div><div className="r-place">{e.place}</div></div>
                  <div className="r-year">{e.year}</div>
                </div>
              ))}
            </div>
            <div className="block">
              <h3>Experience</h3>
              {data.experience.map((e, i) => (
                <div className="row" key={i}>
                  <div><div className="r-title">{e.title}</div><div className="r-place">{e.place}</div></div>
                  <div className="r-year">{e.year}</div>
                </div>
              ))}
            </div>
            <div className="block">
              <h3>Skills</h3>
              <div className="chips">
                {data.skills.map((s) => <span className="chip" key={s}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}

      {page === "projects" && (
        <div className="page">
          <div className="wrap">
            <h2>Projects</h2>
            <div className="cards">
              {data.projects.map((p) => (
                <a className="card" href={p.link} key={p.title}>
                  <h4>{p.title}</h4>
                  <p>{p.description}</p>
                  <div className="tags">{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      {page === "skills" && (
        <div className="page">
          <div className="wrap">
            <h2>Skills</h2>
            <p className="lead" style={{ textAlign: "center", marginBottom: 28 }}>
              Technologies and tools I work with.
            </p>
            <div className="chips" style={{ justifyContent: "center" }}>
              {data.skills.map((s) => <span className="chip" key={s}>{s}</span>)}
            </div>
          </div>
        </div>
      )}
      {page === "contact" && (
        <div className="page">
          <div className="wrap">
            <h2>Contact</h2>
            <p className="lead" style={{ textAlign: "center", marginBottom: 28 }}>
              Have a question or an opportunity? Reach out anytime.
            </p>
            <div className="contact-links">
              <a href={`mailto:${data.email}`}><span>Email</span><span>{data.email}</span></a>
              <a href={data.github} target="_blank" rel="noreferrer"><span>GitHub</span><span>Visit →</span></a>
              <a href={data.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><span>Visit →</span></a>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">© {new Date().getFullYear()} {data.name}. Built with React.</footer>
    </div>
  );
}
