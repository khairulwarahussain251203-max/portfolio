/**
 * Applied Intelligence portfolio page.
 * Design commitment: make AI/ML systems visible through inference graphs, telemetry,
 * model metadata, evaluation evidence, and deployment pipelines—not archival map motifs.
 */
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";

const media = `${import.meta.env.BASE_URL}media/`;
const assets = {
  hero: `${media}khair-ai-inference-hero.png`,
  mlops: `${media}khair-ai-mlops-pipeline.png`,
  nlp: `${media}khair-ai-nlp-evaluation.png`,
  vision: `${media}khair-ai-vision-classifier.png`,
  mark: `${media}khair-ai-systems-mark.png`,
  resume: `${media}Khairulwara_Resume.pdf`,
  brief: `${media}self-healing-mlops-project-brief.md`,
};

const githubProfile = "https://github.com/khairulwarahussain251203-max";
const heroRoles = ["AI/ML Engineer", "Python Developer", "NLP Engineer", "MLOps", "Data Scientist"];

const projects = [
  {
    id: "01",
    title: "Self-healing MLOps pipeline",
    type: "MLOPS / SYSTEM RESILIENCE",
    image: assets.mlops,
    repo: "https://github.com/khairulwarahussain251203-max/selfhealing-mlops-FA23-BAI-022",
    description: "A deployment route that observes model confidence and shifts traffic toward a stable release when it matters.",
    stages: ["Data", "Model", "Monitor", "Fallback"],
    metric: "99%+ uptime",
    tags: ["Jenkins", "Kubernetes", "Prometheus"],
  },
  {
    id: "02",
    title: "Adverse media intelligence",
    type: "NLP / EVALUATION",
    image: assets.nlp,
    repo: "https://github.com/khairulwarahussain251203-max/Adverse_media_project",
    description: "Transformer-based screening calibrated around language quality, regional relevance, and reliable training labels.",
    stages: ["Corpus", "DeBERTa", "Calibrate", "Classify"],
    metric: "95% accuracy",
    tags: ["DeBERTa-v3", "Weak labels", "Python"],
  },
  {
    id: "03",
    title: "LeafLogic diagnostic",
    type: "COMPUTER VISION / CLASSIFICATION",
    image: assets.vision,
    repo: "https://github.com/khairulwarahussain251203-max/Leaflogic",
    description: "A visual diagnosis pipeline that moves from leaf image features to a practical disease classification.",
    stages: ["Image", "CNN", "Features", "Class"],
    metric: "88% accuracy",
    tags: ["TensorFlow", "CNN", "Flutter"],
  },
  {
    id: "04",
    title: "Context-aware chatbot",
    type: "RAG / KNOWLEDGE SYSTEMS",
    image: null,
    repo: "https://github.com/khairulwarahussain251203-max/Context-Aware-Chatbot-Using-LangChain-or-RAG",
    description: "A document-grounded conversation flow that retrieves relevant context before generating a useful answer.",
    stages: ["Docs", "Embed", "Retrieve", "Answer"],
    metric: "500+ docs",
    tags: ["LangChain", "ChromaDB", "Streamlit"],
  },
];

const appliedSkills = [
  ["MODEL", "Build & tune", "Transformers, CNNs, supervised learning, evaluation, and task-specific model experiments."],
  ["DATA", "Collect & prepare", "Python pipelines, Playwright, ETL, quality checks, and high-volume source processing."],
  ["RETRIEVAL", "Ground answers", "RAG, LangChain, ChromaDB, document ingestion, context design, and multi-turn flow."],
  ["DEPLOYMENT", "Observe & recover", "Docker, Kubernetes, Jenkins, cloud releases, monitoring, alerts, and graceful rollback."],
];

const explorations = [
  ["01", "RAG evaluation", "How retrieval quality can be measured before a response is trusted."],
  ["02", "Release confidence", "How monitoring signals can turn model behavior into safer deployment decisions."],
  ["03", "Data reliability", "How collection and validation shape the quality of every model downstream."],
];

function DotMark() {
  return <span className="dot-mark" aria-hidden="true"><i /><b /></span>;
}

function SectionTitle({ number, eyebrow, title, accent }: { number: string; eyebrow: string; title: string; accent?: string }) {
  return <div className="section-title"><p><DotMark /> {number} / {eyebrow}</p><h2>{title} {accent && <em>{accent}</em>}</h2></div>;
}

function RagSystemVisual() {
  return <div className="rag-system-visual" aria-hidden="true"><span className="rag-doc r1" /><span className="rag-doc r2" /><span className="rag-doc r3" /><span className="rag-node n1" /><span className="rag-node n2" /><span className="rag-node n3" /><i className="rag-link l1" /><i className="rag-link l2" /><i className="rag-link l3" /><b>RAG</b></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const syncHeader = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", syncHeader, { passive: true });
    return () => window.removeEventListener("scroll", syncHeader);
  }, []);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealItems.forEach((item, index) => { item.style.setProperty("--delay", `${Math.min(index * 65, 240)}ms`); observer.observe(item); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ai-portfolio">
      <header className={`topbar ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}><img src={assets.mark} alt="" /><span><b>KHAIR UL WARA</b><small>APPLIED INTELLIGENCE</small><i>OPERATOR / KWH-01</i></span></a>
        <nav className={menuOpen ? "topnav open" : "topnav"} aria-label="Primary navigation"><a href="#work" onClick={() => setMenuOpen(false)}>WORK</a><a href="#focus" onClick={() => setMenuOpen(false)}>FOCUS</a><a href="#systems" onClick={() => setMenuOpen(false)}>SYSTEMS</a><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></nav>
        <a className="cv-button" href={assets.resume} target="_blank" rel="noreferrer">CV <Download size={14} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </header>

      <main id="top">
        <section className="ai-hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="system-label"><DotMark /> MODEL SYSTEM / KWH.01 <span>STATUS: AVAILABLE</span></p>
            <h1>KHAIR UL WARA<br /><strong>HUSSAIN</strong></h1>
            <div className="role-chips">{heroRoles.map((role) => <span key={role}>{role}</span>)}</div>
            <div className="hero-statement"><p>APPLIED INTELLIGENCE ENGINEER</p><h2>From <em>data signals</em><br />to dependable systems.</h2><div><span>I turn ambiguous research, real-world data, and operational constraints into AI products that can be evaluated, deployed, and improved.</span><a href="#work">VIEW SELECTED SYSTEMS <ArrowDown size={16} /></a></div></div>
          </div>
          <div className="hero-model-visual"><img src={assets.hero} alt="Abstract AI inference network with connected model nodes" /><div className="hero-model-overlay" /><div className="model-float top"><small>INFERENCE ROUTE</small><b>MODEL → OUTPUT</b></div><div className="model-float bottom"><span /><small>CONFIDENCE</small><b>0.94</b></div><div className="live-node n-one" /><div className="live-node n-two" /><div className="live-node n-three" /></div>
        </section>

        <section className="signal-ticker" aria-label="Core AI systems areas"><div>PYTHON <i>◆</i> RETRIEVAL <i>◆</i> MODEL EVALUATION <i>◆</i> COMPUTER VISION <i>◆</i> DEPLOYMENT <i>◆</i> DATA PIPELINES <i>◆</i> PYTHON <i>◆</i> RETRIEVAL <i>◆</i> MODEL EVALUATION <i>◆</i> COMPUTER VISION <i>◆</i> DEPLOYMENT <i>◆</i></div></section>

        <section className="system-intro reveal">
          <div className="intro-index"><DotMark /><span>01</span><p>OPERATING PRINCIPLE</p></div>
          <div><p className="intro-eyebrow">AI IS ONLY USEFUL WHEN THE SYSTEM AROUND IT HOLDS UP.</p><h2>Models need <em>evidence,</em><br />not just output.</h2></div>
          <div className="intro-text"><p>I work across the full AI product loop: collecting and preparing data, building model behavior, grounding results in context, and creating a reliable deployment path.</p><div className="telemetry-bus"><span>DATA</span><i /><span>MODEL</span><i /><span>VALIDATE</span><i /><span>SERVE</span></div><div className="quick-metrics"><span><b>95%</b><small>EVALUATION ACCURACY</small></span><span><b>10K+</b><small>DAILY RECORDS</small></span><span><b>99%+</b><small>PIPELINE UPTIME</small></span></div></div>
        </section>

        <section className="focus-section reveal" id="focus">
          <SectionTitle number="02" eyebrow="ACTIVE RESEARCH" title="Questions that" accent="improve systems." />
          <div className="exploration-grid">{explorations.map(([num, title, copy]) => <article key={num}><span>{num}</span><DotMark /><h3>{title}</h3><p>{copy}</p><div className="confidence-chip"><small>READINESS</small><b>{num === "01" ? "0.82" : num === "02" ? "0.76" : "0.88"}</b><i><em /></i></div></article>)}</div>
        </section>

        <section className="work-section reveal" id="work">
          <SectionTitle number="03" eyebrow="SELECTED SYSTEMS" title="Built for" accent="the real world." />
          <p className="section-summary">Each project is framed as a working system: what goes in, how the model or pipeline behaves, and what decision or result reaches the other side.</p>
          <div className="project-cards">{projects.map((project) => <a className="ai-project" href={project.repo} target="_blank" rel="noreferrer" key={project.id} aria-label={`Open ${project.title} on GitHub`}>
            <div className="project-visual">{project.image ? <img src={project.image} alt="" /> : <RagSystemVisual />}<span className="project-number">SYS.{project.id}</span><span className="model-badge"><i />LIVE ARCHITECTURE</span></div>
            <div className="project-info"><div className="dossier-head"><p>{project.type}</p><span><i /> VALIDATED</span></div><h3>{project.title}</h3><span className="project-description">{project.description}</span><div className="pipeline"><span>INPUT</span>{project.stages.map((stage, index) => <div key={stage}><i className={index === project.stages.length - 1 ? "output" : ""} /><b>{stage}</b></div>)}<span>OUTPUT</span></div><div className="project-footer"><span>{project.metric}</span><div>{project.tags.map((tag) => <small key={tag}>{tag}</small>)}</div><ArrowUpRight size={18} /></div></div>
          </a>)}</div>
          <a className="github-link" href={githubProfile} target="_blank" rel="noreferrer">More experiments and systems on GitHub <ArrowUpRight size={17} /></a>
        </section>

        <section className="systems-section reveal" id="systems">
          <SectionTitle number="04" eyebrow="WORKING SYSTEMS" title="I use this" accent="to ship." />
          <div className="skill-system-grid">{appliedSkills.map(([type, title, copy], index) => <article key={type}><span>{String(index + 1).padStart(2, "0")}</span><p>{type}</p><h3>{title}</h3><div className="skill-line"><i /><i /><i /><i /></div><small>{copy}</small></article>)}</div>
          <div className="stack-line"><span>TOOLING</span><p>LANGCHAIN · BERT · FASTAPI · PLAYWRIGHT · DOCKER · KUBERNETES · JENKINS · AWS · REACT · TYPESCRIPT · TENSORFLOW · PANDAS</p></div>
        </section>

        <section className="route-section reveal">
          <SectionTitle number="05" eyebrow="EXPERIENCE LOOP" title="Learning through" accent="deployment." />
          <div className="timeline-layout"><div><p>Each role has pushed the question forward: from gathering better data, to evaluating models, to building systems that keep working after they are released.</p><div className="deployment-trace"><small>DEPLOYMENT TRACE</small><span><i /><i /><i /><i /><i /></span><b>DATA → MODEL → RELEASE</b></div></div><div className="experience-list"><article><time>2026</time><span /><div><b>AI Intern</b><small>AKSA SDS · Transformer calibration and weak-supervision labelling</small></div></article><article><time>2026</time><span /><div><b>Python Web Scraping Developer</b><small>Tayton Capital · High-volume Playwright data pipelines</small></div></article><article><time>2026</time><span /><div><b>AI/ML Engineering Intern</b><small>DevelopersHub · RAG chatbot and ML classification workflows</small></div></article><article><time>2023—27</time><span /><div><b>BS Artificial Intelligence</b><small>COMSATS University Islamabad</small></div></article></div></div>
        </section>

        <section className="contact-section reveal" id="contact"><div className="contact-matrix" aria-hidden="true" /><div className="contact-signal-rail" aria-hidden="true"><i /><i /><i /><i /><i /></div><div className="contact-badge"><i /><span>OPEN TO OPPORTUNITIES</span><b>Internships · Junior AI/ML roles · Remote collaboration</b></div><p>06 / LET&apos;S BUILD THE NEXT SYSTEM</p><h2>Have a problem<br />worth <em>modeling?</em></h2><span className="contact-copy">For a difficult data flow, an AI product feature, or a deployment path that needs better engineering—let&apos;s make the system legible.</span><a className="email-link" href="mailto:khairulwarahussain251203@gmail.com">khairulwarahussain251203@gmail.com <ArrowUpRight size={22} /></a><div className="contact-links"><a href={githubProfile} target="_blank" rel="noreferrer"><Github size={17} /> GITHUB</a><a href="https://www.linkedin.com/in/khair-ul-wara-hussain-629452283" target="_blank" rel="noreferrer"><Linkedin size={17} /> LINKEDIN</a><a href={assets.resume} target="_blank" rel="noreferrer"><Mail size={17} /> DOWNLOAD CV</a><a href={assets.brief} target="_blank" rel="noreferrer"><ChevronRight size={17} /> MLOPS BRIEF</a></div></section>
      </main>
      <footer><a className="brand" href="#top"><img src={assets.mark} alt="" /><span><b>KHAIR UL WARA</b><small>APPLIED INTELLIGENCE</small><i>OPERATOR / KWH-01</i></span></a><p>© 2026 · DESIGNED FOR AI SYSTEMS</p><a href="#top">BACK TO TOP <MoveUpRight size={14} /></a></footer>
    </div>
  );
}
