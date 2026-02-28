"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Join Us", href: "#join" },
  { label: "Contact", href: "#contact" }
];

const activities = [
  {
    icon: "🌱",
    title: "Tree Planting Programs",
    description: "Organizing large-scale and community-based tree planting initiatives in schools, villages, farms, and public areas.",
    image: "/istockphoto-157687412-612x612.jpg"
  },
  {
    icon: "🌳",
    title: "Tree Growing & Nursery Development",
    description: "Establishing tree nurseries to grow healthy seedlings and ensure sustainable reforestation efforts.",
    image: "/istockphoto-2208632054-612x612.jpg"
  },
  {
    icon: "🛡️",
    title: "Tree Protection & Conservation",
    description: "Monitoring planted trees and protecting forests against illegal lumbering and environmental damage.",
    image: "/istockphoto-2213075862-612x612.jpg"
  },
  {
    icon: "📢",
    title: "Environmental Awareness & Education",
    description: "Conducting campaigns, workshops, and community education programs on environmental protection.",
    image: "/istockphoto-2215440365-612x612.jpg"
  },
  {
    icon: "🚫",
    title: "Advocacy Against Illegal Logging",
    description: "Working with communities and stakeholders to discourage illegal lumbering and promote responsible forest use.",
    image: "/istockphoto-1462151150-612x612.jpg"
  },
  {
    icon: "🤝",
    title: "Community Engagement",
    description: "Partnering with youth groups, volunteers, and organizations to strengthen environmental responsibility.",
    image: "/istockphoto-2159309108-612x612.jpg"
  }
];

const facts = [
  { icon: "🌿", text: "One mature tree absorbs up to 22kg of carbon dioxide per year" },
  { icon: "💨", text: "Trees improve air quality and reduce pollution" },
  { icon: "🌍", text: "Forests prevent soil erosion and desertification" },
  { icon: "🌧️", text: "Trees help regulate rainfall and climate systems" },
  { icon: "🌡️", text: "Urban trees reduce temperatures and improve living conditions" },
  { icon: "🦋", text: "Trees provide habitat for wildlife and biodiversity" }
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="home">
      {/* Animated Background */}
      <div className="animated-bg" />

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#home" className="nav-brand">
            <img src="/tabu logo.png" alt="TABU Environment Project" className="nav-logo" />
          </a>
          
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#join" className="nav-link nav-cta">Join Us</a>
            </li>
          </ul>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <button 
          className="mobile-menu-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {navLinks.map((link) => (
          <a 
            key={link.href} 
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a 
          href="#join" 
          className="nav-cta"
          onClick={() => setMobileMenuOpen(false)}
        >
          Join Us
        </a>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/istockphoto-2227099386-612x612.jpg" alt="Tree planting" />
        </div>
        <div className="hero-overlay" />
        
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-eyebrow">Planting Today. Protecting Tomorrow.</p>
            <h1 className="hero-title">
              Growing Trees.<br />
              <span>Saving Futures.</span>
            </h1>
            <p className="hero-description">
              Community-driven environmental conservation through tree planting, protection, and sustainable awareness in Iringa and across Tanzania.
            </p>
            <div className="hero-buttons">
              <a href="#join" className="btn btn-primary">
                🌱 Join Our Mission
              </a>
              <a href="#activities" className="btn btn-white">
                🌍 Support Tree Planting
              </a>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Trees Planted</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Communities</div>
              </div>
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Active</div>
              </div>
            </div>
          </div>

          <div className="hero-images">
            <img 
              src="/istockphoto-2213685664-612x612.jpg" 
              alt="Community tree planting" 
              className="hero-image-main"
            />
            <img 
              src="/about-section.png" 
              alt="Tree nursery" 
              className="hero-image-float"
            />
            <img 
              src="/istockphoto-2215440365-612x612.jpg" 
              alt="Environmental work" 
              className="hero-image-float"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-image-wrapper reveal">
              <img 
                src="/about-section.png" 
                alt="TABU Environment Project team" 
                className="about-image"
              />
              <img 
                src="/istockphoto-2213075862-612x612.jpg" 
                alt="Community engagement" 
                className="about-image-accent"
              />
            </div>

            <div className="about-content">
              <p className="section-eyebrow reveal">About Us</p>
              <h2 className="section-title reveal">
                Restoring Nature Through Community Action
              </h2>
              <p className="about-text reveal">
                TABU Environment Project is a community-based environmental NGO located in Iringa, Tanzania, dedicated to restoring nature through tree planting, conservation, and environmental education.
              </p>
              <p className="about-text reveal">
                Our organization works closely with local communities, schools, youth groups, and institutions to promote sustainable environmental practices and protect natural ecosystems for future generations.
              </p>
              <p className="about-text reveal">
                We believe trees are the foundation of life. Through planting, nurturing, and protecting trees, we actively combat climate change, land degradation, and illegal deforestation while improving biodiversity and community livelihoods.
              </p>

              <div className="about-features">
                <div className="about-feature reveal reveal-delay-1">
                  <div className="about-feature-icon">🌿</div>
                  <div className="about-feature-content">
                    <h4>Sustainability</h4>
                    <p>Long-term environmental solutions</p>
                  </div>
                </div>
                <div className="about-feature reveal reveal-delay-2">
                  <div className="about-feature-icon">👥</div>
                  <div className="about-feature-content">
                    <h4>Community</h4>
                    <p>Local empowerment & engagement</p>
                  </div>
                </div>
                <div className="about-feature reveal reveal-delay-3">
                  <div className="about-feature-icon">🎯</div>
                  <div className="about-feature-content">
                    <h4>Impact</h4>
                    <p>Measurable environmental results</p>
                  </div>
                </div>
                <div className="about-feature reveal reveal-delay-4">
                  <div className="about-feature-icon">📚</div>
                  <div className="about-feature-content">
                    <h4>Education</h4>
                    <p>Awareness & knowledge sharing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision">
        <div className="section-container">
          <div className="section-header">
            <p className="section-eyebrow reveal">Our Purpose</p>
            <h2 className="section-title reveal">Mission & Vision</h2>
            <p className="section-subtitle reveal">
              Guided by our commitment to environmental stewardship and sustainable development
            </p>
          </div>

          <div className="mv-grid">
            <div className="mv-card reveal">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To promote environmental sustainability through tree planting, conservation initiatives, and advocacy against illegal logging and environmental destruction.
              </p>
            </div>
            <div className="mv-card reveal reveal-delay-1">
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                A greener Tanzania where communities actively protect forests, restore ecosystems, and live in harmony with nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="section activities">
        <div className="section-container">
          <div className="section-header">
            <p className="section-eyebrow reveal">What We Do</p>
            <h2 className="section-title reveal">Our Activities</h2>
            <p className="section-subtitle reveal">
              Programs designed for measurable local impact and sustainable change
            </p>
          </div>

          <div className="activities-grid">
            {activities.map((activity, index) => (
              <div 
                key={activity.title} 
                className={`activity-card reveal reveal-delay-${index % 4}`}
              >
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="activity-image"
                />
                <div className="activity-content">
                  <div className="activity-icon">{activity.icon}</div>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tree Facts Section */}
      <section className="section facts">
        <div className="section-container">
          <div className="facts-grid">
            <div className="facts-highlight reveal">
              <div className="facts-highlight-content">
                <p className="eyebrow">Why Trees Matter</p>
                <div className="big-number">22kg</div>
                <h2>CO₂ absorbed by one mature tree every year</h2>
                <p>Planting trees today protects tomorrow&apos;s generations</p>
              </div>
            </div>

            <div className="facts-list">
              {facts.map((fact, index) => (
                <div 
                  key={index} 
                  className={`fact-item reveal reveal-delay-${index % 4}`}
                >
                  <div className="fact-check">✓</div>
                  <p>{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="section cta-section">
        <div className="section-container">
          <div className="cta-panel reveal">
            <div className="cta-content">
              <p className="eyebrow">Join Our Mission</p>
              <h2>Nature Needs Collective Action</h2>
              <p>
                Whether you volunteer, partner with us, or support tree planting programs, your contribution helps restore the environment. Together, we can build a greener Iringa and a sustainable Tanzania.
              </p>
              <div className="cta-buttons">
                <a href="#contact" className="btn btn-white">
                  🤝 Become a Volunteer
                </a>
                <a href="#contact" className="btn btn-white" style={{background: 'transparent', border: '2px solid white', color: 'white'}}>
                  🤝 Partner With Us
                </a>
                <a href="#contact" className="btn btn-primary">
                  💚 Donate / Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="section-container">
          <div className="section-header">
            <p className="section-eyebrow reveal">Get In Touch</p>
            <h2 className="section-title reveal">Let&apos;s Connect</h2>
            <p className="section-subtitle reveal">
              We welcome partnerships, volunteers, supporters, and environmental champions
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card reveal">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>P.O Box 1359, Iringa, Tanzania</p>
                </div>
              </div>

              <div className="contact-card reveal reveal-delay-1">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:tabuenviroment@gmail.com">tabuenviroment@gmail.com</a>
                </div>
              </div>

              <div className="contact-card reveal reveal-delay-2">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+255755992121">+255 755 992 121</a>
                </div>
              </div>

              <div className="contact-card reveal reveal-delay-3">
                <div className="contact-icon">💬</div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/255716257478">+255 716 257 478</a>
                </div>
              </div>
            </div>

            <div className="contact-image reveal">
              <img 
                src="/istockphoto-2208632054-612x612.jpg" 
                alt="Tree planting landscape in Tanzania"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/tabu logo.png" alt="TABU Environment Project" />
            </div>
            <p>
              Planting Trees • Protecting Nature • Securing the Future
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Our Work</h4>
            <ul className="footer-links">
              <li><a href="#activities">Tree Planting</a></li>
              <li><a href="#activities">Conservation</a></li>
              <li><a href="#activities">Education</a></li>
              <li><a href="#activities">Advocacy</a></li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h4>Contact Us</h4>
            <p>📍 Iringa, Tanzania</p>
            <p>📧 tabuenviroment@gmail.com</p>
            <p>📞 +255 755 992 121</p>
            <p>💬 +255 716 257 478</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 TABU Environment Project. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
