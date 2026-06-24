// src/app/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  
  const [text, setText] = useState('');
  const fullText = "EST. 2010 • NIGERIA";

  useEffect(() => {
    setLoaded(true);
    
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);

    // Typewriter effect
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Subtle, expert-level parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 15; // Very low amplitude
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    setMousePos({ x, y });
  };

  // --- EXPERT-GRADE STYLES ---
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-poppins), sans-serif',
      backgroundColor: '#FFFFFF',
      // Subtle radial gradient to prevent flat white background
      backgroundImage: 'radial-gradient(circle at 50% 0%, #F8FAFC 0%, #FFFFFF 60%)',
    },
    topBar: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '24px' : '40px 64px',
      opacity: loaded ? 1 : 0,
      transform: loaded ? 'translateY(0)' : 'translateY(-10px)',
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    logoSmall: {
      fontSize: '15px',
      fontWeight: 700,
      letterSpacing: '0.05em',
      color: '#0F172A',
      textTransform: 'uppercase',
    },
    contactLink: {
      fontSize: '13px',
      color: '#64748B',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'color 0.3s ease',
    },
    mainContent: {
      position: 'relative',
      zIndex: 10,
      flex: 1,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px',
      paddingBottom: '120px', // Space for nav
      width: '100%',
      boxSizing: 'border-box',
      gap: isMobile ? '60px' : '80px',
    },
    textColumn: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMobile ? 'center' : 'flex-start',
      textAlign: isMobile ? 'center' : 'left',
      maxWidth: '480px',
    },
    imageColumn: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      perspective: '1000px', // For 3D tilt effect
    },
    label: {
      fontSize: '12px',
      fontWeight: 600,
      color: '#059669', // Sophisticated emerald green
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      marginBottom: '24px',
      minHeight: '16px',
      display: 'flex',
      alignItems: 'center',
      opacity: loaded ? 1 : 0,
      transform: loaded ? 'translateY(0)' : 'translateY(10px)',
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
    },
    cursor: {
      display: 'inline-block',
      width: '2px',
      height: '12px',
      backgroundColor: '#059669',
      marginLeft: '6px',
      animation: 'blink 1s step-end infinite',
    },
    headline: {
      fontSize: isMobile ? '2.5rem' : 'clamp(2.75rem, 4vw, 3.75rem)',
      fontWeight: 700,
      color: '#0F172A',
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
      margin: 0,
      opacity: loaded ? 1 : 0,
      transform: loaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
    },
    highlight: {
      color: '#059669',
      fontWeight: 700,
    },
    subtext: {
      fontSize: isMobile ? '1.05rem' : '1.125rem',
      color: '#475569',
      lineHeight: '1.6',
      marginTop: '24px',
      fontWeight: 400,
      opacity: loaded ? 1 : 0,
      transform: loaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
    },
    ctaContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'center' : 'flex-start',
      gap: '16px',
      marginTop: '40px',
      opacity: loaded ? 1 : 0,
      transform: loaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
    },
    primaryBtn: {
      backgroundColor: '#0F172A',
      color: '#FFFFFF',
      padding: '0 32px',
      height: '52px',
      borderRadius: '100px',
      textDecoration: 'none',
      fontWeight: 500,
      fontSize: '14px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      border: '1px solid #0F172A',
    },
    secondaryLink: {
      color: '#0F172A',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 500,
      height: '52px',
      padding: '0 24px',
      borderRadius: '100px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      border: '1px solid #E2E8F0',
      backgroundColor: '#FFFFFF',
    },
    
    // Floating Land Piece
    floatingWrapper: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: loaded ? 1 : 0,
      transform: loaded ? 'scale(0.95)' : 'scale(1)',
      transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
    },
    landCard: {
      position: 'relative',
      zIndex: 1,
      width: isMobile ? '360px' : '500px',
      height: isMobile ? '300px' : '380px',
      borderRadius: '24px',
      backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // Clean, realistic shadow
      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15)',
      animation: 'float 8s ease-in-out infinite',
      overflow: 'hidden',
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      cursor: 'pointer',
    },
    landCardOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.4) 0%, transparent 40%)',
    },
    landCardBadge: {
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      backgroundColor: 'rgba(255,255,255,0.95)',
      color: '#0F172A',
      padding: '8px 16px',
      borderRadius: '100px',
      fontSize: '12px',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      backdropFilter: 'blur(10px)',
    },
    badgeDot: {
      width: '6px',
      height: '6px',
      backgroundColor: '#059669',
      borderRadius: '50%',
      animation: 'pulse-dot 2s infinite',
    },

    // Navigation Dock
    bottomNav: {
      position: 'absolute',
      bottom: isMobile ? '24px' : '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 20,
      width: isMobile ? '92%' : 'auto',
      opacity: loaded ? 1 : 0,
      transition: 'opacity 1s ease-out 1s',
    },
    glassDock: {
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '100px',
      padding: isMobile ? '8px 16px' : '8px 8px 8px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: isMobile ? 'space-between' : 'center',
      gap: isMobile ? '8px' : '32px',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    navLinks: {
      display: 'flex',
      gap: isMobile ? '12px' : '24px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: '#94A3B8',
      textDecoration: 'none',
      fontSize: '13px',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      transition: 'color 0.3s ease',
      padding: '8px 12px',
      borderRadius: '100px',
    },
  };

  return (
    <section style={styles.container} ref={containerRef} onMouseMove={handleMouseMove}>
      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes float { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-10px); } 
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        
        /* Expert-level hover states */
        .btn-primary:hover {
          background-color: #059669 !important;
          border-color: #059669 !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(5, 150, 105, 0.3);
        }
        .btn-secondary:hover {
          background-color: #F8FAFC !important;
          border-color: #CBD5E1 !important;
          transform: translateY(-2px);
        }
        .nav-link:hover {
          color: #FFFFFF !important;
          background-color: rgba(255,255,255,0.1);
        }
        .contact-link:hover {
          color: #059669 !important;
        }
      `}</style>

      <div style={styles.topBar}>
        <div style={styles.logoSmall}>KFP Ltd.</div>
        <a href="tel:+2348037319301" className="contact-link" style={styles.contactLink}>
          +234 803 731 9301
        </a>
      </div>

      <div style={styles.mainContent}>
        {/* LEFT SIDE: TEXT */}
        <div style={styles.textColumn}>
          <div style={styles.label}>
            {text}<span style={styles.cursor}></span>
          </div>
          
          <h1 style={styles.headline}>
            Your own land.<br />
            Your own <span style={styles.highlight}>kingdom.</span>
          </h1>

          <p style={styles.subtext}>
            We don't just sell plots. We sell peace of mind. 
            Hundreds of acres of verified, affordable land waiting for you.
          </p>

          <div style={styles.ctaContainer}>
            <Link href="/listings" className="btn-primary" style={styles.primaryBtn}>
              View Listings <span>→</span>
            </Link>
            <a href="https://wa.me/2348037319301" className="btn-secondary" style={styles.secondaryLink}>
              Chat on WhatsApp <span>→</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE */}
        <div style={styles.imageColumn}>
          <div style={styles.floatingWrapper}>
            <div 
              style={{
                ...styles.landCard,
                // Subtle 3D tilt based on mouse position
                transform: `translateY(0) rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.5}deg)`
              }}
            >
              <div style={styles.landCardOverlay}></div>
              <div style={styles.landCardBadge}>
                <div style={styles.badgeDot}></div> 100% Verified
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION DOCK */}
      <nav style={styles.bottomNav}>
        <div style={styles.glassDock}>
          <span style={{color: '#FFFFFF', fontWeight: 600, fontSize: '14px', padding: '0 12px'}}>KFP</span>
          <ul style={styles.navLinks}>
            <li><Link href="/" className="nav-link" style={{...styles.navLink, color: '#FFFFFF'}}>Home</Link></li>
            <li><Link href="/listings" className="nav-link" style={styles.navLink}>Listings</Link></li>
            <li><Link href="/about" className="nav-link" style={styles.navLink}>About</Link></li>
            <li><Link href="/blog" className="nav-link" style={styles.navLink}>Journal</Link></li>
            <li><Link href="/contact" className="nav-link" style={styles.navLink}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </section>
  );
}