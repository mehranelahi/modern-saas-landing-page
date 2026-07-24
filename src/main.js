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
    <div class="container">
      <div class="hero-content">
        <p class="hero-eyebrow">Scale smarter</p>
        <h1>Grow your SaaS with clearer insights and faster decisions.</h1>
        <p class="hero-description">
          Nexa helps modern teams track performance, understand customer
          behavior, and turn data into confident action.
        </p>
        <div class="hero-actions">
          <a class="btn-primary" href="#pricing">Start free trial</a>
          <a class="btn-secondary" href="#contact">Book a demo</a>
        </div>
      </div>
    </div>
  </section>

  <section class="features">
  <div class="container">
    <div class="features-grid">
      <div class="feature-card">
        <h3>Analytics</h3>
        <p>Real-time insights into your product performance.</p>
      </div>
      <div class="feature-card">
        <h3>Collaboration</h3>
        <p>Work together with your team seamlessly</p>
      </div>
      <div class="feature-card">
        <h3>Security</h3>
        <p>Keep your data safe with enterprise-grade encryption.</p>
      </div>
    </div>
  </div>
</section>
</main>

`;
