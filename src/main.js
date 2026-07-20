import "./style.css";

const app = document.querySelector("#app");

if (!app) {
  throw new Error('Element "#app" was not found.');
}

app.innerHTML = `
<header class="site-header">
  <div class="container navbar">
    <a href="#top" class="logo">Nexa</a>

    <nav class="nav-links" arial-lable="Primary navigation">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#contact">Contact</a>
    </nav>

    <a href="#contact" class="nav-cta">Book a demo</a>
  </div>
</header>

<main id="top">
  <section class="hero">
    <p class="eyebrow">Modern SaaS Landing Page</p>
    <h1>Grow your business with smarter tools.</h1>
    <p>
      Nexa helps teams manage workflows, track progress, and launch faster.
    </p>
    <a href="#" class="btn">Get started</a>
  </section>
</main>
`;
