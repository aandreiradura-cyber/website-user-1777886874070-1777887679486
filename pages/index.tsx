import { useState } from 'react';
import Head from 'next/head';

export default function TADentist() {
  const [activeTab, setActiveTab] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const services = [
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, whitening, and aesthetic enhancements crafted to perfection.',
    },
    {
      title: 'Orthodontics',
      description: 'Discreet alignment solutions including invisible aligners tailored to your lifestyle.',
    },
    {
      title: 'Dental Implants',
      description: 'Permanent restoration with state-of-the-art implants designed for natural function and feel.',
    },
    {
      title: 'Preventive Care',
      description: 'Comprehensive examinations and cleanings to maintain optimal oral health for life.',
    },
    {
      title: 'Endodontics',
      description: 'Advanced root canal therapy performed with precision microscopy and minimal discomfort.',
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Gentle, family-friendly care creating positive dental experiences for our youngest patients.',
    },
  ];

  return (
    <>
      <Head>
        <title>TA Dentist | Premium Dental Care</title>
        <meta name="description" content="TA Dentist - Elite dental care with a refined approach to oral health and aesthetics." />
      </Head>

      <div className="page">
        {/* Navigation */}
        <nav className="nav">
          <div className="nav-container">
            <div className="logo">
              <span className="logo-mark">TA</span>
              <span className="logo-text">Dentist</span>
            </div>
            <ul className="nav-links">
              <li><button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active' : ''}>Home</button></li>
              <li><button onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'active' : ''}>About</button></li>
              <li><button onClick={() => setActiveTab('services')} className={activeTab === 'services' ? 'active' : ''}>Services</button></li>
              <li><button onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? 'active' : ''}>Contact</button></li>
            </ul>
            <button className="cta-btn" onClick={() => setActiveTab('contact')}>Book Appointment</button>
          </div>
        </nav>

        {/* HOME */}
        {activeTab === 'home' && (
          <main>
            <section className="hero">
              <div className="hero-content">
                <span className="eyebrow">Excellence in Dental Care</span>
                <h1>A refined approach to your perfect smile.</h1>
                <p>At TA Dentist, we blend artistry, science, and unparalleled patient care to deliver dental experiences that exceed expectations.</p>
                <div className="hero-actions">
                  <button className="btn-primary" onClick={() => setActiveTab('contact')}>Schedule Consultation</button>
                  <button className="btn-secondary" onClick={() => setActiveTab('services')}>Explore Services</button>
                </div>
              </div>
              <div className="hero-visual">
                <div className="hero-card">
                  <div className="stat">
                    <h3>15+</h3>
                    <p>Years of Excellence</p>
                  </div>
                  <div className="stat">
                    <h3>5,000+</h3>
                    <p>Smiles Transformed</p>
                  </div>
                  <div className="stat">
                    <h3>100%</h3>
                    <p>Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="features">
              <div className="container">
                <h2 className="section-title">The TA Difference</h2>
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-num">01</div>
                    <h3>Advanced Technology</h3>
                    <p>Equipped with cutting-edge digital imaging, laser dentistry, and CAD/CAM systems for precise, comfortable treatment.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-num">02</div>
                    <h3>Personalized Care</h3>
                    <p>Every treatment plan is meticulously tailored to your unique needs, goals, and lifestyle preferences.</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-num">03</div>
                    <h3>Luxury Environment</h3>
                    <p>A serene, spa-like atmosphere designed to make every visit a relaxing and memorable experience.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="cta-section">
              <div className="container">
                <h2>Begin your journey to an extraordinary smile.</h2>
                <button className="btn-primary" onClick={() => setActiveTab('contact')}>Reserve Your Visit</button>
              </div>
            </section>
          </main>
        )}

        {/* ABOUT */}
        {activeTab === 'about' && (
          <main>
            <section className="page-header">
              <div className="container">
                <span className="eyebrow">Our Story</span>
                <h1>About TA Dentist</h1>
              </div>
            </section>

            <section className="about-section">
              <div className="container about-grid">
                <div>
                  <h2>A Legacy of Excellence</h2>
                  <p className="lead">Founded on principles of precision, compassion, and artistry, TA Dentist represents the pinnacle of modern dental care.</p>
                  <p>For over fifteen years, our practice has been a sanctuary for those who seek more than ordinary dental treatment. We believe that exceptional care extends beyond clinical expertise — it encompasses an environment of trust, comfort, and uncompromising attention to detail.</p>
                  <p>Our team of board-certified specialists collaborates seamlessly to deliver outcomes that are as beautiful as they are enduring. From routine examinations to complete smile transformations, every procedure reflects our unwavering commitment to your wellbeing.</p>
                </div>
                <div className="about-card">
                  <h3>Our Philosophy</h3>
                  <ul>
                    <li>Patient-centered, evidence-based dentistry</li>
                    <li>Continuous education and innovation</li>
                    <li>Aesthetic harmony with natural function</li>
                    <li>Transparent communication at every step</li>
                    <li>Long-term relationships built on trust</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="team-section">
              <div className="container">
                <h2 className="section-title">Meet The Team</h2>
                <div className="team-grid">
                  <div className="team-card">
                    <div className="avatar">DR</div>
                    <h3>Dr. T. Anderson</h3>
                    <p className="role">Founder & Lead Dentist</p>
                    <p>DDS, MS, with two decades of experience in cosmetic and restorative dentistry.</p>
                  </div>
                  <div className="team-card">
                    <div className="avatar">DR</div>
                    <h3>Dr. M. Laurent</h3>
                    <p className="role">Orthodontic Specialist</p>
                    <p>Certified orthodontist specializing in Invisalign and complex alignment cases.</p>
                  </div>
                  <div className="team-card">
                    <div className="avatar">DR</div>
                    <h3>Dr. S. Whitman</h3>
                    <p className="role">Implant Surgeon</p>
                    <p>Renowned implantologist with expertise in full-arch reconstruction.</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        )}

        {/* SERVICES */}
        {activeTab === 'services' && (
          <main>
            <section className="page-header">
              <div className="container">
                <span className="eyebrow">Comprehensive Care</span>
                <h1>Our Services</h1>
                <p className="lead">A full spectrum of premium dental services delivered with precision and care.</p>
              </div>
            </section>

            <section className="services-section">
              <div className="container">
                <div className="services-grid">
                  {services.map((s, i) => (
                    <div key={i} className="service-card">
                      <div className="service-num">0{i + 1}</div>
                      <h3>{s.title}</h3>
                      <p>{s.description}</p>
                      <button onClick={() => setActiveTab('contact')} className="learn-more">Inquire</button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        )}

        {/* CONTACT */}
        {activeTab === 'contact' && (
          <main>
            <section className="page-header">
              <div className="container">
                <span className="eyebrow">Get In Touch</span>
                <h1>Contact Us</h1>
                <p className="lead">We look forward to welcoming you to our practice.</p>
              </div>
            </section>

            <section className="contact-section">
              <div className="container contact-grid">
                <div className="contact-info">
                  <h2>Visit Our Practice</h2>
                  <div className="info-block">
                    <h4>Address</h4>
                    <p>1250 Madison Avenue<br />Suite 800<br />New York, NY 10128</p>
                  </div>
                  <div className="info-block">
                    <h4>Phone</h4>
                    <p>+1 (212) 555-0188</p>
                  </div>
                  <div className="info-block">
                    <h4>Email</h4>
                    <p>concierge@tadentist.com</p>
                  </div>
                  <div className="info-block">
                    <h4>Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 7:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: By Appointment</p>
                  </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Request Appointment</h2>
                  {submitted && <div className="success">Thank you. Our concierge team will contact you shortly.</div>}
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label>Service Interest</label>
                      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                        <option value="">Select a service</option>
                        {services.map((s, i) => <option key={i} value={s.title}>{s.title}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="5" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                  </div>
                  <button type="submit" className="btn-primary">Submit Request</button>
                </form>
              </div>
            </section>
          </main>
        )}

        {/* Footer */}
        <footer>
          <div className="container footer-content">
            <div>
              <div className="logo">
                <span className="logo-mark">TA</span>
                <span className="logo-text">Dentist</span>
              </div>
              <p>Elevating dental care to an art form.</p>
            </div>
            <div>
              <h4>Practice</h4>
              <p>1250 Madison Avenue<br />New York, NY 10128</p>
            </div>
            <div>
              <h4>Contact</h4>
              <p>+1 (212) 555-0188<br />concierge@tadentist.com</p>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} TA Dentist. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: 'Georgia', 'Times New Roman', serif;
          color: #1a1a1a;
          background: #fafaf7;
          line-height: 1.6;
        }
        :global(*) { box-sizing: border-box; }

        .page { min-height: 100vh; }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* NAV */
        .nav {
          background: #fff;
          border-bottom: 1px solid #e8e3d8;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        .logo { display: flex; align-items: center; gap: 0.75rem; }
        .logo-mark {
          background: #1a1a1a;
          color: #d4af37;
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          font-weight: bold;
          letter-spacing: 1px;
          font-family: 'Georgia', serif;
        }
        .logo-text {
          font-size: 1.25rem;
          letter-spacing: 2px;
          color: #1a1a1a;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links button {
          background: none;
          border: none;
          font-family: inherit;
          font-size: 0.95rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #1a1a1a;
          cursor: pointer;
          padding: 0.5rem 0;
          border-bottom: 1px solid transparent;
          transition: all 0.3s;
        }
        .nav-links button:hover, .nav-links button.active {
          border-bottom-color: #d4af37;
          color: #8b6f1f;
        }
        .cta-btn {
          background: #1a1a1a;
          color: #fff;
          border: none;
          padding: 0.85rem 1.75rem;
          font-family: inherit;
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
        }
        .cta-btn:hover {
          background: #d4af37;
          color: #1a1a1a;
        }

        /* HERO */
        .hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 2rem;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .eyebrow {
          display: inline-block;
          color: #8b6f1f;
          font-size: 0.85rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .hero h1 {
          font-size: 4rem;
          line-height: 1.1;
          margin: 0 0 1.5rem;
          font-weight: normal;
          color: #1a1a1a;
        }
        .hero p {
          font-size: 1.15rem;
          color: #555;
          margin-bottom: 2.5rem;
          max-width: 500px;
        }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary {
          background: #1a1a1a;
          color: #fff;
          border: none;
          padding: 1rem 2.25rem;
          font-family: inherit;
          font-size: 0.85rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-primary:hover {
          background: #d4af37;
          color: #1a1a1a;
        }
        .btn-secondary {
          background: transparent;
          color: #1a1a1a;
          border: 1px solid #1a1a1a;
          padding: 1rem 2.25rem;
          font-family: inherit;
          font-size: 0.85rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-secondary:hover {
          background: #1a1a1a;
          color: #fff;
        }

        .hero-visual {
          background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
          padding: 3rem;
          color: #fff;
          position: relative;
        }
        .hero-visual::before {
          content: '';
          position: absolute;
          top: -10px; left: -10px;
          right: 10px; bottom: 10px;
          border: 1px solid #d4af37;
          z-index: -1;
        }
        .hero-card { display: flex; flex-direction: column; gap: 2.5rem; }
        .stat h3 {
          font-size: 3rem;
          margin: 0;
          color: #d4af37;
          font-weight: normal;
        }
        .stat p {
          margin: 0.25rem 0 0;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.85rem;
          color: #ccc;
        }

        /* FEATURES */
        .features {
          background: #fff;
          padding: 6rem 0;
        }
        .section-title {
          font-size: 2.75rem;
          font-weight: normal;
          text-align: center;
          margin: 0 0 4rem;
          color: #1a1a1a;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }
        .feature-card {
          padding: 2.5rem;
          background: #fafaf7;
          border-top: 2px solid #d4af37;
        }
        .feature-num {
          color: #d4af37;
          font-size: 1.5rem;
          letter-spacing: 2px;
          margin-bottom: 1rem;
        }
        .feature-card h3 {
          font-size: 1.5rem;
          margin: 0 0 1rem;
          font-weight: normal;
        }
        .feature-card p { color: #555; margin: 0; }

        /* CTA SECTION */
        .cta-section {
          padding: 5rem 0;
          background: #1a1a1a;
          color: #fff;
          text-align: center;
        }
        .cta-section h2 {
          font-size: 2.5rem;
          font-weight: normal;
          margin: 0 0 2rem;
        }

        /* PAGE HEADER */
        .page-header {
          padding: 5rem 0 3rem;
          background: #fff;
          border-bottom: 1px solid #e8e3d8;
          text-align: center;
        }
        .page-header h1 {
          font-size: 3.5rem;
          margin: 0.5rem 0;
          font-weight: normal;
        }
        .lead {
          font-size: 1.2rem;
          color: #555;
          max-width: 700px;
          margin: 1rem auto 0;
        }

        /* ABOUT */
        .about-section { padding: 5rem 0; }
        .about-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .about-grid h2 {
          font-size: 2.25rem;
          font-weight: normal;
          margin: 0 0 1.5rem;
        }
        .about-grid p { color: #444; margin-bottom: 1.25rem; }
        .about-card {
          background: #1a1a1a;
          color: #fff;
          padding: 2.5rem;
          border-top: 3px solid #d4af37;
        }
        .about-card h3 {
          color: #d4af37;
          font-weight: normal;
          margin: 0 0 1.5rem;
          font-size: 1.5rem;
        }
        .about-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .about-card li {
          padding: 0.75rem 0;
          border-bottom: 1px solid #333;
          font-size: 0.95rem;
        }
        .about-card li:last-child { border-bottom: none; }

        .team-section { padding: 5rem 0; background: #fff; }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .team-card {
          text-align: center;
          padding: 2.5rem 1.5rem;
          background: #fafaf7;
          border-top: 2px solid #d4af37;
        }
        .avatar {
          width: 80px; height: 80px;
          background: #1a1a1a;
          color: #d4af37;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 1.5rem;
          letter-spacing: 2px;
        }
        .team-card h3 { margin: 0 0 0.25rem; font-weight: normal; font-size: 1.4rem; }
        .role {
          color: #8b6f1f;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-size: 0.8rem;
          margin: 0 0 1rem;
        }
        .team-card p { color: #555; margin: 0; }

        /* SERVICES */
        .services-section { padding: 5rem 0; }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .service-card {
          background: #fff;
          padding: 2.5rem;
          border: 1px solid #e8e3d8;
          transition: all 0.3s;
        }
        .service-card:hover {
          border-color: #d4af37;
          transform: translateY(-4px);
        }
        .service-num {
          color: #d4af37;
          font-size: 1.25rem;
          letter-spacing: 2px;
          margin-bottom: 1rem;
        }
        .service-card h3 {
          font-size: 1.5rem;
          font-weight: normal;
          margin: 0 0 1rem;
        }
        .service-card p { color: #555; margin-bottom: 1.5rem; }
        .learn-more {
          background: none;
          border: none;
          color: #1a1a1a;
          font-family: inherit;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.8rem;
          padding: 0;
          cursor: pointer;
          border-bottom: 1px solid #d4af37;
          padding-bottom: 4px;
        }
        .learn-more:hover { color: #8b6f1f; }

        /* CONTACT */
        .contact-section { padding: 5rem 0; }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
        }
        .contact-info h2, .contact-form h2 {
          font-size: 2rem;
          font-weight: normal;
          margin: 0 0 2rem;
        }
        .info-block { margin-bottom: 2rem; }
        .info-block h4 {
          color: #8b6f1f;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.85rem;
          margin: 0 0 0.5rem;
        }
        .info-block p { margin: 0; color: #444; }

        .contact-form {
          background: #fff;
          padding: 3rem;
          border-top: 3px solid #d4af37;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label {
          display: block;
          font-size: 0.8rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #8b6f1f;
          margin-bottom: 0.5rem;
        }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          border: 1px solid #e8e3d8;
          background: #fafaf7;
          font-family: inherit;
          font-size: 1rem;
          color: #1a1a1a;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          outline: none;
          border-color: #d4af37;
        }
        .success {
          background: #1a1a1a;
          color: #d4af37;
          padding: 1rem;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }

        /* FOOTER */
        footer {
          background: #1a1a1a;
          color: #ccc;
          padding: 4rem 0 1.5rem;
          margin-top: 0;
        }
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid #333;
        }
        footer h4 {
          color: #d4af37;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.85rem;
          margin: 0 0 1rem;
        }
        footer p { margin: 0; line-height: 1.8; }
        footer .logo-text { color: #fff; }
        .copyright {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem 0;
          text-align: center;
          font-size: 0.85rem;
          letter-spacing: 1px;
        }

        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; padding: 4rem 2rem; }
          .hero h1 { font-size: 2.5rem; }
          .features-grid, .services-grid, .team-grid { grid-template-columns: 1fr; }
          .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
          .form-row { grid-template-columns: 1fr; }
          .nav-container { flex-wrap: wrap; }
          .nav-links { gap: 1rem; flex-wrap: wrap; order: 3; width: 100%; justify-content: center; }
          .footer-content { grid-template-columns: 1fr; }
          .page-header h1 { font-size: 2.25rem; }
          .section-title { font-size: 2rem; }
          .cta-btn { display: none; }
        }
      `}</style>
    </>
  );
}