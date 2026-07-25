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


<section class="pricing">
  <div class="container">
    <div class="pricing-grid">
      <div class="pricing-card">
        <div class="pricing-header">
          <h3>Starter</h3>
          <p class="price">$0<span>/mo</span></p>
          <p class="desc">Perfect for individuals and side projects.</p>
        </div>

        <ul class="features-list">
          <li>Basic analytics</li>
          <li>Up to 3 projects</li>
          <li>Community support</li>
        </ul>
        <button class="btn btn-outline">Start for free</button>
      </div>

      <div class="pricing-card featured">
        <div class="pricing-header">
          <span class="badge">Most Popular</span>
          <h3>Pro</h3>
          <p class="price">$29<span>/mo</span></p>
          <p class="desc">Best for growing teams.</p>
        </div>

        <ul class="features-list">
          <li>Everything in Starter</li>
          <li>Up to 20 team members</li>
          <li>Advanced analytics</li>
          <li>Priority support</li>
        </ul>
        <button class="btn btn-primary">Get Started</button>
      </div>

      <div class="pricing-card">
        <div class="pricing-header">
          <h3>Enterprise</h3>
          <p class="price">$99<span>/mo</span></p>
          <p class="desc">Advanced tools for large organizations.</p>
        </div>

        <ul class="features-list">
          <li>Everything in Starter</li>
          <li>Unlimited projects</li>
          <li>Advanced insights</li>
          <li>Priority email support</li>
        </ul>
        <button class="btn btn-outline">Contact Sales</button>
      </div>
    </div>
  </div>
</section>
</main>

`;
