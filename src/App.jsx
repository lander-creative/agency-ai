import './App.css'
import heroImage from './assets/hero.svg'

function App() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container-wide">
          <div className="nav-content">
            <div className="brand-logo">
              <span className="logo-text">AgencyAI</span>
            </div>
            <ul className="nav-menu">
              <li><a href="#about">About</a></li>
              <li><a href="#works">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container-wide">
          <div className="hero-grid">
            {/* Left Side - Botanical Illustration */}
            <div className="hero-left">
              <div className="botanical-frame">
                <img src={heroImage} alt="Botanical Illustration" />
              </div>
              <div className="brand-signature">
                <h1 className="signature-brand">AgencyAI</h1>
                <p className="signature-tagline">create • elevate • dominate</p>
              </div>
            </div>

            {/* Right Side - About Content */}
            <div className="hero-right">
              <div className="hero-about">
                <h2 className="about-title">About Us</h2>
                <div className="about-description">
                  <p>
                    We are the first creative branding agency AI based that built to help brands grow with content that's fast, consistent, and unmistakably on-brand.
                  </p>
                  <p>
                    We combine an AI content engine with branding experts who understand your guidelines, so you achieve premium output without conventional agency overhead.
                  </p>
                  <p className="about-highlight">
                    Let's make your brand impossible to ignore.
                  </p>
                </div>
                <div className="hero-buttons">
                  <a href="#contact" className="btn btn-primary">Consultation</a>
                  <a href="#works" className="btn btn-outline-primary">Credential</a>
                </div>
              </div>
              {/* Decorative botanical element */}
              <div className="decorative-botanical">
                <svg viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 120 50 Q 125 60, 130 70 L 135 85"
                    stroke="var(--color-primary-light)" strokeWidth="2" fill="none" opacity="0.3" />
                  <path d="M 130 70 Q 140 72, 145 80"
                    fill="var(--color-primary-light)" opacity="0.2" />
                  <path d="M 135 90 Q 142 95, 145 105"
                    fill="var(--color-primary-light)" opacity="0.2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="intro-text">
            We're an adaptive AI sales to get your brand the attention it deserves. Contact oHve's operation of
            crowdsourcing, technical procurement AI reframe content, and traditional production. These three pillars
            allow clients to look into a wide and loyal the multi-layered, descent and timing partnerships beyond
            what a brand profile.
          </p>

          {/* Vertical Services with Vine */}
          <div className="services-vine-layout">
            {/* Vine Connector */}
            <div className="vine-connector">
              <svg viewBox="0 0 40 1200" xmlns="http://www.w3.org/2000/svg">
                <path d="M 20 0 L 20 1200" stroke="#f1f8f4" strokeWidth="3" fill="none" opacity="0.6" />
                {/* Leaves along vine */}
                <path d="M 20 100 Q 30 95, 35 105 Q 30 110, 20 108 Z" fill="#f1f8f4" opacity="0.4" />
                <path d="M 20 250 Q 10 245, 5 255 Q 10 260, 20 258 Z" fill="#f1f8f4" opacity="0.4" />
                <path d="M 20 400 Q 32 395, 37 405 Q 32 410, 20 408 Z" fill="#f1f8f4" opacity="0.4" />
                <path d="M 20 550 Q 8 545, 3 555 Q 8 560, 20 558 Z" fill="#f1f8f4" opacity="0.4" />
                <path d="M 20 700 Q 30 695, 35 705 Q 30 710, 20 708 Z" fill="#f1f8f4" opacity="0.4" />
                <path d="M 20 850 Q 10 845, 5 855 Q 10 860, 20 858 Z" fill="#f1f8f4" opacity="0.4" />
                <path d="M 20 1000 Q 32 995, 37 1005 Q 32 1010, 20 1008 Z" fill="#f1f8f4" opacity="0.4" />
              </svg>
            </div>

            {/* Service Items */}
            <div className="service-vine-item left-service">
              <div className="service-icon-frame">
                <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 20 10 Q 20 5, 25 5 L 95 5 Q 100 5, 100 10 L 100 130 Q 100 145, 60 145 Q 20 145, 20 130 Z"
                    stroke="#f1f8f4" strokeWidth="2" fill="none" opacity="0.6" />
                  <text x="60" y="80" textAnchor="middle" fill="#f1f8f4" fontSize="40" opacity="0.4">Br</text>
                </svg>
              </div>
              <div className="service-content">
                <h3>Branding</h3>
                <p>Through branding, we give your products and services meaning by creating and shaping a brand in consumers' minds, product price and where it's sold are tactful choices.</p>
              </div>
            </div>

            <div className="service-vine-item right-service">
              <div className="service-content">
                <h3>Social Media Management</h3>
                <p>AI/dynamic storytelling paired browser-based platforms with our efficient output program pushes the brand of the competition.</p>
              </div>
              <div className="service-icon-frame">
                <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 20 10 Q 20 5, 25 5 L 95 5 Q 100 5, 100 10 L 100 130 Q 100 145, 60 145 Q 20 145, 20 130 Z"
                    stroke="#f1f8f4" strokeWidth="2" fill="none" opacity="0.6" />
                  <rect x="40" y="40" width="40" height="60" stroke="#f1f8f4" strokeWidth="2" fill="none" opacity="0.4" />
                </svg>
              </div>
            </div>

            <div className="service-vine-item left-service">
              <div className="service-icon-frame">
                <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 20 10 Q 20 5, 25 5 L 95 5 Q 100 5, 100 10 L 100 130 Q 100 145, 60 145 Q 20 145, 20 130 Z"
                    stroke="#f1f8f4" strokeWidth="2" fill="none" opacity="0.6" />
                  <circle cx="60" cy="75" r="20" stroke="#f1f8f4" strokeWidth="2" fill="none" opacity="0.4" />
                  <circle cx="60" cy="75" r="8" fill="#f1f8f4" opacity="0.3" />
                </svg>
              </div>
              <div className="service-content">
                <h3>Photography</h3>
                <p>We capture your brand as it naturally occurs, full of personality, and authenticity, like candid brand imagery produced in parallel; like you'd see two Capturing the honest truth, all at ease.</p>
              </div>
            </div>

            <div className="service-vine-item right-service">
              <div className="service-content">
                <h3>Videography</h3>
                <p>Creation of dynamic content and business imaging allows to paint the right scene at direction while delivering information in an enticing infrastructure/product.</p>
              </div>
              <div className="service-icon-frame">
                <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 20 10 Q 20 5, 25 5 L 95 5 Q 100 5, 100 10 L 100 130 Q 100 145, 60 145 Q 20 145, 20 130 Z"
                    stroke="#f1f8f4" strokeWidth="2" fill="none" opacity="0.6" />
                  <rect x="35" y="55" width="35" height="25" stroke="#f1f8f4" strokeWidth="2" fill="none" opacity="0.4" />
                  <path d="M 70 67.5 L 85 60 L 85 75 Z" stroke="#f1f8f4" strokeWidth="2" fill="none" opacity="0.4" />
                </svg>
              </div>
            </div>

            <div className="service-vine-item left-service">
              <div className="service-icon-frame">
                <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 20 10 Q 20 5, 25 5 L 95 5 Q 100 5, 100 10 L 100 130 Q 100 145, 60 145 Q 20 145, 20 130 Z"
                    stroke="#f1f8f4" strokeWidth="2" fill="none" opacity="0.6" />
                  <rect x="45" y="45" width="30" height="50" rx="5" stroke="#f1f8f4" strokeWidth="2" fill="none" opacity="0.4" />
                  <path d="M 60 70 L 65 75 L 60 80 Z" fill="#f1f8f4" opacity="0.3" />
                </svg>
              </div>
              <div className="service-content">
                <h3>Reels And Tiktok Management</h3>
                <p>We are here to assist you in providing Ideas for your Instagram, reels and tik-tok. such as storylines, transitions, photography and videography direction, product rewrite tot use, and the editing process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Works Section */}
      <section className="our-works bg-light">
        <div className="container">
          <h2 className="section-title text-center">Our Works</h2>
          <p className="intro-text text-center">
            Take a closer look to see how we've helped brands create on-brand content that performs from strategy to scroll-stopping visuals.
          </p>

          <div className="works-grid">
            <div className="work-item">
              <img src="/portfolio-1.png" alt="Luxury skincare social media post" className="work-image" />
              <p className="work-label">Skincare Brand</p>
            </div>
            <div className="work-item">
              <img src="/portfolio-2.png" alt="Coffee shop carousel design" className="work-image" />
              <p className="work-label">Coffee Shop</p>
            </div>
            <div className="work-item">
              <img src="/portfolio-3.png" alt="Fashion boutique branding" className="work-image" />
              <p className="work-label">Fashion Boutique</p>
            </div>
            <div className="work-item">
              <img src="/portfolio-4.png" alt="Wellness brand content" className="work-image" />
              <p className="work-label">Wellness Brand</p>
            </div>
            <div className="work-item video-work">
              <img src="/portfolio-5.png" alt="Tech product commercial" className="work-image" />
              <p className="work-label">Tech Commercial</p>
            </div>
            <div className="work-item video-work">
              <img src="/portfolio-6.png" alt="Food brand video" className="work-image" />
              <p className="work-label">Food Brand Video</p>
            </div>
            <div className="work-item video-work">
              <img src="/portfolio-7.png" alt="Lifestyle product reel" className="work-image" />
              <p className="work-label">TikTok Reel</p>
            </div>
            <div className="work-item">
              <div className="work-placeholder">More Works</div>
              <p className="work-label">View Portfolio</p>
            </div>
          </div>

          <div className="view-portfolio-btn">
            <a href="#portfolio" className="btn btn-primary">View Full Portfolio</a>
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section id="contact" className="consultation bg-dark-green">
        <div className="container">
          <div className="consultation-content">
            <div className="consultation-illustration">
              <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                {/* Two chat bubbles */}
                <rect x="20" y="40" width="70" height="50" rx="15"
                  stroke="var(--color-primary-light)" strokeWidth="2" fill="none" opacity="0.6" />
                <circle cx="40" cy="60" r="4" fill="var(--color-accent-gold)" />
                <circle cx="55" cy="60" r="4" fill="var(--color-accent-gold)" />
                <circle cx="70" cy="60" r="4" fill="var(--color-accent-gold)" />

                <rect x="110" y="60" width="70" height="50" rx="15"
                  stroke="var(--color-primary-light)" strokeWidth="2" fill="none" opacity="0.6" />
                <circle cx="130" cy="80" r="4" fill="var(--color-accent-gold)" />
                <circle cx="145" cy="80" r="4" fill="var(--color-accent-gold)" />
                <circle cx="160" cy="80" r="4" fill="var(--color-accent-gold)" />
              </svg>
            </div>
            <h2 className="text-light">Free Consultation</h2>
            <p className="text-light consultation-text">
              Let's talk about how we can elevate your brand with AI-powered content that's fast, consistent, and unmistakably on-brand.
            </p>
            <div className="cta-buttons">
              <a href="mailto:hello@agencyai.com" className="btn btn-primary">Get In Touch</a>
              <a href="#about" className="btn btn-outline">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark-green">
        <div className="container">
          <div className="footer-content">
            <p className="text-light">© 2026 AgencyAI. All rights reserved.</p>
            <p className="text-light">Making brands impossible to ignore.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
